<template>
    <div>
        <v-container fluid class="pa-0 mx-auto py-16">
            <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0 container-bandwith">
                <v-img src="/app/bandwith.png "></v-img>
            </v-col>
        </v-row> -->

            <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-16">
                <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                    <span
                        class="primary--text text-uppercase as-text_extralarge line-height_1"
                        >Nuestros</span
                    >
                    <br />

                    <span
                        class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                        >clientes</span
                    >
                </v-col>

                <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                    <p
                        class="black--text text-md-justify text-center as-p_normal ma-0"
                    >
                        Ellos confian en nosotros para conseguir sus objetivos.
                    </p>
                </v-col>
            </v-row>

            <v-row
                class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10 justify-content-center"
            >
                <v-card-text class="pa-3 my-5 my-md-15">
                    <span
                        class="primary--text as-text_underline-init font-weight-bold text-normal"
                        >Empresas Internacionales</span
                    >
                </v-card-text>
                <v-col
                    class="col-12 col-md-6"
                    v-for="empresa in empresas_inter"
                    :key="'inter' + empresa.id"
                >
                    <v-img :src="empresa.src" height="145" contain></v-img>
                </v-col>

                <v-card-text class="pa-3 my-5 my-md-15">
                    <span
                        class="primary--text as-text_underline-init font-weight-bold text-normal"
                        >Empresas Nacionales</span
                    >
                </v-card-text>

                <v-col
                    class="col-6 col-md-4"
                    v-for="empresa in empresas_nac"
                    :key="'nac' + empresa.id"
                >
                    <v-img :src="empresa.src" height="150" contain></v-img>
                </v-col>
            </v-row>

            <v-row
                class="pa-0 ma-0 content-wrap-2 mx-auto align-center my-10 justify-content-center"
            >
                <v-col class="col-12 my-4">
                    <v-card-text class="pa-3 text-center">
                        <span class="as-text_underline_app primary--text"
                            >TESTIMONIOS</span
                        >
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row
                class="pa-0 ma-0 my-16 mx-auto container-testimonios align-center justify-center"
            >
                <v-carousel
                    cycle
                    hide-delimiter-background
                    show-arrows-on-hover
                    height="600"
                    :light="!$vuetify.theme.dark"
                    color="primary"
                >
                    <template v-slot:prev="{ on, attrs }">
                        <v-btn
                            class="rounded-0"
                            fab
                            small
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon>mdi-arrow-left</v-icon></v-btn
                        >
                    </template>
                    <template v-slot:next="{ on, attrs }">
                        <v-btn
                            class="rounded-0"
                            fab
                            small
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon>mdi-arrow-right</v-icon></v-btn
                        >
                    </template>
                    <v-carousel-item
                        v-for="(testimonio, i) in testimonios"
                        :key="'testimonios-' + i"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                        <v-sheet
                            class="mx-auto sheet_shadow"
                            width="80"
                            rounded="circle"
                            style="position: relative; top: 40px;"
                        >
                            <v-avatar
                                class="mx-auto white"
                                height="80"
                                width="80"
                            >
                                <v-img
                                    :src="testimonio.foto"
                                    contain
                                    class="mx-auto"
                                >
                                    <div
                                        class="fill-height bottom-gradient"
                                    ></div>
                                </v-img>
                            </v-avatar>
                        </v-sheet>
                        <v-sheet
                            color="white"
                            shaped
                            height="77%"
                            class="mx-auto pa-5 py-12 pa-sm-10 py-sm-16 pa-md-10 py-md-16 pa-lg-16 pa-xl-16 sheet_testimonio sheet_shadow"
                        >
                            <v-card-text class="text-center py-0">
                                <h1
                                    class="text-h6 black--text font-weight-bold"
                                >
                                    {{ testimonio.nombre }}
                                </h1>
                                <h1
                                    class="text-subtitle-1 black--text font-weight-bold"
                                >
                                    {{ testimonio.cargo }}
                                </h1>
                            </v-card-text>

                            <v-card-text
                                class="text-center mx-auto pa-0 ma-0 py-4"
                            >
                                <p
                                    class="black--text text-subtitle-1 ma-0 line-height_1_3"
                                >
                                    {{ testimonio.comentario }}
                                </p>
                            </v-card-text>
                            <v-card-text class="text-justify mx-auto pa-0 ma-0">
                                <p class="ma-0 text-center py-2">
                                    <span
                                        class="black--text font-weight-bold text-subtitle-1 line-height_1"
                                        >Proyecto:</span
                                    >

                                    <span
                                        v-for="(
                                            element, index
                                        ) in testimonio.proyect"
                                        :key="'proy' + index"
                                    >
                                        <span
                                            class="black--text text-subtitle-1 line-height_1"
                                            v-if="element.type == 'normal'"
                                        >
                                            {{ element.text }}
                                        </span>
                                        <span
                                            class="primary--text font-weight-bold text-subtitle-1 line-height_1"
                                            v-else
                                        >
                                            {{ element.text }}
                                        </span>
                                    </span>
                                </p>

                                <p class="ma-0 text-center py-2">
                                    <span
                                        class="black--text font-weight-bold text-subtitle-1 line-height_1"
                                        >Cliente:</span
                                    >

                                    <span
                                        v-for="(
                                            element, index
                                        ) in testimonio.cliente"
                                        :key="'cli' + index"
                                    >
                                        <span
                                            class="black--text text-subtitle-1 line-height_1"
                                            v-if="element.type == 'normal'"
                                        >
                                            {{ element.text }}
                                        </span>
                                        <span
                                            class="primary--text font-weight-bold text-subtitle-1 line-height_1"
                                            v-else
                                        >
                                            {{ element.text }}
                                        </span>
                                    </span>
                                </p>
                            </v-card-text>
                            <p
                                class="black--text text-caption ma-0 text-end pt-sm-8 pt-md-8"
                            >
                                {{ testimonio.fecha }}
                            </p>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-row>

            <!-- <v-row class="pa-0 ma-0 container-testimonios mb-16">
                <div class="flux-overlap-video"></div>
                <carousel-3d
                    :disable3d="true"
                     class="content-testimonios"
                    :autoplay="true"
                    :autoplay-timeout="3000"
                    :width="width_carousel"
                    :height="height_carousel"
                >
                    <slide
                        v-for="(testimonio, i) in testimonios"
                        :index="i"
                        :key="'test' + i"
                        class="v-card border-card pa-0"
                    >
                        <v-card-text class="text-center pb-0">
                            <v-avatar
                                class="mx-auto white"
                                height="200"
                                width="200"
                            >
                                <v-img
                                    :src="testimonio.foto"
                                    contain
                                    class="mx-auto"
                                ></v-img>
                            </v-avatar>
                        </v-card-text>
                        <v-card-text class="text-center content-card mx-auto">
                            <h1 class="secondary--text font-weight-bold my-2">
                                {{ testimonio.nombre }}
                            </h1>
                            <h1 class="white--text font-weight-bold my-2">
                                {{ testimonio.cargo }}
                            </h1>

                            <p class="white--text my-2 mt-4">
                                "{{ testimonio.comentario }}"
                            </p>
                            <p class="white--text font-weight-bold my-2">
                                {{ testimonio.fecha }}
                            </p>
                        </v-card-text>
                        <v-card-text
                            class="pt-0 text-justify content-card mx-auto"
                        >
                            <p>
                                <span class="secondary--text">Proyecto:</span>

                                <span
                                    v-for="(
                                        element, index
                                    ) in testimonio.proyect"
                                    :key="'proy' + index"
                                >
                                    <span
                                        class="white--text"
                                        v-if="element.type == 'normal'"
                                    >
                                        {{ element.text }}
                                    </span>
                                    <span
                                        class="white--text font-weight-bold"
                                        v-else
                                    >
                                        {{ element.text }}
                                    </span>
                                </span>
                            </p>

                            <p>
                                <span class="secondary--text">Cliente:</span>

                                <span
                                    v-for="(
                                        element, index
                                    ) in testimonio.cliente"
                                    :key="'cli' + index"
                                >
                                    <span
                                        class="white--text"
                                        v-if="element.type == 'normal'"
                                    >
                                        {{ element.text }}
                                    </span>
                                    <span
                                        class="white--text font-weight-bold"
                                        v-else
                                    >
                                        {{ element.text }}
                                    </span>
                                </span>
                            </p>
                        </v-card-text>
                    </slide>
                </carousel-3d>
                <video autoplay muted loop id="myVideo" class="col-12 pa-0">
                    <source src="/app/testimonios.mp4" type="video/mp4" />
                </video>
            </v-row> -->
        </v-container>
        <!--include footer-->
        <FooterGlobal></FooterGlobal>

        <ChatComponent></ChatComponent>
    </div>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";

