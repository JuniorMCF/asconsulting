<template>
    <header>
        <v-card
            id="container-header"
            color="grey lighten-4 elevation-0 header-open ma-0 pa-0 rounded-0"
            flat
        >
            <v-toolbar color="white" light class="elevation-1">
                <v-app-bar-nav-icon id="navbar_icon" color="black" @click="openClose()"></v-app-bar-nav-icon>
                <!--<v-toolbar-title class="black--text">{{ actualPage }}</v-toolbar-title>-->
                <v-spacer></v-spacer>

                <v-menu bottom min-width="200px"  offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn icon x-large v-on="on">
                            <v-avatar color="grey lighten-1" size="48">
                                <span class="white--text text-h5">
                                    <v-img height="50" width="50" :src="user.foto"></v-img>
                                </span>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list-item-content class="justify-center">
                            <div class="mx-auto text-center px-4">
                                <v-avatar color="grey lighten-1">
                                   <v-img height="50" width="50" :src="user.foto"></v-img>
                                </v-avatar>
                                <h3 class="py-2 black--text">{{getUserName(user) }}</h3>
                                <p class="text-caption black--text my-1 black--text">{{ user.email }}</p>
                                <v-divider class="my-3"></v-divider>
                                <!--<v-btn block class="text-normal  caption" depressed  text>Editar perfil</v-btn>-->
                                <!--<v-divider class="my-3"></v-divider>-->
                                <v-btn @click.prevent="logout()" block  class="text-normal black--text caption" depressed  text>Cerrar sesión</v-btn>
                            </div>
                        </v-list-item-content>
                    </v-card>
                </v-menu>
            </v-toolbar>
        </v-card>
        <v-navigation-drawer absolute left class="black px-3 py-3" v-model="drawer">
            <v-list dense class="pt-0">
                <v-list-item-content class="black">
                    <v-list-item-title class="title d-flex justify-center align-center">
                        <v-card
                            class="elevation-0 rounded-0"
                            color="black"
                            height="60"
                            width="80"
                            contain
                        >
                            <v-img src="/app/white_logo.png"></v-img>
                        </v-card>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list>

            <v-list>
                <!--<v-list-item
                    v-for="item in first_items"
                    :key="item.title"
                    active-class="grey darken-2 white--text"
                    :to="item.route"
                >
                    <v-list-item-title class="caption white--text">Mi sitio</v-list-item-title>
                </v-list-item>-->
                <v-list-group
                    v-for="item in items_group"
                    :key="item.title"
                    active-class="grey darken-2 white--text"
                    v-model="item.active"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content class="rounded-0 white--text">
                            <v-list-item-title v-text="item.title" class="caption white--text"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="child in item.subitems"
                        :key="child.title"
                        :to="child.route"
                        active-class="grey darken-2 white--text"
                    >
                        <v-list-item-content class="rounded-0">
                            <v-list-item-title v-text="child.title" class="caption white--text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        active: 0,


        /*first_items: [
            {
                route: "/admin/misitio",
                title: "Inicio",
                icon: "mdi-home",
            },
        ],*/
        items_group: [
            {
                route: "/admin/blog",
                title: "Blog",
                icon: "mdi-account",
                active: true,
                subitems: [
                    {
                        route: "/admin/blog",
                        active: false,
                        title: "Vista general",
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/publicadas",
                        title: "Publicadas",
                        active: false,
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/borradores",
                        title: "Borradores",
                        active: false,
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/papelera",
                        title: "Papelera",
                        active: false,
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/categorias",
                        title: "Categorías",
                        active: false,
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/escritores",
                        title: "Escritores",
                        active: false,
                        icon: "mdi-account",
                    },
                ],
            },
            {
                route: "/contactos",
                title: "Contactos",
                icon: "mdi-account",
                active: false,
                subitems: [
                    {
                        route: "/admin/contactos",
                        active: false,
                        title: "Contactos",
                        icon: "mdi-account",
                    },
                    {
                        route: "/admin/miembros-de-sitio",
                        title: "Miembros de sitio",
                        active: false,
                        icon: "mdi-account",
                    },
                ],
            },
            {
                route: "/analitica-informes",
                title: "Analítica e informes",
                icon: "mdi-account",
                active: false,
                subitems: [
                    {
                        route: "/admin/traffic",
                        active: false,
                        title: "Resumen del tráfico",
                        icon: "mdi-account",
                    },
                ],
            },
        ],
    }),
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize);
        console.log(this.$store.state.app.actual_page)
        this.setItemActive(this.$store.state.app.actual_page)
    },
    methods: {
        openClose() {
            let container_header = document.getElementById("container-header");
            let container_main = document.getElementById("container-main");
            if (this.drawer) {
                container_header.classList.remove("header-open");
                container_header.classList.add("header-close");

                container_main.classList.remove("main-open");
                container_main.classList.add("main-close");
            } else {
                container_header.classList.remove("header-close");
                container_header.classList.add("header-open");

                container_main.classList.remove("main-close");
                container_main.classList.add("main-open");
            }

            this.drawer = !this.drawer;
        },
        getUserName(user){
            return user.name + " "+ user.last_name
        },
        onResize() {
            let container_header = document.getElementById("container-header");
            let container_main = document.getElementById("container-main");
            if (window.innerWidth < 1263) {
                container_header.classList.remove("header-open");
                container_header.classList.add("header-close");

                container_main.classList.remove("main-open");
                container_main.classList.add("main-close");
            } else {
                if (this.drawer) {
                    container_header.classList.remove("header-close");
                    container_header.classList.add("header-open");

                    container_main.classList.remove("main-close");
                    container_main.classList.add("main-open");
                } else {
                    container_header.classList.remove("header-open");
                    container_header.classList.add("header-close");

                    container_main.classList.remove("main-open");
                    container_main.classList.add("main-close");
                }
            }
        },
        setItemActive(page){

        },
        logout(){

            this.$store.dispatch("auth/logout",{token:this.$store.state.auth.token}).then(res=>{

                this.$router.push({path:"/login"})
            }).catch(err=>{

            })
        }
    },
    computed: {
        user(){
            console.log( this.$store.state.auth.user)
            return this.$store.state.auth.user
        }
    }

};
</script>


<style>
.header-open {
    position: absolute;
    top: 0px;
    width: calc(100% - 256px);
    left: 256px;
    transition: all 0.18s ease-out;
    z-index: 0 !important;
}
.header-close {
    position: absolute;
    top: 0px;
    width: 100%;
    left: 0px;
    transition: all 0.1s ease-out;
    z-index: 0 !important;
}
.main-open {
    position: absolute;
    top: 64px;
    left: 256px;
    width: calc(100% - 256px);
    transition: all 0.18s ease-out;
}
.main-close {
    position: absolute;
    top: 64px;
    left: 0px;
    width: 100%;
    transition: all 0.1s ease-out;
}
.v-list-item__icon i {
    color: white !important;
}
</style>
