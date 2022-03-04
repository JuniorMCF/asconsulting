<template>
  <div class="header-nav">
    <v-app-bar
      color="transparent"
      light
      class="elevation-0 pa-0 app-bar_container"
      height="87"
    >
      <v-container fluid class="content-wrap mx-auto pa-0 px-md-5">
        <v-card-text
          class="d-flex justify-center align-center pa-0 flex-wrap py-4"
        >
          <v-app-bar-nav-icon
            color="white"
            class="d-md-none d-inline-flex"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title class="d-flex align-center">
            <router-link to="/">
              <div class="img-logo_navbar">
                <v-img src="/app/logo_home.PNG"> </v-img>
              </div>

              <p class="text-center ma-0">
                <span class="logo_title">Consulting Group</span>
              </p>
            </router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <ul class="d-none d-md-inline-flex">
            <li v-for="(item, index) in items" :key="'items' + index">
              <v-hover v-slot="{ hover }">
                <router-link :to="item.route">
                  <v-menu open-on-hover bottom offset-y rounded="0" dark>
                    <template v-slot:activator="{ on, attrs }">
                      <span
                        :class="{ item_hover: hover }"
                        v-bind="attrs"
                        v-on="on"
                        class="item_style py-4 active"
                        v-if="'/' + item.name === active"
                      >
                        {{ item.title }}
                      </span>
                      <span
                        :class="{ item_hover: hover }"
                        v-bind="attrs"
                        v-on="on"
                        class="item_style py-4"
                        v-else
                      >
                        {{ item.title }}
                      </span>
                    </template>

                    <v-list v-if="item.elements.length > 0">
                      <v-list-item
                        color="primary"
                        v-for="(links, index) in item.elements"
                        :key="'elements' + index"
                        :to="links.route"
                      >
                        <v-list-item-title>{{ links.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </router-link>
              </v-hover>
            </li>
          </ul>
          <v-spacer></v-spacer>

          <v-btn
            fab
            small
            text
            class="elevation-0"
            color="primary"
            href="https://www.facebook.com/AS-Consulting-Group-141818089928155"
            target="_blank"
          >
            <v-icon color="white"> mdi-facebook </v-icon>
          </v-btn>
          <v-btn
            fab
            small
            text
            class="elevation-0"
            color="primary"
            href="https://www.instagram.com/asconsultinggroup/"
            target="_blank"
          >
            <v-icon color="white"> mdi-instagram </v-icon>
          </v-btn>
          <v-btn
            fab
            small
            text
            class="elevation-0"
            color="primary"
            href="https://www.linkedin.com/company/as.consulting/"
            target="_blank"
          >
            <v-icon color="white"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn
            fab
            small
            text
            class="elevation-0"
            color="primary"
            href="https://www.youtube.com/channel/UCLGe4u_VDbkoJWE2LkMni9w/featured?view_as=subscriber"
            target="_blank"
          >
            <v-icon color="white"> mdi-youtube </v-icon>
          </v-btn>
          <v-btn
            fab
            small
            text
            class="elevation-0"
            color="primary"
            href="https://twitter.com/pymedigitalAS"
            target="_blank"
          >
            <v-icon color="white"> mdi-twitter </v-icon>
          </v-btn>
        </v-card-text>
      </v-container>
    </v-app-bar>

    <!--NAVIGATION DRAWER-->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="white"
      dark
      width="280"
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
            items: [
        {
          title: "Inicio",
          route: "/",
          name: "",
          elements: [],
        },
        {
          title: "Nosotros",
          route: "/nosotros",
          name: "nosotros",
          elements: [
            {
              title: "Equipo",
              route: "/equipo",
            },
            {
              title: "Metodología de trabajo",
              route: "/metodologia",
            },
          ],
        },
        {
          title: "Servicios",
          route: "/servicios",
          name: "servicios",
          elements: [
            {
              title: "Tecnología",
              route: "/tecnologia",
            },
            {
              title: "Finanzas",
              route: "/finanzas",
            },
            {
              title: "Procesos",
              route: "/procesos",
            },
          ],
        },
        {
          title: "Clientes",
          route: "/clientes",
           name: "clientes",
          elements: [],
        },
        {
          title: "Publicaciones",
          route: "/publicaciones",
            name: "publicaciones",
          elements: [],
        },
        {
          title: "Trabaja con nosotros",
          route: "/trabaja-con-nosotros",
          name: "trabaja-con-nosotros",
          elements: [],
        },
        {
          title: "Contacto",
          route: "/contacto",
          name: "contacto",
          elements: [],
        },
      ],
      redes: [
        {
          icon: "mdi-facebook",
          route: "",
        },
      ],
    };
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  mounted() {},
  methods: {
    onResize() {
      if (window.innerWidth > 960) {
      } else {
      }
    },
  },
  computed: {
    active() {
      return this.$store.state.app.path;
    },
  },
};
</script>

<style scoped>
.logo_title {
  font-size: 0.7rem;
  color: white;
}
.item_style {
  font-size: 0.95rem;
  font-weight: bold;
  color: white;
}
.v-toolbar__content {
  padding: 0px !important;
}

ul {
  height: 64px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 !important;
}
ul li {
  height: 100%;
  list-style: none;
}
ul li a {
  height: 100%;
  display: flex;
  align-items: center;
}
ul li a span {
  padding: 0px 20px 0px 20px;
}
.item_hover {
  color: #b9d956;
  transition: all 0.4s ease 0s;
}
.active {
  color: #b9d956;
}
.img-logo_navbar {
  width: 91px;
  height: 47px;
}

@media screen and (max-width: 992px) {
  .img-logo_navbar {
    width: 60px;
    height: 30px;
  }
  .logo_title {
    font-size: 0.5rem;
    color: white;
  }
}
</style>