import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
    components: { ChatComponent, FooterGlobal, Carousel3d, Slide },
    data: () => ({
        empresas_inter: [
            {
                id: 1,
                src: "/app/solgas_wb.png",
                title: "solgas",
            },
            {
                id: 2,
                src: "/app/ripley_wb.jpg",
                title: "ripley",
            },
            {
                id: 3,
                src: "/app/isg_wb.jpg",
                title: "isg",
            },
        ],
        empresas_nac: [
            {
                id: 1,
                src: "/app/ferro.png",
                title: "ferro",
            },
            {
                id: 2,
                src: "/app/cammotors.png",
                title: "cammotors",
            },
            {
                id: 3,
                src: "/app/histron.jpg",
                title: "histron",
            },
            {
                id: 4,
                src: "/app/ls.png",
                title: "ls",
            },
            {
                id: 5,
                src: "/app/grupo_acor.png",
                title: "grupo_acor",
            },
            {
                id: 6,
                src: "/app/cei.png",
                title: "cei",
            },
            {
                id: 7,
                src: "/app/jng.png",
                title: "jng",
            },
            {
                id: 8,
                src: "/app/chalupa.png",
                title: "chalupa",
            },
            {
                id: 9,
                src: "/app/sericom.png",
                title: "sericom",
            },
            {
                id: 10,
                src: "/app/creditaxi.png",
                title: "creditaxi",
            },
            {
                id: 11,
                src: "/app/apoyominero.png",
                title: "apoyominero",
            },
            {
                id: 12,
                src: "/app/mggroup.png",
                title: "mggroup",
            },
            {
                id: 13,
                src: "/app/perumobile.png",
                title: "perumobile",
            },
            {
                id: 14,
                src: "/app/decorinox.png",
                title: "decorinox",
            },
            {
                id: 15,
                src: "/app/cosmosglass.png",
                title: "cosmosglass",
            },
        ],

        testimonios: [
            {
                foto: "/app/javier_zapata_2.png",
                nombre: "Javier Zapata",
                cargo: "Director de Decor Inox",
                comentario:
                    "Excelente trabajo de la empresa consultora A&S Consulting Group, el proyecto termino con éxito, ahora nos brindan asesoría en temas contables y tributarios",
                fecha: "01 dic, 2019",
                proyect: [
                    {
                        text: "Rediseño de procesos administrativos y contables,  toma de inventario de productos y activos fijos.",
                        type: "normal",
                    },
                ],
                cliente: [
                    {
                        text: "Decor Inox SAC,",
                        type: "stroke",
                    },
                    {
                        text: "empresa dedicada al rubro Ferretero pertenece al Grupo Ferro, es  importadora de artículos y accesorios para el hogar de acero inoxidable.",
                        type: "normal",
                    },
                ],
            },
            {
                foto: "/app/sergio_banuet_2.jpg",
                nombre: "Sergio Banuet",
                cargo: "Director de ISG",
                comentario:
                    "La calidad, experiencia y compromiso de A&S Consulting Group fue determinante para el éxito del proyecto. Consideramos sin duda continuar contratándolos para proyectos adicionales en la Región",
                fecha: "10 feb, 2020",
                proyect: [
                    {
                        text: "Transición de los servicios de telecomunicaciones y mudanza del Datacenter de ",
                        type: "normal",
                    },
                    {
                        text: "Ripley (Banco y Tiendas).",
                        type: "normal",
                    },
                ],
                cliente: [
                    {
                        text: "ISG (Information Service Group)",
                        type: "stroke",
                    },
                    {
                        text: "una de las mayores empresas del mundo de investigación y consultoría especializada en TI, de negocios y selección de proveedores. ",
                        type: "normal",
                    },
                ],
            },

            {
                foto: "/app/alejandro_camones_2.png",
                nombre: "Alejandro Camones",
                cargo: "Gerente General Cam Motors",
                comentario:
                    "La consultoría  ha sido tremendamente provechosa, la misma nos ha permitido definir una hoja de ruta precisa y medir los avances de las labores en forma efectiva.",
                fecha: "11 oct, 2019",
                proyect: [
                    {
                        text: "Análisis financiero, saneamiento contable así como la reestructuración empresarial.",
                        type: "normal",
                    },
                ],
                cliente: [
                    {
                        text: "Corporación Cam Motors SAC, ",
                        type: "stroke",
                    },
                    {
                        text: "empresa dedicada al rubro automotriz con la venta de vehículos cero kilómetros, la instalación de equipos a gas GLP y GNP, así como la venta de repuestos.",
                        type: "normal",
                    },
                ],
            },
        ],
        width_carousel: 900,
        height_carousel: 600,
    }),

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize);
        this.getPath();
        this.$store.dispatch(
            "app/changeTitlePage",
            "Clientes | A&S Consulting Group | Santiago de Surco"
        );
        document.title = this.$store.state.app.title_page;

        /**for visite */
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
        onResize() {
            if (window.innerWidth > 960) {
                this.width_carousel = 900;
                this.height_carousel = 600;
            } else {
                this.width_carousel = 900;
                this.height_carousel = 1400;
            }
        },
    },
};
</script>

