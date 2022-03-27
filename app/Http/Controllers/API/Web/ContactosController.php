<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Contactpage;
use Illuminate\Http\Request;

class ContactosController extends Controller
{
    //
    public function all(){
        $contactos = Contactpage::all();

        return response()->json($contactos,200);
    }
}
