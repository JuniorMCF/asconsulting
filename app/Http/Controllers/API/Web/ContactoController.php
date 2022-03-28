<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Contacto;
use App\Models\Contactpage;
use Carbon\Carbon;
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


        Contactpage::create([
            "nombres" => $request->nombres,
            "telefono" => $request->telefono,
            "etiquetas" => $request->mensaje,
            "email1"=>$request->email,
            "estado"=>"Suscripción no configurada",
            "fuente"=>"Envío de formulario",
            "ultima_actividad"=>"Se creó contacto",
            "fecha_ultima_actividad"=>Carbon::now('GMT-5')->format("Y-m-d h:m:s"),
        ]);

        //send email


        return response()->json(true, 200);
    }
}
