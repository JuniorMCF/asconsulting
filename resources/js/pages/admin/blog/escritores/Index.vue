<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">{{ actualPage }}</v-card-title>
        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="pa-0 ma-0 col-12">
                    <v-card-text class="px-0 py-0">
                        <p
                            class="caption ma-0"
                        >Administra a los escritores de tu blog, crea y personaliza sus perfiles públicos. Todos aquí tienen permiso para escribir entradas.</p>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <v-data-table
                        :headers="headers"
                        :items="users"
                        :search="search"
                        sort-by="calories"
                        class="elevation-0 px-0 rounded-0"
                        hide-default-footer
                        disable-pagination
                    >
                        <template v-slot:item.foto="{ item }">
                            <div class="pa-2">
                                <v-img
                                    v-if="item.foto"
                                    :src="item.foto"
                                    height="60"
                                    width="42"
                                    class="mx-auto"
                                ></v-img>
                                <div
                                    v-else
                                    class="gray lighten-5 rounded-lg align-center justify-center d-flex mx-auto"
                                    style="width:60px;height:60px;"
                                >
                                    <v-btn
                                        fab
                                        color="white"
                                        x-small
                                        class="elevation-0 disable-events"
                                    >
                                        <v-icon color="sky">mdi-image-outline</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </template>
                        <template v-slot:item.roles="{ item }">
                            <span>{{ item.roles[0].name }}</span>
                        </template>
                        <template v-slot:item.entradas="{ item }">
                            <span>{{ item.entradas.length }}</span>
                        </template>

                        <template v-slot:item.nombre="{ item }">
                            <span>{{ item.name + " " + item.last_name }}</span>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <!--<v-btn
                                class="mr-2 rounded-xl text-normal white--text elevation-1"
                                color="sky"
                                @click="editItem(item)"
                            >editar</v-btn>-->

                            <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        dark
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        text
                                        class="elevation-0 sky--text"
                                        fab
                                        x-small
                                    >
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                        v-for="(option, i) in options"
                                        :key="'options' + i"
                                        link
                                        @click.prevent="OnClickOption(option, item)"
                                    >
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
    </div>
</template>

<script>
export default {
    data: () => ({
        headers: [
            {
                text: "",
                align: "left",
                sortable: false,
                value: "foto",
            },
            {
                text: "Nombres",
                align: "left",
                sortable: false,
                value: "nombre",
            },
            { text: "Rol", value: "roles" },
            { text: "Contador de entrada", value: "entradas" },
            { text: " ", align: "right", value: "actions", sortable: false },
        ],
        users: [],
        search: null,
        options:[
            {
                icon: "mdi-restore",
                title: "Cambiar rol",
            },
            {
                icon: "mdi-pencil",
                title: "Editar",
            },
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
            this.$store.dispatch("app/saveActualPage", "Escritores");
        },
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/writers",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {
                    console.log(res);
                    this.users = res.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    //Vue.$toast.error("");
                });
        },
    },
    computed: {
        actualPage() {
            return this.$store.state.app.actual_page;
        },
    },
};
</script>

<style>
</style>
