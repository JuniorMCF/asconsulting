<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-card
                class="rounded-0 elevation-5  d-flex flex-md-row flex-column"
            >
                <v-card-text class="pa-0">
                    <v-img
                        :src="post.foto"
                        aspect-ratio="1.7"
                        height="341"
                        cover
                        class="mx-auto c-pointer"
                        @click.prevent="goToDetail(post)"
                    ></v-img>
                </v-card-text>
                <!--contenido-->
                <v-card-text class="d-flex flex-column space-between">
                    <div style="height: 20%">
                        <v-list-item>
                            <v-list-item-avatar color="grey">
                                <v-avatar
                                    v-if="post.user_foto != null"
                                    class="pa-1"
                                >
                                    <v-img
                                        :src="post.user_foto"
                                        :alt="post.name"
                                        aspect-ratio="1"
                                    ></v-img>
                                </v-avatar>
                                <v-avatar v-else class="grey lighten-3 pa-1">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        enable-background="new 0 0 60 60;"
                                        xml:space="preserve"
                                        height="36"
                                        width="36"
                                        class="s2FZSQ"
                                    >
                                        <g>
                                            <ellipse
                                                fill="#979797"
                                                cx="30.7"
                                                cy="22.3"
                                                rx="11.5"
                                                ry="11.6"
                                            />
                                            <g>
                                                <ellipse
                                                    fill="none"
                                                    cx="30.7"
                                                    cy="22.3"
                                                    rx="11.5"
                                                    ry="11.6"
                                                />
                                                <path
                                                    fill="#979797"
                                                    d="M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8
    			c5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1
    			C46.3,41.6,38.6,37.1,29.9,37.1z"
                                                />
                                                <path
                                                    fill="#D8D8D8"
                                                    d="M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6
    			c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8
    			c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4
    			c0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8
    			c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5
    			c0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1
    			c0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1
    			c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5
    			c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7
    			c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6
    			c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8
    			c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6
    			c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z
    			 M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </v-avatar>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="post.name + ' ' + post.last_name"
                                ></v-list-item-title>

                                <v-list-item-subtitle
                                    v-text="
                                        formatDate(post.fecha_publicacion) +
                                        ' - ' +
                                        getInt(post.lectura) +
                                        ' min'
                                    "
                                ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-menu bottom left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            dark
                                            icon
                                            v-bind="attrs"
                                            v-on="on"
                                            v-on:click.prevent
                                            text
                                            class="elevation-0 black--text"
                                            fab
                                            small
                                        >
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list class="pa-0 ma-0">
                                        <v-list-item
                                            link
                                            @click.prevent="
                                                showSharedDialog(post)
                                            "
                                        >
                                            <v-list-item-title class="caption">
                                                <v-icon small left
                                                    >mdi-share</v-icon
                                                >Compartir entrada
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                    <div class="pb-2" style="height: 65%">
                        <v-card-text
                            @click.prevent="goToDetail(post)"
                            class="c-pointer py-0"
                        >
                            <h1
                                class="font-weight-bold primary--text line-height_1 mb-2"
                                :class="{ 'text--secondary': hover }"
                            >
                                {{ post.titulo }}
                            </h1>
                        </v-card-text>
                        <div class="text-truncate contenido-container">
                            <div
                                v-if="!post.descripcion"
                                class="ql-editor pa-0"
                                v-html="post.contenido"
                            ></div>
                            <div v-else class="ql-editor pt-0 px-0">
                                <p class="ql-align-justify pa-0">
                                    <span
                                        class="pa-0 primary--text ql-editor ql-font-Raleway ql-size-large"
                                        v-html="post.descripcion"
                                    ></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style="height: 15%">
                        <v-divider horizontal class="ma-0 pa-0"></v-divider>
                        <v-card-text class="d-flex flex-wrap py-2 align-center">
                            <div class="mr-2 black--text">
                                {{ post.visualizaciones.length }}
                                visualizaciones
                            </div>
                            <div class="black--text">
                                {{ post.comments.length }} comentarios
                            </div>
                            <v-spacer></v-spacer>
                            <span class="black--text">
                                {{
                                    post.favoritos.length > 0
                                        ? post.favoritos.length
                                        : ""
                                }}
                            </span>
                            <v-btn
                                v-on:click.prevent="like(post)"
                                dark
                                icon
                                text
                                class="elevation-0 error--text"
                                fab
                                small
                            >
                                <v-icon v-if="post.isFavorite"
                                    >mdi-heart</v-icon
                                >
                                <v-icon v-else>mdi-heart-outline</v-icon>
                            </v-btn>
                        </v-card-text>
                    </div>
                </v-card-text>
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
        like(post) {
            console.log(post.id);
        },
    },
};
</script>

<style lang="scss" scoped>
// .card-as {
//     border: solid 1px #000066 !important;
// }
.ql-editor {
    height: auto !important;
}
.content-detail {
    max-height: 150px;
    overflow: hidden;
}
.contenido-container {
    max-width: 460px;
    padding: 0px 16px 0px 16px;
    max-height: 90px;
    overflow: hidden;
    font-size: 0.65rem !important;
}
@media screen and (max-width: 960px) {
    .contenido-container {
        max-width: 890px;
        padding: 0px 16px 0px 16px;
        max-height: 90px;
        overflow: hidden;
        font-size: 0.65rem !important;
    }
}
</style>
