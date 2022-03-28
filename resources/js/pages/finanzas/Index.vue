<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2">
            <div class="overlap-video content-wrap-2"></div>
            <div class="col-12 pa-0 container-video">
                <video autoplay muted loop id="myVideo">
                    <source src="/app/finanzas.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="content-img content-wrap-2 text-center">
                <v-img src="/app/statistics.PNG" class="mx-auto size_img"></v-img>
                <p class="white--text font-weight-bold span_title line-height_1">
                    Finanzas y
                    <br />Contabilidad
                </p>
            </div>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith">
            <v-col class="col-12 pa-0 ma-0">
                <v-img src="/app/bandwith.PNG"></v-img>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto">
            <v-col class="col-12 col-md-4 pa-1" v-for="(tec, i) in tecnologias" :key="'tec' + i">
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
        <ShowDetailsDialog2 ref="showDetailsDialog2"></ShowDetailsDialog2>
        <ShowDetailsDialog ref="showDetailsDialog"></ShowDetailsDialog>
        <ChatComponent></ChatComponent>
    </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import ShowDetailsDialog from "../../components/utils/ShowDetailsDialog.vue";
import ShowDetailsDialog2 from "../../components/utils/ShowDetailsDialog2.vue";
export default {
    components: {
        ChatComponent,
        FooterGlobal,
        ShowDetailsDialog,
        ShowDetailsDialog2,
    },
    data: () => ({
        height: 89,
        width: 89,
        tecnologias: [
            {
                icon: "/app/outsourcing_contable.png",
                titulo: "Outsourcing contable",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "En AS Consulting Group, lo apoyamos a resolver su problema mediante nuestros servicios de Outsourcing Contable, garantizando una adecuada solución a su problemática actual.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Minimiza errores.",
                        descripcion: "",
                    },
                    {
                        titulo: "Permite reducir y controlar ",
                        descripcion: "los costos operativos.",
                    },
                    {
                        titulo: "Generación de información",
                        descripcion: "oportuna.",
                    },
                    {
                        titulo: "Asesoría Especializada.",
                        descripcion: "",
                    },
                ],
                incluye: [
                    "Definición de políticas contables. ",

                    "Registro y procesamiento de transacciones.",

                    "Análisis de cuentas contables y reportes gerenciales. ",

                    "Elaboración de Estados Financieros e indicadores.",

                    "Asesoría permanente, con personal altamente calificado. ",

                    "Elaboración de declaraciones mensuales IGV Renta-Plame.",

                    "Elaboración y declaración de libros electrónicos.",

                    "Impresión y declaración de libros contables.",

                    "Trámites ante la Administración Tributaria. ",

                    "Generación de Indicadores Financieros.",
                ],
            },
            {
                icon: "/app/outsourcing.png",
                titulo: "Outsourcing de planillas",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Servicio que brinda soporte técnico computacional de primer nivel (telefónico y remoto) y segundo nivel (presencial y correctivo) para empresas.",
                    },
                ],

                beneficios: [
                    {
                        titulo: null,
                        descripcion:
                            "Reducción de costos (horas de trabajo, insumos, equipos, capacitación, licenciamiento).",
                    },
                    {
                        titulo: null,
                        descripcion: "Gestión por indicadores de servicio.",
                    },
                    {
                        titulo: null,
                        descripcion:
                            "Focalización de la empresa en su actividad principal externalizando un servicio técnico complementario.",
                    },
                    {
                        titulo: null,
                        descripcion:
                            "Mejora de la calidad del servicio técnico pues somos expertos en la materia.",
                    },
                ],
                incluye: [
                    "Proceso y cálculo de remuneraciones y tributos.",

                    "Elaboración y declaración de AFP Net y PLAME.",

                    "Mantenimiento de T-Registro.",

                    "Elaboración de reportes a entidades reguladoras.",

                    "Liquidación de CTS y  beneficios sociales.",
                ],
            },

            {
                icon: "/app/megaphone.png",
                titulo: "Auditorías especializadas",
                subtitulo: "​",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "La experiencia de nuestro staff de gerentes de proyecto y scrum masters, asegura un adecuado control al alcance, tiempo y presupuesto asignado (proyectos tradicionales) así como facilitar y brindar soporte metodológico al equipo (proyectos ágiles) para que cumpla el objetivo del sprint. ",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Experiencia de nuestros gerentes",
                        descripcion:
                            "de proyecto / scrum masters en proyectos grandes de tecnología.",
                    },
                    {
                        titulo: "Certificación de nuestros gerentes",
                        descripcion: "de proyecto / scrum masters.",
                    },
                    {
                        titulo: "Aumento de la capacidad",
                        descripcion: "instalada para el desarrollo de proyectos de TI.",
                    },
                    {
                        titulo: "Reportes de estado en línea",
                        descripcion:
                            "del proyecto para la alta gerencia y los stakeholders.",
                    },
                ],
                incluye: [],
            },

            {
                icon: "/app/line-chart.png",
                titulo: "Reestructuración financiera",
                subtitulo: "​",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Servicio que permite dar vida a los datos de las empresas a través de los paneles e informes dinámicos que desarrollamos. Nuestros especialistas trabajan la conexión de distintos orígenes de datos, la preparación de datos simplificada y la generación dinámica de análisis ad hoc.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Permite extraer información importante",
                        descripcion:
                            "para analizar una amplia gama de escenarios (ventas, clientes, inventarios, procesos internos).",
                    },
                    {
                        titulo: "Toma de decisiones empresariales",
                        descripcion: "con base en la información en línea presentada.",
                    },
                    {
                        titulo: "Optimizar, transformar y combinar datos ",
                        descripcion: "de múltiples orígenes.",
                    },
                    {
                        titulo: "Permite crear informes sorprendentes",
                        descripcion:
                            "con visualizaciones de datos interactivas e informes personalizados.",
                    },
                    {
                        titulo: "Visualización de los tableros",
                        descripcion:
                            "desde PC, Laptop, Tablet, teléfono móvil (multiplataforma).",
                    },
                ],
                incluye: [],
            },

            {
                icon: "/app/meeting.png",
                titulo: "Consultoría tributaria y legal",
                subtitulo: "",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Servicio de administración y control integral de los proveedores estratégicos con los que cuenta la empresa. Este servicio incluye a gestores de campo para el control de: niveles de servicio, consumos realizados, cumplimiento de las cláusulas del contrato y los riesgos de operación.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Evitar la fuga de valor",
                        descripcion: "de los contratos vigentes. ",
                    },
                    {
                        titulo: "Asegurar el cumplimiento de las cláusulas",
                        descripcion: " de los contratos.",
                    },
                    {
                        titulo: "Reducción de costos ",
                        descripcion:
                            "(horas de trabajo, insumos, equipos, capacitación, licenciamiento).",
                    },
                    {
                        titulo: "Gestión de los contratos",
                        descripcion: "por indicadores de servicio.",
                    },
                    {
                        titulo: "Mejora de la calidad",
                        descripcion: "de los servicios.",
                    },
                ],
                incluye: [],
            },
        ],
    }),

    mounted() {
        this.getPath();
 this.$store.dispatch(
            "app/changeTitlePage",
            "Finanzas y Contabilidad A&S"
        );
        document.title = this.$store.state.app.title_page;

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
            if (obj.incluye.length > 0) {
                this.$refs.showDetailsDialog2
                    .open(obj, "FINANZAS Y CONTABILIDAD", {
                        color: "primary",
                        width: 750,
                    })
                    .then((res) => {
                        if (res) {
                        }
                    });

                return
            }
            this.$refs.showDetailsDialog
                .open(obj, "FINANZAS Y CONTABILIDAD", {
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
