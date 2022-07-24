<template>
    <div class>
        <v-container fluid class="fixed-top pa-0">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <div class="flux-overlap"></div>
                    <vue-flux
                        :options="vfOptions"
                        :images="vfImages"
                        :transitions="vfTransitions"
                        ref="slider"
                        class="flux-container"
                        :captions="vfCaptions"
                    >
                        <template v-slot:caption>
                            <flux-caption v-slot="captionProps">
                                <div class="flux-content">
                                    <v-img
                                        v-if="captionProps.text.image != null"
                                        :src="captionProps.text.image"
                                        class="mx-auto image-as pa-0 my-0"
                                    ></v-img>
                                    <div
                                        v-if="captionProps.text.title != null"
                                        class="pa-0 ma-0"
                                    >
                                        <div class="content-desc-title mx-auto">
                                            <span
                                                v-for="(
                                                    element, i
                                                ) in captionProps.text.title"
                                                :key="i"
                                            >
                                                <p
                                                    class="as-text_large ma-0"
                                                    v-if="
                                                        element.type == 'normal'
                                                    "
                                                >
                                                    <span>{{
                                                        element.text
                                                    }}</span>
                                                </p>
                                                <strong
                                                    class="as-text_underline font-weight-bold"
                                                    v-else
                                                    >{{ element.text }}</strong
                                                >
                                            </span>
                                        </div>
                                    </div>

                                    <p
                                        v-if="
                                            captionProps.text.subtitle_image !=
                                            null
                                        "
                                        class="pa-0 ma-0"
                                    >
                                        <span class="as-title_large">
                                            {{
                                                captionProps.text.subtitle_image
                                            }}
                                        </span>
                                    </p>

                                    <div
                                        v-if="
                                            captionProps.text.subtitle != null
                                        "
                                        class="pa-0 ma-0 my-5"
                                    >
                                        <div
                                            class="content-desc-subtitle mx-auto"
                                        >
                                            <span
                                                v-for="(
                                                    element, i
                                                ) in captionProps.text.subtitle"
                                                :key="i"
                                            >
                                                <span
                                                    class="as-text_normal"
                                                    v-if="
                                                        element.type == 'normal'
                                                    "
                                                    >{{ element.text }}</span
                                                >
                                                <strong
                                                    class="as-text_normal"
                                                    v-else-if="
                                                        element.type == 'strong'
                                                    "
                                                    >{{ element.text }}</strong
                                                >
                                                <p
                                                    class="as-text_normal ma-0"
                                                    v-else
                                                >
                                                    <span>{{
                                                        element.text
                                                    }}</span>
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        v-if="captionProps.text.actions != null"
                                    >
                                        <div
                                            class="content-desc-title mx-auto d-flex justify-space-between my-6"
                                        >
                                            <span
                                                v-for="(
                                                    action, i
                                                ) in captionProps.text.actions"
                                                :key="i"
                                                class="mx-auto"
                                            >
                                                <v-hover v-slot="{ hover }">
                                                    <v-btn
                                                        :class="{
                                                            'primary--text white':
                                                                hover,
                                                        }"
                                                        outlined
                                                        color="white"
                                                        class="white--text font-weight-bold btn-actions"
                                                        rounded
                                                        @click="
                                                            OnClickActions()
                                                        "
                                                        >{{
                                                            action.title
                                                        }}</v-btn
                                                    >
                                                </v-hover>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-12">
                                    <v-btn
                                        fab
                                        outlined
                                        color="white"
                                        href="#ayudanos"
                                    >
                                        <v-icon class="white--text" large
                                            >mdi-chevron-down</v-icon
                                        >
                                    </v-btn>
                                </div>
                            </flux-caption>
                        </template>

                        <template v-slot:pagination>
                            <flux-pagination></flux-pagination>
                        </template>
                    </vue-flux>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 ma-0 main-content">
            <v-row
                class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith"
                id="ayudanos"
            >
                <v-col class="col-12 pa-0 ma-0">
                    <v-img src="/app/bandwith.png"></v-img>
                </v-col>
            </v-row>

            <v-row
                class="ma-0 pa-0 my-5 d-flex justify-center content-wrap-2 mx-auto container-different"
            >
                <v-col class="col-10 col-xs-6 col-md-5 pa-5">
                    <comilla></comilla>

                    <v-card
                        class="rounded-0 elevation-2 container-card mx-auto"
                    >
                        <v-card-text class="pa-6 text-line-card text-center">
                            <span class="as-title_large alternative--text">
                                Ayudamos a
                                <strong>cumplir los objetivos</strong> de
                                nuestros clientes,
                                <strong>promoviendo su crecimiento</strong>,
                                rentabilidad y la gestión de sus riesgos.
                            </span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row
                class="ma-0 my-5 pa-0 d-flex justify-center content-wrap-2 mx-auto"
            >
                <v-col
                    class="col-12 col-md-6 pa-5 d-flex align-center justify-md-end justify-center"
                >
                    <v-card
                        class="rounded-circle d-flex align-center"
                        color="primary"
                        height="102"
                        width="102"
                    >
                        <v-card-text class="pa-0">
                            <v-img
                                src="/app/focus_light.png"
                                height="86"
                                width="103"
                                class="mx-auto"
                            ></v-img>
                        </v-card-text>
                    </v-card>
                    <v-card class="elevation-0 d-flex align-center px-4">
                        <div class="d-block">
                            <span class="as-text_extraLarge primary--text"
                                >¿Qué nos</span
                            >
                            <br />
                            <span
                                class="as-text_extraLarge pl-7 font-weight-bold text-uppercase primary--text"
                                >diferencia?</span
                            >
                        </div>
                    </v-card>
                </v-col>
                <v-col class="col-12 col-md-6 pa-5">
                    <ul>
                        <li class="as-li_normal primary--text">
                            Asesores con más de
                            <strong>20 años de experiencia.</strong>
                        </li>
                        <li class="as-li_normal primary--text">
                            Visión estratégica.
                        </li>
                        <li class="as-li_normal primary--text">
                            Metodología ágil y colaborativa.
                        </li>
                        <li class="as-li_normal primary--text">
                            Conocimiento del mercado.
                        </li>
                        <li class="as-li_normal primary--text">
                            Enfoque digital y de experiencia al usuario (UX).
                        </li>
                    </ul>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0 ma-0 rotate-180 container-bandwith">
                    <v-img src="/app/bandwith.png "></v-img>
                </v-col>
            </v-row>
            <v-row class="pa-0 ma-0 primary content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0">
                    <v-card-text class="text-uppercase white--text text-center">
                        <span class="as-text_extraLarge">Nuestros</span>
                        <br />
                        <span class="as-text_extraLarge pl-16 font-weight-bold"
                            >Servicios</span
                        >
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0 ma-0">
                    <div class="flux-overlap-servicios"></div>
                    <div class="flux-servicios">
                        <vue-flux
                            :options="vfOptions_services"
                            :images="vfImages_services"
                            :transitions="vfTransitions_services"
                            ref="slider_services"
                            class="flux-servicios"
                            :captions="vfCaptions_services"
                        >
                            <template v-slot:controls>
                                <flux-controls />
                            </template>
                            <template v-slot:caption>
                                <flux-caption
                                    v-slot="captionProps"
                                    style="position: absolute; top: 10%"
                                >
                                    <p
                                        class="white--text as-text_extraLarge mb-0 font-weight-bold mx-auto"
                                        style="width: 350px; line-height: 1"
                                    >
                                        {{ captionProps.text.title }}
                                    </p>
                                    <p class="white--text as-text_normal my-4">
                                        {{ captionProps.text.subtitle }}
                                    </p>
                                    <ul
                                        class="white--text text-start mx-auto"
                                        style="max-width: 350px"
                                    >
                                        <li
                                            class="white--text text-subtitle-1"
                                            v-for="(element, i) in captionProps
                                                .text.detalles"
                                            :key="'data' + i"
                                        >
                                            {{ element }}
                                        </li>
                                    </ul>
                                    <v-hover v-slot="{ hover }">
                                        <v-btn
                                            :to="captionProps.text.link"
                                            :class="{
                                                'primary--text white': hover,
                                            }"
                                            outlined
                                            rounded
                                            color="white"
                                            class="white--text font-weight-bold text-normal my-10 px-10"
                                            >Ver más</v-btn
                                        >
                                    </v-hover>
                                </flux-caption>
                            </template>

                            <template v-slot:pagination>
                                <flux-pagination></flux-pagination>
                            </template>
                        </vue-flux>
                    </div>
                </v-col>
            </v-row>
            <v-row class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith">
                <v-col class="col-12 pa-0 ma-0">
                    <v-img src="/app/bandwith.png"></v-img>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
                <v-col
                    class="col-12 col-md-5 d-flex align-center justify-md-end justify-center"
                >
                    <div class="d-block">
                        <span class="as-text_extraLarge primary--text"
                            >Solicita tu</span
                        >
                        <br />
                        <span
                            class="as-text_extraLarge pl-7 font-weight-bold text-uppercase primary--text"
                            >asesoría</span
                        >
                    </div>
                </v-col>
                <v-col class="col-12 col-md-6">
                    <v-container class="pa-0 ma-0">
                        <v-row class="pa-0 ma-0">
                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Nombres y apellidos"
                                    outlined
                                    v-model="form.nombres"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Email"
                                    outlined
                                    v-model="form.email"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Teléfono"
                                    outlined
                                    v-model="form.telefono"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-select
                                    :items="servicios"
                                    class="rounded-0"
                                    label="Selecciona un servicio"
                                    item-text="nombre"
                                    outlined
                                    return-object
                                    v-model="servicio"
                                    hide-details="auto"
                                ></v-select>
                            </v-col>

                            <v-col class="col-12">
                                <v-textarea
                                    outlined
                                    height="100"
                                    class="rounded-0"
                                    label="Comentarios"
                                    v-model="form.comentario"
                                    hide-details="auto"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <v-row class="content-wrap-2 mx-auto ma-0 mb-4">
                <v-col class="pa-0 pb-4 col-12 offset-md-5 col-md-6">
                    <v-container class="pa-0">
                        <v-row class="pa-0 ma-0">
                            <v-col class="pa-0 col-12 text-center">
                                <v-btn
                                    :loading="loadAsesoria"
                                    @click.prevent="sendRequest()"
                                    color="primary"
                                    x-large
                                    class="text-normal px-10 rounded-0"
                                >
                                    <h4>Enviar solicitud</h4>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <!--include footer-->
            <FooterGlobal></FooterGlobal>
        </v-container>

        <ChatComponent></ChatComponent>
    </div>
