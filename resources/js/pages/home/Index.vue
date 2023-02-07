<template>
    <div>
        <v-container fluid class="fixed-top pa-0">
            <v-row class="pa-0 ma-0">
                <v-col class="col-12 pa-0 ma-0">
                    <!-- <div class="flux-overlap"></div> -->

                    <vue-flux
                        :options="vfOptions"
                        :images="vfImages"
                        :transitions="vfTransitions"
                        ref="slider_main"
                        class="flux-container"
                        :captions="vfCaptions"
                    >
                        <custom-controls
                            v-if="mounted"
                            slot="controls"
                            :slider="$refs.slider_main"
                        ></custom-controls>
                        <!-- <template v-slot:controls>
                            <flux-controls />
                        </template> -->
                        <template v-slot:caption>
                            <flux-caption v-slot="captionProps">
                                <div class="flux-content">
                                    <v-img
                                        v-if="captionProps.text.image != null"
                                        :src="captionProps.text.image"
                                        class="mx-auto image-as pa-0 my-0"
                                    ></v-img>

                                    <div
                                        v-if="captionProps.text.title != null"
                                        class="pa-0 ma-0"
                                    >
                                        <div class="content-desc-title mx-auto">
                                            <span
                                                v-for="(
                                                    element, i
                                                ) in captionProps.text.title"
                                                :key="i"
                                            >
                                                <p
                                                    class="as-text_large ma-0"
                                                    v-if="
                                                        element.type == 'normal'
                                                    "
                                                >
                                                    <span>{{
                                                        element.text
                                                    }}</span>
                                                </p>
                                                <strong
                                                    class="as-text_underline font-weight-bold"
                                                    v-else
                                                    >{{ element.text }}</strong
                                                >
                                            </span>
                                        </div>
                                    </div>

                                    <p
                                        v-if="
                                            captionProps.text.subtitle_image !=
                                            null
                                        "
                                        class="pa-0 ma-0 py-md-2"
                                    >
                                        <span class="as-title_large">
                                            {{
                                                captionProps.text.subtitle_image
                                            }}
                                        </span>
                                    </p>

                                    <div
                                        v-if="
                                            captionProps.text.subtitle != null
                                        "
                                        class="pa-0 ma-0 my-5"
                                    >
                                        <div
                                            class="content-desc-subtitle mx-auto"
                                        >
                                            <span
                                                v-for="(
                                                    element, i
                                                ) in captionProps.text.subtitle"
                                                :key="i"
                                            >
                                                <span
                                                    class="as-text_normal"
                                                    v-if="
                                                        element.type == 'normal'
                                                    "
                                                    >{{ element.text }}</span
                                                >
                                                <strong
                                                    class="as-text_normal"
                                                    v-else-if="
                                                        element.type == 'strong'
                                                    "
                                                    >{{ element.text }}</strong
                                                >
                                                <p
                                                    class="as-text_normal ma-0"
                                                    v-else
                                                >
                                                    <span>{{
                                                        element.text
                                                    }}</span>
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        v-if="captionProps.text.actions != null"
                                    >
                                        <div
                                            class="content-desc-title mx-auto d-flex justify-space-between my-6"
                                        >
                                            <span
                                                v-for="(
                                                    action, i
                                                ) in captionProps.text.actions"
                                                :key="i"
                                                class="mx-auto"
                                            >
                                                <v-hover v-slot="{ hover }">
                                                    <v-btn
                                                        :color="
                                                            hover
                                                                ? 'primary'
                                                                : 'white'
                                                        "
                                                        class="font-weight-bold rounded-0"
                                                        :large="
                                                            $vuetify.breakpoint
                                                                .xl ||
                                                            $vuetify.breakpoint
                                                                .lg ||
                                                            $vuetify.breakpoint
                                                                .md
                                                        "
                                                        :small="
                                                            $vuetify.breakpoint
                                                                .xs
                                                        "
                                                        :outlined=" hover ? false : true"


                                                        :class="
                                                            hover
                                                                ? 'white--text'
                                                                : 'white--text'
                                                        "
                                                        block
                                                        :href="action.href"
                                                        >{{
                                                            action.title
                                                        }}</v-btn
                                                    >
                                                </v-hover>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="mt-12">
                                    <v-btn
                                        fab
                                        outlined
                                        color="white"
                                        href="#ayudanos"
                                    >
                                        <v-icon class="white--text" large
                                            >mdi-chevron-down</v-icon
                                        >
                                    </v-btn>
                                </div> -->
                            </flux-caption>
                        </template>

                        <template v-slot:pagination>
                            <flux-pagination></flux-pagination>
                        </template>
                    </vue-flux>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 ma-0 main-content">
            <v-row
                id="mejores-publicaciones"
                class="ma-0 pa-0 mt-16 py-5 d-flex content-wrap-2 justify-center align-center mx-auto"
            >
                <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                    <span class="as-text_extraLarge primary--text"
                        >Nuestras</span
                    >
                    <br />
                    <span
                        class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                        >Publicaciones</span
                    >
                </v-col>
                <v-col
                    class="col-12 col-md-6 text-center text-md-right my-4 d-none d-md-block"
                >
                    <v-hover v-slot="{ hover }">
                        <v-btn
                            id="no-background-hover"
                            :ripple="false"
                            @click.prevent="goToPosts()"
                            large
                            class="text-normal text-h6 font-weight-bold"
                            text
                            :class="hover ? 'chev_move_right' : ''"
                            >Más publicaciones

                            <v-icon class="chev_custom" right>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row
                class="pa-0 ma-0 mx-auto content-wrap-2 justify-center align-start pt-xl-16 pt-md-10 mb-16"
                style="min-height: 400px"
            >
                <v-col
                    class="col-12 col-xl-4 col-lg-6 d-flex align-start justify-center fade-in pr-md-4 pr-lg-10 pr-xl-15"
                    v-for="(post, idx) in bestsPost"
                    style="min-height: 800px"
                    :key="'b-post' + idx"
                >
                    <PostComponent
                        :post="post"
                        style="width: 100%"
                    ></PostComponent>
                </v-col>
            </v-row>
            <v-row class="pa-0 ma-0">
                <v-col
                    class="col-12 col-md-6 text-end px-3 pt-0 d-block d-md-none"
                >
                    <v-hover v-slot="{ hover }">
                        <v-btn
                            @click.prevent="goToPosts()"
                            large
                            class="text-normal text-h6 px-0 font-weight-bold"
                            text
                            id="no-background-hover"
                            :ripple="false"
                            :class="hover ? 'chev_move_right' : ''"
                            >Más publicaciones

                            <v-icon class="chev_custom" right>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row
                class="pa-0 ma-0 mx-auto justify-end align-center testimonio"
            >
                <v-col class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 pa-0">
                    <div class="testimonio_content">
                        <p
                            class="text-xl-h4 text-lg-h4 text-sm-h5 text-h6 white--text font-italic"
                        >
                            "Excellent firm.<br />
                            Great depth and sophistication, <br />very
                            experienced at working with international parties
                            and in English.<br />
                            They are among the top tier of law firms in Peru."
                        </p>
                        <p
                            class="text-xl-h5 text-lg-h5 text-sm-h6 text-subtitle-1 white--text"
                        >
                            (Legal 500, 2022)
                        </p>
                    </div>
                </v-col>
            </v-row>

            <!-- <v-row
                class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith"
                id="ayudanos"
            >
                <v-col class="col-12 pa-0 ma-0">
                    <v-img src="/app/bandwith.png"></v-img>
                </v-col>
            </v-row> -->

            <!-- <v-row
                class="ma-0 pa-0 my-10 d-flex justify-center content-wrap-2 mx-auto container-different"
            >
                <v-col class="col-10 col-xs-6 col-md-5 pa-5">
                    <comilla></comilla>

                    <v-card
                        class="rounded-0 elevation-2 container-card mx-auto"
                    >
                        <v-card-text class="pa-6 text-line-card text-center">
                            <span class="as-title_large alternative--text">
                                Ayudamos a
                                <strong>cumplir los objetivos</strong> de
                                nuestros clientes,
                                <strong>promoviendo su crecimiento</strong>,
                                rentabilidad y la gestión de sus riesgos.
                            </span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row> -->

            <v-row
                class="ma-0 my-5 pa-0 pa-3 d-flex justify-center content-wrap mx-auto mt-16"
            >
                <v-col
                    class="col-12 col-md-6 col-lg-5 col-xl-4 pa-5 px-6 d-flex align-center justify-md-start justify-center"
                >
                    <v-card
                        class="rounded-circle d-flex align-center"
                        color="primary"
                        height="102"
                        width="102"
                    >
                        <v-card-text class="pa-0">
                            <v-img
                                src="/app/focus_light.png"
                                height="86"
                                width="103"
                                class="mx-auto"
                            ></v-img>
                        </v-card-text>
                    </v-card>
                    <v-card class="elevation-0 d-flex align-center px-4">
                        <div class="d-block">
                            <span class="as-text_extraLarge primary--text"
                                >¿Qué nos</span
                            >
                            <br />
                            <span
                                class="as-text_extraLarge pl-7 font-weight-bold text-uppercase primary--text"
                                >diferencia?</span
                            >
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                class="ma-0 my-5 pa-0 pa-3 d-flex justify-center content-wrap mx-auto"
            >
                <v-col
                    class="col-12 col-md-6 col-lg-5 col-xl-4 pa-5 px-0 d-flex flex-row justify-center"
                >
                    <ul style="max-width: 500px">
                        <li class="as-li_normal black--text py">
                            Asesores con más de
                            <strong>20 años de experiencia.</strong>
                        </li>
                        <li class="as-li_normal black--text">
                            Visión estratégica.
                        </li>
                        <li class="as-li_normal black--text">
                            Metodología ágil y colaborativa.
                        </li>
                        <li class="as-li_normal black--text">
                            Conocimiento del mercado.
                        </li>
                        <li class="as-li_normal black--text">
                            Enfoque digital y de experiencia al usuario (UX).
                        </li>
                    </ul>
                </v-col>
            </v-row>
            <v-row
                class="ma-0 pa-0 pa-3 d-flex justify-center content-wrap mx-auto mb-16"
            >
                <v-col
                    class="col-12 col-md-6 col-lg-5 col-xl-4 pa-5 px-0 d-flex flex-row justify-center"
                >
                    <v-hover v-slot="{ hover }">
                        <v-btn
                            :loading="loadAsesoria"
                            @click.prevent="downloadBrochure()"
                            color="primary"
                            :x-large="
                                $vuetify.breakpoint.xl ||
                                $vuetify.breakpoint.lg ||
                                $vuetify.breakpoint.md
                            "
                            class="rounded-0"
                        >
                            <h4>Descargar brochure</h4>
                            <transition name="fade" mode="out-in">
                                <v-icon
                                    class="ml-4 mr-0 pr-0"
                                    right
                                    :large="
                                        $vuetify.breakpoint.xl ||
                                        $vuetify.breakpoint.lg ||
                                        $vuetify.breakpoint.md
                                    "
                                    v-if="hover"
                                >
                                    mdi-chevron-right
                                </v-icon>
                            </transition>
                        </v-btn>
                    </v-hover>
                </v-col>
            </v-row>

            <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0 ma-0 rotate-180 container-bandwith">
                    <v-img src="/app/bandwith.png "></v-img>
                </v-col>
            </v-row> -->
            <!-- <v-row class="pa-0 ma-0 primary content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0">
                    <v-card-text class="text-uppercase white--text text-center">
                        <span class="as-text_extraLarge">Nuestros</span>
                        <br />
                        <span class="as-text_extraLarge pl-16 font-weight-bold"
                            >Servicios</span
                        >
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
                <v-col class="col-12 pa-0 ma-0">
                    <div class="flux-overlap-servicios"></div>
                    <div class="flux-servicios">
                        <vue-flux
                            :options="vfOptions_services"
                            :images="vfImages_services"
                            :transitions="vfTransitions_services"
                            ref="slider_services"
                            class="flux-servicios"
                            :captions="vfCaptions_services"
                        >
                            <template v-slot:controls>
                                <flux-controls />
                            </template>
                            <template v-slot:caption>
                                <flux-caption
                                    v-slot="captionProps"
                                    style="position: absolute; top: 10%"
                                >
                                    <p
                                        class="white--text as-text_extraLarge mb-0 font-weight-bold mx-auto"
                                        style="width: 350px; line-height: 1"
                                    >
                                        {{ captionProps.text.title }}
                                    </p>
                                    <p class="white--text as-text_normal my-4">
                                        {{ captionProps.text.subtitle }}
                                    </p>
                                    <ul
                                        class="white--text text-start mx-auto"
                                        style="max-width: 350px"
                                    >
                                        <li
                                            class="white--text text-subtitle-1"
                                            v-for="(element, i) in captionProps
                                                .text.detalles"
                                            :key="'data' + i"
                                        >
                                            {{ element }}
                                        </li>
                                    </ul>
                                    <v-hover v-slot="{ hover }">
                                        <v-btn
                                            :to="captionProps.text.link"
                                            :class="{
                                                'primary--text white': hover,
                                            }"
                                            outlined
                                            rounded
                                            color="white"
                                            class="white--text font-weight-bold text-normal my-10 px-10"
                                            >Ver más</v-btn
                                        >
                                    </v-hover>
                                </flux-caption>
                            </template>

                            <template v-slot:pagination>
                                <flux-pagination></flux-pagination>
                            </template>
                        </vue-flux>
                    </div>
                </v-col>
            </v-row> -->
            <!-- <v-row class="pa-0 ma-0 content-wrap-2 mx-auto container-bandwith">
                <v-col class="col-12 pa-0 ma-0">
                    <v-img src="/app/bandwith.png"></v-img>
                </v-col>
            </v-row> -->

            <v-row
                class="pa-0 ma-0 mx-auto justify-center align-start py-16 grey"
            >
                <v-col class="col-12 col-md-6 pa-0 pr-md-16">
                    <v-img
                        src="https://www.vinateatoyama.com/wp-content/uploads/2022/06/home-nuestras-areas-v2-1024x682.jpg"
                    ></v-img>
                </v-col>
                <v-col
                    class="col-12 col-md-6 pa-md-0 pt-10 align-center px-md-4"
                >
                    <v-card-text
                        class="text-uppercase white--text text-start py-0"
                    >
                        <span class="as-text_extraLarge">Nuestros</span>
                        <br />
                        <span class="as-text_extraLarge pl-16 font-weight-bold"
                            >Servicios</span
                        >
                    </v-card-text>
                    <div class="pt-8 container_services">
                        <v-card-text
                            class="pb-1 py-0 px-1 pr-xl-16"
                            v-for="(service, idx) in vfCaptions_services"
                            :key="'service_' + idx"
                        >
                            <v-hover v-slot="{ hover }">
                                <v-card
                                    class="mr-md-auto rounded-0"
                                    @click.prevent="goToService(service)"
                                    :ripple="false"
                                >
                                    <v-card-text
                                        class="pa-0 d-flex align-center justify-between"
                                        style="position: relative"
                                        :class="hover ? 'grey darken-2' : ''"
                                    >
                                        <div
                                            style="width: 15%; height: 95px"
                                            class="pa-3 pa-md-4 pa-lg-8 pa-xl-14 px-xl-10 text-subtitle-1 d-flex align-center justify-center"
                                        >
                                            <transition
                                                v-if="hover"
                                                name="slide-fade"
                                                mode="out-in"
                                            >
                                                <span class="white--text">{{
                                                    String(idx + 1).padStart(
                                                        2,
                                                        0
                                                    )
                                                }}</span>
                                            </transition>
                                            <transition
                                                v-else
                                                name="slide-fade"
                                                mode="in-out"
                                            >
                                                <span class="black--text">{{
                                                    String(idx + 1).padStart(
                                                        2,
                                                        0
                                                    )
                                                }}</span>
                                            </transition>
                                        </div>
                                        <h1
                                            style="width: 65%; height: 95px"
                                            class="pa-3 pa-md-4 pa-lg-8 pa-xl-14 px-xl-6 text-subtitle-1 font-weight-bold ma-0 d-flex align-center"
                                        >
                                            <transition
                                                v-if="hover"
                                                name="slide-fade"
                                                mode="out-in"
                                            >
                                                <span
                                                    v-if="hover"
                                                    class="white--text"
                                                    >{{ service.title }}</span
                                                >
                                            </transition>
                                            <transition
                                                v-else
                                                name="slide-fade"
                                                mode="in-out"
                                            >
                                                <span class="black--text">{{
                                                    service.title
                                                }}</span>
                                            </transition>
                                        </h1>

                                        <transition
                                            name="slide-fade"
                                            mode="out-in"
                                        >
                                            <div
                                                v-if="hover"
                                                style="width: 25%; height: 95px"
                                                class="pa-3 pa-md-4 pa-lg-8 pa-xl-14 px-xl-6 d-flex align-center justify-center primary v-card--repeal text-subtitle-1 font-weight-bold white--text"
                                            >
                                                ver más
                                            </div>
                                        </transition>
                                    </v-card-text>
                                </v-card>
                            </v-hover>
                        </v-card-text>
                    </div>
                </v-col>
            </v-row>

            <v-row
                class="pa-0 ma-0 content-wrap justify-center align-start mx-auto mt-16"
                id="solicita-asesoria"
            >
                <v-col
                    class="col-12 d-flex align-center justify-md-center justify-center"
                >
                    <div class="d-block">
                        <span class="as-text_extraLarge primary--text"
                            >Solicita tu</span
                        >
                        <br />
                        <span
                            class="as-text_extraLarge pl-7 font-weight-bold text-uppercase primary--text"
                            >asesoría</span
                        >
                    </div>
                </v-col>
                <v-col class="col-12 col-md-6 col-lg-5 col-xl-4 pa-5">
                    <v-container class="pa-0 ma-0">
                        <v-row class="pa-0 ma-0">
                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Nombres y apellidos"
                                    outlined
                                    v-model="form.nombres"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Email"
                                    outlined
                                    v-model="form.email"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-text-field
                                    class="rounded-0"
                                    color="primary"
                                    label="Teléfono"
                                    outlined
                                    v-model="form.telefono"
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>

                            <v-col class="col-12 col-md-6">
                                <v-select
                                    :items="servicios"
                                    class="rounded-0"
                                    label="Selecciona un servicio"
                                    item-text="nombre"
                                    outlined
                                    return-object
                                    v-model="servicio"
                                    hide-details="auto"
                                ></v-select>
                            </v-col>

                            <v-col class="col-12">
                                <v-textarea
                                    outlined
                                    height="100"
                                    class="rounded-0"
                                    label="Comentarios"
                                    v-model="form.comentario"
                                    hide-details="auto"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <v-row
                class="content-wrap justify-center align-start mx-auto mx-auto ma-0 mb-16"
            >
                <v-col class="col-12 col-md-6 col-lg-5 col-xl-4 pa-5">
                    <v-container class="pa-0">
                        <v-row class="pa-0 ma-0">
                            <v-col class="pa-0 col-12 text-center">
                                <v-btn
                                    :loading="loadAsesoria"
                                    @click.prevent="sendRequest()"
                                    color="primary"
                                    :x-large="
                                        $vuetify.breakpoint.xl ||
                                        $vuetify.breakpoint.lg ||
                                        $vuetify.breakpoint.md
                                    "
                                    class="px-10 rounded-0"
                                >
                                    <h4>Enviar solicitud</h4>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <!--include footer-->
            <FooterGlobal></FooterGlobal>
        </v-container>

        <ChatComponent></ChatComponent>
    </div>
