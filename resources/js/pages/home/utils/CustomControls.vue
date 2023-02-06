<template>
    <div class="d-flex justify-between px-md-4">
        <v-btn
            id="no-background-hover"
            :ripple="false"
            @click.prevent="onClickControl('left')"
            color="white"
            text
            ><v-icon large>mdi-arrow-left</v-icon></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
            id="no-background-hover"
            :ripple="false"
            @click.prevent="onClickControl('right')"
            color="white"
            text
            ><v-icon large>mdi-arrow-right</v-icon></v-btn
        >

        <v-btn
            href="#mejores-publicaciones"
            class="btn_slider_bottom"
            id="no-background-hover"
            :ripple="false"
            color="white"
            text
            ><v-icon large>mdi-arrow-down</v-icon></v-btn
        >
    </div>
</template>

<script>
export default {
    name: "AsCustomControls",
    props: ["slider"],
    data() {
        return {};
    },

    mounted() {},

    methods: {
        onClickControl(action) {
            if (action == "left") {
                this.slider.show("prev");
            } else if (action == "right") {
                this.slider.show("next");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.btn_slider_bottom {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 40px;
}
</style>
