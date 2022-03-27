/**Routes for SPA */

const routes = [


    { path: '*',component: () => import('../pages/notfound/404.vue') },

       /**publics */

    {
        path: '/',
        component: () => import('../pages/home/Index.vue'),
        name: 'home',
    },
    {
        path: '/nosotros',
        component: () => import('../pages/nosotros/Index.vue'),
        name: 'nosotros'
    },
    {
        path: '/servicios',
        component: () => import('../pages/servicios/Index.vue'),
        name: 'servicios'
    },
    {
        path: '/clientes',
        component: () => import('../pages/clientes/Index.vue'),
        name: 'clientes'
    },
    {
        path: '/publicaciones',
        component: () => import('../pages/publicaciones/Index.vue'),
        name: 'publicaciones'
    },
    {
        path: '/trabaja-con-nosotros',
        component: () => import('../pages/trabaja_con_nosotros/Index.vue'),
        name: 'trabaja-con-nosotros'
    },
    {
        path: '/contacto',
        component: () => import('../pages/contacto/Index.vue'),
        name: 'contacto'
    },

    {
        path: '/equipo',
        component: () => import('../pages/equipo/Index.vue'),
        name: 'equipo'
    },
    {
        path: '/metodologia',
        component: () => import('../pages/metodologia/Index.vue'),
        name: 'metodologia'
    },
    {
        path: '/tecnologia',
        component: () => import('../pages/tecnologia/Index.vue'),
        name: 'tecnologia'
    },
    {
        path: '/finanzas',
        component: () => import('../pages/finanzas/Index.vue'),
        name: 'finanzas'
    },
    {
        path: '/procesos',
        component: () => import('../pages/procesos/Index.vue'),
        name: 'procesos'
    },
    {
        path: '/post/:route',
        component: () => import('../pages/post/Index.vue'),
        name: 'show-blog'
    },
    {
        path: '/post/categorias/:categoria',
        component: () => import('../pages/publicaciones/categoria/Index.vue'),
        name: 'show-blog-categoria'
    },
    {
        path: '/post/tag/:tag',
        component: () => import('../pages/publicaciones/tag/Index.vue'),
        name: 'show-blog-tag'
    },




    {
        path: '/login',
        component: () => import('../pages/auth/Login.vue'),
        name: 'login'
    },
    /*{
        path: '/admin/misitio',
        component: () => import('../pages/admin/misitio/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },*/
    /**blog admin */
    {
        path: '/admin/blog',
        component: () => import('../pages/admin/blog/blog/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/blog/nuevo',
        name: "new-blog",
        component: () => import('../pages/admin/blog/blog/NewBlog.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin/blog/:id/edit',
        component: () => import('../pages/admin/blog/edit/Index.vue'),
        name: "edit-blog",
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/blog/:route',
        component: () => import('../pages/admin/blog/edit/Index.vue'),
        name: "show-blog-admin",
        meta: {
            requiresAuth: true
        }

    },

    {
        path: '/admin/borradores',
        component: () => import('../pages/admin/blog/borradores/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/categorias',
        component: () => import('../pages/admin/blog/categorias/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/categorias/nuevo',
        component: () => import('../pages/admin/blog/categorias/new/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/categorias/:id/edit',
        component: () => import('../pages/admin/blog/categorias/edit/Index.vue'),
        name: "edit-categoria-blog",
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/publicadas',
        component: () => import('../pages/admin/blog/publicadas/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/papelera',
        component: () => import('../pages/admin/blog/papelera/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/escritores',
        component: () => import('../pages/admin/blog/escritores/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },

    /**contactos */
    {
        path: '/admin/contactos',
        component: () => import('../pages/admin/contactos/contactos/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/admin/miembros-de-sitio',
        component: () => import('../pages/admin/contactos/miembros/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },
    /**analitycs */
    {
        path: '/admin/traffic',
        component: () => import('../pages/admin/analitica_informes/traffic/Index.vue'),
        meta: {
            requiresAuth: true
        }

    },


]


export default routes
