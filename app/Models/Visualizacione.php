<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visualizacione extends Model
{
    use HasFactory;

    public function posts()
    {
        return $this->belongsTo(Post::class,"id");
    }

    protected $fillable = [
        "post_id",
        "ip",
        "country"
    ];
}
