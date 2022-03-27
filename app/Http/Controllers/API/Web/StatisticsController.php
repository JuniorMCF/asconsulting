<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Visita;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    //
    public function open(Request $request)
    {

        $visita = new Visita();
        $visita->page = $request->page;
        $visita->link = $request->link;
        $visita->ip = $request->ip();
        $visita->tiempo_inicial = Carbon::now('GMT-5')->format("Y-m-d h:m:s");
        $visita->save();



        return response()->json($visita, 200);
    }
    public function close(Request $request)
    {
        \Log::debug($request);
        Visita::find($request->visita_id)->update([
            "tiempo_salida" => Carbon::now('GMT-5')->format("Y-m-d h:m:s")
        ]);

        return response()->json(true, 200);
    }
}
