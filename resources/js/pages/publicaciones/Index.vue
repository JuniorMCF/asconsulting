<template>
  <v-container class="content-wrap-2 pa-0 mx-auto">
    <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
      <v-col class="col-12 pa-0 ma-0 container-bandwith">
        <v-img src="/app/bandwith.PNG "> </v-img>
      </v-col>
    </v-row>




    <!--include footer-->
      <FooterGlobal></FooterGlobal>

    <ChatComponent></ChatComponent>
  </v-container>
</template>

<script>
import ChatComponent from '../../components/global/ChatComponent.vue';
import FooterGlobal from '../../components/global/FooterGlobal.vue';
export default {
  components: { ChatComponent, FooterGlobal },
  data: () => ({

  }),

  mounted() {
    this.getPath();
  },
  methods: {
    getPath() {
      let path = window.location.pathname+window.location.search;
     
      this.$store.dispatch("app/setPath", path);
    },
  },
};
</script>

<style>
</style>