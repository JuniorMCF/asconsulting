<template>
    <div>
        <v-container class="content-wrap-2 pa-0 mx-auto py-16">
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
                        >productos</span
                    >
                </v-col>

                <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                    <p class="black--text text-justify as-p_normal ma-0">
                        Nuestros desarrollos <strong>tecnológicos.</strong>
                    </p>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10"
                style="min-height:400px"
            >
                <v-col
                    class="col-12 col-md-6 px-2"
                    v-for="(products, index) in products"
                    :key="index"
                >

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
    components: { ChatComponent, FooterGlobal },
    data: () => ({
        products: [
            {
                src: "/app/tecnologia.jpg",
                title: "Tecnología",
                subtitle: "Nuestros principales servicios:",
                details: [
                    { text: "Gestión de proyectos (PMI)." },
                    { text: "Tableros de control genercial." },
                    { text: "Desarrollo de software." },
                    { text: "Automatización de procesos (RPA)." },
                    { text: "Implementación marco ITIL." },
                ],
                actions: [
                    {
                        title: "Ver más",
                        src: "/tecnologia",
                    },
                ],
            },
            {
                src: "/app/finanzas.jpg",
                title: "Finanzas y Contabilidad",
                subtitle: "Nuestros principales servicios:",
                details: [
                    { text: "Outsourcing contable." },
                    { text: "Outsourcing de planillas." },
                    { text: "Auditorías especializadas." },
                    { text: "Reestructuración financiera." },
                    { text: "Consultoría tributaria y legal." },
                ],
                actions: [
                    {
                        title: "Ver más",
                        src: "/finanzas",
                    },
                ],
            },
            {
                src: "/app/procesos.jpg",
                title: "Procesos",
                subtitle: "Nuestros principales servicios:",
                details: [
                    { text: "Mapeo y optimización de procesos." },
                    {
                        text:
                            "Inventario de activos " +
                            "\n" +
                            "(metodología ágil).",
                    },
                    { text: "Programa de reducción de costos." },
                    { text: "Evaluación de carga de trabajo." },
                    { text: "​Reingeniería organizacional." },
                ],
                actions: [
                    {
                        title: "Ver más",
                        src: "/procesos",
                    },
                ],
            },
            {
                src: "/app/pyme_digital.webp",
                title: "Reactiva tu Pyme",
                subtitle: "Nuestros principales servicios:",
                details: [
                    { text: "Reactiva tu empresa." },
                    { text: "Mi carta digital." },
                ],
                actions: [
                    {
                        title: "Ver más",
                        src: "/servicios",
                    },
                ],
            },
        ],
    }),

    mounted() {
        this.getPath();
        this.$store.dispatch("app/changeTitlePage", "Servicios | Mi sitio");
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
    },
};
</script>

<style>
.overlap-servicios {
    position: absolute;
    top: 0px;
    z-index: 1;
    height: 481px;
    width: 100%;
    background-color: rgba(0, 0, 102, 0.3) !important;
    transition: all 0.5s;
}
.img-overlap {
    position: absolute;
    z-index: 0;
    top: 0px;
    height: 481px;
    width: 100%;
    background-color:transparent !important;
}
.content-servicio {
    position: absolute;
    top: 0px;
    z-index: 2;
    height: 481px;
    width: 100%;
}
.container-servicio {
    height: 481px;
    width: 100%;
}
.li-circle {
    list-style-type: none;
    position: relative;
}

.li-circle::before {
    content: "⬤";
    position: absolute;
    left: -1.2rem; /* Adjust this value so that it appears where you want. */
    font-size: 0.5rem; /* Adjust this value so that it appears what size you want. */
}
.bottom_button {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    margin: 0px auto 0px auto;
}
</style>
