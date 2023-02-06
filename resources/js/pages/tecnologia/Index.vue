<template>
    <div>
        <v-container fluid class="pa-0 mx-auto pt-5 py-16">
            <v-row class="pa-0 ma-0">
                <div class="overlap-video"></div>
                <div class="col-12 pa-0 container-video">
                    <video autoplay muted loop id="myVideo">
                        <source src="/app/tecnologia.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="content-img text-center">
                    <v-img
                        src="/app/computer.png"
                        class="mx-auto size_img"
                    ></v-img>
                    <p class="white--text font-weight-bold span_title">
                        Tecnología
                    </p>
                </div>
            </v-row>
            <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith">
                <v-col class="col-12 pa-0 ma-0">
                    <v-img src="/app/bandwith.png"></v-img>
                </v-col>
            </v-row> -->

            <v-row class="pa-0 ma-0 justify-center content-wrap-0 mx-auto py-16">
                <v-col
                    class="col-12 col-md-4 pa-1"
                    v-for="(tec, i) in tecnologias"
                    :key="'tec' + i"
                >
                    <v-card
                        class="container-card elevation-0 pa-10"
                        height="350"
                    >
                        <v-card-text class="pa-0" style="height: 200px">
                            <v-img
                                :src="tec.icon"
                                :height="height"
                                :width="width"
                                class="mx-auto"
                            ></v-img>
                            <h5
                                class="line-height_1 text-h6 font-weight-bold text-uppercase text-center primary--text py-3"
                            >
                                {{ tec.titulo }}
                            </h5>
                            <p class="ma-0 text-center alternative--text">
                                {{ tec.subtitulo }}
                            </p>
                        </v-card-text>
                        <v-card-actions class="text-center">
                            <v-spacer></v-spacer>
                            <v-btn
                                @click.prevent="showDetails(tec)"
                                class="rounded-xl white--text font-weight-bold px-10"
                                large
                                color="primary"
                                >ver más</v-btn
                            >
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>
        <ShowDetailsDialog ref="showDetailsDialog"></ShowDetailsDialog>
        <ChatComponent></ChatComponent>
    </div>
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
        tecnologias: [
            {
                icon: "/app/phone.png",
                titulo: "Software a medida",
                subtitulo: "Web o app móvil",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Desarrollamos software a medida atendiendo las necesidades de cada empresa y su complejidad operacional. Sistemas escalables en la nube que incluyen, perfiles, reportes, seguridad, alertas y experiencia usuaria.",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Reducción de costos",
                        descripcion:
                            "(horas de trabajo, insumos, equipos) por nuevos procesos automáticos.",
                    },
                    {
                        titulo: "Reducción de errores",
                        descripcion:
                            "por uso de formularios controlados y cálculos internos.",
                    },
                    {
                        titulo: "Seguridad de la información",
                        descripcion: "de la empresa por uso de nube segura.",
                    },
                    {
                        titulo: "Uso de la aplicación",
                        descripcion:
                            "desde PC, Laptop, Tablet, teléfono móvil (multiplataforma).",
                    },
                ],
            },
            {
                icon: "/app/pc_phone.png",
                titulo: "Soporte técnico computacional",
                subtitulo: "Outsourcing de Helpdesk",
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
            },

            {
                icon: "/app/gerencia.png",
                titulo: "Gerencia de proyectos de TI",
                subtitulo: "​Ágiles y tradicionales",
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
                        descripcion:
                            "instalada para el desarrollo de proyectos de TI.",
                    },
                    {
                        titulo: "Reportes de estado en línea",
                        descripcion:
                            "del proyecto para la alta gerencia y los stakeholders.",
                    },
                ],
            },

            {
                icon: "/app/code.png",
                titulo: "Tableros de control en línea",
                subtitulo: "​Inteligencia de negocios",
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
                        descripcion:
                            "con base en la información en línea presentada.",
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
            },

            {
                icon: "/app/cv.png",
                titulo: "Gestión integral de proveedores",
                subtitulo: "Control del Outsourcing",
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
            },

            {
                icon: "/app/showback.png",
                titulo: "Chargeback y showback de TI",
                subtitulo: "Cálculo de costos de TI",
                button: "Ver más",
                descripcion: [
                    {
                        type: "nurmal",
                        text: "Servicio que tiene por objetivo determinar el costo unitario de los componentes de tecnología que son utilizados en cada uno de los procesos de negocio. \nUna vez conocidos estos costos, se calcula el uso de la tecnología que realiza cada unidad de negocio, haciéndolo visible para la alta dirección (ShowBack).\nAdemás, se trabaja en un modelo contable que cargue estos costos a cada unidad de negocio en un determinado periodo  de tiempo (ChargeBack).",
                    },
                ],

                beneficios: [
                    {
                        titulo: "Brindar visibilidad",
                        descripcion: "de los costos de TI a la organización. ",
                    },
                    {
                        titulo: "Sincerar información",
                        descripcion:
                            " el estado de ganancias y pérdidas y el presupuesto de cada unidad.",
                    },
                    {
                        titulo: "Monitorear el uso ",
                        descripcion:
                            "de la tecnología, para la toma de decisiones.",
                    },
                    {
                        titulo: "Gestionar el crecimiento",
                        descripcion:
                            "y la renovación tecnológica de manera eficiente.",
                    },
                    {
                        titulo: "Calcular el costo de TI",
                        descripcion: "para los nuevos productos y servicios.",
                    },
                    {
                        titulo: "Apoyar al CIO a un enfoque de valor,",
                        descripcion:
                            "retirando responsabilidad sobre el uso de la tecnología en cada unidad de negocio.",
                    },
                ],
            },

            {
                icon: "/app/contract.png",
                titulo: "Selección de proveedores",
                subtitulo: "Consultoría y Negociación",
                button: "Ver más",
                descripcion: [
                    {
                        type: "normal",
                        text: "Servicio que brinda asesoría en el ciclo de vida de la gestión del contrato:",
                        elements: [],
                    },
                    {
                        type: "list",
                        text: null,
                        elements: [
                            "Requerimiento del negocio",
                            "Selección del proveedor",
                            "Negociación del contrato",
                        ],
                    },
                    {
                        type: "normal",
                        text: "Nuestros consultores soportarán el servicio bajo nuestros modelos robustos de documentación contractual (contrato marco y anexos) y nuestra metodología ágil y de colaboración.",
                    },
                ],
                beneficios: [
                    {
                        titulo: "Aumentar la flexibilidad",
                        descripcion:
                            "de la organización y disminuir sus costos fijos.",
                    },
                    {
                        titulo: "Dedicar las inversiones y los recursos",
                        descripcion: " al objetivo principal de la empresa.",
                    },
                    {
                        titulo: "Apoyar al CIO a un enfoque de valor, ",
                        descripcion:
                            "centrando su labor a la estabilidad operacional y la innovación.",
                    },
                    {
                        titulo: "Reducir los tiempos de respuesta",
                        descripcion:
                            "del servicio contratado hacia las unidades de negocio.",
                    },
                ],
            },
        ],
    }),

    mounted() {
        this.getPath();
        this.$store.dispatch("app/changeTitlePage", "Tecnología A&S");
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
        showDetails(obj) {
            this.$refs.showDetailsDialog
                .open(obj, "TECNOLOGÍA", {
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
    background-color: #e3e2e2 !important;
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
