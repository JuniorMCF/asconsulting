<template>
    <v-dialog opacity="0.3" v-model="dialog" :max-width="options.width" :style="{ zIndex: options.zIndex }"
        @keydown.esc="cancel" persistent>
        <v-card>
            <v-toolbar :color="options.color" dense flat>
                <v-toolbar-title class="text-body-2 font-weight-bold white--text">
                    Cambiar rol de usuario
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <p class="pt-4 text-center text-body-2  black--text font-weight-bold">
                    {{ user.name + ' ' + user.last_name }}
                </p>
                <v-select :items="roles" label="Rol de usuario" variant="outlined" v-model="role" name="name"
                    item-text="name" return-object />


            </v-card-text>
            <v-card-actions class="pt-3">
                <v-spacer></v-spacer>
                <v-btn :color="options.color" class="body-2 font-weight-bold text-normal rounded-0" outlined
                    @click.native="changeRole()" :loading="load">Guardar cambios</v-btn>
                <v-btn v-if="!options.noconfirm" color="grey" text class="body-2 font-weight-bold text-normal rounded-0"
                    @click.native="cancel">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'change-role-dialog',
    data: function () {
        return {
            dialog: false,
            resolve: null,
            reject: null,
            load: false,
            user: {
                name: ''
            },
            role: null,

            roles: [],
            options: {
                color: "sky",
                width: 400,
                zIndex: 200,
                noconfirm: false,
            },
        };
    },
    methods: {
        getRoles() {
            axios({
                method: "get",
                url: "/api/oauth/roles",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {
                    //console.log(res);
                    this.roles = res.data;
                    this.dialog = true;
                })
                .catch((err) => {
                    console.log(err.response);
                    this.dialog = false;
                    //Vue.$toast.error("");
                });
        },
        changeRole() {
            this.load = true
            let data = new FormData()
            data.append("rol_id", this.role.id)
            data.append("user_id", this.user.id)
            axios({
                method: "post",
                url: "/api/oauth/rol/update",
                headers: { Authorization: "Bearer " + this.$store.state.auth.token },
                data:data
            })
                //.post("/api/oauth/posts/pub", headers)
                .then((res) => {

                    this.load = false
                    this.resolve(true);
                    this.dialog = false;
                })
                .catch((err) => {
                    console.log(err.response);
                    this.dialog = false;
                    this.load = false
                    //Vue.$toast.error("");
                });
        },
        open(user, role, options) {

            this.user = user
            this.role = role
            console.log(role)
            this.getRoles()
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
