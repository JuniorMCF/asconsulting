<template>
  <v-container fluid class="content-wrap">
    <v-row class="pa-0 ma-0 justify-center align-center">
      <v-col class="col-12 col-md-6 col-lg-5">
        <v-card class="rounded-0 elevation-2 pa-4">
          <v-card-text class="text-center d-flex align-center justify-center">
            <h1 class="font-weight-bold primary--text">Autenticación A&S</h1>
          </v-card-text>
          <form>
            <v-card-text class="pa-0">
              <v-text-field
                class="rounded-0 col-12 pa-4"
                color="primary"
                label="Email"
                v-model="form.email"
                outlined
                name="email"
                prepend-inner-icon="mdi-email"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                class="rounded-0 col-12 pa-4"
                color="primary"
                label="Password"
                v-model="form.password"
                outlined
                name="password"
                autocomplete="on"
                type="password"
                prepend-inner-icon="mdi-lock"
                hide-details="auto"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn
                block
                x-large
                color="primary"
                class="text-normal rounded-0"
                :loading="loading"
                @click="login($event)"
              >
                Iniciar sesión
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    form: {
      email: "",
      password: "",
    },
  }),

  methods: {
    login(e) {
      e.preventDefault();
      if (this.form.email != "" && this.form.password != "") {
        this.loading = true;
        this.$store
          .dispatch("auth/login", this.form)
          .then((res) => {
            console.log(res);
            this.loading = false;

            if (res.status == 200) {
              Vue.$toast.success("Bienvenido!");


              this.$store.dispatch("app/setPath", "/admin/misitio");
              this.$router.push({
                path: "/admin/misitio",
              });
            } else {
              Vue.$toast.error("Credenciales inválidas");
            }
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
            Vue.$toast.error("Credenciales inválidas");
          });
        return;
      }

      Vue.$toast.warning("Ingrese un usuario y contraseña válidos");
    },
  },
};
</script>

<style>
</style>
