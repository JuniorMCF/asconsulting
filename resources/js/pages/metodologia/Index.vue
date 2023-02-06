<template>
    <div>
    <v-container class="content-wrap-2 pa-0 mx-auto py-16">
        <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0">
                <v-card color="primary" height="25" class="elevation-2 rounded-0"></v-card>
            </v-col>
        </v-row> -->

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-16">
            <v-col class="col-12 col-md-6 text-center my-4 mx-auto">
                <span class="primary--text text-uppercase as-text_extralarge line-height_1">Nuestra</span>
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-center_block"
                >Metodología</span>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-0">
            <v-col class="col-12 col-md-6 text-center my-4 mx-auto px-10">
                <p class="alternative--text text-justify as-p_normal ma-0">
                    Promovemos el trabajo colaborativo, que considera las necesidades
                    cambiantes de nuestros clientes y del mercado.​
                </p>
                <br />
                <p class="alternative--text text-justify as-p_normal ma-0">
                    Nuestras tres líneas de servicio integradas - tecnología, finanzas y
                    procesos - utilizan la siguiente metodología:
                </p>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-0">
            <v-col class="col-12">
                <v-card class="steps-container elevation-10 rounded-lg pa-4 pa-md-10">
                    <p
                        class="as-text_underline-init-large line-height_1 primary--text my-0 card-title-fases"
                    >FASES</p>

                    <v-img src="/app/steps.png"></v-img>

                    <div class="fase-1">
                        <h5 class="primary--text font-weight-bold">ESTABLECER</h5>
                        <p
                            class="caption alternative--text"
                        >Alcance, estructura y objetivos del servicio.</p>
                    </div>

                    <div class="fase-2">
                        <h5 class="primary--text font-weight-bold">RECOPILAR</h5>
                        <p class="caption alternative--text">
                            La información actual y relevante de la empresa para el desarrollo
                            del servicio (financiera, procesos y tecnología).
                        </p>
                    </div>

                    <div class="fase-3">
                        <h5 class="primary--text font-weight-bold">EVALUAR</h5>
                        <p class="caption alternative--text">
                            El estado actual de la empresa comparándola con las mejores
                            prácticas y nuestros modelos
                        </p>
                    </div>

                    <div class="fase-4">
                        <h5 class="primary--text font-weight-bold">PROPONER</h5>
                        <p class="caption alternative--text">La propuesta de valor integral.</p>
                    </div>

                    <div class="fase-5">
                        <h5 class="primary--text font-weight-bold">IMPLEMENTAR</h5>
                        <p class="caption alternative--text">Propuesta de valor integral.</p>
                    </div>

                    <div class="fases text-center">
                        <div>
                            <span class="primary--text font-weight-bold fase-title">01.-</span>
                            <span
                                class="caption alternative--text fase-subtitle"
                            >Alcance, estructura y objetivos del servicio.</span>
                        </div>

                        <div>
                            <span class="primary--text font-weight-bold fase-title">02.-</span>
                            <span class="caption alternative--text fase-subtitle">
                                La información actual y relevante de la empresa para el
                                desarrollo del servicio (financiera, procesos y tecnología).
                            </span>
                        </div>

                        <div>
                            <span class="primary--text font-weight-bold fase-title">03.-</span>
                            <span class="caption alternative--text fase-subtitle">
                                El estado actual de la empresa comparándola con las mejores
                                prácticas y nuestros modelos
                            </span>
                        </div>

                        <div>
                            <span class="primary--text font-weight-bold fase-title">04.-</span>
                            <span
                                class="caption alternative--text fase-subtitle"
                            >La propuesta de valor integral.</span>
                        </div>

                        <div>
                            <span class="primary--text font-weight-bold fase-title">05.-</span>
                            <span
                                class="caption alternative--text fase-subtitle"
                            >Propuesta de valor integral.</span>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>


    </v-container>

         <!--include footer-->
         <FooterGlobal></FooterGlobal>

