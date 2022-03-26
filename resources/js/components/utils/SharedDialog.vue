<template>
    <v-dialog opacity="0.3" v-model="dialog"  width="450">
        <v-card class="rounded-0 elevation-0 pa-8">
            <v-card-text class="text-center">
                <span class="text-h6 black--text">Compartir entrada</span>
            </v-card-text>
            <v-row class="pa-4" v-if="!linked">
                <v-col class="text-center">
                    <ShareNetwork
                        network="facebook"
                        :url="link"
                        :title="title"
                        :description="contenido"
                    >
                        <v-btn fab small color="facebook" class="elevation-0">
                            <v-icon color="white">mdi-facebook</v-icon>
                        </v-btn>
                    </ShareNetwork>
                </v-col>

                <v-col class="text-center">
                    <ShareNetwork
                        network="twitter"
                        :url="link"
                        :title="title"
                        :description="contenido"
                    >
                        <v-btn fab small color="twitter" class="elevation-0">
                            <v-icon color="white">mdi-twitter</v-icon>
                        </v-btn>
                    </ShareNetwork>
                </v-col>

                <v-col class="text-center">
                    <ShareNetwork
                        network="linkedin"
                        :url="link"
                        :title="title"
                        :description="contenido"
                    >
                        <v-btn fab small color="linkedin" class="elevation-0">
                            <v-icon color="white">mdi-linkedin</v-icon>
                        </v-btn>
                    </ShareNetwork>
                </v-col>

                <v-col class="text-center">
                    <v-btn
                        @click.prevent="linked = !linked"
                        fab
                        small
                        color="black"
                        class="elevation-0"
                    >
                        <v-icon color="white">mdi-link-variant</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="pa-4" v-else>
                <v-col class="col-12">
                    <v-text-field v-model="link"></v-text-field>
                </v-col>
                <v-col class="col-12 text-center">
                    <v-btn class="primary white--text rounded-0 text-normal"   @click.prevent="copyText()">Copiar enlace</v-btn>

                    <v-btn class="rounded-0 text-normal mr-2 my-2"  text @click.prevent="linked= !linked ">Cancelar</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    data: function () {
        return {

            linked: false,

            dialog: false,
            resolve: null,
            reject: null,
            link: '',
            title: '',
            user: '',
            contenido: null,
            tags:null
        };
    },
    methods: {
        open(link, title, contenido, user,tags = null) {

            this.dialog = true;
            this.link = location.protocol + '//' + location.host + "/post/" + link;
            this.title = title
            this.contenido = contenido
            this.user = user
            this.tags = tags
            return new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        },
        agree() {
            this.resolve(true);
            this.dialog = false;
        },
        copyText() {
            navigator.clipboard.writeText(this.link);

            Vue.$toast.success("url del post copiado")
        }
    },
};
</script>

<style>
.ql-editor {
    height: auto !important;
}
</style>
