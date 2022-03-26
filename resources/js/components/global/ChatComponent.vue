<template>
  <div>
    <v-btn link :href="wame" target="_blank" fab dark large color="primary" fixed right bottom>
      <v-icon large dark>mdi-whatsapp </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
    data:()=>({
        wame:"https://wa.me/51926302115"
    })
};
</script>

<style>
</style>
