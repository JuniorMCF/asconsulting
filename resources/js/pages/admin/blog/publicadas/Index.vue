<template>
  <div>
    <v-card-title>
      {{ actualPage }}
    </v-card-title>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setActualPage();
  },
  methods: {
    setActualPage() {
      this.$store.dispatch("app/saveActualPage", "Publicadas");
    },
  },
  computed: {
    actualPage() {
      return this.$store.state.app.actual_page;
    },
  },
};
</script>

<style>
</style>