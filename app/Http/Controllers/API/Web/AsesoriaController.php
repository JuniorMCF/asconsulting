<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Solicitude;
use Illuminate\Http\Request;

class AsesoriaController extends Controller
{
    //
    public function createAdvisory(Request $request)
    {

        $exist = Solicitude::where("ip", $request->ip())->get()->first();

        if (!$exist) {
            Solicitude::create(
                [
                    "nombres" => $request->nombres,
                    "email" => $request->email,
                    "telefno" => $request->telefono,
                    "servicio" => $request->servicio,
                    "comentario" => $request->comentario,
                    "ip" => $request->ip(),
                ]
            );

            //send email for solicitud
        }

        return response()->json(true, 200);
    }
}