<ChatComponent></ChatComponent>
</div>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
export default {
    components: {
        ChatComponent,
        FooterGlobal,
    },
    data: () => ({
        steps: [
            {
                color: "primary",
                icon_title: "",
                title: "ESTABLECER",
                content: "Alcance, estructura y objetivos del servicio.",
                position: "right",
                img: "01",
            },
            {
                color: "primary",
                icon_title: "",
                title: "RECOPILAR",
                content:
                    "La info_steprmación actual y relevante de la empresa para el desarrollo del servicio (financiera, procesos y tecnología).",
                position: "left",
                img: "02",
            },
            {
                color: "primary",
                icon_title: "",
                title: "EVALUAR",
                content:
                    "El estado actual de la empresa comparándola con las mejores prácticas y nuestros modelos.",
                position: "right",
                img: "03",
            },
            {
                color: "primary",
                icon_title: "",
                title: "PROPONER",
                content: "La propuesta de valor integral.",
                position: "left",
                img: "04",
            },
            {
                color: "primary",
                icon_title: "",
                title: "IMPLEMENTAR",
                content: "Propuesta de valor integral.",
                position: "right",
                img: "05",
            },
        ],
    }),

    mounted() {
        this.getPath();
         this.$store.dispatch(
            "app/changeTitlePage",
            "Metodología de trabajo A&S"
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
    },
};
</script>

<style scoped>
.container-map {
    height: 350px;
}
.steps-container {
    background-color: #e3e2e2 !important;
}
.theme--light.v-timeline:before {
    background: #000068;
    padding-top: 10px;
}
.card-title-fases {
    position: relative;
    top: 10px;
    left: 10px;
}

/*fases*/

.fase-1 {
    position: absolute;
    top: 200px;
    left: 35px;
}
.fase-1 h5 {
    text-align: center;
    width: 140px;
}
.fase-1 p {
    max-width: 140px;
    line-height: 1;
    text-align: center;
}

.fase-2 {
    position: absolute;
    top: 315px;
    left: 285px;
}
.fase-2 h5 {
    text-align: center;
    width: 140px;
}
.fase-2 p {
    max-width: 140px;
    line-height: 1;
    text-align: center;
}

.fase-3 {
    position: absolute;
    top: 100px;
    left: 430px;
}
.fase-3 h5 {
    text-align: center;
    width: 140px;
}
.fase-3 p {
    max-width: 140px;
    line-height: 1;
    text-align: center;
}

.fase-4 {
    position: absolute;
    top: 315px;
    right: 265px;
}
.fase-4 h5 {
    text-align: center;
    width: 140px;
}
.fase-4 p {
    max-width: 140px;
    line-height: 1;
    text-align: center;
}

.fase-5 {
    position: absolute;
    top: 200px;
    right: 20px;
}
.fase-5 h5 {
    text-align: center;
    width: 140px;
}
.fase-5 p {
    max-width: 140px;
    line-height: 1;
    text-align: center;
}
.fases {
    display: none;
}
@media screen and (max-width: 992px) {
    .fase-1 {
        position: absolute;
        top: 28%;
        left: 2%;
        width: 15%;
    }
    .fase-1 h5 {
        text-align: center;
        font-size: 50% !important;
        width: 100%;
    }
    .fase-1 p {
        display: none;
    }

    .fase-2 {
        position: absolute;
        top: 51%;
        left: 28%;
        width: 15%;
    }
    .fase-2 h5 {
        text-align: center;
        font-size: 50% !important;
        width: 100%;
    }
    .fase-2 p {
        display: none;
    }

    .fase-3 {
        position: absolute;
        top: 20%;
        left: 44%;
        width: 15%;
    }
    .fase-3 h5 {
        text-align: center;
        width: 100%;
        font-size: 50% !important;
    }
    .fase-3 p {
        display: none;
    }

    .fase-4 {
        position: absolute;
        top: 51%;
        right: 26%;
        width: 15%;
    }
    .fase-4 h5 {
        text-align: center;
        width: 100%;
        font-size: 50% !important;
    }
    .fase-4 p {
        display: none;
    }

    .fase-5 {
        position: absolute;
        top: 28%;
        right: 1%;
        width: 15%;
    }
    .fase-5 h5 {
        max-width: 100%;
        text-align: center;
        font-size: 50% !important;
    }
    .fase-5 p {
        display: none;
    }
    .fases {
        display: block;
    }
    .fase-title {
        font-size: 50% !important;
        line-height: 1;
    }
    .fase-subtitle {
        font-size: 50% !important;
        line-height: 0.7;
    }
}
</style>
