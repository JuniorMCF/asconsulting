<template>
    <v-container class="content-wrap-2 pa-0 mx-auto">
        <v-row class="pa-0 ma-0 content-wrap-2 mx-auto">
            <v-col class="col-12 pa-0 ma-0 container-bandwith">
                <v-img src="/app/bandwith.PNG "></v-img>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10">
            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <span class="primary--text text-uppercase as-text_extralarge line-height_1">Nuestras</span>
                <br />

                <span
                    class="pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block"
                >publicaciones</span>
            </v-col>

            <v-col class="col-12 col-md-6 text-center text-md-left my-4">
                <p class="primary--text text-justify as-p_normal ma-0">
                    Conoce nuestros artículos especializados y suscríbete a nuestro
                    newsletter para recibir
                    <strong>contenido exclusivo.</strong>​
                </p>
            </v-col>
        </v-row>

        <v-row class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0">
            <v-col class="col-12 col-md-10 py-0 px-md-2 px-0" justify="space-around">
                <v-sheet elevation="0" class="py-4 px-1">
                    <v-chip-group show-arrows active-class="primary--text">
                        <v-chip
                            class="px-6 v-size--small py-6 rounded-0 text-uppercase font-weight-bold white primary--text"
                            v-for="(categoria, i) in categorias"
                            :key="i"
                            @click="filterCategorys(categoria)"
                        >{{ categoria.nombre }}</v-chip>
                    </v-chip-group>
                </v-sheet>
            </v-col>

            <v-col class="col-12 col-md-2 py-0 px-md-2 px-4 justify-center align-center">
                <v-text-field
                    class="caption py-6"
                    placeholder="Buscar"
                    append-icon="mdi-magnify"
                    hide-details="auto"
                    v-model="search"
                    @keydown.enter="searchPost"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-card-text class="content-wrap-0 mx-auto" v-if="loadingFilterPosts">
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
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="loadingFilterPosts"
            style="min-height: 150px"
        ></v-row>
        <!--lista filtrada en busqwueda-->
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="isSearch"
            style="min-height: 450px"
        >
            <v-col v-if="post_filtered.length == 0" class="col-12 pa-4 ma-0">
                <v-card
                    class="rounded-0 elevation-0 card-as d-flex flex-md-row flex-column align-center justify-center"
                    style="height: 450px"
                >
                    <v-card-text class="text-center">
                        <h1 class="py-4">No se encontraron resultados</h1>
                        <h3>
                            No podemos encontrar lo que estás buscando... Realiza una nueva
                            búsqueda.
                        </h3>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                v-else
                class="col-12 pa-4 ma-0"
                v-for="post in post_filtered"
                :key="'post' + post.id"
            >
                <v-hover v-slot="{ hover }">
                    <v-card class="rounded-0 elevation-0 card-as d-flex flex-md-row flex-column">
                        <!--contenido-->
                        <v-card-text class="pa-0">
                            <v-img
                                :src="post.foto"
                                aspect-ratio="1.7"
                                height="341"
                                cover
                                class="mx-auto c-pointer"
                                @click.prevent="goToDetail(post)"
                            ></v-img>
                        </v-card-text>
                        <!--contenido-->
                        <v-card-text class="d-flex flex-column space-between">
                            <div style="height: 20%">
                                <v-list-item>
                                    <v-list-item-avatar color="grey">
                                        <v-avatar v-if="post.user_foto != null" class="pa-1">
                                            <v-img
                                                :src="post.user_foto"
                                                :alt="post.name"
                                                aspect-ratio="1"
                                            ></v-img>
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
                                        <v-list-item-title
                                            v-text="post.name + ' ' + post.last_name"
                                        ></v-list-item-title>

                                        <v-list-item-subtitle
                                            v-text="
                                                formatDate(post.fecha_publicacion) +
                                                ' - ' +
                                                getInt(post.lectura) +
                                                ' min'
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
                                                    v-on:click.prevent
                                                    text
                                                    class="elevation-0 primary--text"
                                                    fab
                                                    small
                                                >
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>

                                            <v-list class="pa-0 ma-0">
                                                <v-list-item
                                                    link
                                                    @click.prevent="showSharedDialog(post)"
                                                >
                                                    <v-list-item-title class="caption">
                                                        <v-icon small left>mdi-share</v-icon>Compartir entrada
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            </div>
                            <div class="pb-2" style="height: 65%">
                                <v-card-text
                                    @click.prevent="goToDetail(post)"
                                    class="c-pointer py-0"
                                >
                                    <h1
                                        class="font-weight-bold primary--text line-height_1 mb-2"
                                        :class="{ 'text--secondary': hover }"
                                    >{{ post.titulo }}</h1>
                                </v-card-text>
                                <div class="text-truncate contenido-container">
                                    <div
                                        v-if="!post.descripcion"
                                        class="ql-editor pa-0"
                                        v-html="post.contenido"
                                    ></div>
                                    <div v-else class="ql-editor pt-0 px-0">
                                        <p class="ql-align-justify pa-0">
                                            <span
                                                class="pa-0 primary--text ql-editor ql-font-Raleway ql-size-large"
                                                v-html="post.descripcion"
                                            ></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style="height: 15%">
                                <v-divider horizontal class="ma-0 pa-0"></v-divider>
                                <v-card-text class="d-flex flex-wrap py-2 align-center">
                                    <div
                                        class="mr-2 primary--text"
                                    >{{ post.visualizaciones.length }} visualizaciones</div>
                                    <div
                                        class="primary--text"
                                    >{{ post.comments.length }} comentarios</div>
                                    <v-spacer></v-spacer>
                                    <span class="primary--text">
                                        {{
                                            post.favoritos.length > 0 ? post.favoritos.length : ""
                                        }}
                                    </span>
                                    <v-btn
                                        v-on:click.prevent="like(post)"
                                        dark
                                        icon
                                        text
                                        class="elevation-0 error--text"
                                        fab
                                        small
                                    >
                                        <v-icon v-if="post.isFavorite">mdi-heart</v-icon>
                                        <v-icon v-else>mdi-heart-outline</v-icon>
                                    </v-btn>
                                </v-card-text>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <!--lista inicial-->
        <v-row
            class="pa-0 ma-0 content-wrap-0 mx-auto elevation-0"
            v-if="!isFiltered"
            style="min-height: 450px"
        >
            <v-col class="col-12 pa-4 ma-0" v-for="post in posts" :key="'post' + post.id">
                <v-hover v-slot="{ hover }">
                    <v-card class="rounded-0 elevation-0 card-as d-flex flex-md-row flex-column">
                        <v-card-text class="pa-0">
                            <v-img
                                :src="post.foto"
                                aspect-ratio="1.7"
                                height="341"
                                cover
                                class="mx-auto c-pointer"
                                @click.prevent="goToDetail(post)"
                            ></v-img>
                        </v-card-text>
                        <!--contenido-->
                        <v-card-text class="d-flex flex-column space-between">
                            <div style="height: 20%">
                                <v-list-item>
                                    <v-list-item-avatar color="grey">
                                        <v-avatar v-if="post.user_foto != null" class="pa-1">
                                            <v-img
                                                :src="post.user_foto"
                                                :alt="post.name"
                                                aspect-ratio="1"
                                            ></v-img>
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
                                        <v-list-item-title
                                            v-text="post.name + ' ' + post.last_name"
                                        ></v-list-item-title>

                                        <v-list-item-subtitle
                                            v-text="
                                                formatDate(post.fecha_publicacion) +
                                                ' - ' +
                                                getInt(post.lectura) +
                                                ' min'
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
                                                    v-on:click.prevent
                                                    text
                                                    class="elevation-0 primary--text"
                                                    fab
                                                    small
                                                >
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>

                                            <v-list class="pa-0 ma-0">
                                                <v-list-item
                                                    link
                                                    @click.prevent="showSharedDialog(post)"
                                                >
                                                    <v-list-item-title class="caption">
                                                        <v-icon small left>mdi-share</v-icon>Compartir entrada
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            </div>
                            <div class="pb-2" style="height: 65%">
                                <v-card-text
                                    @click.prevent="goToDetail(post)"
                                    class="c-pointer py-0"
                                >
                                    <h1
                                        class="font-weight-bold primary--text line-height_1 mb-2"
                                        :class="{ 'text--secondary': hover }"
                                    >{{ post.titulo }}</h1>
                                </v-card-text>
                                <div class="text-truncate contenido-container">
                                    <div
                                        v-if="!post.descripcion"
                                        class="ql-editor pa-0"
                                        v-html="post.contenido"
                                    ></div>
                                    <div v-else class="ql-editor pt-0 px-0">
                                        <p class="ql-align-justify pa-0">
                                            <span
                                                class="pa-0 primary--text ql-editor ql-font-Raleway ql-size-large"
                                                v-html="post.descripcion"
                                            ></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style="height: 15%">
                                <v-divider horizontal class="ma-0 pa-0"></v-divider>
                                <v-card-text class="d-flex flex-wrap py-2 align-center">
                                    <div
                                        class="mr-2 primary--text"
                                    >{{ post.visualizaciones.length }} visualizaciones</div>
                                    <div
                                        class="primary--text"
                                    >{{ post.comments.length }} comentarios</div>
                                    <v-spacer></v-spacer>
                                    <span class="primary--text">
                                        {{
                                            post.favoritos.length > 0 ? post.favoritos.length : ""
                                        }}
                                    </span>
                                    <v-btn
                                        v-on:click.prevent="like(post)"
                                        dark
                                        icon
                                        text
                                        class="elevation-0 error--text"
                                        fab
                                        small
                                    >
                                        <v-icon v-if="post.isFavorite">mdi-heart</v-icon>
                                        <v-icon v-else>mdi-heart-outline</v-icon>
                                    </v-btn>
                                </v-card-text>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <!--include footer-->
        <FooterGlobal></FooterGlobal>
        <SharedDialog ref="sharedDialog"></SharedDialog>
        <ChatComponent></ChatComponent>
    </v-container>
