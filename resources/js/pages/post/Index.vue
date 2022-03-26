<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0">
            <v-col class="col-12 col-md-12 py-0 px-md-2 px-0" justify="space-around">
                <v-sheet elevation="0" class="py-4 px-1">
                    <v-chip-group show-arrows active-class="primary--text">
                        <v-chip
                            class="px-6 v-size--small py-6 rounded-0 text-uppercase font-weight-bold white primary--text"
                            v-for="(categoria, i) in categorias"
                            :key="i"
                            @click.prevent="goToPublicaciones(categoria)"
                        >{{ categoria.nombre }}</v-chip>
                    </v-chip-group>
                </v-sheet>
            </v-col>

            <!--<v-col class="col-12 col-md-2 py-0 px-md-2 px-4 justify-center align-center">
                <v-text-field
                    class="caption py-6"
                    placeholder="Buscar"
                    append-icon="mdi-magnify"
                    hide-details="auto"
                ></v-text-field>
            </v-col>-->
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-article mx-auto elevation-0" v-if="loadingFilterPosts" style="min-height:calc(100vh - 250px);">
            <v-col class="col-12 ma-0 pa-4 px-md-16 d-flex flex-wrap align-center">
                <v-card-text class="content-wrap-0 mx-auto">
                    <div style="height: 50px">
                        <lottie-animation
                            ref="anim"
                            :loop="true"
                            :autoPlay="true"
                            :loopDelayMin="2.5"
                            :loopDelayMax="5"
                            :speed="1"
                            :width="50"
                            :height="50"
                            :animationData="require('/lottie/loading.json')"
                        />
                    </div>
                </v-card-text>
            </v-col>
        </v-row>

        <v-row
            class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"
            v-if="!loadingFilterPosts"
        >
            <v-col class="col-12 ma-0 pa-4 px-md-16 d-flex flex-wrap align-center">
                <v-list-item>
                    <v-list-item-avatar color="grey">
                        <v-avatar v-if="post.user_foto != null" class="pa-1">
                            <v-img :src="post.user_foto" :alt="post.name" aspect-ratio="1"></v-img>
                        </v-avatar>
                        <v-avatar v-else class="grey lighten-3 pa-1">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 60 60"
                                enable-background="new 0 0 60 60;"
                                xml:space="preserve"
                                height="36"
                                width="36"
                                class="s2FZSQ"
                            >
                                <g>
                                    <ellipse
                                        fill="#979797"
                                        cx="30.7"
                                        cy="22.3"
                                        rx="11.5"
                                        ry="11.6"
                                    />
                                    <g>
                                        <ellipse
                                            fill="none"
                                            cx="30.7"
                                            cy="22.3"
                                            rx="11.5"
                                            ry="11.6"
                                        />
                                        <path
                                            fill="#979797"
                                            d="M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8
    			c5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1
    			C46.3,41.6,38.6,37.1,29.9,37.1z"
                                        />
                                        <path
                                            fill="#D8D8D8"
                                            d="M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6
    			c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8
    			c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4
    			c0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8
    			c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5
    			c0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1
    			c0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1
    			c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5
    			c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7
    			c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6
    			c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8
    			c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6
    			c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z
    			 M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-text="post.name + ' ' + post.last_name"></v-list-item-title>

                        <v-list-item-subtitle
                            v-text="
                                formatDate(post.fecha_publicacion) +
                                ' - ' +
                                getInt(post.lectura) +
                                ' min de lectura'
                            "
                        ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    dark
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    text
                                    class="elevation-0 primary--text"
                                    fab
                                    small
                                >
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>

                            <v-list class="pa-0 ma-0">
                                <v-list-item link>
                                    <v-list-item-title
                                        class="caption"
                                        @click.prevent="showSharedDialog(post)"
                                    >
                                        <v-icon small left>mdi-share</v-icon>Compartir entrada
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item-action>
                </v-list-item>
            </v-col>
        </v-row>

        <v-row
            class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"
            v-if="!loadingFilterPosts"
        >
            <v-col class="col-12 ma-0 pa-4 px-md-16 pb-md-16" style="min-height: 588px">
                <v-card-text class="pa-0">
                    <div class="display-1 mb-5 alternative--text mb-4">{{ post.titulo }}</div>
                    <v-img :src="post.foto"></v-img>

                    <div class="ql-editor pa-0 py-6" v-html="this.post.contenido"></div>
                </v-card-text>

                <v-card-text class="pa-0">
                    <v-chip-group column>
                        <div v-for="tag in tags" :key="tag.id">
                            <v-hover v-slot="{ hover }">
                                <v-chip
                                    @click="goToTag(tag)"
                                    color="black"
                                    outlined
                                    class="black elevation-0 px-6 py-4 rounded-0 subtitle-2"
                                    :class="{ 'grey lighten-2 ': hover }"
                                >{{ tag.tag }}</v-chip>
                            </v-hover>
                        </div>
                    </v-chip-group>
                </v-card-text>
            </v-col>
        </v-row>

        <v-row
            class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"
            v-if="!loadingFilterPosts"
        >
            <v-col class="col-12 ma-0 pa-0 px-md-16">
                <v-divider horizontal></v-divider>
            </v-col>
            <v-col
                class="col-12 ma-0 pa-2 d-flex flex-wrap space-between align-center pa-4 px-md-16"
            >
                <ShareNetwork
                    network="facebook"
                    :url="getSharedPost(post.route)"
                    :title="post.titulo"
                    :description="post.contenido"
                >
                    <v-btn fab small class="elevation-0 mr-2">
                        <v-icon color="primary">mdi-facebook</v-icon>
                    </v-btn>
                </ShareNetwork>
                <ShareNetwork
                    network="twitter"
                    :url="getSharedPost(post.route)"
                    :title="post.titulo"
                    :description="post.contenido"
                >
                    <v-btn fab small class="elevation-0 mx-2">
                        <v-icon color="primary">mdi-twitter</v-icon>
                    </v-btn>
                </ShareNetwork>

                <ShareNetwork
                    network="linkedin"
                    :url="getSharedPost(post.route)"
                    :title="post.titulo"
                    :description="post.contenido"
                >
                    <v-btn fab small class="elevation-0 mx-2">
                        <v-icon color="primary">mdi-linkedin</v-icon>
                    </v-btn>
                </ShareNetwork>
                <v-btn fab small class="elevation-0 mx-2" @click.prevent="copyText()">
                    <v-icon color="primary">mdi-link-variant</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    class="caption"
                    color="primary"
                    v-for="categoria in post.categorias"
                    :key="'categoria-' + categoria.id"
                    @click.prevent="goToCategorys(categoria)"
                >{{ categoria.nombre_categoria }}</v-btn>
            </v-col>
            <v-col class="col-12 ma-0 pa-0 px-md-16">
                <v-divider horizontal></v-divider>
            </v-col>
        </v-row>

        <v-row
            class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"
            v-if="!loadingFilterPosts"
        >
            <v-col
                class="col-12 pa-2 d-flex flex-wrap space-between align-center pa-4 px-md-16 pb-md-16"
            >
                <span class="mr-2 primary--text">{{ post.visualizaciones.length }} visualizaciones</span>
                <span class="primary--text">{{ post.comments.length }} comentarios</span>
                <v-spacer></v-spacer>
                <span fab small class="primary--text">
                    {{
                        post.favoritos.length
                    }}
                    <v-btn fab small class="elevation-0 ml-2">
                        <v-icon color="error" @click.prevent="isFavorite()">
                            {{
                                icon_heart
                            }}
                        </v-icon>
                    </v-btn>
                </span>
            </v-col>
        </v-row>
        <!--posts vistos ultimamente-->

        <!--comentarios-->
        <v-row class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"  v-if="!loadingFilterPosts">
            <v-col class="col-12 mt-3 pa-4 px-md-16">
                <v-card-text class="pa-0 align-center d-flex flex-wrap">
                    <span class="primary--text title">Comentarios</span>
                </v-card-text>
                <v-divider horizontal class="my-0 py-0"></v-divider>
            </v-col>
            <v-col class="col-12 d-flex flex-wrap pa-4 px-md-16">
                <v-avatar class="grey lighten-3 pa-1">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        enable-background="new 0 0 60 60;"
                        xml:space="preserve"
                        height="36"
                        width="36"
                        class="s2FZSQ"
                    >
                        <g>
                            <ellipse fill="#979797" cx="30.7" cy="22.3" rx="11.5" ry="11.6" />
                            <g>
                                <ellipse fill="none" cx="30.7" cy="22.3" rx="11.5" ry="11.6" />
                                <path
                                    fill="#979797"
                                    d="M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8
    			c5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1
    			C46.3,41.6,38.6,37.1,29.9,37.1z"
                                />
                                <path
                                    fill="#D8D8D8"
                                    d="M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6
    			c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8
    			c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4
    			c0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8
    			c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5
    			c0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1
    			c0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1
    			c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5
    			c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7
    			c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6
    			c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8
    			c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6
    			c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z
    			 M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z"
                                />
                            </g>
                        </g>
                    </svg>
                </v-avatar>
                <div style="width: calc(100% - 50px) !important" class="align-center">
                    <v-text-field
                        class="ml-4 my-0 py-2"
                        hide-details="auto"
                        placeholder="Escribir un comentario"
                        v-model="comment"
                        @focus="isComment = true"
                        maxlength="500"
                        counter
                    ></v-text-field>
                    <v-card-text class="py-0 d-flex flex-wrap space-between" v-if="isComment">
                        <div>
                            <v-btn
                                fab
                                small
                                text
                                class="elevation-0"
                                @click.prevent="showEmojis = !showEmojis"
                            >
                                <v-icon>mdi-emoticon-outline</v-icon>
                            </v-btn>
                            <VEmojiPicker
                                @select="selectEmoji"
                                v-if="showEmojis"
                                class="showEmoji"
                            />
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            class="text-normal elevation-0 rounded-0"
                            @click.prevent="cancelComment()"
                        >Cancelar</v-btn>
                        <v-btn
                            color="primary"
                            class="text-normal elevation-0 rounded-0 ml-2"
                            @click.prevent="sendComment()"
                        >Publicar</v-btn>
                    </v-card-text>
                </div>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0 content-wrap-article mx-auto elevation-0"  v-if="!loadingFilterPosts">
            <v-col
                class="col-12 d-flex flex-wrap pa-4 px-md-16"
                v-for="comment in post.comments"
                :key="'comment' + comment.id"
            >
                <v-avatar class="grey lighten-3 pa-1" v-if="comment.autor === 'Anónimo'">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        enable-background="new 0 0 60 60;"
                        xml:space="preserve"
                        height="36"
                        width="36"
                        class="s2FZSQ"
                    >
                        <g>
                            <ellipse fill="#979797" cx="30.7" cy="22.3" rx="11.5" ry="11.6" />
                            <g>
                                <ellipse fill="none" cx="30.7" cy="22.3" rx="11.5" ry="11.6" />
                                <path
                                    fill="#979797"
                                    d="M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8
            c5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1
            C46.3,41.6,38.6,37.1,29.9,37.1z"
                                />
                                <path
                                    fill="#D8D8D8"
                                    d="M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6
            c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8
            c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4
            c0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8
            c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5
            c0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1
            c0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1
            c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5
            c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7
            c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6
            c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8
            c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6
            c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z
            M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z"
                                />
                            </g>
                        </g>
                    </svg>
                </v-avatar>
                <v-avatar class="grey lighten-3 pa-1" v-else>
                    <v-img :src="comment.foto_autor" :alt="comment.autor" height="40" width="40"></v-img>
                </v-avatar>
                <div style="width: calc(100% - 50px) !important">
                    <v-card
                        solo
                        auto-grow
                        filled
                        disabled
                        class="elevation-0 caption black--text ml-4"
                        color="white"
                        rows="1"
                        max-height="200"
                    >
                        <h3 class="font-weight-bold">{{ comment.autor }}</h3>
                        <div
                            style="
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 8;
                -webkit-box-orient: vertical;
              "
                        >
                            <p>{{ comment.comentario }}</p>
                        </div>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>
        <ConfirmDialog ref="confirmDialog"></ConfirmDialog>
        <ChatComponent></ChatComponent>

        <SharedDialog ref="sharedDialog"></SharedDialog>
    </v-container>
