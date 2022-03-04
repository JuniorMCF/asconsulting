<template>
  <v-container class="content-wrap-2 pa-0 mx-auto">
    <v-row class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0">
      <v-col class="col-12 col-md-10 py-0 px-md-2 px-0" justify="space-around">
        <v-sheet elevation="0" class="py-4 px-1">
          <v-chip-group show-arrows active-class="primary--text">
            <v-chip
              class="
                px-6
                v-size--small
                py-6
                rounded-0
                text-uppercase
                font-weight-bold
                white
                primary--text
              "
              v-for="(categoria, i) in categorias"
              :key="i"
            >
              {{ categoria.nombre }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>

      <v-col
        class="col-12 col-md-2 py-0 px-md-2 px-4 justify-center align-center"
      >
        <v-text-field
          class="caption py-6"
          placeholder="Buscar"
          append-icon="mdi-magnify"
          hide-details="auto"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0 content-wrap-article mx-auto elevation-0">
      <v-col class="col-12 ma-0 pa-4 px-md-16 d-flex flex-wrap align-center">
        <v-avatar class="d-inline-block">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="pl-4 d-inline-block">
          <span class="caption">Gerardo Alvarez Sevillano</span>

          <span class="px-2 d-none d-md-inline-block">/</span>

          <div class="d-md-inline-block">
            <span class="caption "> 15 oct 2020 </span>

            <span class="px-2">/</span>

            <span class="caption pr-2"> 2 Min. de lectura </span>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0 content-wrap-article mx-auto elevation-0">
      <v-col
        class="col-12 ma-0 pa-4 px-md-16 pb-md-16"
        style="min-height: 588px"
      >
        <v-card-text class="pa-0">
          <div class="display-1 mb-5 alternative--text mb-4">
            {{ post.titulo }}
          </div>
          <v-img :src="post.foto"> </v-img>

          <div class="ql-editor pa-0 py-6" v-html="this.post.contenido"></div>
        </v-card-text>

        <v-card-text class="pa-0">
          <v-chip-group column>
            <v-chip
              color="black"
              class="grey lighten-3 rounded-xl elevation-0"
              v-for="tag in tags"
              :key="tag.id"
            >
              {{ tag.tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
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
export default {
  components: { ChatComponent, FooterGlobal },
  data: () => ({
    post: {
      titulo: "",
      foto: "",
      contenido: "",
    },
    tags: [],
    categorias: [],
  }),

  mounted() {
    this.getPath();
    this.getData();
  },
  methods: {
    getPath() {
      let path = window.location.pathname + window.location.search;

      this.$store.dispatch("app/setPath", path);
    },

    //async
    getData() {
      const data = new FormData();

      data.append("route", this.$route.params.route);
      axios({
        method: "post",
        url: "/api/post/document",
        data: data,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          let { post, tags, categorias } = res.data;

          this.post = post;
          this.tags = tags;
          this.categorias = categorias;

          const todos = {
            id: 0,
            nombre: "Todos",
            titulo: "",
            descripcion: "",
            entradas: "",
            estado: "",
            created_at: "",
            updated_at: "",
          };
          this.categorias.unshift(todos);

          /**agregamos la categorias todos al inicio */
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.ql-editor {
  height: auto !important;
}
</style>