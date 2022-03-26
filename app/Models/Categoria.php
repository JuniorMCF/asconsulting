<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $fillable=[
        "nombre",
        "entradas",
        "estado"
    ];

    public function entrys()
    {
        return $this->hasMany(PostCategoria::class, 'categoria_id')
        ->join("categorias", "categorias.id", "=", "post_categorias.categoria_id")
        ->select('post_categorias.*');
    }
}
