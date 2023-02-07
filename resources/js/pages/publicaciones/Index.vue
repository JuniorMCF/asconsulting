<template>
    <div>
    <v-container fluid class=" pa-0 mx-auto py-16">
        <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0 container-bandwith">
                <v-img src="/app/bandwith.png "></v-img>
            </v-col>
        </v-row> -->

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-16 ">
            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <span
                    class="primary--text text-uppercase as-text_extralarge line-height_1"
                    >Nuestras</span
                >
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                    >publicaciones</span
                >
            </v-col>

            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <p class="black--text text-justify as-p_normal ma-0">
                    Conoce nuestros artículos especializados y suscríbete a
                    nuestro newsletter para recibir
                    <strong>contenido exclusivo.</strong>​
                </p>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0">
            <v-col
                class="col-12 col-md-10 py-0 px-md-2 px-0"
                justify="space-around"
            >
                <v-sheet elevation="0" class="py-4 px-1">
                    <v-chip-group show-arrows active-class="primary--text">
                        <v-chip
                            class="px-6 v-size--small py-6 rounded-0 text-uppercase font-weight-bold white black--text"
                            v-for="(categoria, i) in categorias"
                            :key="i"
                            @click="filterCategorys(categoria)"
                            >{{ categoria.nombre }}</v-chip
                        >
                    </v-chip-group>
                </v-sheet>
            </v-col>

            <v-col
                class="col-12 col-md-2 py-0 px-md-2 px-4 justify-center align-center"
            >
                <v-text-field
                    class="caption py-6"
                    placeholder="Buscar"
                    append-icon="mdi-magnify"
                    hide-details="auto"
                    v-model="search"
                    @keydown.enter="searchPost"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-card-text class="content-wrap-0 mx-auto" v-if="loadingFilterPosts">
            <div style="height: 50px">
                <lottie-animation
                    ref="anim"
                    :loop="true"
                    :autoPlay="true"
                    :loopDelayMin="2.5"
                    :loopDelayMax="5"
                    :speed="1"
                    :width="50"
                    :height="50"
                    :animationData="require('/lottie/loading.json')"
                />
            </div>
        </v-card-text>
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="loadingFilterPosts"
            style="min-height: 150px"
        ></v-row>
        <!--lista filtrada en busqwueda-->
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="isSearch"
            style="min-height: 450px"
        >
            <v-col v-if="post_filtered.length == 0" class="col-12 pa-4 ma-0">
                <v-card
                    class="rounded-0 elevation-5 d-flex flex-md-row flex-column align-center justify-center"
                    style="height: 450px"
                >
                    <v-card-text class="text-center">
                        <h1 class="py-4">No se encontraron resultados</h1>
                        <h3>
                            No podemos encontrar lo que estás buscando...
                            Realiza una nueva búsqueda.
                        </h3>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                v-else
                class="col-12 pa-4 ma-0"
                v-for="post in post_filtered"
                :key="'post' + post.id"
            >
            </v-col>
        </v-row>
        <!--lista inicial-->
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="!isFiltered"
            style="min-height: 450px"
        >
            <v-col
                class="col-12 pa-4 ma-0"
                v-for="post in posts"
                :key="'post_' + post.id"
            >
                <PostComponent :post="post" type="post"></PostComponent>
            </v-col>
        </v-row>


    </v-container>
     <!--include footer-->
     <FooterGlobal></FooterGlobal>
        <SharedDialog ref="sharedDialog"></SharedDialog>
        <ChatComponent></ChatComponent>

        <NewsletterDialog ref="newsletterDialog"></NewsletterDialog>
</div>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import LottieAnimation from "lottie-web-vue";

import SharedDialog from "../../components/utils/SharedDialog.vue";
import NewsletterDialog from "../../components/utils/NewsletterDialog.vue";
import PostComponent from "./post/PostComponent.vue";

