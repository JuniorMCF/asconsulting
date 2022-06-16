<template>
    <div>
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto footer-container">
            <v-col class="col-12 pa-0 ma-0 rotate-180 container-bandwith">
                <v-img src="/app/bandwith.png "> </v-img>
            </v-col>
        </v-row>
        <v-row class="primary pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 col-md-6 d-flex flex-wrap justify-center align-center">
                <div class="footer-logo">
                    <v-img src="/app/white_logo.png" class="footer-logo" contain> </v-img>
                </div>

                <span class="white--text as-footer_text px-4">
                    Copyright ©{{ yearActual }} by A&S Consulting Group.
                </span>
            </v-col>
            <v-col class="col-12 col-md-6 text-center text-md-left ">
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
            </v-col>
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
            address: "Av. Alfredo Benavides 3695. Surco.",
        };
    },
    methods: {
        async openEmail() {
            const shareData = {
                title: 'A&S Consulting Group',
                text: 'Solicita tu asesoría',
                url: this.email
            }

            try {
                await navigator.share(shareData)
                console.log("OpenBrowserEmail")
            } catch (err) {
                console.log(err)
            }
        },
        goToLocation() {
            this.$router.push({
                name: 'contacto'
            })
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