<style>
#myVideo {
    position: absolute;
    z-index: 0;
    width: 100%;
    max-height: 850px;
}
.container-testimonios {
    width: 70%;
    height: auto;
}
.content-testimonios {
    position: absolute;
    z-index: 2 !important;
    width: 1480px;
    height: 900px;
}
.border-card {
    background: transparent;
    border: 1rem solid transparent;
}

.circle-img {
    border-radius: 50% !important;
}

.carousel-3d-container .carousel-3d-slide {
    padding: 20px;
}
.content-card {
    max-width: 400px;
}
.flux-overlap-video {
    position: absolute;
    z-index: 1;
    height: 850px !important;
    width: 100%;
    background-color: rgba(0, 0, 102, 0.38) !important;
}

.carousel-3d-slider {
    max-height: 700px !important;
}
.carousel-3d-container {
    max-height: 700px !important;
}
.carousel-3d-slide,
.v-card,
.border-card {
    max-height: 700px !important;
}
.sheet_testimonio {
    max-width: 600px;
}
.sheet_shadow{
    box-shadow: 0 0 5px 5px rgba(0, 0, 102, 0.38) !important;
}

@media screen and (max-width: 1480px) {
    .container-testimonios {
        width: 100%;
    }
    .content-testimonios {
        position: absolute;
        z-index: 2 !important;
        width: 100%;
        height: 700px;
    }
    #myVideo {
        display: none;
    }
    .flux-overlap-video {
        position: absolute;
        z-index: 1;
        height: 700px !important;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
    .sheet_testimonio {
        width: 90%;
    }
}
</style>
