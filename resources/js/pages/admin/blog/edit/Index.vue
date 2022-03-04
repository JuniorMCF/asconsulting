<template>
  <div>
    <!--<v-card-title>
      {{ actualPage }}
    </v-card-title>-->
    <v-container fluid class="pa-0 ma-0">
      <v-row class="pa-0 ma-0 justify-center">
        <v-col class="col-12 col-md-8 d-flex flex-wrap">
          <v-spacer></v-spacer>
          <v-btn
            text
            class="rounded-xl sky--text text-normal caption mr-2"
            color="white"
            :loading="loadingSavePost"
            @click.prevent="savePost()"
            ><v-icon left small color="sky">mdi-content-save</v-icon> Guardar
          </v-btn>
          <v-btn
            text
            class="rounded-xl sky--text text-normal caption mr-2"
            color="white"
            @click.prevent="showPreview()"
            ><v-icon left small color="sky">mdi-eye</v-icon> Vista previa
          </v-btn>
          <v-btn
            color="sky"
            class="rounded-xl white--text text-normal caption mr-2 elevation-1"
            @click.prevent="postBlog()"
            :loading="loadingPostBlog"
          >
            Publicar
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0 justify-center">
        <v-col class="col-12 col-md-8">
          <span class="title font-weight-bold">Título de la publicación</span>
        </v-col>
        <v-col class="col-12 col-md-8 pa-0">
          <v-card-text class="pa-3">
            <v-textarea
              background-color="white"
              color="sky"
              class="title rounded"
              no-resize
              rows="1"
              counter
              placeholder="titulo"
              v-model="document.titulo"
              :value="document.titulo"
              hide-details="auto"
            ></v-textarea>
          </v-card-text>
          <v-container fluid class="pa-0 ma-0">
            <v-row class="pa-0 ma-0">
              <v-col class="col-12">
                <span class="title font-weight-bold">Imagen de portada</span>
              </v-col>
              <v-divider horizontal></v-divider>
              <v-col class="col-12">
                <v-img :src="document.foto" height="643" contain></v-img>
              </v-col>

              <v-col class="col-12">
                <div class="form-group">
                  <v-file-input
                    label="Selecciona una imagen"
                    type="file"
                    @change="changeImage()"
                    id="my-file"
                    accept="image/*"
                    color="sky"
                    :show-size="true"
                    v-model="preview"
                    hint="max 2MB"
                  >
                  </v-file-input>

                  <div class="border mt-3">
                    <p>Vista previa:</p>
                    <template v-if="isPreview">
                      <v-img :src="image" height="500" contain alt="preview">
                      </v-img>
                    </template>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="col-12 col-md-8">
          <span class="title font-weight-bold">Contenido</span>
        </v-col>
      </v-row>
      <v-row class="justify-center pa-0 ma-0">
        <v-col class="col-12 col-md-8">
          <div>
            <quill-editor
              :content="document.contenido"
              :options="editorOption"
              @change="onEditorChange($event)"
            />
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center pa-0 ma-0">
        <v-col class="col-12 col-md-8">
          <span class="title font-weight-bold">Categorías</span>
        </v-col>
        <v-col class="col-12 col-md-8">
          <p></p>
          <v-checkbox
            color="sky"
            v-for="categoria in categorias"
            :key="'categoria' + categoria.id"
            v-model="post_categorias"
            :label="categoria.nombre"
            :value="categoria"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row class="justify-center pa-0 ma-0">
        <v-col class="col-12 col-md-8">
          <span class="title font-weight-bold">Tags</span>
        </v-col>
        <v-col class="col-12 col-md-8">
          <v-sheet elevation="1" rounded="0">
            <div class="pa-4">
              <div class="d-flex flex-wrap justify-center align-center mb-4">
                <v-text-field
                  label="Ingrese una palabra clave"
                  prefix="#"
                  color="sky"
                  v-model="newTag"
                  :value="newTag"
                  hide-details="auto"
                  class="my-2"
                ></v-text-field>
                <v-btn
                  large
                  color="sky"
                  class="
                    rounded-0
                    my-2
                    text-normal
                    white--text
                    caption
                    elevation-0
                    px-16
                  "
                  :loading="loadingTag"
                  @click.prevent="addTag()"
                >
                  Agregar tag
                </v-btn>
              </div>

              <v-chip-group active-class="primary--text" column>
                <v-chip
                  v-for="tag in tags"
                  :key="tag.id"
                  close
                  @click:close="removeTag(tag.id)"
                >
                  {{ tag.tag }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <ConfirmDialog ref="confirmDialog" />
    <DialogArticle ref="dialogArticle" />
  </div>
</template>

<script>
import VueDocumentEditor from "vue-document-editor";
import VueFileToolbarMenu from "vue-file-toolbar-menu";
import ConfirmDialog from "../../../../components/utils/ConfirmDialog.vue";
import DialogArticle from "../../../../components/utils/DialogArticle.vue";
export default {
  components: {
    VueDocumentEditor,
    VueFileToolbarMenu,
    ConfirmDialog,
    DialogArticle,
  },
  data: () => ({
    document: {
      id: null,
      titulo: "",
      foto: "",
      contenido: "",
      fecha_publicacion: "",
      fecha_creacion: "",
      fecha_edicion: "",
      editado_por: "",
      usuario: "",
      created_at: "",
      updated_at: "",
    },

    editorOption: {},
    isPreview: false,
    preview: null,
    image: null,
    post_categorias: [],
    categorias: [],
    tags: [],
    newTag: "",
    loadingTag: false,
    loadingSavePost: false,
    loadingPostBlog: false,
  }),
  mounted() {
    this.setActualPage();
    this.getData();
  },
  methods: {
    setActualPage() {
      this.$store.dispatch("app/saveActualPage", "Edición de post");
    },
    onEditorBlur(quill) {
      //console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      //console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      //console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      //console.log("editor change!", quill, html, text);
      this.content = html;
      this.document.contenido = this.content;
    },
    changeImage() {
      this.image = URL.createObjectURL(this.preview);
      this.isPreview = true;
    },
    addTag() {
      this.loadingTag = true;
      let data = new FormData();
      data.append("tag", "#" + this.newTag);
      data.append("post_id", this.document.id);
      axios({
        method: "post",
        url: "/api/oauth/post/add/tag",
        data: data,
        headers: { Authorization: "Bearer " + this.$store.state.auth.token },
      })
        .then((res) => {
          Vue.$toast.success("Tag agregado al post");
          this.newTag = "";
          this.loadingTag = false;
          this.getData();
        })
        .catch((err) => {
          this.loadingTag = false;
          console.log(err);
        });
    },
    removeTag(id) {
      this.$refs.confirmDialog
        .open(
          "Eliminar tag",
          "¿Está seguro que quiere eliminar el tag del post?"
        )
        .then((res) => {
          if (res) {
            let data = new FormData();
            data.append("id", id);
            axios({
              method: "post",
              url: "/api/oauth/post/delete/tag",
              data: data,
              headers: {
                Authorization: "Bearer " + this.$store.state.auth.token,
              },
            })
              .then((res) => {
                Vue.$toast.success("Tag eliminado");
                this.getData();
              })
              .catch((err) => {});
          }
        });
    },
    savePost() {
      this.loadingSavePost = true;
      let data = new FormData();
      data.append("post_id", this.$route.params.id);
      data.append("post_categorias", JSON.stringify(this.post_categorias));

      let document_form_data = new FormData();
      for (let key in this.document) {
        let value = this.document[key] == null ? "" : this.document[key];
        document_form_data.append(key, value);
      }

      if (this.preview != null) {
        document_form_data.append("file_upload", this.preview);
      }

      axios
        .all([
          axios({
            method: "post",
            url: "/api/oauth/post/save",
            data: document_form_data,
            headers: {
              Authorization: "Bearer " + this.$store.state.auth.token,
              "Content-Type": "multipart/form-data",
            },
          }),
          axios({
            method: "post",
            url: "/api/oauth/post/categorias",
            data: data,
            headers: {
              Authorization: "Bearer " + this.$store.state.auth.token,
            },
          }),

          ,
        ])
        .then(
          axios.spread((...responses) => {
            //console.log(responses);

            Vue.$toast.success("Post actualizado!");
            this.isPreview = false;
            this.preview = null;
            this.image = null;
            this.loadingSavePost = false;
            this.getData();
            // use/access the results
          })
        )
        .catch((errors) => {
          Vue.$toast.error(
            "La imagen no tiene un formato permitido, o excede el tamaño permitido"
          );
          // react on errors.
          this.loadingSavePost = false;
        });
    },

    showPreview() {
      if (this.preview) {
        this.$refs.dialogArticle
          .open(this.document.titulo, this.image, this.document.contenido)
          .then((res) => {
            if (res) {
            }
          });

        return;
      }

      this.$refs.dialogArticle
        .open(this.document.titulo, this.document.foto, this.document.contenido)
        .then((res) => {
          if (res) {
          }
        });
    },
    postBlog() {
      this.$refs.confirmDialog
        .open(
          "Publicar post",
          "¿Esta seguro que quiere publicar esta post?, se guardarán los ultimos cambios y se publicarán"
        )
        .then((res) => {
          if (res) {
            this.savePostAfterPostBlog();
          }
        });
    },
    savePostAfterPostBlog() {
      this.loadingPostBlog = true;
      let data = new FormData();
      data.append("post_id", this.$route.params.id);
      data.append("post_categorias", JSON.stringify(this.post_categorias));

      let document_form_data = new FormData();
      for (let key in this.document) {
        let value = this.document[key] == null ? "" : this.document[key];
        document_form_data.append(key, value);
      }

      if (this.preview != null) {
        document_form_data.append("file_upload", this.preview);
      }

      axios
        .all([
          axios({
            method: "post",
            url: "/api/oauth/post/save",
            data: document_form_data,
            headers: {
              Authorization: "Bearer " + this.$store.state.auth.token,
              "Content-Type": "multipart/form-data",
            },
          }),
          axios({
            method: "post",
            url: "/api/oauth/post/categorias",
            data: data,
            headers: {
              Authorization: "Bearer " + this.$store.state.auth.token,
            },
          }),

          ,
        ])
        .then(
          axios.spread((...responses) => {
            //console.log(responses);

            Vue.$toast.success("Post actualizado!");
            this.isPreview = false;
            this.preview = null;
            this.image = null;
            //this.loadingPostBlog = false;
            let data = new FormData();
            data.append("id", this.$route.params.id);
            axios({
              method: "post",
              url: "/api/oauth/post/blog",
              data: data,
              headers: {
                Authorization: "Bearer " + this.$store.state.auth.token,
              },
            })
              .then((res) => {
                this.loadingPostBlog = false;
                this.getData();
              })
              .catch((err) => {
                Vue.$toast.error(
                  "Hubo un error al momento de cargar la información"
                );
                this.loadingPostBlog = false;
              });
            // use/access the results
          })
        )
        .catch((errors) => {
          Vue.$toast.error(
            "La imagen no tiene un formato permitido, o excede el tamaño permitido"
          );
          // react on errors.
          this.loadingPostBlog = false;
        });
    },
    //async
    getData() {
      axios({
        method: "get",
        url: "/api/oauth/post/" + this.$route.params.id,
        headers: { Authorization: "Bearer " + this.$store.state.auth.token },
      })
        .then((res) => {
          const { tags, categorias, post_categorias, post } = res.data;

          this.tags = tags;
          this.categorias = categorias;
          this.post_categorias = post_categorias;
          this.document = post;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    actualPage() {
      return this.$store.state.app.actual_page;
    },
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>

<style>
.ql-container {
  height: calc(100% - 42px); /* 100% - height of 'ql-toolbar' */
}

@media screen and (max-width: 1536px) {
  .ql-container {
    height: calc(100% - 66px); /* 100% - height of 'ql-toolbar' */
  }
}
@media screen and (max-width: 600px) {
  .ql-container {
    height: calc(100% - 90px); /* 100% - height of 'ql-toolbar' */
  }
}

@media screen and (max-width: 469px) {
  .ql-container {
    height: calc(100% - 100px); /* 100% - height of 'ql-toolbar' */
  }
}
</style>