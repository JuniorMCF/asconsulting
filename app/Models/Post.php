<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'foto',
        'titulo',
        'descripcion',
        'contenido',
        'estado',
        'fecha_publicacion',
        'fecha_creacion',
        'fecha_edicion',
        'editado_por',
        'vistas',
        'user_id',
        'categoria_id',
        'route',
        'lectura',
        'file',
        'created_at',
        'updated_at'
    ];

    public function visualizaciones()
    {
        return $this->hasMany(Visualizacione::class, 'post_id');
    }
    public function tags()
    {
        return $this->hasMany(Tag::class, 'post_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }
    public function favoritos()
    {
        return $this->hasMany(Favorito::class, 'post_id')->where("favoritos.estado",1);
    }

    public function categorias()
    {
        return $this->hasMany(PostCategoria::class, 'post_id')->join("categorias", "categorias.id", "=", "post_categorias.categoria_id")
            ->select("post_categorias.*", "categorias.nombre as nombre_categoria");
    }
}
