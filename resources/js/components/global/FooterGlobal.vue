<template>
    <div>
        <!-- <v-row class="pa-0 ma-0  mx-auto footer-container">
            <v-col class="col-12 pa-0 ma-0 rotate-180 container-bandwith">
                <v-img src="/app/bandwith.png "> </v-img>
            </v-col>
        </v-row> -->
        <v-row class="grey darken-4 pa-0 ma-0 mx-auto justify-center align-start py-10">
            <v-col
                class="col-12 col-md-2 col-xl-2 d-flex flex-wrap justify-center align-center"
            >
                <div class="footer-logo">
                    <v-img
                        src="/app/white_logo.png"
                        class="footer-logo"
                        contain
                    >
                    </v-img>
                </div>

                <!-- <span class="white--text as-footer_text px-4 text-center">
                    Copyright ©{{ yearActual }} by A&S Consulting Group.
                </span> -->
            </v-col>
            <v-col
                class="col-12 col-md-3 col-xl-3 d-flex flex-column justify-center align-start"
            >
                <p class="white--text font-weight-bold px-4">CONTACTO</p>

                <a class="white--text px-4" @click.prevent="goToLocation()">
                    <v-icon small color="white" left>mdi-map-marker</v-icon> {{ address }}
                </a>
                <a class="white--text px-4" :href="phone_send">
                    <v-icon small color="white" left>mdi-phone</v-icon> {{ phone_contact }}
                </a>
            </v-col>
            <v-col
                class="col-12 col-md-3 col-xl-3 d-flex flex-column justify-center align-start"
            >
                <p class="white--text font-weight-bold px-4">LEGAL</p>

                <a class="white--text px-4"> Términos y condiciones </a>
                <a class="white--text px-4"> Privacidad </a>
            </v-col>
            <v-col
                class="col-12 col-md-2 col-xl-2 d-flex flex-column justify-center align-start"
            >
                <p class="white--text font-weight-bold px-4">TRABAJA CON NOSOTROS</p>

                <a class="white--text px-4" @click.prevent="goToWork()"> Solicitud de admisión </a>
            </v-col>
            <v-col
                class="col-12 col-md-2 col-xl-2 d-flex flex-column justify-center align-start"
            >
                <p class="white--text font-weight-bold px-4">SÍGUENOS</p>
                <div class="d-flex flex-wrap px-4">
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.facebook.com/AS-Consulting-Group-141818089928155"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.instagram.com/asconsultinggroup/"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.linkedin.com/company/as.consulting/"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://www.youtube.com/channel/UCLGe4u_VDbkoJWE2LkMni9w/featured?view_as=subscriber"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        text
                        class="elevation-0"
                        color="primary"
                        href="https://twitter.com/pymedigitalAS"
                        target="_blank"
                    >
                        <v-icon color="white">mdi-twitter</v-icon>
                    </v-btn>
                </div>
            </v-col>
            <!-- <v-col class="col-12 col-md-6 text-center text-md-left ">
                <v-col>
                    <span class="white--text d-block d-md-inline-flex align-center justify-center">
                        <v-btn fab text small link class="white--text" :href="phone_send">
                            <v-icon color="white">mdi-phone-message</v-icon>
                        </v-btn>
                        {{ phone_contact }}
                    </span>
                    <span class="white--text d-block d-md-inline-flex align-center justify-center">
                        <v-btn fab text small link class="white--text" @click.prevent="openEmail()">
                            <v-icon color="white">mdi-email-open</v-icon>
                        </v-btn>
                        {{ email }}
                    </span>
                </v-col>
                <v-col>
                    <span class="white--text d-block d-md-inline-flex align-center justify-center">
                        <v-btn fab text small class="white--text" :href="wame" target="_blank">
                            <v-icon color="white">mdi-whatsapp</v-icon>
                        </v-btn>
                        {{ phone_contact }}
                    </span>
                    <span class="white--text d-block d-md-inline-flex align-center justify-center">
                        <v-btn fab text small link class="white--text" @click.prevent="goToLocation()">
                            <v-icon color="white">mdi-map-marker</v-icon>
                        </v-btn>
                        {{ address }}
                    </span>
                </v-col>
            </v-col> -->
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            heightLogo: 116,
            widthLogo: 112,
            phone_contact: "926 302 115",
            phone_send: "tel:+51926302115",
            wame: "https://wa.me/51926302115",
            email: "reactivatunegocio@asconsulting.pe",
            address: "Av. Alfredo Benavides 3695. Santiago de Surco. Lima, Perú.",
        };
    },
    methods: {
        async openEmail() {
            const shareData = {
                title: "A&S Consulting Group",
                text: "Solicita tu asesoría",
                url: this.email,
            };

            try {
                await navigator.share(shareData);
                console.log("OpenBrowserEmail");
            } catch (err) {
                console.log(err);
            }
        },
        goToLocation() {
            this.$router.push({
                name: "contacto",
            });
        },
        goToWork(){
            this.$router.push({
                name: "trabaja-con-nosotros",
            });
        }
    },
    computed: {
        yearActual() {
            let now = new Date();

            return now.getFullYear();
        },
    },
};
</script>

<style>
.as-footer_text {
    font-size: 0.8rem;
}

.footer-logo {
    height: 116px !important;
    width: 112px !important;
}
</style>
