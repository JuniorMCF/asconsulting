<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'foto' ,
        'titulo',
        'contenido' ,
        'estado',
        'fecha_publicacion',
        'fecha_creacion',
        'fecha_edicion' ,
        'editado_por',
        'vistas' ,
        'user_id' ,
        'categoria_id',
        'route',
        'created_at',
        'updated_at'
    ];
}