export default {
    components: {
        ChatComponent,
        FooterGlobal,
        LottieAnimation,
        SharedDialog,
        NewsletterDialog,
        PostComponent,
    },
    data: () => ({
        categorias: [],
        posts_todos: [],
        posts: [],
        post_filtered: [],
        search: null,
        loadingFilterPosts: false,
        isFiltered: false,
        isSearch: false,

        icon_heart: "mdi-heart-outline",

        ip: null,
    }),

    mounted() {
        this.getPath();

        this.$store.dispatch("app/changeTitlePage", "Publicaciones | A&S");
        document.title = this.$store.state.app.title_page;

        this.getData();
        /**for visite */
        this.$store.dispatch("app/openPage", {
            page: window.location.pathname,
            link: window.location.host + window.location.pathname,
        });
        if (this.$store.state.app.newsletter) {
            setTimeout(() => this.openNewsLetter(), 3000);
        }
    },
    destroyed() {
        this.$store.dispatch("app/closePage", {
            visita_id: this.$store.state.app.visita_id,
        });
    },
    methods: {
        getPath() {
            let path = window.location.pathname + window.location.search;

            this.$store.dispatch("app/setPath", path);
        },
        formatDate(date) {
            return this.moment(date).format("DD MMMM YYYY");
        },
        getInt(lectura) {
            const int_lectura = parseInt(lectura);
            return int_lectura.toString();
        },
        filterCategorys(category) {
            this.isFiltered = false;
            this.loadingFilterPosts = false;
            this.isSearch = false;
            this.search = null;
            if (category.nombre.toLowerCase() != "todos") {
                this.posts = this.posts_todos.filter((post) =>
                    post.categorias.some((el) => el.categoria_id == category.id)
                );
                return;
            }
            this.posts = this.posts_todos;
        },
        openNewsLetter() {
            this.$refs.newsletterDialog
                .open()
                .then((res) => {
                    if (res.status == 200) {
                        let data = new FormData();
                        data.append("email", res.response);
                        axios
                            .post("/api/newsletter", data)
                            .then((res) => {
                                this.$store.dispatch("app/closeNewsletter", {});
                                Vue.$toast.success(
                                    "Suscrito a nuestro contenido."
                                );
                            })
                            .catch((err) => {});
                    }
                })
                .catch((err) => {});
        },
        searchPost() {
            this.isFiltered = true;
            this.loadingFilterPosts = true;

            axios({
                method: "get",
                url: "/api/posts/all/" + this.search + "/filter",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    this.loadingFilterPosts = false;
                    this.isSearch = true;
                    this.post_filtered = res.data;

                    if (this.favorite == true) {
                        this.icon_heart = "mdi-heart";
                    } else {
                        this.icon_heart = "mdi-heart-outline";
                    }
                })
                .catch((err) => {
                    this.loadingFilterPosts = false;
                    console.log(err);
                });
        },
        postFavorites(posts_todos) {
            let posts = [];
            posts_todos.forEach((element) => {
                let fav = false;
                element.favoritos.forEach((favorite) => {
                    if (this.$store.state.auth.user != null) {
                        if (
                            favorite.user_id ==
                                this.$store.getters["auth/getUserId"] &&
                            element.id == favorite.post_id
                        ) {
                            fav = true;
                        }
                    } else {
                        if (
                            favorite.ip === this.ip &&
                            element.id === favorite.post_id
                        ) {
                            fav = true;
                        }
                    }
                });

                element["isFavorite"] = fav;

                posts.push(element);
            });

            return posts;
        },
        goToDetail(post) {
            this.$router.push({
                name: "show-blog",
                params: { route: post.route },
            });
        },
        showSharedDialog(post) {
            this.$refs.sharedDialog
                .open(post.route, post.titulo, post.contenido, post.creado_por)
                .then((res) => {});
        },
        //async
        getData() {
            this.loadingFilterPosts = true;
            const data = new FormData();
            axios({
                method: "get",
                url: "/api/posts/all",
                data: data,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    let { posts, categorias, ip } = res.data;

                    this.ip = ip;
                    let new_posts = this.postFavorites(posts);
                    this.posts_todos = new_posts;
                    this.posts = new_posts;
                    this.categorias = categorias;

                    const todos = {
                        id: 0,
                        nombre: "Todos",
                        titulo: "",
                        contenido: "",
                        descripcion: "",
                        entradas: "",
                        estado: "",
                        created_at: "",
                        updated_at: "",
                    };
                    this.categorias.unshift(todos);
                    this.loadingFilterPosts = false;
                    /**agregamos la categorias todos al inicio */
                })
                .catch((err) => {
                    this.loadingFilterPosts = false;
                    console.log(err);
                });
        },
        like(post) {
            console.log(post.id);
        },
    },
};
</script>

<style>
</style>
