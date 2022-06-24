<template>
  <div>
    <div v-if="isAuth && notPublic">
      <navbar-admin></navbar-admin>

    </div>
    <div v-else>
      <navbar v-if="isHome"></navbar>
      <navbar-second v-else></navbar-second>
    </div>
    <v-main v-if="isAuth && notPublic" class="main-open v-main__admin" id="container-main">
      <transition :name="nameTransition" :mode="isHome == true ? '' : modeTransition">
        <router-view :key="$route.fullPath"> </router-view>
      </transition>
    </v-main>
    <v-main v-else>
      <transition :name="isHome == true ? '' :nameTransition" :mode="isHome == true ? '' : modeTransition">
        <router-view :key="$route.fullPath"> </router-view>
      </transition>
    </v-main>
  </div>
</template>

<script>
import Navbar from "./global/Navbar";
import NavbarSecond from "./global/NavbarSecond";
import NavbarAdmin from "./global/NavbarAdmin.vue";
export default {
  components: { Navbar, NavbarSecond, NavbarAdmin },

  data: () => ({}),
  mounted() {
    this.getPath();
    document.title = this.$store.state.app.title_page;
  },
  methods: {
    goBack() {},

    getPath() {
      let path = window.location.pathname + window.location.search;

      this.$store.dispatch("app/setPath", path);

    },
  },

  computed: {
    isHome() {
      return this.$store.state.app.isHome;
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    notPublic(){
      return this.$store.getters["app/notPublic"];
    },
    nameTransition() {
      return this.$store.state.app.pageTransition.name;
    },
    modeTransition() {
      return this.$store.state.app.pageTransition.mode;
    },
    durationTransition() {
      return this.$store.state.app.pageTransition.duration;
    },
  },
};
</script>

<style >
/**route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(150px);
}
.route-enter-active {
  transition: ass 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}


</style>
