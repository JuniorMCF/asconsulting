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
          >Nuestros</span
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
          >servicios</span
        >
      </v-col>

      <v-col class="col-12 col-md-6 text-center text-md-left my-4">
        <p class="primary--text text-justify as-p_normal ma-0">
          Conoce los diferentes servicios que tenemos para ti y tu empresa.
        </p>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10">
      <v-col
        class="col-12 col-md-6 px-2"
        v-for="(servicio, index) in servicios"
        :key="index"
      >
        <v-card class="elevation-0 rounded-0 container-servicio">
          <v-card-text class="pa-10 text-center content-servicio">
            <v-card-text class="px-8 pt-8 py-0 pb-5">
              <h3 class="white--text font-weight-bold as-text_extralarge">
                {{ servicio.title }}
              </h3>
              <h5 class="white--text font-weight-bold as-p_normal text-left px-md-6 px-0">
                {{ servicio.subtitle }}
              </h5>
            </v-card-text>

            <v-card-text class="px-6 pl-md-13 pr-10  py-0">
              <ul class="as-p_normal" >
                <li
                  class="white--text text-left as-p_normal li-circle py-1"
                  v-for="(element, index) in servicio.details"
                  :key="index"
                >
                  {{ element.text }}
                </li>
              </ul>
            </v-card-text>

            <v-card-actions class="pa-0 bottom_button">
              <v-spacer></v-spacer>
              <v-btn
                outlined
                rounded
                large
                link
                :to="action.src"
                class="elevation-0 white--text px-10"
                v-for="(action, index) in servicio.actions"
                :key="index"
              >
                {{ action.title }}
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card-text>
          <div class="overlap-servicios"></div>
          <div class="img-overlap">
            <v-img :src="servicio.src" class="img-overlap"></v-img>
          </div>
        </v-card>
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
    servicios: [
      {
        src: "/app/tecnologia.JPG",
        title: "Tecnología",
        subtitle: "Nuestros principales servicios:",
        details: [
          { text: "Gestión de proyectos (PMI)." },
          { text: "Tableros de control genercial." },
          { text: "Desarrollo de software." },
          { text: "Automatización de procesos (RPA)." },
          { text: "Implementación marco ITIL." },
        ],
        actions: [
          {
            title: "Ver más",
            src: "/tecnologia",
          },
        ],
      },
      {
        src: "/app/finanzas.jpg",
        title: "Finanzas y Contabilidad",
        subtitle: "Nuestros principales servicios:",
        details: [
          { text: "Outsourcing contable." },
          { text: "Outsourcing de planillas." },
          { text: "Auditorías especializadas." },
          { text: "Reestructuración financiera." },
          { text: "Consultoría tributaria y legal." },
        ],
        actions: [
          {
            title: "Ver más",
            src: "/finanzas",
          },
        ],
      },
      {
        src: "/app/procesos.jpg",
        title: "Procesos",
        subtitle: "Nuestros principales servicios:",
        details: [
          { text: "Mapeo y optimización de procesos." },
          { text: "Inventario de activos "+"\n"+"(metodología ágil)." },
          { text: "Programa de reducción de costos." },
          { text: "Evaluación de carga de trabajo." },
          { text: "​Reingeniería organizacional." },
        ],
        actions: [
          {
            title: "Ver más",
            src: "/procesos",
          },
        ],
      },
      {
        src: "/app/pyme_digital.webp",
        title: "Reactiva tu Pyme",
        subtitle: "Nuestros principales servicios:",
        details: [
          { text: "Reactiva tu empresa." },
          { text: "Mi carta digital." },
        ],
        actions: [
          {
            title: "Ver más",
            src: "/servicios",
          },
        ],
      },
    ],
  }),

  mounted() {
    this.getPath();
    this.$store.dispatch("app/changeTitlePage", "Servicios | Mi sitio");
    document.title = this.$store.state.app.title_page;
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
.overlap-servicios {
  position: absolute;
  top: 0px;
  z-index: 1;
  height: 481px;
  width: 100%;
  background-color: rgba(0, 0, 102, 0.44) !important;
}
.img-overlap {
  position: absolute;
  z-index: 0;
  top: 0px;
  height: 481px;
  width: 100%;
  background-color: rgba(0, 0, 102, 0.44) !important;
}
.content-servicio {
  position: absolute;
  top: 0px;
  z-index: 2;
  height: 481px;
  width: 100%;
}
.container-servicio {
  height: 481px;
  width: 100%;
}
.li-circle {
  list-style-type: none;
  position: relative;
}

.li-circle::before {
  content: "⬤";
  position: absolute;
  left: -1.2rem; /* Adjust this value so that it appears where you want. */
  font-size: 0.5rem; /* Adjust this value so that it appears what size you want. */
}
.bottom_button{
  position:  absolute;
  bottom: 2.5rem;
  left:0;
  right: 0;
  margin: 0px auto 0px auto;
}
</style>