</template>

<script>
import {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
} from "vue-flux";
import Comilla from "./utils/Comilla.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import ChatComponent from "../../components/global/ChatComponent.vue";
export default {
    components: {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
        Comilla,
        FooterGlobal,
        ChatComponent,
    },
    data: () => ({
        form: {
            nombres: "",
            email: "",
            telefono: "",
            servicio: "",
            comentario: "",
        },
        servicio: {
            nombre: "",
        },

        loadAsesoria: false,
        vfOptions: {
            autoplay: true,
            allowToSkipTransition: true,
            delay: 4000,
        },
        vfImages: ["/app/file1.webp", "/app/file2.webp"],
        vfTransitions: ["fade", "fade"],
        vfCaptions: [
            {
                image: "/app/logo_home.png",
                subtitle_image: "Consulting Group",
                title: null,
                subtitle: [
                    {
                        text: "Empresa",
                        type: "normal",
                    },
                    {
                        text: " peruana ",
                        type: "strong",
                    },
                    {
                        text: " que brinda servicios de ",
                        type: "normal",
                    },
                    {
                        text: "consultoría",
                        type: "strong",
                    },
                    {
                        text: " especializada.",
                        type: "normal",
                    },
                ],

                actions: null,
            },
            {
                image: null,
                subtitle_image: null,
                title: [
                    {
                        text: "REACTIVA TU",
                        type: "normal",
                    },
                    {
                        text: "PYME",
                        type: "underline",
                    },
                ],
                subtitle: [
                    {
                        text: "Conoce como reactivar",
                        type: "normal",
                    },
                    {
                        text: " tu negocio y llevarlo al siguiente nivel",
                        type: "salto_linea",
                    },
                ],
                actions: [
                    {
                        title: "Reactiva",
                        route: "/",
                    },
                    {
                        title: "Carta digital",
                        route: "/",
                    },
                ],
            },
        ],

        /**for services */
        vfOptions_services: {
            autoplay: true,
            allowToSkipTransition: true,
            delay: 3000,
        },
        vfImages_services: [
            "/app/tecnologia.webp",
            "/app/finanzas.webp",
            "/app/procesos.webp",
            "/app/pyme_digital.webp",
        ],
        vfTransitions_services: ["slide", "slide", "slide", "slide"],
        vfCaptions_services: [
            {
                title: "Tecnología",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Software a medida (web / app).",
                    "Soporte técnico computacional (outsourcing).",
                    "Proyectos de TI (ágiles y tradicionales).",
                    "Tableros de control en línea.",
                    "Gestión integral de proveedores.",
                ],
                link: "/tecnologia",
            },
            {
                title: "Finanzas y Contabilidad",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Outsourcing contable.",
                    "Outsourcing de planillas.",
                    "Auditorías especializadas.",
                    "Reestructuración financiera.",
                    "Consultoría tributaria y legal.",
                ],
                link: "/finanzas",
            },
            {
                title: "Procesos",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Diseño y optimización de procesos.",
                    "Inventario de activos (metodología ágil).",
                    "Programa de reducción de costos.",
                    "​Reingeniería organizacional.",
                    "Gestión de riesgos.",
                ],
                link: "/procesos",
            },
            {
                title: "Pyme Digital",
                subtitle: "Nuestros principales servicios:",
                detalles: ["Reactiva tu empresa.", "Mi carta digital."],
                link: "/",
            },
        ],

        /**data */
        servicios: [
            {
                id: 1,
                nombre: "Tecnología",
            },
            {
                id: 2,
                nombre: "Finanzas y Contabilidad",
            },
            {
                id: 3,
                nombre: "Procesos",
            },
        ],
    }),
    mounted() {
        this.getPath();
        this.$store.dispatch(
            "app/changeTitlePage",
            "Empresa Consultora Peruana | A&S Consulting Group | Santiago de Surco"
        );
        document.title = this.$store.state.app.title_page;

        this.$store.dispatch("app/openPage", {
            page: window.location.pathname,
            link: window.location.host + window.location.pathname,
        });
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
        sendRequest() {
            this.form.servicio = this.servicio.nombre;
            this.loadAsesoria = true;
            if (
                this.form.nombres != "" &&
                this.form.email != "" &&
                this.form.telefono != "" &&
                this.form.servicio != "" &&
                this.form.comentario != ""
            ) {
                //let data = new FormData(this.form)
                axios
                    .post("/api/asesoria", this.form)
                    .then((res) => {
                        Vue.$toast.success(
                            "Su solicitud de asesoría ha sido enviada, nos comunicaremos con ud"
                        );
                        this.loadAsesoria = false;
                        this.form = {
                            nombres: "",
                            email: "",
                            telefono: "",
                            servicio: "",
                            comentario: "",
                        };
                        this.servicio = {
                            nombre: "",
                        };
                        this.loadAsesoria = false;
                    })
                    .catch((err) => {
                        this.loadAsesoria = false;
                        Vue.$toast.error("Error de conexión");
                    });
                return;
            }
            Vue.$toast.warning("Llene todos los campos del formulario");
            this.loadAsesoria = false;
        },
    },
};
</script>

