<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function categorias(){
        $categorias  = Categoria::where("estado",1)->with("entrys")->get();

        return response()->json($categorias,200);
    }
    public function show(Request $request){
        $category = Categoria::find($request->categoria_id);

        return response()->json($category,200);
    }
    public function save(Request $request){
        Categoria::find($request->categoria_id)->update([
            "nombre"=>$request->nombre
        ]);

        return response()->json(true,200);
    }
    public function newCategory(Request $request){
        Categoria::create([
            "nombre"=>$request->nombre
        ]);

        return response()->json(true,200);
    }
    public function delCategory(Request $request){
        Categoria::find($request->categoria_id)->delete();

        return response()->json(true,200);
    }
}