</template>

<script>
import {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
} from "vue-flux";
import Comilla from "./utils/Comilla.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import ChatComponent from "../../components/global/ChatComponent.vue";
import PostComponent from "./post/PostComponent.vue";
import CustomControls from "./utils/CustomControls.vue";
export default {
    components: {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
        Comilla,
        FooterGlobal,
        ChatComponent,
        PostComponent,
        CustomControls,
    },
    data: () => ({
        mounted: false,
        bestsPost: [],
        form: {
            nombres: "",
            email: "",
            telefono: "",
            servicio: "",
            comentario: "",
        },
        servicio: {
            nombre: "",
        },

        loadAsesoria: false,
        vfOptions: {
            autoplay: true,
            allowToSkipTransition: true,
            delay: 4000,
            autohideTime: 0,
        },
        vfImages: ["/app/file1.webp", "/app/file2.webp"],
        vfTransitions: ["fade", "fade"],
        vfCaptions: [
            {
                image: "/app/logo_home.png",
                subtitle_image: null,
                title: null,
                subtitle: [
                    {
                        text: "Empresa",
                        type: "normal",
                    },
                    {
                        text: " peruana ",
                        type: "strong",
                    },
                    {
                        text: " que brinda servicios de ",
                        type: "normal",
                    },
                    {
                        text: "consultoría",
                        type: "strong",
                    },
                    {
                        text: " especializada.",
                        type: "normal",
                    },
                ],

                actions: [
                    {
                        title: "Solicita tu asesoria",
                        href: "#solicita-asesoria",
                    },
                ],
            },
            {
                image: null,
                subtitle_image: null,
                title: [
                    {
                        text: "REACTIVA TU",
                        type: "normal",
                    },
                    {
                        text: "PYME",
                        type: "underline",
                    },
                ],
                subtitle: [
                    {
                        text: "Conoce como reactivar",
                        type: "normal",
                    },
                    {
                        text: " tu negocio y llevarlo al siguiente nivel",
                        type: "salto_linea",
                    },
                ],
                actions: [
                    {
                        title: "Solicita tu asesoria",
                        href: "#solicita-asesoria",
                    },
                ],
            },
        ],

        /**for services */
        vfOptions_services: {
            autoplay: true,
            allowToSkipTransition: true,
            delay: 3000,
        },
        vfImages_services: [
            "/app/tecnologia.webp",
            "/app/finanzas.webp",
            "/app/procesos.webp",
            "/app/pyme_digital.webp",
        ],
        vfTransitions_services: ["slide", "slide", "slide", "slide"],
        vfCaptions_services: [
            {
                title: "Tecnología",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Software a medida (web / app).",
                    "Soporte técnico computacional (outsourcing).",
                    "Proyectos de TI (ágiles y tradicionales).",
                    "Tableros de control en línea.",
                    "Gestión integral de proveedores.",
                ],
                link: "/tecnologia",
            },
            {
                title: "Finanzas y Contabilidad",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Outsourcing contable.",
                    "Outsourcing de planillas.",
                    "Auditorías especializadas.",
                    "Reestructuración financiera.",
                    "Consultoría tributaria y legal.",
                ],
                link: "/finanzas",
            },
            {
                title: "Procesos",
                subtitle: "Nuestros principales servicios:",
                detalles: [
                    "Diseño y optimización de procesos.",
                    "Inventario de activos (metodología ágil).",
                    "Programa de reducción de costos.",
                    "​Reingeniería organizacional.",
                    "Gestión de riesgos.",
                ],
                link: "/procesos",
            },
            {
                title: "Pyme Digital",
                subtitle: "Nuestros principales servicios:",
                detalles: ["Reactiva tu empresa.", "Mi carta digital."],
                link: "/",
            },
        ],

        /**data */
        servicios: [
            {
                id: 1,
                nombre: "Tecnología",
            },
            {
                id: 2,
                nombre: "Finanzas y Contabilidad",
            },
            {
                id: 3,
                nombre: "Procesos",
            },
        ],
    }),
    mounted() {
        this.getPath();
        this.mounted = true;
        this.$store.dispatch(
            "app/changeTitlePage",
            "Empresa Consultora Peruana | A&S Consulting Group | Santiago de Surco"
        );
        document.title = this.$store.state.app.title_page;

        this.$store.dispatch("app/openPage", {
            page: window.location.pathname,
            link: window.location.host + window.location.pathname,
        });
        this.getData();
    },
    destroyed() {
        this.$store.dispatch("app/closePage", {
            visita_id: this.$store.state.app.visita_id,
        });
    },
    methods: {
        getData() {
            axios
                .get("api/posts/bests")
                .then((res) => {
                    this.bestsPost = res.data.posts;
                })
                .catch((err) => console.log(err));
        },
        getPath() {
            let path = window.location.pathname + window.location.search;

            this.$store.dispatch("app/setPath", path);
        },
        goToPosts() {
            this.$router.push({ name: "publicaciones" });
        },
        goToService(service) {
            this.$router.push({ path: service.link });
        },
        sendRequest() {
            this.form.servicio = this.servicio.nombre;
            this.loadAsesoria = true;
            if (
                this.form.nombres != "" &&
                this.form.email != "" &&
                this.form.telefono != "" &&
                this.form.servicio != "" &&
                this.form.comentario != ""
            ) {
                //let data = new FormData(this.form)
                axios
                    .post("/api/asesoria", this.form)
                    .then((res) => {
                        Vue.$toast.success(
                            "Su solicitud de asesoría ha sido enviada, nos comunicaremos con ud"
                        );
                        this.loadAsesoria = false;
                        this.form = {
                            nombres: "",
                            email: "",
                            telefono: "",
                            servicio: "",
                            comentario: "",
                        };
                        this.servicio = {
                            nombre: "",
                        };
                        this.loadAsesoria = false;
                    })
                    .catch((err) => {
                        this.loadAsesoria = false;
                        Vue.$toast.error("Error de conexión");
                    });
                return;
            }
            Vue.$toast.warning("Llene todos los campos del formulario");
            this.loadAsesoria = false;
        },
        downloadBrochure() {
            this.download_file(
                "https://asconsulting.pe/Brochure-A&S-Consulting-Group.pdf",
                "Brochure-A&S-Consulting-Group"
            ); //call function
        },
        /* Helper function */
        download_file(fileURL, fileName) {
            // for non-IE
            if (!window.ActiveXObject) {
                var save = document.createElement("a");
                save.href = fileURL;
                save.target = "_blank";
                var filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
                save.download = fileName || filename;
                if (
                    navigator.userAgent
                        .toLowerCase()
                        .match(/(ipad|iphone|safari)/) &&
                    navigator.userAgent.search("Chrome") < 0
                ) {
                    document.location = save.href;
                    // window event not working here
                } else {
                    var evt = new MouseEvent("click", {
                        view: window,
                        bubbles: true,
                        cancelable: false,
                    });
                    save.dispatchEvent(evt);
                    (window.URL || window.webkitURL).revokeObjectURL(save.href);
                }
            }

            // for IE < 11
            else if (!!window.ActiveXObject && document.execCommand) {
                var _window = window.open(fileURL, "_blank");
                _window.document.close();
                _window.document.execCommand(
                    "SaveAs",
                    true,
                    fileName || fileURL
                );
                _window.close();
            }
        },
        // callbackControlVueFlux(action) {
        //     if (action == "right") {
        //         this.$refs.slider_main
        //         console.log("right");
        //     } else if (action == "left") {
        //         console.log("left");
        //     }
        // },
    },
};
</script>

