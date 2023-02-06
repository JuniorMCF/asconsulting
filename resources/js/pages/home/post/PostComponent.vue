<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-card
                class="rounded-0 pr-md-4 pr-lg-10 pr-xl-15 elevation-0 card-as d-flex flex-wrap flex-md-row flex-column"
                style="width: 100%"
            >
                <!--contenido-->
                <div class="d-flex flex-column">
                    <div class="py-2">
                        {{ getTime(post.created_at) }}
                    </div>
                    <div class="d-flex flex-row py-2">
                        <!-- <div style="width: 150px">
                            <v-img cover :src="post.foto" width="150"></v-img>
                        </div> -->
                        <v-card-text
                            class="py-0 text-caption px-0 content_post"
                            style="width: calc(100%)"
                        >
                            <h1
                                class="black--text text-justify line-height_1_3"
                                :class="{ 'primary--text': hover }"
                                @click.prevent="goToDetail(post)"
                            >
                                {{ post.titulo }}
                            </h1>
                            <h2
                                class="text--secondary text-justify line-height_1_3 py-3"
                            >
                                {{ post.descripcion }}
                            </h2>
                        </v-card-text>
                    </div>
                    <div class="text-end">

                            <v-btn
                                id="no-background-hover"
                                class="text-normal text-h6 font-weight-bold"
                                text
                                @click.prevent="goToDetail(post)"
                                :ripple="false"
                                :class="hover ? 'chev_move_right':''"
                                >Leer más

                                <v-icon class="chev_custom" right>
                                    mdi-arrow-right
                                </v-icon>
                            </v-btn>

                    </div>
                </div>
            </v-card>
        </v-hover>
        <SharedDialog ref="sharedDialog"></SharedDialog>
    </div>
</template>

<script>
import SharedDialog from "../../../components/utils/SharedDialog.vue";

export default {
    name: "AsPostComponent",
    components: { SharedDialog },
    props: ["post"],
    data() {
        return {};
    },

    mounted() {},

    methods: {
        goToDetail(post) {
            this.$router.push({
                name: "show-blog",
                params: { route: post.route },
            });
        },
        formatDate(date) {
            return this.moment(date).format("DD MMMM YYYY");
        },
        getInt(lectura) {
            const int_lectura = parseInt(lectura);
            return int_lectura.toString();
        },
        showSharedDialog(post) {
            this.$refs.sharedDialog
                .open(post.route, post.titulo, post.contenido, post.creado_por)
                .then((res) => {});
        },
        getTime(timestamp) {
            return this.moment(timestamp).format("DD.MM.YY");
        },
    },
};
</script>

<style lang="scss" scoped>
.card-as {
    max-height: 250px;
    overflow: hidden;
    cursor: pointer;
}
.ql-editor {
    height: auto !important;
}
.content-detail {
    max-height: 150px;
    overflow: hidden;
}
@media screen and (max-width: 600px) {
    .content_post > h1 {
        font-size: 1rem;
    }
    .content_post > h2 {
        font-size: 0.8rem;
    }
}
.chev_custom {
    font-size: 1rem !important;
    margin-left: 20px !important;
    margin-right: 10px !important;
    transform: scale(2, 1); /* W3C */
    -webkit-transform: scale(2, 1); /* Safari and Chrome */
    -moz-transform: scale(2, 1); /* Firefox */
    -ms-transform: scale(2, 1); /* IE 9 */
    -o-transform: scale(2, 1); /* Opera */
}
.chev_move_right {
    transform: translateX(5px);

    transition: all 0.3s;
}
</style>
