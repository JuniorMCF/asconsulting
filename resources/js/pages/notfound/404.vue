<template>
    <div>
        <v-container fluid class="py-16">
            <v-row class="row mx-auto elevation-0 py-16">
                <v-col class="col-12 py-0" style="height: 300px">
                    <lottie-animation
                        ref="anim"
                        :loop="true"
                        :autoPlay="true"
                        :loopDelayMin="2.5"
                        :loopDelayMax="5"
                        :speed="1"
                        :animationData="require('/lottie/404.json')"
                    />
                </v-col>
                <v-col class="col-12 text-center py-0">
                    <span class="text-h5 font-weight-bold black--text"
                        >Página no encontrada</span
                    >
                </v-col>
                <v-col class="col-12 text-center my-4">
                    <v-btn
                        link
                        @click="goToHome()"
                        rounded
                        class="mx-auto primary elevation-0 font-weight-bold"
                        large
                    >
                        Ir al inicio
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <FooterGlobal></FooterGlobal>
    </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
export default {
    components: {
        LottieAnimation,
        FooterGlobal,
    },
    methods: {
        goToHome() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style></style>
