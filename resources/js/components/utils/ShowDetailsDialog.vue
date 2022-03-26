<template>
  <v-dialog
    opacity="0.3"
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
    persistent
  >
    <v-card class="rounded-0 elevation-0 pa-4" min-height="550">
      <v-fab-transition>
        <v-btn
          @click.prevent="dialog = !dialog"
          fab
          right
          absolute
          small
          class="elevation-0 pa-0"
        >
          <v-icon x-large color="primary" class="pa-0"
            >mdi-close-circle-outline</v-icon
          >
        </v-btn>
      </v-fab-transition>
      <v-card-text class="pa-0 pt-5 pb-2 font-weight-bold">
        <v-img class="mx-auto" :src="foto" height="68" width="68"></v-img>
      </v-card-text>
      <v-card-text class="text-center">
        <p
          class="
            ma-0
            mx-auto
            primary--text
            font-weight-bold
            text-h5 text-uppercase
            after-center_block_2
          "
          style="max-width: 350px"
        >
          {{ title }}
        </p>
      </v-card-text>
      <v-card-text>
        <v-container class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col
              class="
                col-12 col-md-6
                pa-0
                px-3
                text-justify
                alternative--text
                d-flex
                flex-wrap flex-row
                align-start
                
              "
            >
              <p class="text-center mx-auto text-h5">DESCRIPCIÓN</p>
              <span  v-for="(text, i) in description" :key="'desc' + i">
                <p v-if="text.type == 'normal'" class="py-2 subtitle-1 line-height_1_3 my-1">
                  {{ text.text }}</p
                >
                <strong
                  v-else-if="text.type == 'black'"
                  class="py-4 subtitle-1 line-height_1_3"
                >
                  {{ text.text }}
                </strong>
                <ol v-else-if="text.type == 'list'" class="py-4 subtitle-1 line-height_1_3">
                  <li v-for="(element, i) in text.elements" :key="'el' + i">
                    <span>{{ element }}</span>
                  </li>
                </ol>
              </span>
              <v-card-actions class="align-end py-4 mt-auto" style="width:100%;">
                
                <v-btn
                  class="white--text font-weight-bold px-4 rounded-xl mx-auto"
                  color="primary"
                  link
                  :href="categoria"
                  >SOLICITAR COTIZACIÓN</v-btn
                >
             
              </v-card-actions>
            </v-col>
            <v-col
              class="
                col-12 col-md-6
                pa-0
                px-3
                text-justify
                alternative--text
                d-flex
                flex-wrap flex-row
                align-content-start

              "
            >
              <p class="text-center mx-auto text-h5">BENEFICIOS</p>
              <span v-for="(text, i) in beneficios" :key="'benef' + i" class="line-height_1">
                <ul class="subtitle-1 py-1 pl-4">
                  <li  class="line-height_1_3">
                    <strong>{{ text.titulo }}</strong>
                    <span class="">{{ text.descripcion }}</span>
                  </li>
                </ul>
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: function () {
    return {
      dialog: false,
      resolve: null,
      reject: null,

      title: null,
      description: [],
      beneficios: [],
      foto: null,
      cateogoria:'',
      options: {
        color: "alternative",
        width: 400,
        zIndex: 200,
        noconfirm: false,
      },
      categoria:''
    };
  },
  methods: {
    open(object,categoria, options) {
      this.dialog = true;
      this.title = object.titulo;
      this.description = object.descripcion;
      this.beneficios = object.beneficios;
      this.foto = object.icon;
      this.categoria = "mailto:reactivatunegocio@asconsulting.pe?subject="+categoria+" / "+object.titulo
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>