<template>
    <div class="header-nav">
        <v-app-bar
            color="transparent"
            light
            class="elevation-0 pa-0 app-bar_container"
            height="87"
        >
            <v-container fluid class="content-wrap mx-auto pa-0 px-md-5 py-0">
                <v-card-text
                    class="d-flex justify-center align-center pa-0 flex-wrap pt-lg-16"
                >
                    <v-toolbar-title class="d-flex align-center">
                        <router-link to="/">
                            <div class="container-logo">
                                <div class="img-logo_navbar">
                                    <v-img src="/app/logo_home.png"></v-img>
                                </div>

                                <!-- <p class="text-center ma-0 my-lg-0">
                                    <span class="logo_title"
                                        >Consulting Group</span
                                    >
                                </p> -->
                            </div>
                        </router-link>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <ul class="d-none d-lg-inline-flex header_custom">
                        <li
                            v-for="(item, index) in items"
                            :key="'items' + index"
                        >
                            <v-hover v-slot="{ hover }">
                                <router-link :to="item.route">
                                    <v-menu
                                        open-on-hover
                                        bottom
                                        offset-y
                                        rounded="0"
                                        class="primary--text"
                                        min-width="250"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <span
                                                :class="{ item_hover: hover }"
                                                v-bind="attrs"
                                                v-on="on"
                                                class="item_style py-4"
                                                >{{ item.title }}</span
                                            >
                                        </template>

                                        <v-list v-if="item.elements.length > 0">
                                            <v-list-item
                                                color="primary"
                                                v-for="(
                                                    links, index
                                                ) in item.elements"
                                                :key="'elements' + index"
                                                :to="links.route"
                                            >
                                                <v-list-item-title>{{
                                                    links.title
                                                }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </router-link>
                            </v-hover>
                        </li>
                    </ul>

                    <v-spacer class="d-lg-none d-inline-flex"></v-spacer>

                    <v-app-bar-nav-icon
                        color="white"
                        class="d-lg-none d-inline-flex"
                        @click="drawer = !drawer"
                    ></v-app-bar-nav-icon>

                    <!-- <v-spacer></v-spacer>

                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.facebook.com/AS-Consulting-Group-141818089928155"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.instagram.com/asconsultinggroup/"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.linkedin.com/company/as.consulting/"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.youtube.com/channel/UCLGe4u_VDbkoJWE2LkMni9w/featured?view_as=subscriber"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://twitter.com/pymedigitalAS"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-twitter</v-icon>
                    </v-btn> -->
                </v-card-text>
            </v-container>
        </v-app-bar>

        <!--NAVIGATION DRAWER-->
        <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            temporary
            dark
            color="grey darken-4"
            style="z-index: 100"
            width="100%"
        >
            <v-list dense class="pt-0">
                <v-list-item-content class="transparent">
                    <v-list-item-title
                        link
                        to="/"
                        class="title d-flex justify-center align-center"
                    >
                        <v-card
                            class="elevation-0 rounded-0"
                            color="transparent"
                            height="80"
                        >
                            <v-img src="/app/logo_home.png" height="80"></v-img>
                        </v-card>
                    </v-list-item-title>
                    <!-- <p
                        class="ma-0 white--text caption text-center font-weight-bold"
                    >
                        Consulting Group
                    </p> -->
                    <v-fab-transition>
                        <v-btn
                            @click.prevent="drawer = !drawer"
                            fab
                            right
                            absolute
                            small
                            dark
                            color="grey darken-4"
                            class="elevation-0 pa-0"
                        >
                            <v-icon x-large class="pa-0" color="white"
                                >mdi-close-circle-outline</v-icon
                            >
                        </v-btn>
                    </v-fab-transition>
                </v-list-item-content>
            </v-list>

            <v-list>
                <v-list-item
                    v-for="item in first_items"
                    :key="item.title"
                    active-class="grey white--text"
                    :to="item.route"
                >
                    <v-list-item-title
                        class="caption white--text font-weight-bold"
                        >{{ item.title }}</v-list-item-title
                    >
                </v-list-item>
                <v-list-group
                    v-for="item in items_group"
                    :key="item.title"
                    active-class="grey  white--text"
                    v-model="item.active"
                    :append-icon="item.subitems.length > 0 ? '$expand' : ''"
                >
                    <template v-slot:activator>
                        <v-list-item-content class="rounded-0">
                            <v-list-item-title
                                @click.prevent="goToTitle(item)"
                                v-text="item.title"
                                class="caption white--text font-weight-bold"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="child in item.subitems"
                        :key="child.title"
                        :to="child.route"
                        active-class="white grey--text"
                    >
                        <v-list-item-content class="rounded-0">
                            <v-list-item-title
                                v-text="child.title"
                                class="caption white--text font-weight-bold"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <v-list dense class="pt-0">
                <v-list-item
                    v-for="item in second_items"
                    :key="item.title"
                    active-class="grey white--text"
                    :to="item.route"
                >
                    <v-list-item-title
                        class="caption white--text font-weight-bold"
                        >{{ item.title }}</v-list-item-title
                    >
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {
                    title: "Inicio",
                    route: "/",
                    name: "",
                    elements: [],
                },
                {
                    title: "Nosotros",
                    route: "/nosotros",
                    name: "nosotros",
                    elements: [
                        {
                            title: "Equipo",
                            route: "/equipo",
                        },
                        {
                            title: "Metodología de trabajo",
                            route: "/metodologia",
                        },
                    ],
                },
                // {
                //     title: "Productos",
                //     route: "/productos",
                //     name: "productos",
                //     elements: [
                //         // {
                //         //     title: "Aplicaciones",
                //         //     route: "/aplicaciones",
                //         // },
                //     ],
                // },
                {
                    title: "Servicios",
                    route: "/servicios",
                    name: "servicios",
                    elements: [
                        {
                            title: "Tecnología",
                            route: "/tecnologia",
                        },
                        {
                            title: "Finanzas",
                            route: "/finanzas",
                        },
                        {
                            title: "Procesos",
                            route: "/procesos",
                        },
                    ],
                },
                {
                    title: "Clientes",
                    route: "/clientes",
                    name: "clientes",
                    elements: [],
                },
                {
                    title: "Publicaciones",
                    route: "/publicaciones",
                    name: "publicaciones",
                    elements: [],
                },
                // {
                //     title: "Trabaja con nosotros",
                //     route: "/trabaja-con-nosotros",
                //     name: "trabaja-con-nosotros",
                //     elements: [],
                // },
                {
                    title: "Contacto",
                    route: "/contacto",
                    name: "contacto",
                    elements: [],
                },
            ],
            first_items: [
                {
                    route: "/",
                    title: "Inicio",
                    icon: "mdi-home",
                },
            ],
            second_items: [
                {
                    route: "/clientes",
                    title: "Clientes",
                    icon: "mdi-account",
                    active: false,
                    subitems: [],
                },
                {
                    route: "/publicaciones",
                    title: "Publicaciones",
                    icon: "mdi-account",
                    active: false,
                    subitems: [],
                },
                // {
                //     route: "/trabaja-con-nosotros",
                //     title: "Trabaja con nosotros",
                //     icon: "mdi-account",
                //     active: false,
                //     subitems: [],
                // },
                {
                    route: "/contacto",
                    title: "Contacto",
                    icon: "mdi-account",
                    active: false,
                    subitems: [],
                },
            ],
            items_group: [
                {
                    route: "/nosotros",
                    title: "Nosotros",
                    icon: "mdi-account",
                    active: false,
                    subitems: [
                        {
                            route: "/equipo",
                            active: false,
                            title: "Equipo",
                            icon: "mdi-account",
                        },
                        {
                            route: "/metodologia",
                            title: "Metodologìa de trabajo",
                            active: false,
                            icon: "mdi-account",
                        },
                    ],
                },
                // {
                //     title: "Productos",
                //     route: "/productos",
                //     name: "productos",
                //     subitems: [],
                // },
                {
                    route: "/servicios",
                    title: "Servicios",
                    icon: "mdi-account",
                    active: false,
                    subitems: [
                        {
                            route: "/tecnologia",
                            active: false,
                            title: "Tecnología",
                            icon: "mdi-account",
                        },
                        {
                            route: "/finanzas",
                            title: "Finanzas",
                            active: false,
                            icon: "mdi-account",
                        },
                        {
                            route: "/procesos",
                            title: "Procesos",
                            active: false,
                            icon: "mdi-account",
                        },
                    ],
                },
            ],
            redes: [
                {
                    icon: "mdi-facebook",
                    route: "",
                },
            ],
        };
    },
    created() {
        this.onResize();
        window.addEventListener("resize", this.onResize);
    },
    mounted() {},
    methods: {
        onResize() {
            if (window.innerWidth > 960) {
            } else {
            }
        },
        goToTitle(item) {
            this.$router.push(item.route).catch((error) => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
    },
    computed: {
        active() {
            return this.$store.state.app.path;
        },
    },
};
</script>

<style scoped>
.header_custom::after{
    position: absolute;
    content: "";
    height: 2px;
    width: calc(100% - 550px);
    right: 115px;
    bottom: -20px;
    background: #ffffff;
}


.logo_title {
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
}
.item_style {
    font-size: 0.95rem;
    font-weight: bold;
    color: white;
}
.v-toolbar__content {
    padding: 0px !important;
}

ul {
    height: 64px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 !important;
}
ul li {
    height: 100%;
    list-style: none;
}
ul li a {
    height: 100%;
    display: flex;
    align-items: center;
}
ul li a span {
    padding: 0px 20px 0px 20px;
}
.item_hover {

    transition: all 0.2s ease 0s;
    border-bottom: 6px white solid;
}
.active {
    color: #b9d956;
    border-bottom: 6px white solid;
}
.img-logo_navbar {
    position: relative;
    margin: 0 auto;
    margin-top: 25px;
    width: 150px;
    height: 150px;
}
.container-logo {
    position: absolute;
    top: -16px;
    display: block;
    width: 200px;
    height: 190px;
    background: #000068;
}

@media screen and (max-width: 992px) {
    .container-logo {
        position: absolute;
        top: -4px;
        display: block;
        width: 95px;
        height: 100px;
    }
    .img-logo_navbar {
        position: relative;
        margin: 0 auto;
        margin-top: 10px;
        width: 80px;
        height: 80px;
    }
    .logo_title {
        font-size: 0.6rem;
        font-weight: bold;
    }
}
</style>
