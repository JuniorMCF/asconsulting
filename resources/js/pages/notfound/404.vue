<template>
    <div class="row  content-wrap-0 mx-auto elevation-0">
        <div class="col-12 py-0" style="height:300px">
            <lottie-animation
            ref="anim"
            :loop="true"
            :autoPlay="true"
            :loopDelayMin="2.5"
            :loopDelayMax="5"
            :speed="1"

            :animationData="require('/lottie/404.json')"
        />
        </div>
        <div class="col-12 text-center py-0">
            <span class="text-h5 font-weight-bold text-notfound">NOT FOUND</span>
        </div>
         <div class="col-12 text-center my-4">
             <v-btn link @click="goToHome()" rounded class="mx-auto primary elevation-0 font-weight-bold"  large>
                Go home
             </v-btn>
         </div>
    </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";
export default {
    components:{
        LottieAnimation
    },
    methods: {
        goToHome(){
            this.$router.push({name:"home"})
        }
    }
}
</script>

<style>
.text-notfound{
    color: #265bff !important;
}
</style>
