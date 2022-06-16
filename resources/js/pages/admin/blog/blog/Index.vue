<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">
            {{ actualPage }}
            <v-spacer></v-spacer>
            <v-btn v-if="role.slug == 'propietario' || role.slug == 'escritor-blog'" @click.prevent="createNewPost()"
                class="sky white--text text-normal rounded-xl ekevation-1">
                <v-icon left>mdi-plus</v-icon>Crear nueva entrada
            </v-btn>
        </v-card-title>
        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="pa-0 ma-0">
                    <v-card-text class="px-0">
                        <span class="title font-weight-bold subtitle-1">Haz un seguimiento de tus últimas
                            entradas</span>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-divider horizontal></v-divider>
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <v-data-table :headers="headers" :items="posts" sort-by="calories"
                        class="elevation-0 px-0 rounded-0" hide-default-footer disable-pagination>
                        <template v-slot:item.foto="{ item }">
                            <div class="pa-2">
                                <v-img :src="item.foto" height="60" width="42"></v-img>
                            </div>
                        </template>
                        <template v-slot:item.visualizaciones="{ item }">
                            <span>{{ getItems(item.visualizaciones) }}</span>
                        </template>
                        <template v-slot:item.fecha_publicacion="{ item }">
                            <span>{{ formatDate(item.fecha_publicacion) }}</span>
                        </template>

                        <template v-slot:top>
                            <v-card-text flat class="px-0 d-flex flex-wrap">
                                <v-toolbar-title class="px-0 subtitle-1 font-weight-bold">Últimas publicaciones
                                </v-toolbar-title>
                                <v-divider class="mx-4 pa-0 d-none d-md-block" vertical></v-divider>
                                <v-spacer></v-spacer>

                                <v-btn text color="sky" class="text-normal caption" @click.prevent="goToInformes()">
                                    <v-icon color="sky" left small>mdi-chart-bar</v-icon>todos los informes del blog
                                </v-btn>
                                <v-divider class="mx-4 pa-0 d-none d-md-block" vertical></v-divider>
                                <v-btn @click.prevent="goToPublicadas()" text color="sky" class="text-normal caption">
                                    Administrar entradas</v-btn>
                            </v-card-text>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-btn
                                v-if="role.slug == 'propietario' || role.slug == 'escritor-blog' || role.slug == 'editor-blog'"
                                class="mr-2 rounded-xl text-normal white--text elevation-1" color="sky"
                                @click="editItem(item)">editar</v-btn>

                            <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn dark icon v-bind="attrs" v-on="on" text class="elevation-0 sky--text" fab
                                        x-small>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item v-for="(option, i) in options" :key="'options' + i" link
                                        @click.prevent="OnClickOption(option, item)">

                                        <v-list-item-title class="caption">
                                            <v-icon small left>{{ option.icon }}</v-icon>
                                            {{ option.title }}
                                        </v-list-item-title>
                                        <v-divider v-if="i === 3" horizontal></v-divider>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </template>
                        <template v-slot:no-data>
                            <span>No hay publicaciones disponibles</span>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
        <SharedDialog ref="sharedDialog"></SharedDialog>
        <ConfirmDialog ref="confirmDialog"></ConfirmDialog>
    </div>
</template>

<script>
import SharedDialog from "../../../../components/utils/SharedDialog.vue";
import ConfirmDialog from "../../../../components/utils/ConfirmDialog.vue";
import Vue from "vue";

export default {
    data: () => ({
        headers: [
            {
                text: " ",
                align: "center",
                sortable: false,
                value: "foto",
            },
            { text: "Titulo de la entrada", value: "titulo" },
            { text: "Publicada el", value: "fecha_publicacion" },
            { text: "Vistas", value: "visualizaciones" },
            { text: " ", align: "right", value: "actions", sortable: false },
        ],
        posts: [],
        options: [
            {
                icon: "mdi-eye",
                title: "Ver entrada",
            },
            {
                icon: "mdi-share",
                title: "Compartir entrada",
            },
            {
                icon: "mdi-chart-bar",
                title: "Ver informe",
            },
            {
                icon: "mdi-trash-can-outline",
                title: "Mover a la papelera",
            },
        ],
    }),
    mounted() {
        this.setActualPage();
        this.getData();
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Vista general del blog");
        },
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/posts/pub",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {
                    //console.log(res);
                    this.posts = res.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    //Vue.$toast.error("");
                });
        },
        formatDate(date) {
            return this.moment(date).format("DD MMMM YYYY");
        },
        editItem(item) {
            this.$router.push({ name: "edit-blog", params: { id: item.id } });
        },
        getItems(visualizaciones) {
            //console.log(visualizaciones)
            return visualizaciones.length;
        },
        OnClickOption(option, item) {
            //console.log(item.route);
            switch (option.title) {
                case "Ver entrada":
                    this.$router.push({ name: "show-blog", params: { route: item.route } });
                    break;
                case "Compartir entrada":
                    this.$refs.sharedDialog.open(item.route, item.titulo, item.descripcion, item.tags)
                    break;
                case "Ver informe":
                    break;
                case "Mover a la papelera":

                    if (this.role.slug == 'propietario' || this.role.slug == 'escritor-blog') {
                        this.$refs.confirmDialog.open("Mover a papelera", "¿Quiere enviar este post a papelera?").then(res => {
                            if (res) {
                                let data = new FormData()
                                data.append("post_id", item.id)
                                axios({
                                    method: "post",
                                    url: "/api/oauth/post/papelera",
                                    data: data,
                                    headers: { Authorization: "Bearer " + this.$store.state.auth.token }
                                }).then((res) => {

                                    this.getData()
                                }).catch((err) => {
                                    console.log(err)
                                })
                            }
                        }).catch((err) => {

                        })
                    } else {
                        Vue.$toast.warning("No tiene los permisos para eliminar un post")
                    }




                    break;
                default:
            }
        },
        goToInformes() {
            this.$router.push({ path: "/admin/traffic" });
        },
        goToPublicadas() {
            this.$router.push({ path: "/admin/publicadas" });
        },
        createNewPost() {
            let data = new FormData();
            //console.log(this.$store.getters["auth/getUserId"])
            data.append("user_id", this.$store.getters["auth/getUserId"]);
            axios({
                method: "post",
                url: "/api/oauth/post/new",
                data: data,
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {
                    console.log(res);
                    const post_id = res.data;
                    this.$router.push({ name: "edit-blog", params: { id: post_id } });
                }).catch((err) => {
                    console.log(err);
                });
        },
    },
    computed: {
        actualPage() {
            return this.$store.state.app.actual_page;
        },
        role() {

            return this.$store.getters["auth/getRole"]
        }
    },
    components: { SharedDialog, ConfirmDialog }
}
</script>

<style>
</style>
