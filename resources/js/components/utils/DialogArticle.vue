<template>
    <v-dialog scrollable opacity="0.3" v-model="dialog" persistent width="1000">
        <v-card class="rounded-0 elevation-0 pa-4">
            <v-card-text class="pa-4">
                <div class="display-1 mb-5 alternative--text mb-4">{{ title }}</div>
                <v-img :src="foto"></v-img>

                <div class="ql-editor" v-html="this.content"></div>
            </v-card-text>

            <v-card-actions class="pt-3">
                <v-spacer></v-spacer>
                <v-btn
                    color="sky"
                    class="body-2 font-weight-bold text-normal rounded-0"
                    outlined
                    @click.prevent="agree"
                >Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import dedent from 'dedent'
export default {
    data: function () {
        return {
            dialog: false,
            resolve: null,
            reject: null,
            foto: null,
            title: null,
            content: null,
        };
    },
    methods: {
        open(title, foto, content) {

            this.dialog = true;
            this.title = title;
            this.foto = foto;
            this.content = content != null ?  dedent(content) : '<div></div>';
            return new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        },
        agree() {
            this.resolve(true);
            this.dialog = false;
        },
    },
};
</script>

<style>
.ql-editor {
    height: auto !important;
}
</style>
