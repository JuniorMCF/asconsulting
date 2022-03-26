<template>
    <div>
        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="justify-center">
                <v-col class="col-12 col-md-6">
                    <v-card-title class="font-weight-bold px-0 ma-0">{{ actualPage }}</v-card-title>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 justify-center">
                <v-col class="pa-0 ma-0 col-12 col-md-6">
                    <v-text-field
                        hide-details="auto"
                        color="sky"
                        v-model="categoria.nombre"
                        :value="categoria.nombre"
                        outlined
                        placeholder="Nombre de la categpría"
                        dense
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="pa-0 ma-0 justify-center">
                <v-col class="py-4 ma-0 col-6 col-md-3 pl-0">
                    <v-btn
                          :loading="loadSave"
                        class="text-normal elevation-0 white--text rounded-lg"
                        color="sky"
                        block
                        @click.prevent="saveCategory()"
                    >Crear</v-btn>
                </v-col>
                <v-col class="py-4 ma-0 col-6 col-md-3 pr-0">
                    <v-btn

                        block
                        text
                        class="text-normal elevation-0 rounded-lg"
                        outlined
                        color="sky"
                        @click.prevent="goToCategorys()"
                    >Cancelar</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        categoria: {
            nombre: '',
        },
        loadSave: false
    }),
    mounted() {
        this.setActualPage();

    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Nueva categoría");
        },

        saveCategory() {
            this.loadSave = true;
            let data = new FormData()

            data.append("nombre", this.categoria.nombre)
            axios({
                method: 'post',
                url: "/api/oauth/category/new",
                data: data,
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            }).then(res => {
                this.loadSave = false;
                if (res) {
                    Vue.$toast.success("Categoría creada!")

                    setTimeout(() => {
                        this.$router.push({ path: '/admin/categorias' })
                    }, 2000)
                } else {
                    Vue.$toast.success("Error de conexión")
                }

            }).catch(err => {
                Vue.$toast.success("Error de conexión")
                this.loadSave = false;
                console.log(err)
            })
        },
        goToCategorys() {
            this.$router.push({ path: '/admin/categorias' })
        }
    },
    computed: {
        actualPage() {
            return this.$store.state.app.actual_page;
        },
    }
}
</script>

<style>
</style>
