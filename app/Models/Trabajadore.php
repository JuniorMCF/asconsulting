<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajadore extends Model
{
    use HasFactory;

    protected $fillable=[
        "nombres",
        "apellidos",
        "email",
        "telefono",
        "profesion",
        "fecha_inicio",
        "documento",
        "estado"
    ];
}
