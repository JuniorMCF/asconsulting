<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">{{ actualPage }}</v-card-title>

        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="contactos"
                        show-select
                        :search="search"
                        sort-by="calories"
                        class="elevation-0 px-0 rounded-0"
                        hide-default-footer
                        disable-pagination
                    >
                        <template v-slot:item.foto="{ item }">
                            <div class="pa-2">
                                <v-img v-if="item.foto" :src="item.foto" height="50" width="50"></v-img>
                                <div v-else style="width:50px;height:50px;">
                                    <avatar v-if="item.nombres!=null" :username="item.nombres" height="50"></avatar>
                                     <avatar v-else :username="item.email1" height="50"></avatar>
                                </div>
                            </div>
                        </template>
                        <template v-slot:item.fecha_ultima_actividad="{ item }">
                            <span>{{ formatDate(item.fecha_ultima_actividad) }}</span>
                        </template>

                            <template v-slot:item.nombres="{ item }">
                            <span>{{item.nombres ? item.nombres :'' + " "+item.apellidos ? item.apellidos :''}}</span>
                        </template>

                        <template v-slot:top>
                            <v-card-text flat class="px-0 d-flex flex-wrap align-center">
                                <div class="col-12 col-md-6 text-center text-md-start">
                                    <p
                                        class="ma-0"
                                        v-if="selected.length > 0"
                                    >{{ selected.length }} seleccionados</p>
                                </div>

                                <div class="col-12 col-md-3 text-center text-md-end">
                                    <v-btn
                                        v-if="selected.length > 0"
                                        color="sky"
                                        large
                                        class="white--text text-normal caption mr-3 elevation-0"
                                        rounded
                                        @click.prevent="trashAll()"
                                    >mover seleecionados a papelera</v-btn>
                                </div>
                                <div class="col-12 col-md-3 text-end">
                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Buscar"
                                        color="sky"
                                        single-line
                                        outlined
                                        dense
                                        rounded
                                        hide-details
                                    ></v-text-field>
                                </div>
                            </v-card-text>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-btn
                                class="mr-2 rounded-xl text-normal white--text elevation-1"
                                color="sky"
                                @click="show(item)"
                            >Ver</v-btn>

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
import Avatar from 'vue-avatar'
export default {
    components: {
        Avatar
    },
    data: () => ({
        search: "",
        headers: [
            {
                text: " ",
                align: "left",
                sortable: false,
                value: "foto",
            },
            {
                text: "Nombre",
                align: "left",
                sortable: false,
                value: "nombres",
            },
            { text: "Email", value: "email1" },
            { text: "Teléfono", value: "telefono1" },
            { text: "Dirección", value: "direccion1" },
            { text: "Última actividad", value: "fecha_ultima_actividad" },
            { text: " ", align: "right", value: "actions", sortable: false },
        ],
        selected: [],
        contactos: [],
        options: [
            {
                icon: "mdi-pencil",
                title: "Editar",
            },
            {
                icon: "mdi-trash-can-outline",
                title: "Eliminar",
            },
        ],
    }),
    mounted() {
        this.setActualPage();
        this.getData()
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Contactos");
        },
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/contactos/all",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/contactos/pub", headers)
                .then((res) => {
                    //console.log(res);
                    this.contactos = res.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    //Vue.$toast.error("");
                });
        },
        formatDate(date) {
            return this.moment(date).format("DD MMMM YYYY");
        },
        show(item){
            console.log(item)
        },
         OnClickOption(option, item) {
            //console.log(item.route)
            switch (option.title) {
                case "Editar":

                    break;
                case "Eliminar":

                    break;
                default:
            }
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
