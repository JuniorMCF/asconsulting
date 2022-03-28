<template>
    <v-container fluid class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0">
                <v-card color="primary" height="25" class="elevation-2 rounded-0"></v-card>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-8">
            <v-col class="col-12 col-md-6 text-center my-4 mx-auto">
                <span class="primary--text text-uppercase as-text_extralarge line-height_1">Nuestro</span>
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-center_block"
                >equipo</span>
            </v-col>
        </v-row>
        <v-container fluid class="content-wrap-0 pa-0 mx-auto">
            <div class="parallax">
                <v-row
                    class="pa-0 ma-0 content-wrap-0 mx-auto my-8 d-flex flex-wrap flex-md-row flex-column"
                    style="min-height: 740px"
                >
                    <v-col>
                        <v-card
                            color="transparent"
                            class="elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container"
                        >
                            <div class="mx-auto">
                                <v-img
                                    src="/app/gerardo_alvarez.jpg"
                                    :height="height"
                                    :width="width"
                                    class="rounded-circle"
                                ></v-img>
                            </div>

                            <v-card-text class="text-center card-equipo">
                                <div class="d-block mx-auto">
                                    <span
                                        class="as-text_normal_2 font-weight-bold white--text"
                                    >Gerardo</span>
                                    <br />
                                    <span
                                        class="as-text_normal_2 pl-7 font-weight-bold white--text"
                                    >Álvarez</span>
                                </div>
                                <div class="text-justify white--text text-16 py-4">
                                    <span>
                                        Ejecutivo y consultor de tecnología con
                                        <strong>18 años de experiencia</strong> en el sector
                                        financiero. Ingeniero de Sistemas titulado, Magister en
                                        administración de empresas con mención en gestión avanzada
                                        de proyectos.
                                        <strong>
                                            Líder de equipos ágiles con enfoque a resultados y
                                            satisfacción del cliente.
                                        </strong>
                                    </span>
                                </div>
                            </v-card-text>

                            <v-card-actions class="align-end">
                                <v-btn
                                    large
                                    class="elevation-0 px-2 position-linkedin"
                                    color="#0073b2"
                                    style="min-width: auto !important"
                                    link
                                    href="https://www.linkedin.com/in/gerardo-alvarez/"
                                    target="_blank"
                                >
                                    <v-icon color="white" large>mdi-linkedin</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-divider :vertical="vertical" :color="color" class="divider"></v-divider>
                    <v-col>
                        <v-card
                            color="transparent"
                            class="elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container"
                        >
                            <div class="mx-auto">
                                <v-img
                                    src="/app/victor_alvarez.png"
                                    :height="height"
                                    :width="width"
                                    class="rounded-circle"
                                ></v-img>
                            </div>

                            <v-card-text class="text-center card-equipo">
                                <div class="d-block mx-auto">
                                    <span
                                        class="as-text_normal_2 font-weight-bold white--text"
                                    >Victor</span>
                                    <br />
                                    <span
                                        class="as-text_normal_2 pl-7 font-weight-bold white--text"
                                    >Álvarez</span>
                                </div>
                                <div class="text-justify white--text text-16 py-4">
                                    <span>
                                        Ejecutivo, consultor financiero y contable con
                                        <strong>25 años de experiencia</strong> Contador con
                                        estudios especializados en la Contraloría General de la
                                        República. Auditor Interno en empresas Petroleras
                                        Comerciales y de Construcción. Asesora a empresas en su
                                        crecimiento y la reducción de sus costos.
                                        <strong>
                                            Experto en la optimización de procesos, reingeniería
                                            organizacional y saneamiento tributario.
                                        </strong>
                                    </span>
                                </div>
                            </v-card-text>

                            <v-card-actions class="align-end">
                                <v-btn
                                    large
                                    class="elevation-0 px-2 position-linkedin"
                                    color="#0073b2"
                                    style="min-width: auto !important"
                                    link
                                    href="https://www.linkedin.com/in/victor-alvarez-rojas/"
                                    target="_blank"
                                >
                                    <v-icon color="white" large>mdi-linkedin</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-divider :vertical="vertical" :color="color" class="divider"></v-divider>
                    <v-col>
                        <v-card
                            color="transparent"
                            class="elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container"
                        >
                            <div class="mx-auto">
                                <v-img
                                    src="/app/jorge_carrera.jpg"
                                    :height="height"
                                    :width="width"
                                    class="rounded-circle"
                                ></v-img>
                            </div>

                            <v-card-text class="text-center card-equipo">
                                <div class="d-block mx-auto">
                                    <span
                                        class="as-text_normal_2 font-weight-bold white--text"
                                    >Jorge</span>
                                    <br />
                                    <span
                                        class="as-text_normal_2 pl-7 font-weight-bold white--text"
                                    >Carrera</span>
                                </div>
                                <div class="text-justify white--text text-16 py-4">
                                    <span>
                                        Ejecutivo, consultor, docente y auditor en entidades
                                        privadas y públicas con más de
                                        <strong>35 años de experiencia</strong> en la dirección de
                                        empresas. Contador Público Colegiado, Auditor Certificado,
                                        Maestría en Contabilidad y Doctorado en Administración.
                                        Experiencia como Gerente apoderado de una Corporación
                                        Global.
                                        <strong>
                                            Líder en Dirección de Control de Gestión y mitigación de
                                            riesgos.
                                        </strong>
                                    </span>
                                </div>
                            </v-card-text>

                            <v-card-actions class="align-end">
                                <v-btn
                                    large
                                    class="elevation-0 px-2 position-linkedin"
                                    color="#0073b2"
                                    style="min-width: auto !important"
                                    link
                                    href="http://linkedin.com/in/jorge-carreras-aa96a7204"
                                    target="_blank"
                                >
                                    <v-icon color="white" large>mdi-linkedin</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>

        <ChatComponent></ChatComponent>
    </v-container>
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
        width: 216,
        height: 216,
        vertical: true,
        color: "white",
    }),

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize);
        this.getPath();
 this.$store.dispatch(
            "app/changeTitlePage",
            "Equipo A&S"
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
        onResize() {
            if (window.innerWidth < 960) {
                this.width = 150;
                this.height = 150;
            } else {
                this.width = 216;
                this.height = 216;
            }
        },
    },
};
</script>

<style>
.container-map {
    height: 350px;
}
.parallax {
    min-height: 780px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: linear-gradient(
            to bottom,
            rgba(31, 38, 99, 0.7),
            rgba(31, 38, 99, 0.7)
        ),
        url("/app/equipo.jpg");
}
.text-16 {
    font-size: 16px;
}
.divider {
    padding: 2px;
    border-bottom-left-radius: 80px 80px;
    border-bottom-right-radius: 80px 80px;
}
.card-equipo {
    height: 390px;
}
.card-equipo-container {
    height: 730px;
}
.position-linkedin {
    position: relative;
}
@media screen and (max-width: 960px) {
    .card-equipo {
        height: auto;
    }
    .card-equipo-container {
        height: auto;
    }
    .position-linkedin {
        position: absolute;
        top: 150px;
        right: calc(50% - 100px);
    }
}
</style>
