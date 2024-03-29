<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">
            {{ actualPage }}
            <span class="ml-2 grey--text text-h5">{{ posts.length }}</span>
            <v-spacer></v-spacer>
            <v-btn v-if="role.slug == 'propietario' || role.slug == 'escritor-blog'" @click.prevent="createNewPost()" class="sky white--text text-normal rounded-xl ekevation-1">
                <v-icon left>mdi-plus</v-icon>Crear nueva entrada
            </v-btn>
        </v-card-title>
        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <v-data-table v-model="selected" :headers="headers" :items="posts" show-select :search="search"
                        sort-by="calories" class="elevation-0 px-0 rounded-0" hide-default-footer disable-pagination>
                        <template v-slot:item.foto="{ item }">
                            <div class="pa-2">
                                <v-img v-if="item.foto" :src="item.foto" height="60" width="42"></v-img>
                                <div v-else class="gray lighten-5 rounded-lg align-center justify-center d-flex"
                                    style="width:60px;height:60px;">
                                    <v-btn fab color="white" x-small class="elevation-0 disable-events">
                                        <v-icon color="sky">mdi-image-outline</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </template>
                        <template v-slot:item.updated_at="{ item }">
                            <span>{{ formatDate(item.updated_at) }}</span>
                        </template>

                        <template v-slot:top>
                            <v-card-text flat class="px-0 d-flex flex-wrap align-center">
                                <div class="col-12 col-md-6 text-center text-md-start">
                                    <p class="ma-0" v-if="selected.length > 0">{{ selected.length }} seleccionados</p>
                                </div>

                                <div class="col-12 col-md-3 text-center text-md-end">
                                    <v-btn v-if="selected.length > 0 && (role.slug == 'propietario' || role.slug == 'escritor-blog')" color="sky" large
                                        class="white--text text-normal caption mr-3 elevation-0" rounded
                                        @click.prevent="trashAll()">Eliminar seleccionados</v-btn>
                                </div>
                                <div class="col-12 col-md-3 text-end">
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" color="sky"
                                        single-line outlined dense rounded hide-details></v-text-field>
                                </div>
                            </v-card-text>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <!--<v-btn
                                class="mr-2 rounded-xl text-normal white--text elevation-1"
                                color="sky"
                                @click="editItem(item)"
                            >editar</v-btn>-->

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
        <DialogArticle ref="dialogArticle"></DialogArticle>
        <ConfirmDialog ref="confirmDialog"></ConfirmDialog>
    </div>
</template>

<script>
import DialogArticle from "../../../../components/utils/DialogArticle.vue";
import ConfirmDialog from "../../../../components/utils/ConfirmDialog.vue";
import Vue from "vue";
export default {
    components: {
        DialogArticle,
        ConfirmDialog
    },
    data: () => ({
        loadingRestore: false,
        search: "",
        headers: [
            {
                text: "Image",
                align: "left",
                sortable: false,
                value: "foto",
            },
            { text: "Título", value: "titulo" },
            { text: "Creado por", value: "creado_por" },
            { text: "Fecha de eliminación ", value: "updated_at" },
            { text: " ", align: "right", value: "actions", sortable: false },
        ],
        selected: [],
        posts: [],
        options: [
            {
                icon: "mdi-restore",
                title: "Restaurar",
            },
            {
                icon: "mdi-trash-can",
                title: "Eliminar",
            },
        ],
    }),
    mounted() {
        this.setActualPage();
        this.getData();
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Papelera");
        },
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/posts/papelera",
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
            return this.moment(date).format("DD MMMM YYYY hh:mm a");
        },
        editItem(item) {
            this.$router.push({ name: "edit-blog", params: { id: item.id } });
        },
        OnClickOption(option, item) {
            //console.log(item.route)
            switch (option.title) {
                case "Restaurar":
                    let data = new FormData();
                    data.append("post_id", item.id);
                    axios({
                        method: "post",
                        url: "/api/oauth/post/restore",
                        data: data,
                        headers: { Authorization: "Bearer " + this.$store.state.auth.token }
                    }).then((res) => {
                        this.getData();
                    }).catch((err) => {
                        console.log(err);
                    });
                    break;
                case "Eliminar":
                     if (this.role.slug == 'propietario' || this.role.slug == 'escritor-blog') {
                    this.$refs.confirmDialog.open("Eliminar post", "¿Está seguro que quiere eliminar este post?").then((res) => {
                        if (res) {
                            let data = new FormData();
                            data.append("post_id", item.id);
                            axios({
                                method: "post",
                                url: "/api/oauth/post/delete",
                                data: data,
                                headers: { Authorization: "Bearer " + this.$store.state.auth.token }
                            }).then((res) => {
                                this.getData();
                            }).catch((err) => {
                                console.log(err);
                            });
                        }
                    }).catch((err) => {

                    })
                     }else{
                         Vue.$toast.warning("No tiene los permisos para eliminar un post")
                     }
                    break;
                default:
            }
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
                    //console.log(res);
                    const post_id = res.data;
                    this.$router.push({ name: "edit-blog", params: { id: post_id } });
                }).catch((err) => {
                    console.log(err);
                });
        },
        trashAll() {
            this.$refs.confirmDialog.open("Eliminar todos", "¿Está seguro que quiere eliminar todos los posts seleccionados?").then((res) => {
                if (res) {

                    let data = new FormData()
                    data.append("posts", JSON.stringify(this.selected))
                    axios({
                        method: "post",
                        url: "/api/oauth/post/delete/all",
                        data: data,
                        headers: { Authorization: "Bearer " + this.$store.state.auth.token },
                    })

                        .then((res) => {
                            //console.log(res)
                            this.selected = []
                            this.getData()
                        }).catch((err) => {
                            console.log(err)
                        })
                }
            }).catch((err) => {

            })

        }
    },
    computed: {
        actualPage() {
            return this.$store.state.app.actual_page;
        },
        role() {

            return this.$store.getters["auth/getRole"]
        }
    },
    watch: {
        selected(newValue, oldValue) {
            if (newValue.length > 0) {
                this.selected_items = newValue.length + "seleccionados";
            }
            else {
                this.selected_items = "seleccionado";
            }
        }
    },
    components: { DialogArticle, ConfirmDialog }
}
</script>

<style>
</style>
