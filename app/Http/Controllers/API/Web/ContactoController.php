<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Contacto;
use Illuminate\Http\Request;

class ContactoController extends Controller
{
    //
    public function create(Request $request)
    {

        $request->validate([
            'nombres' => 'required|string',
            'email' => 'required|string|email',
            'telefono' => 'required',
            'mensaje' => 'required|string',
        ]);

        


        Contacto::create([
            "nombres" => $request->nombres,
            "email" => $request->email,
            "telefono" => $request->telefono,
            "mensaje" => $request->mensaje,
            "ip"=> $request->ip()
        ]);

        return response()->json(true, 200);
    }
}
