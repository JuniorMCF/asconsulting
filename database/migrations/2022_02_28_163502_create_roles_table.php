<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('name', ["Propietario", "Editor de blog", "Escritor de blog", "Diseñador de página web", "Desarrollador de la página web"]); // edit posts
            $table->enum('slug', ["propietario", "editor-blog", "escritor-blog", "design-web", "dev-web"]); //edit-posts
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