</template>

<script>
import ChatComponent from "../../components/global/ChatComponent.vue";
import FooterGlobal from "../../components/global/FooterGlobal.vue";
import { VEmojiPicker } from "v-emoji-picker";
import ConfirmDialog from "../../components/utils/ConfirmDialog.vue";

import SharedDialog from "../../components/utils/SharedDialog.vue"
import LottieAnimation from "lottie-web-vue";
export default {
    components: { ChatComponent, FooterGlobal, VEmojiPicker, ConfirmDialog, SharedDialog,LottieAnimation },
    data: () => ({
        post: {
            name: "",
            last_name: "",
            user_foto: "",

            titulo: "",
            foto: "",
            contenido: "",
            lectura: 0,
            visualizaciones: [],
            comments: [],
            favoritos: [],
        },
        loadingFilterPosts: true,
        tags: [],
        categorias: [],
        isComment: false,
        showEmojis: false,
        comment: null,
        icon_heart: "mdi-heart-outline",

        favorite: false,
    }),

    mounted() {
        this.getPath();
        this.getData();
    },
    methods: {
        getPath() {
            let path = window.location.pathname + window.location.search;

            this.$store.dispatch("app/setPath", path);
        },
        formatDate(date) {
            return this.moment(date).format("DD MMMM YYYY");
        },
        getInt(lectura) {
            const int_lectura = parseInt(lectura);
            return int_lectura.toString();
        },
        selectEmoji(emoji) {
            let string_comment = this.comment == null ? "" : this.comment;
            this.comment = string_comment + emoji.data;
            this.showEmojis = false;
        },
        cancelComment() {
            if (this.comment) {
                this.$refs.confirmDialog
                    .open("¿Descartar comentario?", "Tu comentario no se guardará.", {
                        color: "black",
                    })
                    .then((res) => {
                        if (res) {
                            this.comment = null;
                            this.isComment = false;
                            this.showEmojis = false;
                        }
                    });
                return;
            }
            this.comment = null;
            this.isComment = false;
        },
        getSharedPost(route) {
            return location.protocol + '//' + location.host + "/post/" + route
        },
        copyText() {
            navigator.clipboard.writeText(this.getSharedPost(this.post.route));

            Vue.$toast.success("url del post copiado")
        },
        goToTag(tag) {
            const _tag = tag.tag.substring(1);

            this.$router.push({ name: 'show-blog-tag', params: { tag: _tag } })
        },
        //async
        getData() {
            this.loadingFilterPosts = true
            const data = new FormData();

            data.append("route", this.$route.params.route);
            axios({
                method: "post",
                url: "/api/post/document",
                data: data,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    let { post, tags, categorias, isfavorite } = res.data;
                    //console.log(post)
                    this.post = post;
                    this.tags = tags;
                    this.categorias = categorias;
                    this.favorite = isfavorite;

                    if (this.favorite == true) {
                        this.icon_heart = "mdi-heart";
                    } else {
                        this.icon_heart = "mdi-heart-outline";
                    }

                    const todos = {
                        id: 0,
                        nombre: "Todos",
                        titulo: "",
                        descripcion: "",
                        entradas: "",
                        estado: "",
                        created_at: "",
                        updated_at: "",
                    };
                    this.categorias.unshift(todos);
                    this.loadingFilterPosts = false
                    /**agregamos la categorias todos al inicio */
                })
                .catch((err) => {
                     this.loadingFilterPosts = false
                    console.log(err);
                });
        },

        sendComment() {
            let data = new FormData();
            data.append("comment", this.comment);
            data.append("post_id", this.post.id);
            if (this.$store.state.auth.user != null) {
                data.append("autor_id", this.$store.getters["auth/getUserId"]);
            }

            axios
                .post("/api/post/comment", data)
                .then((res) => {
                    this.comment = null;
                    this.isComment = false;
                    this.showEmojis = false;
                    this.getData();
                })
                .catch((err) => {
                    this.isComment = false;
                    this.showEmojis = false;
                    console.log(err);
                });
        },
        isFavorite() {
            let data = new FormData();
            data.append("post_id", this.post.id);
            if (this.favorite == true) {
                this.icon_heart = "mdi-heart-outline";
                data.append("estado", 0);
            } else {
                this.icon_heart = "mdi-heart";
                data.append("estado", 1);
            }

            axios
                .post("/api/post/favorite", data)
                .then((res) => {
                    this.getData();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        showSharedDialog(post) {
            this.$refs.sharedDialog.open(post.route, post.titulo, post.contenido, post.creado_por).then(res => {

            })
        },
        goToPublicaciones(categoria) {

            if (categoria.nombre == "Todos") {
                this.$router.push({ name: "publicaciones" })
            } else {
                this.$router.push({ name: "show-blog-categoria", params: { categoria: categoria.nombre.toLowerCase() } })
            }
        },
        goToCategorys(categoria){
            this.$router.push({
                name:"show-blog-categoria",
                params:{
                    categoria:categoria.nombre_categoria.toLowerCase()
                }
            })
        }
    },
};
</script>

<style>
.ql-editor {
    height: auto !important;
}
.showEmoji {
    position: absolute;
    margin-left: -40px;
    z-index: 10;
    max-height: 250px;
}
.ql-editor > p img {
    max-width: 100%;
}
@media screen and(max-width:800px) {
    .ql-editor > p img {
        width: 300px;
    }
}
</style>
