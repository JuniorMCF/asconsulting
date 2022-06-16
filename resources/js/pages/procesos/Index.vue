<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2">
            <div class="overlap-video content-wrap-2"></div>
            <div class="col-12 pa-0 container-video">
                <video autoplay muted loop id="myVideo">
                    <source src="/app/procesos.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="content-img content-wrap-2 text-center">
                <v-img src="/app/skill.png" class="mx-auto size_img"></v-img>
                <p class="white--text font-weight-bold span_title">Procesos</p>
            </div>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith">
            <v-col class="col-12 pa-0 ma-0">
                <v-img src="/app/bandwith.png"></v-img>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 justify-center content-wrap-0 mx-auto">
            <v-col class="col-12 col-md-4 pa-1" v-for="(tec, i) in procesos" :key="'tec' + i">
                <v-card class="container-card elevation-0 pa-10" height="350">
                    <v-card-text class="pa-0" style="height: 200px">
                        <v-img :src="tec.icon" :height="height" :width="width" class="mx-auto"></v-img>
                        <h5
                            class="line-height_1 text-h6 font-weight-bold text-uppercase text-center primary--text py-3"
                        >{{ tec.titulo }}</h5>
                        <p class="ma-0 text-center alternative--text">{{ tec.subtitulo }}</p>
                    </v-card-text>
                    <v-card-actions class="text-center">
                        <v-spacer></v-spacer>
                        <v-btn
                            @click.prevent="showDetails(tec)"
                            class="rounded-xl white--text font-weight-bold px-10"
                            large
                            color="primary"
                        >ver más</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>
        <ShowDetailsDialog ref="showDetailsDialog"></ShowDetailsDialog>
        <ChatComponent></ChatComponent>
    </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import ShowDetailsDialog from "../../components/utils/ShowDetailsDialog.vue";
