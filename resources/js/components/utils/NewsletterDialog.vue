<template>
    <v-dialog opacity="0.3" v-model="dialog" full-width height="280" :style="{ zIndex: options.zIndex }"
        @keydown.esc="cancel" persistent content-class="custom-dialog">
        <v-card class="bg-newsletter pa-4">
            <v-toolbar class="bg-newsletter" dense flat>
                <v-toolbar-title class="text-body-2 font-weight-bold white--text"></v-toolbar-title>
                <v-fab-transition>
                    <v-btn @click.prevent="dialog = !dialog" fab right absolute small
                        class="elevation-0 pa-0 bg-newsletter">
                        <v-icon x-large class="bg-newsletter pa-0" color="primary">mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-fab-transition>
            </v-toolbar>
            <v-card-text class="text-center">
                <span class="text-h4">Suscribete a nuestro</span>
                <strong class="text-h4 font-weight-bold">newsletter</strong><br>
                <span class="subtitle-2 primary--text">Suscribete para recibir contenido exclusivo</span>
                <div class="d-flex flex-wrap justify-center align-center my-4">
                    <v-text-field dense class="rounded-0 white" v-model="correo" placeholder="Ingresa tu email"
                        style="max-width:400px;" outlined hide-details="auto"></v-text-field>
                    <v-btn color="primary" class="body-2 font-weight-bold text-normal rounded-0 white--text elevation-0"
                        height="40" @click.native="agree">Enviar</v-btn>
                </div>
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
            message: null,
            title: null,
            options: {
                color: "white",
                zIndex: 200,
                noconfirm: false,
            },
            correo: ''
        };
    },
    methods: {
        open(options) {
            this.dialog = true;

            this.options = Object.assign(this.options, options);
            return new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        },
        agree() {
            if (this.correo != null && this.correo != '') {

                this.resolve({ response: this.correo, status: 200 });
                this.dialog = false;
            }else{

            }
        },
        cancel() {
            this.resolve({ response: null, status: 400 });
            this.dialog = false;
        },
    },
};
</script>

<style>
.custom-dialog {
    align-self: flex-start;
    margin: 0px;
}

.bg-newsletter {
    background-color: rgb(204, 204, 204) !important;
}
</style>
