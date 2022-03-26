<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitude extends Model
{
    use HasFactory;

    protected $fillable = [
        "nombres",
        "email",
        "telefno",
        "servicio",
        "comentario",
        "ip",
    ];
}
