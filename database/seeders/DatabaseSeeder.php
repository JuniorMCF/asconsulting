<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\Models\Permission;
use App\Models\Post;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // ["create-user","delete-user","edit-user","create-post","edit-post","read-post","delete-post","edit-web"]
        // ["admin-user","create-post","edit-post","read-post","delete-post","edit-web"]
        Permission::create([
            "name" => "Crear,edita y elimina",
            "slug" => "admin-user"
        ]);
        Permission::create([
            "name" => "Crear posts",
            "slug" => "create-post"
        ]);
        Permission::create([
            "name" => "Edita posts",
            "slug" => "edit-post"
        ]);
        Permission::create([
            "name" => "Eliminación posts",
            "slug" => "delete-post"
        ]);
        Permission::create([
            "name" => "Solo leectura de posts",
            "slug" => "read-post"
        ]);
        Permission::create([
            "name" => "Administra la página web",
            "slug" => "admin-web"
        ]);


        // ["Propietario", "Editor de blog", "Escritor de blog", "Diseñador de página web", "Desarrollador de la página web"]
        // ["propietario", "editor-blog", "escritor-blog", "design-web", "dev-web"]
        Role::create([
            "name" => "Propietario",
            "slug" => "propietario"
        ]);
        Role::create([
            "name" => "Editor de blog",
            "slug" => "editor-blog"
        ]);
        Role::create([
            "name" => "Escritor de blog",
            "slug" => "escritor-blog"
        ]);
        Role::create([
            "name" => "Diseñador de página web",
            "slug" => "design-web"
        ]);
        Role::create([
            "name" => "Desarrollador de la página web",
            "slug" => "dev-web"
        ]);


        //users

        $admin = new User();
        $admin->name = 'Gerardo';
        $admin->last_name = "Álvarez Sevillano";
        $admin->email = 'gerardoalvarez@asconsulting.pe';
        $admin->password = bcrypt('Gmas2503@');
        $admin->save();

        $admin = new User();
        $admin->name = 'Julio';
        $admin->last_name = "Delgado";
        $admin->email = 'juliodelgado@asconsulting.pe';
        $admin->password = bcrypt('Peru@2022');
        $admin->save();


        $admin = new User();
        $admin->name = 'Leslie';
        $admin->last_name = "Arboleda";
        $admin->email = 'l.arboleda20@gmail.com';
        $admin->password = bcrypt('Peru@2022');
        $admin->save();

        $admin = new User();
        $admin->name = 'Oscar';
        $admin->last_name = "Sevillano";
        $admin->email = 'oscarsevillano@asconsulting.pe';
        $admin->password = bcrypt('Peru@2022');
        $admin->save();

        $admin = new User();
        $admin->name = 'Victor';
        $admin->last_name = "Álvarez";
        $admin->email = 'victoralvarez@asconsulting.pe';
        $admin->password = bcrypt('Peru@2022');
        $admin->save();

        $admin = new User();
        $admin->name = 'Junior Manuel';
        $admin->last_name = "Castillo Flores";
        $admin->email = 'juniorcastillo@asconsulting.pe';
        $admin->password = bcrypt('Computerscience@123');
        $admin->save();

        //creamos los permisos asociados a los roles por defecto, un usuario puede tener permisos especiales

        $propietario = Role::where("slug", "propietario")->first();
        $editor_blog = Role::where("slug", "editor-blog")->first();
        $escritor_blog = Role::where("slug", "escritor-blog")->first();
        $design_web = Role::where("slug", "design-web")->first();
        $dev_web = Role::where("slug", "dev-web")->first();



        $admin_user = Permission::where("slug", "admin-user")->first();
        $create_post = Permission::where("slug", "create-post")->first();
        $edit_post = Permission::where("slug", "edit-post")->first();
        $read_post = Permission::where("slug", "read-post")->first();
        $delete_post = Permission::where("slug", "delete-post")->first();
        $admin_web = Permission::where("slug", "admin-web")->first();



        $propietario->permissions()->attach($admin_user);
        $propietario->permissions()->attach($create_post);
        $propietario->permissions()->attach($edit_post);
        $propietario->permissions()->attach($read_post);
        $propietario->permissions()->attach($delete_post);
        $propietario->permissions()->attach($admin_web);

        $dev_web->permissions()->attach($admin_user);
        $dev_web->permissions()->attach($create_post);
        $dev_web->permissions()->attach($edit_post);
        $dev_web->permissions()->attach($read_post);
        $dev_web->permissions()->attach($delete_post);
        $dev_web->permissions()->attach($admin_web);


        $editor_blog->permissions()->attach($create_post);
        $editor_blog->permissions()->attach($edit_post);
        $editor_blog->permissions()->attach($read_post);
        $editor_blog->permissions()->attach($delete_post);

        $escritor_blog->permissions()->attach($create_post);
        $escritor_blog->permissions()->attach($read_post);
        $escritor_blog->permissions()->attach($delete_post);


        $design_web->permissions()->attach($read_post);

        //roles add users
        $user = User::find(1);
        $user->roles()->attach($propietario);

        $user = User::find(2);
        $user->roles()->attach($escritor_blog);

        $user = User::find(3);
        $user->roles()->attach($design_web);


        $user = User::find(4);
        $user->roles()->attach($editor_blog);


        $user = User::find(5);
        $user->roles()->attach($escritor_blog);

        $user = User::find(6);
        $user->roles()->attach($dev_web);


        /**categorias */
        Categoria::create([
            "nombre" => "Tecnología"
        ]);
        Categoria::create([
            "nombre" => "Finanzas y contabilidad"
        ]);
        Categoria::create([
            "nombre" => "Procesos"
        ]);

        Post::create([
            "foto"=>"/app/Publicacion(TI0510)fbcarrete.PNG",
            "titulo"=>"Not managing contracts deteriorates outsourcing´s benefits between 5% and 30%.",
            "contenido"=>"",
            "estado"=>"publicado",
            "fecha_publicacion"=>"2022-03-01 00:00:00",
            "fecha_creacion"=>"2022-02-28 00:00:00",

            "user_id"=>1,
            //"categoria_id"=>1
        ]);


    }
}
