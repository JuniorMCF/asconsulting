<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorito extends Model
{
    use HasFactory;


    public function posts()
    {
        return $this->belongsTo(Post::class, "id");
    }

    protected $fillable=[
        "user_id",
        "post_id",
        "ip",
        "estado"
    ];
}
