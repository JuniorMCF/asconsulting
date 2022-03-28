<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0 container-bandwith">
                <v-img src="/app/bandwith.PNG "></v-img>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10">
            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <span class="primary--text text-uppercase as-text_extralarge line-height_1">Ponte en</span>
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                >contacto</span>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center justify-center mb-10">
            <v-col class="col-12 col-md-5 pa-0">
                <v-container class="pa-0 ma-0">
                    <v-row class="pa-0 ma-0">
                        <v-col class="col-12">
                            <v-text-field
                                class="rounded-0"
                                color="primary"
                                label="Nombres completos"
                                outlined
                                v-model="contacto.nombres"
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>

                        <v-col class="col-12">
                            <v-text-field
                                class="rounded-0"
                                color="primary"
                                label="Email"
                                :error="error_email"
                                outlined
                                v-model="contacto.email"
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>

                        <v-col class="col-12">
                            <v-text-field
                                class="rounded-0"
                                color="primary"
                                label="Teléfono"
                                outlined
                                v-model="contacto.telefono"
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>

                        <v-col class="col-12">
                            <v-textarea
                                outlined
                                height="100"
                                class="rounded-0"
                                label="Agrega un mensaje"
                                v-model="contacto.mensaje"
                                hide-details="auto"
                            ></v-textarea>
                        </v-col>

                        <v-col class="col-12">
                            <v-btn
                                block
                                class="rounded-0 text-normal"
                                color="primary"
                                x-large
                                :loading="loading"
                                @click.prevent="OnSubmitContacto()"
                            >Enviar</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>

            <v-col class="col-12 col-md-7">
                <v-container class="pa-0 ma-0">
                    <v-row class="pa-0 ma-0 align-center justify-center">
                        <v-col class="col-5 col-md-4">
                            <h2 class="font-weight-bold primary--text">¡VISÍTANOS!</h2>
                        </v-col>
                        <v-col class="col-7 col-md-8 text-justify">
                            <span class="as-p_normal primary--text">
                                <v-icon color="primary" left>mdi-map-marker</v-icon>
                                {{ address }}
                            </span>
                        </v-col>
                        <v-col class="col-12">
                            <div class="container-map">
                                <gmaps-map :options="mapOptions">
                                    <gmaps-marker
                                        :options="markerOptions"
                                        :position="{ lat: lat_as, lng: lng_as }"
                                    />
                                </gmaps-map>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <!--include footer-->
        <FooterGlobal></FooterGlobal>

        <ChatComponent></ChatComponent>
    </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import map_style from "../../map_style";
import { gmapsMap, gmapsMarker, gmapsInfoWindow } from "x5-gmaps";
export default {
    components: {
        ChatComponent,
        FooterGlobal,
        gmapsMap,
        gmapsMarker,
        gmapsInfoWindow,
    },
    data: () => ({
        loading: false,
        error_email: false,
        contacto: {
            nombres: "",
            emai: "",
            telefono: "",
            mensaje: "",
        },
        lat_as: -12.12856,
        lng_as: -76.9971846,

        mapOptions: {
            fullscreenControl: false,
            mapTypeControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
            zoomControl: false,
            title: "A&S Consulting Group",
            center: { lat: -12.12856, lng: -76.9971846 },
            zoom: 17,

            gestureHandling: "greedy",
            styles: map_style.style_map,
        },
        markerOptions: {
            draggable: false,
            icon: "/app/location_icon.png",
            animation: 0,
        },
        empresa: "A&S Consulting Group.",
        address: "Av. Alfredo Benavides 3695. Santiago de Surco. Lima, Perú.",
    }),

    mounted() {
        this.getPath();
        this.$store.dispatch(
            "app/changeTitlePage",
            "Contacto A&S"
        );
        document.title = this.$store.state.app.title_page;
        /**for visite */
        this.$store.dispatch("app/openPage", {
            page: window.location.pathname,
            link: window.location.host + window.location.pathname
        })

    },
    destroyed() {
        this.$store.dispatch("app/closePage", {
            visita_id: this.$store.state.app.visita_id
        })
    },
    methods: {
        getPath() {
            let path = window.location.pathname + window.location.search;

            this.$store.dispatch("app/setPath", path);
        },
        OnSubmitContacto() {
            if (
                this.contacto.nombres != "" &&
                this.contacto.email != "" &&
                this.contacto.telefono != "" &&
                this.contacto.mensaje != ""
            ) {
                this.loading = true;
                axios
                    .post("/api/contacto", this.contacto)
                    .then((res) => {
                        this.loading = false;
                        this.error_email = false
                        this.contacto = {
                            nombres: "",
                            emai: "",
                            telefono: "",
                            mensaje: "",
                        },
                            Vue.$toast.success("Se guardaron los cambios");
                    })
                    .catch((err) => {
                        this.error_email = true
                        this.loading = false;
                        Vue.$toast.error("email inválido");
                    });
                return;
            }
            Vue.$toast.warning("Llene todos los campos del formulario");
        },
    },
};
</script>

<style>
.container-map {
    height: 350px;
}
</style>