</template>

<script>
import ChatComponent from "../../../components/global/ChatComponent.vue";
import FooterGlobal from "../../../components/global/FooterGlobal.vue";
import LottieAnimation from "lottie-web-vue";

import SharedDialog from "../../../components/utils/SharedDialog.vue"

export default {
    components: { ChatComponent, FooterGlobal, LottieAnimation, SharedDialog },
    data: () => ({
        categorias: [],
        posts_todos: [],
        posts: [],
        post_filtered: [],
        search: null,
        loadingFilterPosts: false,
        isFiltered: false,
        isSearch: false,

        icon_heart: "mdi-heart-outline",

        ip: null,
    }),

    mounted() {
        this.getPath();
        this.$store.dispatch(
            "app/changeTitlePage",
            "Publicaciones | A&S"
        );
        document.title = this.$store.state.app.title_page;


        this.getData();
        /**for visite */
        this.$store.dispatch("app/openPage", {
            page: window.location.pathname,
            link: window.location.host + window.location.pathname
        })

    },
    destroyed() {
        this.$store.dispatch("app/closePage", {
            visita_id: this.$store.state.app.visita_id
        })
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
        filterCategorys(category) {
            this.isFiltered = false;
            this.loadingFilterPosts = false;
            this.isSearch = false;
            this.search = null;
            if (category.nombre.toLowerCase() != "todos") {
                this.posts = this.posts_todos.filter((post) =>
                    post.categorias.some((el) => el.categoria_id == category.id)
                );
                return;
            }
            this.posts = this.posts_todos;
        },
        searchPost() {
            this.isFiltered = true;
            this.loadingFilterPosts = true;

            axios({
                method: "get",
                url: "/api/posts/all/" + this.search + "/filter",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    this.loadingFilterPosts = false;
                    this.isSearch = true;
                    this.post_filtered = res.data;

                    if (this.favorite == true) {
                        this.icon_heart = "mdi-heart";
                    } else {
                        this.icon_heart = "mdi-heart-outline";
                    }
                })
                .catch((err) => {
                    this.loadingFilterPosts = false;
                    console.log(err);
                });
        },
        postFavorites(posts_todos) {
            let posts = [];
            posts_todos.forEach((element) => {
                let fav = false;
                element.favoritos.forEach((favorite) => {
                    if (this.$store.state.auth.user != null) {
                        if (
                            favorite.user_id == this.$store.getters["auth/getUserId"] &&
                            element.id == favorite.post_id
                        ) {
                            fav = true;
                        }
                    } else {
                        if (favorite.ip === this.ip && element.id === favorite.post_id) {
                            fav = true;
                        }
                    }
                });

                element["isFavorite"] = fav;

                posts.push(element);
            });

            return posts;
        },
        goToDetail(post) {
            console.log(post.route)
            this.$router.push({ name: "show-blog", params: { route: post.route } });
        },
        showSharedDialog(post) {
            this.$refs.sharedDialog.open(post.route, post.titulo, post.contenido, post.creado_por).then(res => {

            })
        },
        //async
        getData() {
            this.loadingFilterPosts = true
            const data = new FormData();
            axios({
                method: "get",
                url: "/api/posts/categoria/" + this.$route.params.categoria,
                data: data,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    let { filter, posts, categorias, ip } = res.data;

                    this.ip = ip;
                    let new_posts = this.postFavorites(posts);
                    this.posts_todos = new_posts;
                    this.posts = filter;
                    this.categorias = categorias;

                    const todos = {
                        id: 0,
                        nombre: "Todos",
                        titulo: "",
                        contenido: "",
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
        like(post) {
            console.log(post.id)
        }
    },
};
</script>

<style>
.card-as {
    border: solid 1px #000066 !important;
}
.ql-editor {
    height: auto !important;
}
.content-detail {
    max-height: 150px;
    overflow: hidden;
}
.contenido-container {
    max-width: 460px;
    padding: 0px 16px 0px 16px;
    max-height: 90px;
    overflow: hidden;
    font-size: 0.65rem !important;
}
@media screen and (max-width: 960px) {
    .contenido-container {
        max-width: 890px;
        padding: 0px 16px 0px 16px;
        max-height: 90px;
        overflow: hidden;
        font-size: 0.65rem !important;
    }
}
</style>