<style>
.testimonio {
    background: url("https://www.estudiorodrigo.com/wp-content/uploads/2019/01/DSC0203.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
}
.testimonio_content {
    padding: 50px 100px 50px 10px;
}
@media screen and (max-width: 600px) {
    .testimonio {
        height: 300px;
    }
    .testimonio_content {
        padding: 20px 20px 0px 20px;
    }
}

.chev_custom {
    font-weight: bold;
    font-size: 1rem !important;
    margin-left: 20px !important;
    margin-right: 10px !important;
    transform: scale(2, 1); /* W3C */
    -webkit-transform: scale(2, 1); /* Safari and Chrome */
    -moz-transform: scale(2, 1); /* Firefox */
    -ms-transform: scale(2, 1); /* IE 9 */
    -o-transform: scale(2, 1); /* Opera */
}
.flux-container .flux-image {
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.fixed-top {
    position: absolute;
    top: -87px;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 100%;
}
.vue-flux .flux-caption {
    margin: 0 auto;
    color: white;
    background-color: transparent;
}
.flux-caption {
    width: 400px;
    height: 25%;
    /* centrar vertical y horizontalmente */
    position: absolute;
    top: 30%;
}
.flux-overlap {
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 102, 0.1) !important;
}
.flux-overlap-servicios {
    position: absolute;
    z-index: 5;
    height: 500px;
    width: 1480px;
    background-color: rgba(0, 0, 102, 0.1) !important;
}
.flux-content {
    z-index: 6;
}

.flux-pagination li {
    color: white;
    margin: 0px 4.5px 0px 4.5px !important;
    background-color: white;
    padding: 0px !important;
    width: 12px !important;
    height: 12px !important;
    border-radius: 1.6rem;
}
.current {
    color: rgba(255, 255, 255, 0.8);
}

.image-as {
    height: 100px;
    width: 200px;
}
.flux-container {
    height: 850px !important;
}
.flux-servicios {
    height: 500px !important;
}
.main-content {
    position: absolute;
    top: calc(817px - 87px);
}

/*.container-different {
  position: relative;
  top: -300px;
}*/
.text-line-card {
    line-height: 1.3;
}
.container-card {
    max-width: 442px;
    background-color: #e3e2e2 !important;
}

@media screen and (max-width: 992px) {
    .image-as {
        height: 3.4rem;
        width: 6.8rem;
    }

    .flux-container {
        height: 500px !important;
    }
    .flux-overlap {
        position: absolute;
        z-index: 5;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
    .flux-content {
        z-index: 2;
    }

    .main-content {
        position: absolute;
        top: calc(500px - 87px);
    }
    .flux-servicios {
        height: 400px !important;
    }
    .flux-overlap-servicios {
        position: absolute;
        z-index: 5;
        height: 400px;
        width: 100%;
        background-color: rgba(0, 0, 102, 0.38) !important;
    }
}

/**flux controls */

.flux-controls .play {
    display: none !important;
}
.flux-controls .pause {
    display: none !important;
}

.flux-button svg circle {
    fill: transparent;
    color: white;
}
.flux-button:hover svg svg polyline {
    stroke: white !important;
}
.container_services {
    max-width: 520px;
}
@media screen and (max-width: 992px) {
    .container_services {
        max-width: 100%;
    }
}
.chev_move_right {
    transform: translateX(5px);

    transition: all 0.3s;
}
</style>
