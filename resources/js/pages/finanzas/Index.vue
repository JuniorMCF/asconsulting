<template>
  <v-container class="content-wrap-2 pa-0 mx-auto">
    <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
      <v-col class="col-12 pa-0 ma-0">
        <v-card color="primary" height="25" class="elevation-2 rounded-0">

        </v-card>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center my-8">
      <v-col class="col-12 col-md-6 text-center my-4 mx-auto">
        <span
          class="primary--text  as-text_extralarge line-height_1 "
          >Finanzas y Contabilidad</span
        ><br />


      </v-col>
    </v-row>
   
    <!--include footer-->
    <FooterGlobal></FooterGlobal>

    <ChatComponent></ChatComponent>
  </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import map_style from "../../map_style";
import { gmapsMap, gmapsMarker, gmapsInfoWindow } from "x5-gmaps";
export default {
  components: {
    ChatComponent,
    FooterGlobal,
    gmapsMap,
    gmapsMarker,
    gmapsInfoWindow,
  },
  data: () => ({
    lat_as: -12.12856,
    lng_as: -76.9971846,

    mapOptions: {
      fullscreenControl: false,
      mapTypeControl: false,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: false,
      disableDefaultUI: true,
      zoomControl: false,
      title: "A&S Consulting Group",
      center: { lat: -12.12856, lng: -76.9971846 },
      zoom: 17,

      gestureHandling: "greedy",
      styles: map_style.style_map,
    },
    markerOptions: {
      draggable: false,
      icon: "/app/location_icon.png",
      animation: 0,
    },
    empresa: "A&S Consulting Group.",
    address: "Av. Alfredo Benavides 3695. Santiago de Surco. Lima, Perú.",
  }),

  mounted() {
    this.getPath();
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
.container-map {
  height: 350px;
}
</style>