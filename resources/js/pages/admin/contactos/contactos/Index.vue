<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">{{ actualPage }}</v-card-title>
    </div>
</template>

<script>
export default {
    mounted() {
        this.setActualPage();
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Contactos");
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