export default {
    components: {
        ChatComponent,
        FooterGlobal,
        ShowDetailsDialog,
    },
    data: () => ({
        height: 89,
        width: 89,
        procesos: [
            {
                icon: "/app/optimization.png",
                titulo: "Diseño y optimización de procesos",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "En este servicio determinamos el grado de madurez de los procesos de la empresa con la información que relevamos y las entrevistas que realizamos a los colaboradores clave.",
                    },
                    {
                        type: "normal",
                        text: "Además, diseñamos planes que  optimizan los aspectos financieros, operativos y tecnológicos de la empresa, considerando las mejores prácticas del mercado y los objetivos que necesite alcanzar la alta dirección.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Proporcionamos un diagnóstico ",
                        descripcion: "de los actuales procesos de la empresa",
                    },
                    {
                        titulo:
                            "Proponemos planes de optimización del control financiero, ",
                        descripcion:
                            "diseñando y adaptándolos de manera flexible para el control de los directivos de la empresa.",
                    },
                    {
                        titulo: "Proponemos controles ",
                        descripcion:
                            "y procedimientos de las cuentas por cobrar que permitan actuar de manera eficiente y anticipada ante los documentos vencidos",
                    },
                    {
                        titulo:
                            "Diseñamos procedimientos para mejorar los controles de los activos fijos y existencias",
                        descripcion: "de su empresa.",
                    },
                    {
                        titulo:
                            "Diseñamos procedimientos para la optimización de la atención a proveedores",
                        descripcion: "y sus cumplimientos contractuales.",
                    },
                    {
                        titulo: "Evaluación de riesgos legales",
                        descripcion:
                            "como: incumplimientos de contratos, licencias, manejo del personal.",
                    },
                ],
            },
            {
                icon: "/app/inventory.png",
                titulo: "Inventario de activos",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Nuestro inventario de activo fijo tiene como base la metodología ágil, misma que nos permite evaluar diariamente el avance del trabajo comprometido, la duración de las actividades y la calidad de las mismas.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Experiencia comprobada ",
                        descripcion: "en el servicio de inventario de activos.",
                    },
                    {
                        titulo: "Recomendación ",
                        descripcion: "de nuestros clientes.",
                    },
                    {
                        titulo: "Etiquetado de activos de distintos tipos, ",
                        descripcion:
                            "dependiendo la exposición al medio ambiente o materias corrosivas.",
                    },
                    {
                        titulo: "Alcance",
                        descripcion: "del servicio a nivel nacional.",
                    },
                    {
                        titulo: "Reportes de estado en línea",
                        descripcion:
                            "del servicio para la alta gerencia y los stakeholders.",
                    },
                ],
            },

            {
                icon: "/app/team-management.png",
                titulo: "Programa de reducción de costos",
                subtitulo: "​",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima.",
                    },
                    {
                        type: "normal",
                        text: "La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento."
                    }
                ],

                beneficios: [
                    {
                        titulo: "Contar y optimizar los procesos de control",
                        descripcion:
                            "con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores.",
                    },
                    {
                        titulo: "Generar líderes, con la capacidad de enseñar a su empleados",
                        descripcion: "para que puedan medir sus resultados en función a los objetivos de la empresa.",
                    },
                    {
                        titulo: "Capacitar e incentivar a los colaboradores",
                        descripcion: "para que sean proactivos y sean capaces de realizar múltiples labores.",
                    },
                    {
                        titulo: "Mejorar las actividades de los colaboradores,",
                        descripcion:
                            "en base a los resultados de cada gestión. ",
                    },
                    {
                        titulo: "Implementar controles en cada proceso ",
                        descripcion:
                            "con la finalidad de minimizar los costos. ",
                    },
                    {
                        titulo: "Contar con informes sobre los potenciales impactos ambientales.",
                        descripcion:
                            "",
                    },
                ],
            },

            {
                icon: "/app/team-management.png",
                titulo: "Reingeniería organizacional",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima.",
                    },
                    {
                        type: "normal",
                        text: "La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Contar y optimizar los procesos de control",
                        descripcion:
                            "con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores.",
                    },
                    {
                        titulo: "Generar líderes, con la capacidad de enseñar a su empleados",
                        descripcion: "para que puedan medir sus resultados en función a los objetivos de la empresa.",
                    },
                    {
                        titulo: "Capacitar e incentivar a los colaboradores",
                        descripcion: "para que sean proactivos y sean capaces de realizar múltiples labores.",
                    },
                    {
                        titulo: "Mejorar las actividades de los colaboradores,",
                        descripcion:
                            " en base a los resultados de cada gestión. ",
                    },
                    {
                        titulo: "Implementar controles en cada proceso",
                        descripcion:
                            "con la finalidad de minimizar los costos.",
                    },
                    {
                        titulo: "Contar con informes sobre los potenciales impactos ambientales.",
                        descripcion:
                            "",
                    },
                ],
            },

            {
                icon: "/app/review.png",
                titulo: "GestiÓn de riesgos",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "En A&S Consulting proponemos el servicio de gestión de riesgos, la cual nos permite identificar, analizar y responder a factores de riesgo que nuestros clientes se enfrentan a lo largo del desarrollo de sus operaciones y proyectos futuros, los cuales pueden afectar el ciclo económico de sus objetivos trazados.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Proporcionamos un diagnóstico profesional",
                        descripcion: "que nos permita prevenir las posibles amenazas y eliminar las causas que se originan en cada área.",
                    },
                    {
                        titulo: "Recomendación de controles",
                        descripcion: " que aseguren el cumplimiento oportuno de cada una de las actividades que realicen cada área dentro de la organización.",
                    },
                    {
                        titulo: "Elaboración de cronograma de actividades ",
                        descripcion:
                            "con la finalidad de determinar el cumplimiento de cada actividad. ",
                    },
                    {
                        titulo: "Evaluación de riesgos internos y externos impredecibles",
                        descripcion: " que afecten el desarrollo de la economía de la empresa.",
                    },
                    {
                        titulo: "Evaluación de riesgos técnicos como tecnología y diseño",
                        descripcion: "que afecten el desarrollo de la empresa.",
                    },
                ],
            },
        ],
    }),

    mounted() {
        this.getPath();
         this.$store.dispatch(
            "app/changeTitlePage",
            "Procesos A&S"
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
        showDetails(obj) {
            this.$refs.showDetailsDialog
                .open(obj, "PROCESOS", {
                    color: "primary",
                    width: 750,
                })
                .then((res) => {
                    if (res) {
                    }
                });
        },
    },
};
</script>

<style scoped>
.overlap-video {
    position: absolute;
    z-index: 1;
    height: 326px;
    width: 100%;
    background-color: rgba(0, 0, 102, 0.38) !important;
}
.container-card {
    background-color: #ededed !important;
}
.container-video {
    max-height: 326px;
    overflow: hidden;
}
#myVideo {
    position: relative;
    width: 100%;
    transform: translateY(-25%);
}
.size_img {
    height: 89px;
    z-index: 2;
    width: 89px;
}
.content-img {
    position: absolute;
    width: 100%;
    z-index: 2;
    top: 2.8rem;
}
.span_title {
    padding: 10px 0px 0px 0px;
    margin: 0px !important;
    font-size: 3rem;
}
@media screen and (max-width: 960px) {
    .overlap-video {
        position: absolute;
        z-index: 1;
        height: 135px;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
    .container-video {
        max-height: 135px;
        overflow: hidden;
    }
    #myVideo {
        position: relative;
        width: 100%;
        transform: translateY(-20%);
    }
    .size_img {
        height: 60px;
        z-index: 2;
        width: 60px;
    }
    .content-img {
        position: absolute;
        width: 100%;
        z-index: 2;
        top: 1.2rem !important;
    }
    .span_title {
        font-size: 1.4rem;
        padding: 5px 0px 0px 0px;
        margin: 0px !important;
    }
}
</style>