<style>
.fixed-top {
    position: absolute;
    top: -87px;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 1480px;
}
.vue-flux .flux-caption {
    margin: 0 auto;
    color: white;
    background-color: transparent;
}
.flux-caption {
    width: 400px;
    height: 25%;
    /* centrar vertical y horizontalmente */
    position: absolute;
    top: 30%;
}
.flux-overlap {
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 1480px;
    background-color: rgba(0, 0, 102, 0.38) !important;
}
.flux-overlap-servicios {
    position: absolute;
    z-index: 5;
    height: 500px;
    width: 1480px;
    background-color: rgba(0, 0, 102, 0.38) !important;
}
.flux-content {
    z-index: 6;
}

.flux-pagination li {
    color: white;
    margin: 0px 4.5px 0px 4.5px !important;
    background-color: white;
    padding: 0px !important;
    width: 12px !important;
    height: 12px !important;
    border-radius: 1.6rem;
}
.current {
    color: rgba(255, 255, 255, 0.8);
}

.image-as {
    height: 124px;
    width: 240px;
}
.flux-container {
    height: 817px !important;
}
.flux-servicios {
    height: 500px !important;
}
.main-content {
    position: absolute;
    top: calc(817px - 87px);
}

/*.container-different {
  position: relative;
  top: -300px;
}*/
.text-line-card {
    line-height: 1.3;
}
.container-card {
    max-width: 442px;
    background-color: #ededed !important;
}

@media screen and (max-width: 992px) {
    .image-as {
        height: 4rem;
        width: 8rem;
    }

    .flux-container {
        height: 500px !important;
    }
    .flux-overlap {
        position: absolute;
        z-index: 5;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
    .flux-content {
        z-index: 2;
    }

    .main-content {
        position: absolute;
        top: calc(500px - 87px);
    }
    .flux-servicios {
        height: 400px !important;
    }
    .flux-overlap-servicios {
        position: absolute;
        z-index: 5;
        height: 400px;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
}

/**flux controls */

.flux-controls .play {
    display: none !important;
}
.flux-controls .pause {
    display: none !important;
}
.flux-button svg circle {
    fill: transparent;
    color: white;
}
.flux-button:hover svg svg polyline {
    stroke: white !important;
}
</style>
