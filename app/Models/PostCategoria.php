<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostCategoria extends Model
{
    use HasFactory;

    protected $fillable = [
        "categoria_id",
        "post_id"
    ];
}
