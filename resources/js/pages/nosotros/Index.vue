<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0 container-bandwith">
                <v-img src="/app/bandwith.png "></v-img>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10">
            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <span
                    class="primary--text text-uppercase as-text_extralarge line-height_1"
                >Acerca de</span>
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                >nosotros</span>
            </v-col>

            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <p class="primary--text text-justify as-p_normal ma-0">
                    Somos una empresa de origen peruano que brinda servicios de
                    consultoría especializada en los diversos sectores empresariales,
                    contribuyendo con nuestros socios estratégicos en su crecimiento
                    económico, rentabilidad y gestión del riesgo. ​
                </p>
                <p class="primary--text text-justify as-p_normal ma-0">
                    A través de nuestras tres líneas de servicio integradas - tecnología,
                    finanzas y procesos – y
                    <strong>nuestra experiencia en el sector</strong>, ofrecemos
                    servicios personalizados y ágiles acordes con los cambios del mercado
                    y las nuevas preferencias de los consumidores.
                </p>
            </v-col>
        </v-row>
        <!--line primary-->
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center">
            <v-card class="col-12 primary pa-2 rounded-0 elevation-1"></v-card>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center">
            <v-col class="col-12 col-md-6 pa-0">
                <v-card class="card-grey elevation-0 rounded-0">
                    <v-card-text class="pa-15 card-grey">
                        <div class="mx-auto">
                            <div class="mx-auto container-mision_visionLogo">
                                <v-img src="/app/mision_logo.png"></v-img>
                            </div>
                        </div>
                        <div class="mx-auto primary--text text-center py-3 my-2">
                            <span class="title-letter_space1 as-text_medium font-weight-bold">MISIÓN</span>
                        </div>
                        <div class="mx-auto text-center">
                            <span class="as-p_normal line-height_2 primary--text">
                                Ayudamos a cumplir los objetivos de nuestros clientes como sus
                                socios estratégicos.
                            </span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col class="col-12 col-md-6 pa-0">
                <v-card class="card-gray elevation-0 rounded-0">
                    <v-card-text class="pa-15 card-gray">
                        <div class="mx-auto">
                            <div class="mx-auto container-mision_visionLogo">
                                <v-img src="/app/vision_logo.png"></v-img>
                            </div>
                        </div>
                        <div class="mx-auto primary--text text-center py-3 my-2">
                            <span class="title-letter_space1 as-text_medium font-weight-bold">VISIÓN</span>
                        </div>
                        <div class="mx-auto text-center">
                            <span class="as-p_normal line-height_2 primary--text">
                                Ser la empresa consultora más reconocida de Latinoamérica, por
                                el éxito empresarial de sus clientes, el profesionalismo de sus
                                colaboradores y el enfoque innovador y eficiente de sus
                                servicios.
                            </span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!--line primary-->
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10 pb-16">
            <v-card class="col-12 primary pa-2 rounded-0 elevation-1"></v-card>
        </v-row>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>

        <ChatComponent></ChatComponent>
    </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
export default {
    components: { ChatComponent, FooterGlobal },
    data: () => ({}),

    mounted() {
        this.getPath();

        this.$store.dispatch("app/changeTitlePage", "Nosotros | Mi sitio");
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

<style>
.card-grey {
    background-color: #d4d4d4 !important;
    width: 100%;
    height: 418px;
}
.card-gray {
    background-color: #ededed !important;
    width: 100%;
    height: 418px;
}
.container-mision_visionLogo {
    height: 100px;
    width: 100px;
}
.title-letter_space1 {
    letter-spacing: 3px;
}
</style>
