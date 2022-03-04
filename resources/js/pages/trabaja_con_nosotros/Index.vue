<template>
  <v-container class="content-wrap-2 pa-0 mx-auto">
    <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
      <v-col class="col-12 pa-0 ma-0 container-bandwith">
        <v-img src="/app/bandwith.PNG "> </v-img>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10">
      <v-col class="col-12 col-md-6 text-center text-md-left my-4">
        <span
          class="primary--text text-uppercase as-text_extralarge line-height_1"
          >Trabaja con</span
        ><br />

        <span
          class="
            pl-6
            primary--text
            font-weight-bold
            text-uppercase
            as-text_extralarge
            line-height_1
            after-right_block
          "
          >nosotros</span
        >
      </v-col>
    </v-row>
    <v-row
      class="pa-0 ma-0 content-wrap-0 mx-auto align-center justify-center mb-10"
    >
      <v-col
        class="
          col-12 col-md-10
          d-flex
          align-center
          justify-md-start justify-center
        "
      >
        <div class="text-md-start text-center">
          <span class="as-p_normal primary--text">
            Únete a la <strong>firma más especializada </strong> del país
          </span>
        </div>
      </v-col>
      <v-col class="col-12 col-md-10 pa-0">
        <v-container class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col class="col-12 col-md-6">
              <v-text-field
                class="rounded-0"
                color="primary"
                label="Nombres"
                outlined
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-md-6">
              <v-text-field
                class="rounded-0"
                color="primary"
                label="Apellidos"
                outlined
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col class="col-12 col-md-4">
              <v-text-field
                class="rounded-0"
                color="primary"
                label="Email"
                outlined
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col class="col-12 col-md-4">
              <v-text-field
                class="rounded-0"
                color="primary"
                label="Teléfono"
                outlined
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col class="col-12 col-md-4">
              <v-select
                :items="profesiones"
                class="rounded-0"
                label="Elije una opción"
                item-text="profesion"
                outlined
                return-object
                hide-details="auto"
              ></v-select>
            </v-col>

            <v-col class="col-12 col-md-4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
                
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Fecha de inicio"
                    append-icon="mdi-calendar"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                    hide-details="auto"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                  color="primary"
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    class="text-normal rounded-0"
                    text
                    color="primary"
                    @click="menu = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    class="text-normal rounded-0"
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
                  >
                    Aceptar
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="col-12 col-md-8">
              <v-file-input  persistent-hint label="Seleccione un archivo" outlined prepend-icon="mdi-paperclip" show-size hint="Máximo 15MB"  ></v-file-input>
            </v-col>

            <v-col class="col-12">
              <v-btn block class="rounded-0 text-normal" color="primary" x-large>Aplicar ahora</v-btn>
            </v-col>
          </v-row>
          
        </v-container>
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
    profesiones: [
      {
        id: 1,
        profesion: "Analista",
      },
      {
        id: 2,
        profesion: "Contador",
      },
      {
        id: 3,
        profesion: "Administrador",
      },
    ],
    menu: false,
    date: null,
  }),

  mounted() {
    this.getPath();
  },
  methods: {
    getPath() {
      let path = window.location.pathname + window.location.search;

      this.$store.dispatch("app/setPath", path);
    },
  },
};
</script>

<style>
</style>