<template>
    <div>
        <v-card-title class="font-weight-bold px-md-10 px-3">{{ actualPage }}</v-card-title>

        <v-container fluid class="pa-0 ma-0 px-md-10 px-3">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <GChart type="GeoChart" :data="countrys" :options="countryOptions" :settings="countrySettings" />
                </v-col>

            </v-row>
            <v-divider horizontal></v-divider>
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 col-md-6 pa-0 ma-0">

                    <GChart type="PieChart" :data="pages" :options="pageOptions" />
                </v-col>

                <v-col class="col-12 col-md-6 pa-0 ma-0">
                    <GChart type="BarChart" :data="posts" :options="postOptions" />
                </v-col>
            </v-row>


        </v-container>

    </div>
</template>

<script>
import { GChart } from "vue-google-charts"

export default {
    components: {
        GChart
    },
    data: () => ({
        pages: [],
        pageOptions: {
            title: 'Páginas más visitadas',
            height: 450,
        },
        posts: [],
        postOptions: {
            title: 'Posts más vistos',
            height: 450,
        },
        countrys: [],
        countryOptions: {
            title: 'Paises desde donde nos visitan',
            height: 450,
        },
        countrySettings: {
            packages: ['geochart'],
        },
    }),
    mounted() {
        this.setActualPage();

        this.getData();
    },
    methods: {
        setActualPage() {
            this.$store.dispatch("app/saveActualPage", "Resumen del tráfico");
        },
        getData() {
            axios({
                method: "get",
                url: "/api/oauth/statistics/all",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {
                    console.log(res)
                    const header_visitas = ["Page", "Popularidad"]
                    this.pages.push(header_visitas)
                    const header_posts = ["Post", "Cantidad de visitas"]
                    this.posts.push(header_posts)
                    const header_countrys = ["Country", "Popularidad"]
                    this.countrys.push(header_countrys)

                    const { visitas, posts, countrys } = res.data


                    for (let i = 0; i < visitas.length; i++) {

                        const element = [visitas[i].page == "/" ? "/home" : visitas[i].page, visitas[i].total]
                        this.pages.push(element)
                    }
                    for (let i = 0; i < posts.length; i++) {

                        const element = [posts[i].titulo, visitas[i].total]
                        this.posts.push(element)
                    }
                    for (let i = 0; i < countrys.length; i++) {

                        const element = [countrys[i].country, countrys[i].total]
                        this.countrys.push(element)
                    }
                    console.log(this.countrys)

                })
                .catch((err) => {
                    console.log(err.response);
                    //Vue.$toast.error("");
                });
        }
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
