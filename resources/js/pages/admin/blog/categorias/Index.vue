<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">
            {{ actualPage }}
            <v-spacer></v-spacer>
            <v-btn  v-if="role.slug == 'propietario' || role.slug == 'escritor-blog'"  @click.prevent="createNewCategory()" class="sky white--text text-normal rounded-xl ekevation-1">
                <v-icon left>mdi-plus</v-icon>Crear nueva categoría
            </v-btn>
        </v-card-title>

        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="pa-0 ma-0 col-12">
                    <v-card-text class="px-0">
                        <span class="title font-weight-bold subtitle-1">Todas las Entradas</span>
                        <p class="caption ma-0">Este es el feed principal del blog que muestra todas tus entradas.</p>
                    </v-card-text>
                </v-col>
                <v-col>TODAS</v-col>
                <v-col>{{ totaEntradas }} entradas</v-col>
            </v-row>

            <v-divider horizontal></v-divider>
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <v-data-table :headers="headers" :items="categorias" sort-by="calories"
                        class="elevation-0 px-0 rounded-0">
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
                        <template v-slot:item.entrys="{ item }">
                            <span>{{ item.entrys.length }}</span>
                        </template>

                        <template v-slot:top>
                            <v-card-text flat class="px-0 d-flex flex-wrap">
                                <v-toolbar-title class="px-0 subtitle-1 font-weight-bold">
                                    <span>Categorías</span>
                                    <p class="caption ma-0">Edita las categorías para configurar la URL, SEO e imagen
                                        que compartirás en las redes sociales.</p>
                                </v-toolbar-title>

                                <v-divider class="mx-4" inset vertical></v-divider>
                                <v-spacer></v-spacer>
                            </v-card-text>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-btn v-if=" role.slug == 'propietario' " class="mr-2 rounded-xl text-normal white--text elevation-1" color="sky"
                                @click="editItem(item)">editar</v-btn>

                            <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-if="role.slug == 'propietario'" dark icon v-bind="attrs" v-on="on" text class="elevation-0 sky--text" fab
                                        x-small>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list class="py-0">
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
        <ConfirmDialog ref="confirmDialog"></ConfirmDialog>
    </div>
</template>

<script>

import axios from "axios";
import ConfirmDialog from "../../../../components/utils/ConfirmDialog.vue";

export default {
    data: () => ({
        categorias: [],
        headers: [
            {
                text: "Imagen",
                align: "left",
                sortable: false,
                value: "foto",
            },
            { text: "Nombre", value: "nombre" },
            { text: "Entradas", value: "entrys" },
            { text: " ", align: "right", value: "actions", sortable: false },
        ],
        options: [
            {
                icon: "mdi-trash-can",
                title: "Eliminar",
            },
        ]
    }),
    mounted() {
        this.setActualPage();
        this.getData();
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Categorías");
        },
        createNewCategory() {
            this.$router.push({ path: "/admin/categorias/nuevo" });
        },
        editItem(item) {
            this.$router.push({ name: "edit-categoria-blog", params: { id: item.id } });
        },
        OnClickOption(option, item) {
            //console.log(item.route)
            switch (option.title) {
                case "Eliminar":
                    this.$refs.confirmDialog.open("Eliminar categoría", "¿Está seguro que quiere eliminar esta categoría?").then((res) => {
                        if (res) {
                            let data = new FormData()
                            data.append("categoria_id", item.id)
                            axios({
                                method: 'post',
                                url: "/api/oauth/category/delete",
                                data: data,
                                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
                            }).then(res => {
                                Vue.$toast.info("Categoría eliminada")
                                this.getData()
                            }).catch(err => {
                                console.log(err)
                            })
                        }
                    }).catch((err) => {
                    });
                    break;
            }
        },
        //async
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/categorys/all",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            }).then(res => {
                //console.log(res);
                this.categorias = res.data;
            }).catch(err => {
                console.log(err);
            });
        }
    },
    computed: {
        actualPage() {
            return this.$store.state.app.actual_page;
        },
        totaEntradas() {
            let total = 0;
            for (let i in this.categorias) {
                total += this.categorias[i].entrys.length;
            }
            return total;
        },
        role() {

            return this.$store.getters["auth/getRole"]
        }
    },
    components: { ConfirmDialog }
};
</script>

<style>
</style>
