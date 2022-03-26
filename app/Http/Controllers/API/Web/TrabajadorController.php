<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Trabajadore;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TrabajadorController extends Controller
{
    //
    public function create(Request $request)
    {
        \Log::debug($request->all());
        $trabajador = Trabajadore::where("email", $request->email)->get()->first();
        if ($trabajador) {
            return response(true, 201);
        }


        if ($request->hasFile('file')) {

            $file = $request->file('file');
            if ($file->isValid()) {

                // Filename is hashed filename + part of timestamp
                $hashedName = hash_file('md5', $file->path());
                $timestamp = microtime();

                $newFilename = $hashedName . $timestamp . '.' . $file->getClientOriginalExtension();

                Storage::disk('local')->put($newFilename, file_get_contents($file));
            }

            $new = new Trabajadore();
            $new->nombres = $request->nombres;
            $new->apellidos = $request->apellidos;
            $new->email = $request->email;
            $new->telefono = $request->telefono;
            $new->profesion = $request->profesion;
            $new->fecha_inicio = Carbon::parse($request->fecha_inicio)->format("Y-m-d");
            $new->documento = "storage/app/" . $newFilename;
            $new->estado = "pendiente";
            $new->save();

            /**enviar correo hacia nuevo usuario $request->email */

            return response(true, 200);
        } else {
            return response()->json(true, 203); //file invalid
        }
    }
}
