<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        "comentario",
        "post_id",
        "autor",
        "foto_autor",
        "likes",
    ];

    public function posts()
    {
        return $this->belongsTo(Post::class, "id");
    }
}
