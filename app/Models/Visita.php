<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visita extends Model
{
    use HasFactory;

    protected $fillable=[
        "page",
        "link",
        "ip",
        "zip",
        "country",
        "city",
        "tiempo_inicial",
        "tiempo_salida",
    ];
}
