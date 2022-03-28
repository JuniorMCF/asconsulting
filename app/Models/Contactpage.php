<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contactpage extends Model
{
    use HasFactory;

    protected $fillable = [
        "nombres",
        "apellidos",
        "email1",
        "telefono1",
        "direccion1-calle",
        "direccion1-ciudad",
        "direccion1-pais",
        "compania",
        "etiquetas",
        "estado",
        "ultima_actividad",
        "fecha_ultima_actividad",
        "fuente",
        "foto",
        "created_at",
        "updated_at",
    ];
}
