"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_post_categoria_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      wame: "https://wa.me/51926302115"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      heightLogo: 116,
      widthLogo: 112,
      phone_contact: "926 302 115",
      phone_send: "tel:+51926302115",
      wame: "https://wa.me/51926302115",
      email: "reactivatunegocio@asconsulting.pe",
      address: "Av. Alfredo Benavides 3695. Surco."
    };
  },
  computed: {
    yearActual: function yearActual() {
      var now = new Date();
      return now.getFullYear();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: "sky",
        width: 400,
        zIndex: 200,
        noconfirm: false
      }
    };
  },
  methods: {
    open: function open(title, message, options) {
      var _this = this;

      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    },
    agree: function agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel: function cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      linked: false,
      dialog: false,
      resolve: null,
      reject: null,
      link: '',
      title: '',
      user: '',
      contenido: null
    };
  },
  methods: {
    open: function open(link, title, contenido, user) {
      var _this = this;

      this.dialog = true;
      this.link = location.protocol + '//' + location.host + "/post/" + link;
      this.title = title;
      this.contenido = contenido;
      this.user = user;
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    },
    agree: function agree() {
      this.resolve(true);
      this.dialog = false;
    },
    copyText: function copyText() {
      navigator.clipboard.writeText(this.link);
      Vue.$toast.success("url del post copiado");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/global/ChatComponent.vue */ "./resources/js/components/global/ChatComponent.vue");
/* harmony import */ var _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/global/FooterGlobal.vue */ "./resources/js/components/global/FooterGlobal.vue");
/* harmony import */ var v_emoji_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-emoji-picker */ "./node_modules/v-emoji-picker/lib/v-emoji-picker.esm.js");
/* harmony import */ var _components_utils_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/utils/ConfirmDialog.vue */ "./resources/js/components/utils/ConfirmDialog.vue");
/* harmony import */ var _components_utils_SharedDialog_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/utils/SharedDialog.vue */ "./resources/js/components/utils/SharedDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ChatComponent: _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterGlobal: _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VEmojiPicker: v_emoji_picker__WEBPACK_IMPORTED_MODULE_2__.VEmojiPicker,
    ConfirmDialog: _components_utils_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SharedDialog: _components_utils_SharedDialog_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
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
        favoritos: []
      },
      tags: [],
      categorias: [],
      isComment: false,
      showEmojis: false,
      comment: null,
      icon_heart: "mdi-heart-outline",
      favorite: false
    };
  },
  mounted: function mounted() {
    this.getPath();
    this.getData();
  },
  methods: {
    getPath: function getPath() {
      var path = window.location.pathname + window.location.search;
      this.$store.dispatch("app/setPath", path);
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format("DD MMMM YYYY");
    },
    getInt: function getInt(lectura) {
      var int_lectura = parseInt(lectura);
      return int_lectura.toString();
    },
    selectEmoji: function selectEmoji(emoji) {
      var string_comment = this.comment == null ? "" : this.comment;
      this.comment = string_comment + emoji.data;
      this.showEmojis = false;
    },
    cancelComment: function cancelComment() {
      var _this = this;

      if (this.comment) {
        this.$refs.confirmDialog.open("¿Descartar comentario?", "Tu comentario no se guardará.", {
          color: "black"
        }).then(function (res) {
          if (res) {
            _this.comment = null;
            _this.isComment = false;
            _this.showEmojis = false;
          }
        });
        return;
      }

      this.comment = null;
      this.isComment = false;
    },
    getSharedPost: function getSharedPost(route) {
      return location.protocol + '//' + location.host + "/post/" + route;
    },
    copyText: function copyText() {
      navigator.clipboard.writeText(this.getSharedPost(this.post.route));
      Vue.$toast.success("url del post copiado");
    },
    //async
    getData: function getData() {
      var _this2 = this;

      var data = new FormData();
      data.append("route", this.$route.params.route);
      axios({
        method: "post",
        url: "/api/post/document",
        data: data,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json"
        }
      }).then(function (res) {
        var _res$data = res.data,
            post = _res$data.post,
            tags = _res$data.tags,
            categorias = _res$data.categorias,
            isfavorite = _res$data.isfavorite; //console.log(post)

        _this2.post = post;
        _this2.tags = tags;
        _this2.categorias = categorias;
        _this2.favorite = isfavorite;

        if (_this2.favorite == true) {
          _this2.icon_heart = "mdi-heart";
        } else {
          _this2.icon_heart = "mdi-heart-outline";
        }

        var todos = {
          id: 0,
          nombre: "Todos",
          titulo: "",
          descripcion: "",
          entradas: "",
          estado: "",
          created_at: "",
          updated_at: ""
        };

        _this2.categorias.unshift(todos);
        /**agregamos la categorias todos al inicio */

      })["catch"](function (err) {
        console.log(err);
      });
    },
    sendComment: function sendComment() {
      var _this3 = this;

      var data = new FormData();
      data.append("comment", this.comment);
      data.append("post_id", this.post.id);

      if (this.$store.state.auth.user != null) {
        data.append("autor_id", this.$store.getters["auth/getUserId"]);
      }

      axios.post("/api/post/comment", data).then(function (res) {
        _this3.comment = null;
        _this3.isComment = false;
        _this3.showEmojis = false;

        _this3.getData();
      })["catch"](function (err) {
        _this3.isComment = false;
        _this3.showEmojis = false;
        console.log(err);
      });
    },
    isFavorite: function isFavorite() {
      var _this4 = this;

      var data = new FormData();
      data.append("post_id", this.post.id);

      if (this.favorite == true) {
        this.icon_heart = "mdi-heart-outline";
        data.append("estado", 0);
      } else {
        this.icon_heart = "mdi-heart";
        data.append("estado", 1);
      }

      axios.post("/api/post/favorite", data).then(function (res) {
        _this4.getData();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    showSharedDialog: function showSharedDialog(post) {
      this.$refs.sharedDialog.open(post.route, post.titulo, post.contenido, post.creado_por).then(function (res) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.as-footer_text {\r\n  font-size: 0.8rem;\n}\n.footer-logo {\r\n  height: 116px !important;\r\n  width: 112px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ql-editor {\n    height: auto !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ql-editor {\n    height: auto !important;\n}\n.showEmoji {\n    position: relative;\n    top: 40px;\n    left: -40px;\n}\n.ql-editor> p img {\n        max-width: 100%;\n}\n@media screen and(max-width:800px) {\n.ql-editor> p img {\n        width: 300px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedDialog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/v-emoji-picker/lib/v-emoji-picker.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/v-emoji-picker/lib/v-emoji-picker.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VEmojiPicker": () => (/* binding */ __vue_component__$6),
/* harmony export */   "categoriesDefault": () => (/* binding */ categoriesDefault),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "emojisDefault": () => (/* binding */ emojisDefault)
/* harmony export */ });
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}var langDefault = {
    search: 'Search ...',
    categories: {
        Activity: "Activity",
        Flags: "Flags",
        Foods: "Foods",
        Frequently: "Frequently",
        Objects: "Objects",
        Nature: "Nature",
        Peoples: "Peoples",
        Symbols: "Symbols",
        Places: "Places"
    }
};var lang = langDefault;
var i18n = function (translations) {
    lang = __assign(__assign({}, langDefault), translations);
};
// Sample parse translation
var t = function (term) {
    var properties = term.split(".");
    var text = lang;
    properties.forEach(function (p) {
        text = text[p];
    });
    return text;
};
var locale = { i18n: i18n, t: t };var Category = /** @class */ (function () {
    function Category(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    Object.defineProperty(Category.prototype, "label", {
        get: function () {
            return t("categories." + this.name);
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());var icons = {
    activity: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n      <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n      <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n    </svg>\n    ",
    flags: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n      <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n    </svg>\n    ",
    foods: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n      <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n      <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n    </svg>\n    ",
    frequently: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n      <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n    </svg>\n    ",
    nature: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n    </svg>\n    ",
    objects: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" fill=\"gray\">\n      <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n    </svg>\n    ",
    peoples: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n      <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n    </svg>\n    ",
    places: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n      <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n    </svg>\n    ",
    symbols: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n      <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n    </svg>\n    "
};
var categoriesDefault = [
    new Category("Frequently", icons["frequently"]),
    new Category("Peoples", icons["peoples"]),
    new Category("Nature", icons["nature"]),
    new Category("Foods", icons["foods"]),
    new Category("Activity", icons["activity"]),
    new Category("Objects", icons["objects"]),
    new Category("Places", icons["places"]),
    new Category("Symbols", icons["symbols"]),
    new Category("Flags", icons["flags"])
];var Emoji = /** @class */ (function () {
    function Emoji(data, category, aliases) {
        this.data = data;
        this.category = category;
        this.aliases = aliases;
    }
    return Emoji;
}());var emojisDefault = [
    new Emoji("😀", "Peoples", ["grinning"]),
    new Emoji("😃", "Peoples", ["smiley"]),
    new Emoji("😄", "Peoples", ["smile"]),
    new Emoji("😁", "Peoples", ["grin"]),
    new Emoji("😆", "Peoples", ["laughing", "satisfied"]),
    new Emoji("😅", "Peoples", ["sweat_smile"]),
    new Emoji("😂", "Peoples", ["joy"]),
    new Emoji("🤣", "Peoples", ["rofl"]),
    new Emoji("😌", "Peoples", ["relaxed"]),
    new Emoji("😊", "Peoples", ["blush"]),
    new Emoji("😇", "Peoples", ["innocent"]),
    new Emoji("🙂", "Peoples", ["slightly_smiling_face"]),
    new Emoji("🙃", "Peoples", ["upside_down_face"]),
    new Emoji("😉", "Peoples", ["wink"]),
    new Emoji("😌", "Peoples", ["relieved"]),
    new Emoji("😍", "Peoples", ["heart_eyes"]),
    new Emoji("😘", "Peoples", ["kissing_heart"]),
    new Emoji("😗", "Peoples", ["kissing"]),
    new Emoji("😙", "Peoples", ["kissing_smiling_eyes"]),
    new Emoji("😚", "Peoples", ["kissing_closed_eyes"]),
    new Emoji("😋", "Peoples", ["yum"]),
    new Emoji("😜", "Peoples", ["stuck_out_tongue_winking_eye"]),
    new Emoji("😝", "Peoples", ["stuck_out_tongue_closed_eyes"]),
    new Emoji("😛", "Peoples", ["stuck_out_tongue"]),
    new Emoji("🤑", "Peoples", ["money_mouth_face"]),
    new Emoji("🤗", "Peoples", ["hugs"]),
    new Emoji("🤓", "Peoples", ["nerd_face"]),
    new Emoji("😎", "Peoples", ["sunglasses"]),
    new Emoji("🤡", "Peoples", ["clown_face"]),
    new Emoji("🤠", "Peoples", ["cowboy_hat_face"]),
    new Emoji("😏", "Peoples", ["smirk"]),
    new Emoji("😒", "Peoples", ["unamused"]),
    new Emoji("😞", "Peoples", ["disappointed"]),
    new Emoji("😔", "Peoples", ["pensive"]),
    new Emoji("😟", "Peoples", ["worried"]),
    new Emoji("😕", "Peoples", ["confused"]),
    new Emoji("🙁", "Peoples", ["slightly_frowning_face"]),
    new Emoji("☹️", "Peoples", ["frowning_face"]),
    new Emoji("😣", "Peoples", ["persevere"]),
    new Emoji("😖", "Peoples", ["confounded"]),
    new Emoji("😫", "Peoples", ["tired_face"]),
    new Emoji("😩", "Peoples", ["weary"]),
    new Emoji("😤", "Peoples", ["triumph"]),
    new Emoji("😠", "Peoples", ["angry"]),
    new Emoji("😡", "Peoples", ["rage", "pout"]),
    new Emoji("😶", "Peoples", ["no_mouth"]),
    new Emoji("😐", "Peoples", ["neutral_face"]),
    new Emoji("😑", "Peoples", ["expressionless"]),
    new Emoji("😯", "Peoples", ["hushed"]),
    new Emoji("😦", "Peoples", ["frowning"]),
    new Emoji("😧", "Peoples", ["anguished"]),
    new Emoji("😮", "Peoples", ["open_mouth"]),
    new Emoji("😲", "Peoples", ["astonished"]),
    new Emoji("😵", "Peoples", ["dizzy_face"]),
    new Emoji("😳", "Peoples", ["flushed"]),
    new Emoji("😱", "Peoples", ["scream"]),
    new Emoji("😨", "Peoples", ["fearful"]),
    new Emoji("😰", "Peoples", ["cold_sweat"]),
    new Emoji("😢", "Peoples", ["cry"]),
    new Emoji("😥", "Peoples", ["disappointed_relieved"]),
    new Emoji("🤤", "Peoples", ["drooling_face"]),
    new Emoji("😭", "Peoples", ["sob"]),
    new Emoji("😓", "Peoples", ["sweat"]),
    new Emoji("😪", "Peoples", ["sleepy"]),
    new Emoji("😴", "Peoples", ["sleeping"]),
    new Emoji("🙄", "Peoples", ["roll_eyes"]),
    new Emoji("🤔", "Peoples", ["thinking"]),
    new Emoji("🤥", "Peoples", ["lying_face"]),
    new Emoji("😬", "Peoples", ["grimacing"]),
    new Emoji("🤐", "Peoples", ["zipper_mouth_face"]),
    new Emoji("🤢", "Peoples", ["nauseated_face"]),
    new Emoji("🤧", "Peoples", ["sneezing_face"]),
    new Emoji("😷", "Peoples", ["mask"]),
    new Emoji("🤒", "Peoples", ["face_with_thermometer"]),
    new Emoji("🤕", "Peoples", ["face_with_head_bandage"]),
    new Emoji("😈", "Peoples", ["smiling_imp"]),
    new Emoji("👿", "Peoples", ["imp"]),
    new Emoji("👹", "Peoples", ["japanese_ogre"]),
    new Emoji("👺", "Peoples", ["japanese_goblin"]),
    new Emoji("💩", "Peoples", ["hankey", "poop", "shit"]),
    new Emoji("👻", "Peoples", ["ghost"]),
    new Emoji("💀", "Peoples", ["skull"]),
    new Emoji("☠️", "Peoples", ["skull_and_crossbones"]),
    new Emoji("👽", "Peoples", ["alien"]),
    new Emoji("👾", "Peoples", ["space_invader"]),
    new Emoji("🤖", "Peoples", ["robot"]),
    new Emoji("🎃", "Peoples", ["jack_o_lantern"]),
    new Emoji("😺", "Peoples", ["smiley_cat"]),
    new Emoji("😸", "Peoples", ["smile_cat"]),
    new Emoji("😹", "Peoples", ["joy_cat"]),
    new Emoji("😻", "Peoples", ["heart_eyes_cat"]),
    new Emoji("😼", "Peoples", ["smirk_cat"]),
    new Emoji("😽", "Peoples", ["kissing_cat"]),
    new Emoji("🙀", "Peoples", ["scream_cat"]),
    new Emoji("😿", "Peoples", ["crying_cat_face"]),
    new Emoji("😾", "Peoples", ["pouting_cat"]),
    new Emoji("👐", "Peoples", ["open_hands"]),
    new Emoji("🙌", "Peoples", ["raised_hands"]),
    new Emoji("👏", "Peoples", ["clap"]),
    new Emoji("🙏", "Peoples", ["pray"]),
    new Emoji("🤝", "Peoples", ["handshake"]),
    new Emoji("👍", "Peoples", ["+1", "thumbsup"]),
    new Emoji("👎", "Peoples", ["-1", "thumbsdown"]),
    new Emoji("👊", "Peoples", ["fist_oncoming", "facepunch", "punch"]),
    new Emoji("✊", "Peoples", ["fist_raised", "fist"]),
    new Emoji("🤛", "Peoples", ["fist_left"]),
    new Emoji("🤜", "Peoples", ["fist_right"]),
    new Emoji("🤞", "Peoples", ["crossed_fingers"]),
    new Emoji("✌️", "Peoples", ["v"]),
    new Emoji("🤘", "Peoples", ["metal"]),
    new Emoji("👌", "Peoples", ["ok_hand"]),
    new Emoji("👈", "Peoples", ["point_left"]),
    new Emoji("👉", "Peoples", ["point_right"]),
    new Emoji("👆", "Peoples", ["point_up_2"]),
    new Emoji("👇", "Peoples", ["point_down"]),
    new Emoji("☝️", "Peoples", ["point_up"]),
    new Emoji("✋", "Peoples", ["hand", "raised_hand"]),
    new Emoji("🤚", "Peoples", ["raised_back_of_hand"]),
    new Emoji("🖐", "Peoples", ["raised_hand_with_fingers_splayed"]),
    new Emoji("🖖", "Peoples", ["vulcan_salute"]),
    new Emoji("👋", "Peoples", ["wave"]),
    new Emoji("🤙", "Peoples", ["call_me_hand"]),
    new Emoji("💪", "Peoples", ["muscle"]),
    new Emoji("🖕", "Peoples", ["middle_finger", "fu"]),
    new Emoji("✍️", "Peoples", ["writing_hand"]),
    new Emoji("🤳", "Peoples", ["selfie"]),
    new Emoji("💅", "Peoples", ["nail_care"]),
    new Emoji("💍", "Peoples", ["ring"]),
    new Emoji("💄", "Peoples", ["lipstick"]),
    new Emoji("💋", "Peoples", ["kiss"]),
    new Emoji("👄", "Peoples", ["lips"]),
    new Emoji("👅", "Peoples", ["tongue"]),
    new Emoji("👂", "Peoples", ["ear"]),
    new Emoji("👃", "Peoples", ["nose"]),
    new Emoji("👣", "Peoples", ["footprints"]),
    new Emoji("👁", "Peoples", ["eye"]),
    new Emoji("👀", "Peoples", ["eyes"]),
    new Emoji("🗣", "Peoples", ["speaking_head"]),
    new Emoji("👤", "Peoples", ["bust_in_silhouette"]),
    new Emoji("👥", "Peoples", ["busts_in_silhouette"]),
    new Emoji("👶", "Peoples", ["baby"]),
    new Emoji("👦", "Peoples", ["boy"]),
    new Emoji("👧", "Peoples", ["girl"]),
    new Emoji("👨", "Peoples", ["man"]),
    new Emoji("👩", "Peoples", ["woman"]),
    new Emoji("👱‍♀", "Peoples", ["blonde_woman"]),
    new Emoji("👱", "Peoples", ["blonde_man", "person_with_blond_hair"]),
    new Emoji("👴", "Peoples", ["older_man"]),
    new Emoji("👵", "Peoples", ["older_woman"]),
    new Emoji("👲", "Peoples", ["man_with_gua_pi_mao"]),
    new Emoji("👳‍♀", "Peoples", ["woman_with_turban"]),
    new Emoji("👳", "Peoples", ["man_with_turban"]),
    new Emoji("👮‍♀", "Peoples", ["policewoman"]),
    new Emoji("👮", "Peoples", ["policeman", "cop"]),
    new Emoji("👷‍♀", "Peoples", ["construction_worker_woman"]),
    new Emoji("👷", "Peoples", ["construction_worker_man", "construction_worker"]),
    new Emoji("💂‍♀", "Peoples", ["guardswoman"]),
    new Emoji("💂", "Peoples", ["guardsman"]),
    new Emoji("👩‍⚕", "Peoples", ["woman_health_worker"]),
    new Emoji("👨‍⚕", "Peoples", ["man_health_worker"]),
    new Emoji("👩‍🌾", "Peoples", ["woman_farmer"]),
    new Emoji("👨‍🌾", "Peoples", ["man_farmer"]),
    new Emoji("👩‍🍳", "Peoples", ["woman_cook"]),
    new Emoji("👨‍🍳", "Peoples", ["man_cook"]),
    new Emoji("👩‍🎓", "Peoples", ["woman_student"]),
    new Emoji("👨‍🎓", "Peoples", ["man_student"]),
    new Emoji("👩‍🎤", "Peoples", ["woman_singer"]),
    new Emoji("👨‍🎤", "Peoples", ["man_singer"]),
    new Emoji("👩‍🏫", "Peoples", ["woman_teacher"]),
    new Emoji("👨‍🏫", "Peoples", ["man_teacher"]),
    new Emoji("👩‍🏭", "Peoples", ["woman_factory_worker"]),
    new Emoji("👨‍🏭", "Peoples", ["man_factory_worker"]),
    new Emoji("👩‍💻", "Peoples", ["woman_technologist"]),
    new Emoji("👨‍💻", "Peoples", ["man_technologist"]),
    new Emoji("👩‍💼", "Peoples", ["woman_office_worker"]),
    new Emoji("👨‍💼", "Peoples", ["man_office_worker"]),
    new Emoji("👩‍🔧", "Peoples", ["woman_mechanic"]),
    new Emoji("👨‍🔧", "Peoples", ["man_mechanic"]),
    new Emoji("👩‍🔬", "Peoples", ["woman_scientist"]),
    new Emoji("👨‍🔬", "Peoples", ["man_scientist"]),
    new Emoji("👩‍🎨", "Peoples", ["woman_artist"]),
    new Emoji("👨‍🎨", "Peoples", ["man_artist"]),
    new Emoji("👩‍🚒", "Peoples", ["woman_firefighter"]),
    new Emoji("👨‍🚒", "Peoples", ["man_firefighter"]),
    new Emoji("👩‍🚀", "Peoples", ["woman_astronaut"]),
    new Emoji("👨‍🚀", "Peoples", ["man_astronaut"]),
    new Emoji("🤶", "Peoples", ["mrs_claus"]),
    new Emoji("🎅", "Peoples", ["santa"]),
    new Emoji("👸", "Peoples", ["princess"]),
    new Emoji("🤴", "Peoples", ["prince"]),
    new Emoji("👰", "Peoples", ["bride_with_veil"]),
    new Emoji("🤵", "Peoples", ["man_in_tuxedo"]),
    new Emoji("👼", "Peoples", ["angel"]),
    new Emoji("🤰", "Peoples", ["pregnant_woman"]),
    new Emoji("🙇‍♀", "Peoples", ["bowing_woman"]),
    new Emoji("🙇", "Peoples", ["bowing_man", "bow"]),
    new Emoji("💁", "Peoples", ["tipping_hand_woman", "information_desk_person", "sassy_woman"]),
    new Emoji("💁‍♂", "Peoples", ["tipping_hand_man", "sassy_man"]),
    new Emoji("🙅", "Peoples", ["no_good_woman", "no_good", "ng_woman"]),
    new Emoji("🙅‍♂", "Peoples", ["no_good_man", "ng_man"]),
    new Emoji("🙆", "Peoples", ["ok_woman"]),
    new Emoji("🙆‍♂", "Peoples", ["ok_man"]),
    new Emoji("🙋", "Peoples", ["raising_hand_woman", "raising_hand"]),
    new Emoji("🙋‍♂", "Peoples", ["raising_hand_man"]),
    new Emoji("🤦‍♀", "Peoples", ["woman_facepalming"]),
    new Emoji("🤦‍♂", "Peoples", ["man_facepalming"]),
    new Emoji("🤷‍♀", "Peoples", ["woman_shrugging"]),
    new Emoji("🤷‍♂", "Peoples", ["man_shrugging"]),
    new Emoji("🙎", "Peoples", ["pouting_woman", "person_with_pouting_face"]),
    new Emoji("🙎‍♂", "Peoples", ["pouting_man"]),
    new Emoji("🙍", "Peoples", ["frowning_woman", "person_frowning"]),
    new Emoji("🙍‍♂", "Peoples", ["frowning_man"]),
    new Emoji("💇", "Peoples", ["haircut_woman", "haircut"]),
    new Emoji("💇‍♂", "Peoples", ["haircut_man"]),
    new Emoji("💆", "Peoples", ["massage_woman", "massage"]),
    new Emoji("💆‍♂", "Peoples", ["massage_man"]),
    new Emoji("🕴", "Peoples", ["business_suit_levitating"]),
    new Emoji("💃", "Peoples", ["dancer"]),
    new Emoji("🕺", "Peoples", ["man_dancing"]),
    new Emoji("👯", "Peoples", ["dancing_women", "dancers"]),
    new Emoji("👯‍♂", "Peoples", ["dancing_men"]),
    new Emoji("🚶‍♀", "Peoples", ["walking_woman"]),
    new Emoji("🚶", "Peoples", ["walking_man", "walking"]),
    new Emoji("🏃‍♀", "Peoples", ["running_woman"]),
    new Emoji("🏃", "Peoples", ["running_man", "runner", "running"]),
    new Emoji("👫", "Peoples", ["couple"]),
    new Emoji("👭", "Peoples", ["two_women_holding_hands"]),
    new Emoji("👬", "Peoples", ["two_men_holding_hands"]),
    new Emoji("💑", "Peoples", ["couple_with_heart_woman_man", "couple_with_heart"]),
    new Emoji("👩‍❤️‍👩", "Peoples", ["couple_with_heart_woman_woman"]),
    new Emoji("👨‍❤️‍👨", "Peoples", ["couple_with_heart_man_man"]),
    new Emoji("💏", "Peoples", ["couplekiss_man_woman"]),
    new Emoji("👩‍❤️‍💋‍👩", "Peoples", ["couplekiss_woman_woman"]),
    new Emoji("👨‍❤️‍💋‍👨", "Peoples", ["couplekiss_man_man"]),
    new Emoji("👪", "Peoples", ["family_man_woman_boy", "family"]),
    new Emoji("👨‍👩‍👧", "Peoples", ["family_man_woman_girl"]),
    new Emoji("👨‍👩‍👧‍👦", "Peoples", ["family_man_woman_girl_boy"]),
    new Emoji("👨‍👩‍👦‍👦", "Peoples", ["family_man_woman_boy_boy"]),
    new Emoji("👨‍👩‍👧‍👧", "Peoples", ["family_man_woman_girl_girl"]),
    new Emoji("👩‍👩‍👦", "Peoples", ["family_woman_woman_boy"]),
    new Emoji("👩‍👩‍👧", "Peoples", ["family_woman_woman_girl"]),
    new Emoji("👩‍👩‍👧‍👦", "Peoples", ["family_woman_woman_girl_boy"]),
    new Emoji("👩‍👩‍👦‍👦", "Peoples", ["family_woman_woman_boy_boy"]),
    new Emoji("👩‍👩‍👧‍👧", "Peoples", ["family_woman_woman_girl_girl"]),
    new Emoji("👨‍👨‍👦", "Peoples", ["family_man_man_boy"]),
    new Emoji("👨‍👨‍👧", "Peoples", ["family_man_man_girl"]),
    new Emoji("👨‍👨‍👧‍👦", "Peoples", ["family_man_man_girl_boy"]),
    new Emoji("👨‍👨‍👦‍👦", "Peoples", ["family_man_man_boy_boy"]),
    new Emoji("👨‍👨‍👧‍👧", "Peoples", ["family_man_man_girl_girl"]),
    new Emoji("👩‍👦", "Peoples", ["family_woman_boy"]),
    new Emoji("👩‍👧", "Peoples", ["family_woman_girl"]),
    new Emoji("👩‍👧‍👦", "Peoples", ["family_woman_girl_boy"]),
    new Emoji("👩‍👦‍👦", "Peoples", ["family_woman_boy_boy"]),
    new Emoji("👩‍👧‍👧", "Peoples", ["family_woman_girl_girl"]),
    new Emoji("👨‍👦", "Peoples", ["family_man_boy"]),
    new Emoji("👨‍👧", "Peoples", ["family_man_girl"]),
    new Emoji("👨‍👧‍👦", "Peoples", ["family_man_girl_boy"]),
    new Emoji("👨‍👦‍👦", "Peoples", ["family_man_boy_boy"]),
    new Emoji("👨‍👧‍👧", "Peoples", ["family_man_girl_girl"]),
    new Emoji("👚", "Peoples", ["womans_clothes"]),
    new Emoji("👕", "Peoples", ["shirt", "tshirt"]),
    new Emoji("👖", "Peoples", ["jeans"]),
    new Emoji("👔", "Peoples", ["necktie"]),
    new Emoji("👗", "Peoples", ["dress"]),
    new Emoji("👙", "Peoples", ["bikini"]),
    new Emoji("👘", "Peoples", ["kimono"]),
    new Emoji("👠", "Peoples", ["high_heel"]),
    new Emoji("👡", "Peoples", ["sandal"]),
    new Emoji("👢", "Peoples", ["boot"]),
    new Emoji("👞", "Peoples", ["mans_shoe", "shoe"]),
    new Emoji("👟", "Peoples", ["athletic_shoe"]),
    new Emoji("👒", "Peoples", ["womans_hat"]),
    new Emoji("🎩", "Peoples", ["tophat"]),
    new Emoji("🎓", "Peoples", ["mortar_board"]),
    new Emoji("👑", "Peoples", ["crown"]),
    new Emoji("⛑", "Peoples", ["rescue_worker_helmet"]),
    new Emoji("🎒", "Peoples", ["school_satchel"]),
    new Emoji("👝", "Peoples", ["pouch"]),
    new Emoji("👛", "Peoples", ["purse"]),
    new Emoji("👜", "Peoples", ["handbag"]),
    new Emoji("💼", "Peoples", ["briefcase"]),
    new Emoji("👓", "Peoples", ["eyeglasses"]),
    new Emoji("🕶", "Peoples", ["dark_sunglasses"]),
    new Emoji("🌂", "Peoples", ["closed_umbrella"]),
    new Emoji("☂️", "Peoples", ["open_umbrella"]),
    new Emoji("🐶", "Nature", ["dog"]),
    new Emoji("🐱", "Nature", ["cat"]),
    new Emoji("🐭", "Nature", ["mouse"]),
    new Emoji("🐹", "Nature", ["hamster"]),
    new Emoji("🐰", "Nature", ["rabbit"]),
    new Emoji("🦊", "Nature", ["fox_face"]),
    new Emoji("🐻", "Nature", ["bear"]),
    new Emoji("🐼", "Nature", ["panda_face"]),
    new Emoji("🐨", "Nature", ["koala"]),
    new Emoji("🐯", "Nature", ["tiger"]),
    new Emoji("🦁", "Nature", ["lion"]),
    new Emoji("🐮", "Nature", ["cow"]),
    new Emoji("🐷", "Nature", ["pig"]),
    new Emoji("🐽", "Nature", ["pig_nose"]),
    new Emoji("🐸", "Nature", ["frog"]),
    new Emoji("🐵", "Nature", ["monkey_face"]),
    new Emoji("🙈", "Nature", ["see_no_evil"]),
    new Emoji("🙉", "Nature", ["hear_no_evil"]),
    new Emoji("🙊", "Nature", ["speak_no_evil"]),
    new Emoji("🐒", "Nature", ["monkey"]),
    new Emoji("🐔", "Nature", ["chicken"]),
    new Emoji("🐧", "Nature", ["penguin"]),
    new Emoji("🐦", "Nature", ["bird"]),
    new Emoji("🐤", "Nature", ["baby_chick"]),
    new Emoji("🐣", "Nature", ["hatching_chick"]),
    new Emoji("🐥", "Nature", ["hatched_chick"]),
    new Emoji("🦆", "Nature", ["duck"]),
    new Emoji("🦅", "Nature", ["eagle"]),
    new Emoji("🦉", "Nature", ["owl"]),
    new Emoji("🦇", "Nature", ["bat"]),
    new Emoji("🐺", "Nature", ["wolf"]),
    new Emoji("🐗", "Nature", ["boar"]),
    new Emoji("🐴", "Nature", ["horse"]),
    new Emoji("🦄", "Nature", ["unicorn"]),
    new Emoji("🐝", "Nature", ["bee", "honeybee"]),
    new Emoji("🐛", "Nature", ["bug"]),
    new Emoji("🦋", "Nature", ["butterfly"]),
    new Emoji("🐌", "Nature", ["snail"]),
    new Emoji("🐚", "Nature", ["shell"]),
    new Emoji("🐞", "Nature", ["beetle"]),
    new Emoji("🐜", "Nature", ["ant"]),
    new Emoji("🕷", "Nature", ["spider"]),
    new Emoji("🕸", "Nature", ["spider_web"]),
    new Emoji("🐢", "Nature", ["turtle"]),
    new Emoji("🐍", "Nature", ["snake"]),
    new Emoji("🦎", "Nature", ["lizard"]),
    new Emoji("🦂", "Nature", ["scorpion"]),
    new Emoji("🦀", "Nature", ["crab"]),
    new Emoji("🦑", "Nature", ["squid"]),
    new Emoji("🐙", "Nature", ["octopus"]),
    new Emoji("🦐", "Nature", ["shrimp"]),
    new Emoji("🐠", "Nature", ["tropical_fish"]),
    new Emoji("🐟", "Nature", ["fish"]),
    new Emoji("🐡", "Nature", ["blowfish"]),
    new Emoji("🐬", "Nature", ["dolphin", "flipper"]),
    new Emoji("🦈", "Nature", ["shark"]),
    new Emoji("🐳", "Nature", ["whale"]),
    new Emoji("🐋", "Nature", ["whale2"]),
    new Emoji("🐊", "Nature", ["crocodile"]),
    new Emoji("🐆", "Nature", ["leopard"]),
    new Emoji("🐅", "Nature", ["tiger2"]),
    new Emoji("🐃", "Nature", ["water_buffalo"]),
    new Emoji("🐂", "Nature", ["ox"]),
    new Emoji("🐄", "Nature", ["cow2"]),
    new Emoji("🦌", "Nature", ["deer"]),
    new Emoji("🐪", "Nature", ["dromedary_camel"]),
    new Emoji("🐫", "Nature", ["camel"]),
    new Emoji("🐘", "Nature", ["elephant"]),
    new Emoji("🦏", "Nature", ["rhinoceros"]),
    new Emoji("🦍", "Nature", ["gorilla"]),
    new Emoji("🐎", "Nature", ["racehorse"]),
    new Emoji("🐖", "Nature", ["pig2"]),
    new Emoji("🐐", "Nature", ["goat"]),
    new Emoji("🐏", "Nature", ["ram"]),
    new Emoji("🐑", "Nature", ["sheep"]),
    new Emoji("🐕", "Nature", ["dog2"]),
    new Emoji("🐩", "Nature", ["poodle"]),
    new Emoji("🐈", "Nature", ["cat2"]),
    new Emoji("🐓", "Nature", ["rooster"]),
    new Emoji("🦃", "Nature", ["turkey"]),
    new Emoji("🕊", "Nature", ["dove"]),
    new Emoji("🐇", "Nature", ["rabbit2"]),
    new Emoji("🐁", "Nature", ["mouse2"]),
    new Emoji("🐀", "Nature", ["rat"]),
    new Emoji("🐿", "Nature", ["chipmunk"]),
    new Emoji("🐾", "Nature", ["feet", "paw_prints"]),
    new Emoji("🐉", "Nature", ["dragon"]),
    new Emoji("🐲", "Nature", ["dragon_face"]),
    new Emoji("🌵", "Nature", ["cactus"]),
    new Emoji("🎄", "Nature", ["christmas_tree"]),
    new Emoji("🌲", "Nature", ["evergreen_tree"]),
    new Emoji("🌳", "Nature", ["deciduous_tree"]),
    new Emoji("🌴", "Nature", ["palm_tree"]),
    new Emoji("🌱", "Nature", ["seedling"]),
    new Emoji("🌿", "Nature", ["herb"]),
    new Emoji("☘️", "Nature", ["shamrock"]),
    new Emoji("🍀", "Nature", ["four_leaf_clover"]),
    new Emoji("🎍", "Nature", ["bamboo"]),
    new Emoji("🎋", "Nature", ["tanabata_tree"]),
    new Emoji("🍃", "Nature", ["leaves"]),
    new Emoji("🍂", "Nature", ["fallen_leaf"]),
    new Emoji("🍁", "Nature", ["maple_leaf"]),
    new Emoji("🍄", "Nature", ["mushroom"]),
    new Emoji("🌾", "Nature", ["ear_of_rice"]),
    new Emoji("💐", "Nature", ["bouquet"]),
    new Emoji("🌷", "Nature", ["tulip"]),
    new Emoji("🌹", "Nature", ["rose"]),
    new Emoji("🥀", "Nature", ["wilted_flower"]),
    new Emoji("🌻", "Nature", ["sunflower"]),
    new Emoji("🌼", "Nature", ["blossom"]),
    new Emoji("🌸", "Nature", ["cherry_blossom"]),
    new Emoji("🌺", "Nature", ["hibiscus"]),
    new Emoji("🌎", "Nature", ["earth_americas"]),
    new Emoji("🌍", "Nature", ["earth_africa"]),
    new Emoji("🌏", "Nature", ["earth_asia"]),
    new Emoji("🌕", "Nature", ["full_moon"]),
    new Emoji("🌖", "Nature", ["waning_gibbous_moon"]),
    new Emoji("🌗", "Nature", ["last_quarter_moon"]),
    new Emoji("🌘", "Nature", ["waning_crescent_moon"]),
    new Emoji("🌑", "Nature", ["new_moon"]),
    new Emoji("🌒", "Nature", ["waxing_crescent_moon"]),
    new Emoji("🌓", "Nature", ["first_quarter_moon"]),
    new Emoji("🌔", "Nature", ["moon", "waxing_gibbous_moon"]),
    new Emoji("🌚", "Nature", ["new_moon_with_face"]),
    new Emoji("🌝", "Nature", ["full_moon_with_face"]),
    new Emoji("🌞", "Nature", ["sun_with_face"]),
    new Emoji("🌛", "Nature", ["first_quarter_moon_with_face"]),
    new Emoji("🌜", "Nature", ["last_quarter_moon_with_face"]),
    new Emoji("🌙", "Nature", ["crescent_moon"]),
    new Emoji("💫", "Nature", ["dizzy"]),
    new Emoji("⭐️", "Nature", ["star"]),
    new Emoji("🌟", "Nature", ["star2"]),
    new Emoji("✨", "Nature", ["sparkles"]),
    new Emoji("⚡️", "Nature", ["zap"]),
    new Emoji("🔥", "Nature", ["fire"]),
    new Emoji("💥", "Nature", ["boom", "collision"]),
    new Emoji("☄", "Nature", ["comet"]),
    new Emoji("☀️", "Nature", ["sunny"]),
    new Emoji("🌤", "Nature", ["sun_behind_small_cloud"]),
    new Emoji("⛅️", "Nature", ["partly_sunny"]),
    new Emoji("🌥", "Nature", ["sun_behind_large_cloud"]),
    new Emoji("🌦", "Nature", ["sun_behind_rain_cloud"]),
    new Emoji("🌈", "Nature", ["rainbow"]),
    new Emoji("☁️", "Nature", ["cloud"]),
    new Emoji("🌧", "Nature", ["cloud_with_rain"]),
    new Emoji("⛈", "Nature", ["cloud_with_lightning_and_rain"]),
    new Emoji("🌩", "Nature", ["cloud_with_lightning"]),
    new Emoji("🌨", "Nature", ["cloud_with_snow"]),
    new Emoji("☃️", "Nature", ["snowman_with_snow"]),
    new Emoji("⛄️", "Nature", ["snowman"]),
    new Emoji("❄️", "Nature", ["snowflake"]),
    new Emoji("🌬", "Nature", ["wind_face"]),
    new Emoji("💨", "Nature", ["dash"]),
    new Emoji("🌪", "Nature", ["tornado"]),
    new Emoji("🌫", "Nature", ["fog"]),
    new Emoji("🌊", "Nature", ["ocean"]),
    new Emoji("💧", "Nature", ["droplet"]),
    new Emoji("💦", "Nature", ["sweat_drops"]),
    new Emoji("☔️", "Nature", ["umbrella"]),
    new Emoji("🍏", "Foods", ["green_apple"]),
    new Emoji("🍎", "Foods", ["apple"]),
    new Emoji("🍐", "Foods", ["pear"]),
    new Emoji("🍊", "Foods", ["tangerine", "orange", "mandarin"]),
    new Emoji("🍋", "Foods", ["lemon"]),
    new Emoji("🍌", "Foods", ["banana"]),
    new Emoji("🍉", "Foods", ["watermelon"]),
    new Emoji("🍇", "Foods", ["grapes"]),
    new Emoji("🍓", "Foods", ["strawberry"]),
    new Emoji("🍈", "Foods", ["melon"]),
    new Emoji("🍒", "Foods", ["cherries"]),
    new Emoji("🍑", "Foods", ["peach"]),
    new Emoji("🍍", "Foods", ["pineapple"]),
    new Emoji("🥝", "Foods", ["kiwi_fruit"]),
    new Emoji("🥑", "Foods", ["avocado"]),
    new Emoji("🍅", "Foods", ["tomato"]),
    new Emoji("🍆", "Foods", ["eggplant"]),
    new Emoji("🥒", "Foods", ["cucumber"]),
    new Emoji("🥕", "Foods", ["carrot"]),
    new Emoji("🌽", "Foods", ["corn"]),
    new Emoji("🌶", "Foods", ["hot_pepper"]),
    new Emoji("🥔", "Foods", ["potato"]),
    new Emoji("🍠", "Foods", ["sweet_potato"]),
    new Emoji("🌰", "Foods", ["chestnut"]),
    new Emoji("🥜", "Foods", ["peanuts"]),
    new Emoji("🍯", "Foods", ["honey_pot"]),
    new Emoji("🥐", "Foods", ["croissant"]),
    new Emoji("🍞", "Foods", ["bread"]),
    new Emoji("🥖", "Foods", ["baguette_bread"]),
    new Emoji("🧀", "Foods", ["cheese"]),
    new Emoji("🥚", "Foods", ["egg"]),
    new Emoji("🍳", "Foods", ["fried_egg"]),
    new Emoji("🥓", "Foods", ["bacon"]),
    new Emoji("🥞", "Foods", ["pancakes"]),
    new Emoji("🍤", "Foods", ["fried_shrimp"]),
    new Emoji("🍗", "Foods", ["poultry_leg"]),
    new Emoji("🍖", "Foods", ["meat_on_bone"]),
    new Emoji("🍕", "Foods", ["pizza"]),
    new Emoji("🌭", "Foods", ["hotdog"]),
    new Emoji("🍔", "Foods", ["hamburger"]),
    new Emoji("🍟", "Foods", ["fries"]),
    new Emoji("🥙", "Foods", ["stuffed_flatbread"]),
    new Emoji("🌮", "Foods", ["taco"]),
    new Emoji("🌯", "Foods", ["burrito"]),
    new Emoji("🥗", "Foods", ["green_salad"]),
    new Emoji("🥘", "Foods", ["shallow_pan_of_food"]),
    new Emoji("🍝", "Foods", ["spaghetti"]),
    new Emoji("🍜", "Foods", ["ramen"]),
    new Emoji("🍲", "Foods", ["stew"]),
    new Emoji("🍥", "Foods", ["fish_cake"]),
    new Emoji("🍣", "Foods", ["sushi"]),
    new Emoji("🍱", "Foods", ["bento"]),
    new Emoji("🍛", "Foods", ["curry"]),
    new Emoji("🍚", "Foods", ["rice"]),
    new Emoji("🍙", "Foods", ["rice_ball"]),
    new Emoji("🍘", "Foods", ["rice_cracker"]),
    new Emoji("🍢", "Foods", ["oden"]),
    new Emoji("🍡", "Foods", ["dango"]),
    new Emoji("🍧", "Foods", ["shaved_ice"]),
    new Emoji("🍨", "Foods", ["ice_cream"]),
    new Emoji("🍦", "Foods", ["icecream"]),
    new Emoji("🍰", "Foods", ["cake"]),
    new Emoji("🎂", "Foods", ["birthday"]),
    new Emoji("🍮", "Foods", ["custard"]),
    new Emoji("🍭", "Foods", ["lollipop"]),
    new Emoji("🍬", "Foods", ["candy"]),
    new Emoji("🍫", "Foods", ["chocolate_bar"]),
    new Emoji("🍿", "Foods", ["popcorn"]),
    new Emoji("🍩", "Foods", ["doughnut"]),
    new Emoji("🍪", "Foods", ["cookie"]),
    new Emoji("🥛", "Foods", ["milk_glass"]),
    new Emoji("🍼", "Foods", ["baby_bottle"]),
    new Emoji("☕️", "Foods", ["coffee"]),
    new Emoji("🍵", "Foods", ["tea"]),
    new Emoji("🍶", "Foods", ["sake"]),
    new Emoji("🍺", "Foods", ["beer"]),
    new Emoji("🍻", "Foods", ["beers"]),
    new Emoji("🥂", "Foods", ["clinking_glasses"]),
    new Emoji("🍷", "Foods", ["wine_glass"]),
    new Emoji("🥃", "Foods", ["tumbler_glass"]),
    new Emoji("🍸", "Foods", ["cocktail"]),
    new Emoji("🍹", "Foods", ["tropical_drink"]),
    new Emoji("🍾", "Foods", ["champagne"]),
    new Emoji("🥄", "Foods", ["spoon"]),
    new Emoji("🍴", "Foods", ["fork_and_knife"]),
    new Emoji("🍽", "Foods", ["plate_with_cutlery"]),
    new Emoji("⚽️", "Activity", ["soccer"]),
    new Emoji("🏀", "Activity", ["basketball"]),
    new Emoji("🏈", "Activity", ["football"]),
    new Emoji("⚾️", "Activity", ["baseball"]),
    new Emoji("🎾", "Activity", ["tennis"]),
    new Emoji("🏐", "Activity", ["volleyball"]),
    new Emoji("🏉", "Activity", ["rugby_football"]),
    new Emoji("🎱", "Activity", ["8ball"]),
    new Emoji("🏓", "Activity", ["ping_pong"]),
    new Emoji("🏸", "Activity", ["badminton"]),
    new Emoji("🥅", "Activity", ["goal_net"]),
    new Emoji("🏒", "Activity", ["ice_hockey"]),
    new Emoji("🏑", "Activity", ["field_hockey"]),
    new Emoji("🏏", "Activity", ["cricket"]),
    new Emoji("⛳️", "Activity", ["golf"]),
    new Emoji("🏹", "Activity", ["bow_and_arrow"]),
    new Emoji("🎣", "Activity", ["fishing_pole_and_fish"]),
    new Emoji("🥊", "Activity", ["boxing_glove"]),
    new Emoji("🥋", "Activity", ["martial_arts_uniform"]),
    new Emoji("⛸", "Activity", ["ice_skate"]),
    new Emoji("🎿", "Activity", ["ski"]),
    new Emoji("⛷", "Activity", ["skier"]),
    new Emoji("🏂", "Activity", ["snowboarder"]),
    new Emoji("🏋️‍♀️", "Activity", ["weight_lifting_woman"]),
    new Emoji("🏋", "Activity", ["weight_lifting_man"]),
    new Emoji("🤺", "Activity", ["person_fencing"]),
    new Emoji("🤼‍♀", "Activity", ["women_wrestling"]),
    new Emoji("🤼‍♂", "Activity", ["men_wrestling"]),
    new Emoji("🤸‍♀", "Activity", ["woman_cartwheeling"]),
    new Emoji("🤸‍♂", "Activity", ["man_cartwheeling"]),
    new Emoji("⛹️‍♀️", "Activity", ["basketball_woman"]),
    new Emoji("⛹", "Activity", ["basketball_man"]),
    new Emoji("🤾‍♀", "Activity", ["woman_playing_handball"]),
    new Emoji("🤾‍♂", "Activity", ["man_playing_handball"]),
    new Emoji("🏌️‍♀️", "Activity", ["golfing_woman"]),
    new Emoji("🏌", "Activity", ["golfing_man"]),
    new Emoji("🏄‍♀", "Activity", ["surfing_woman"]),
    new Emoji("🏄", "Activity", ["surfing_man", "surfer"]),
    new Emoji("🏊‍♀", "Activity", ["swimming_woman"]),
    new Emoji("🏊", "Activity", ["swimming_man", "swimmer"]),
    new Emoji("🤽‍♀", "Activity", ["woman_playing_water_polo"]),
    new Emoji("🤽‍♂", "Activity", ["man_playing_water_polo"]),
    new Emoji("🚣‍♀", "Activity", ["rowing_woman"]),
    new Emoji("🚣", "Activity", ["rowing_man", "rowboat"]),
    new Emoji("🏇", "Activity", ["horse_racing"]),
    new Emoji("🚴‍♀", "Activity", ["biking_woman"]),
    new Emoji("🚴", "Activity", ["biking_man", "bicyclist"]),
    new Emoji("🚵‍♀", "Activity", ["mountain_biking_woman"]),
    new Emoji("🚵", "Activity", ["mountain_biking_man", "mountain_bicyclist"]),
    new Emoji("🎽", "Activity", ["running_shirt_with_sash"]),
    new Emoji("🏅", "Activity", ["medal_sports"]),
    new Emoji("🎖", "Activity", ["medal_military"]),
    new Emoji("🥇", "Activity", ["1st_place_medal"]),
    new Emoji("🥈", "Activity", ["2nd_place_medal"]),
    new Emoji("🥉", "Activity", ["3rd_place_medal"]),
    new Emoji("🏆", "Activity", ["trophy"]),
    new Emoji("🏵", "Activity", ["rosette"]),
    new Emoji("🎗", "Activity", ["reminder_ribbon"]),
    new Emoji("🎫", "Activity", ["ticket"]),
    new Emoji("🎟", "Activity", ["tickets"]),
    new Emoji("🎪", "Activity", ["circus_tent"]),
    new Emoji("🤹‍♀", "Activity", ["woman_juggling"]),
    new Emoji("🤹‍♂", "Activity", ["man_juggling"]),
    new Emoji("🎭", "Activity", ["performing_arts"]),
    new Emoji("🎨", "Activity", ["art"]),
    new Emoji("🎬", "Activity", ["clapper"]),
    new Emoji("🎤", "Activity", ["microphone"]),
    new Emoji("🎧", "Activity", ["headphones"]),
    new Emoji("🎼", "Activity", ["musical_score"]),
    new Emoji("🎹", "Activity", ["musical_keyboard"]),
    new Emoji("🥁", "Activity", ["drum"]),
    new Emoji("🎷", "Activity", ["saxophone"]),
    new Emoji("🎺", "Activity", ["trumpet"]),
    new Emoji("🎸", "Activity", ["guitar"]),
    new Emoji("🎻", "Activity", ["violin"]),
    new Emoji("🎲", "Activity", ["game_die"]),
    new Emoji("🎯", "Activity", ["dart"]),
    new Emoji("🎳", "Activity", ["bowling"]),
    new Emoji("🎮", "Activity", ["video_game"]),
    new Emoji("🎰", "Activity", ["slot_machine"]),
    new Emoji("🚗", "Places", ["car", "red_car"]),
    new Emoji("🚕", "Places", ["taxi"]),
    new Emoji("🚙", "Places", ["blue_car"]),
    new Emoji("🚌", "Places", ["bus"]),
    new Emoji("🚎", "Places", ["trolleybus"]),
    new Emoji("🏎", "Places", ["racing_car"]),
    new Emoji("🚓", "Places", ["police_car"]),
    new Emoji("🚑", "Places", ["ambulance"]),
    new Emoji("🚒", "Places", ["fire_engine"]),
    new Emoji("🚐", "Places", ["minibus"]),
    new Emoji("🚚", "Places", ["truck"]),
    new Emoji("🚛", "Places", ["articulated_lorry"]),
    new Emoji("🚜", "Places", ["tractor"]),
    new Emoji("🛴", "Places", ["kick_scooter"]),
    new Emoji("🚲", "Places", ["bike"]),
    new Emoji("🛵", "Places", ["motor_scooter"]),
    new Emoji("🏍", "Places", ["motorcycle"]),
    new Emoji("🚨", "Places", ["rotating_light"]),
    new Emoji("🚔", "Places", ["oncoming_police_car"]),
    new Emoji("🚍", "Places", ["oncoming_bus"]),
    new Emoji("🚘", "Places", ["oncoming_automobile"]),
    new Emoji("🚖", "Places", ["oncoming_taxi"]),
    new Emoji("🚡", "Places", ["aerial_tramway"]),
    new Emoji("🚠", "Places", ["mountain_cableway"]),
    new Emoji("🚟", "Places", ["suspension_railway"]),
    new Emoji("🚃", "Places", ["railway_car"]),
    new Emoji("🚋", "Places", ["train"]),
    new Emoji("🚞", "Places", ["mountain_railway"]),
    new Emoji("🚝", "Places", ["monorail"]),
    new Emoji("🚄", "Places", ["bullettrain_side"]),
    new Emoji("🚅", "Places", ["bullettrain_front"]),
    new Emoji("🚈", "Places", ["light_rail"]),
    new Emoji("🚂", "Places", ["steam_locomotive"]),
    new Emoji("🚆", "Places", ["train2"]),
    new Emoji("🚇", "Places", ["metro"]),
    new Emoji("🚊", "Places", ["tram"]),
    new Emoji("🚉", "Places", ["station"]),
    new Emoji("🚁", "Places", ["helicopter"]),
    new Emoji("🛩", "Places", ["small_airplane"]),
    new Emoji("✈️", "Places", ["airplane"]),
    new Emoji("🛫", "Places", ["flight_departure"]),
    new Emoji("🛬", "Places", ["flight_arrival"]),
    new Emoji("🚀", "Places", ["rocket"]),
    new Emoji("🛰", "Places", ["artificial_satellite"]),
    new Emoji("💺", "Places", ["seat"]),
    new Emoji("🛶", "Places", ["canoe"]),
    new Emoji("⛵️", "Places", ["boat", "sailboat"]),
    new Emoji("🛥", "Places", ["motor_boat"]),
    new Emoji("🚤", "Places", ["speedboat"]),
    new Emoji("🛳", "Places", ["passenger_ship"]),
    new Emoji("⛴", "Places", ["ferry"]),
    new Emoji("🚢", "Places", ["ship"]),
    new Emoji("⚓️", "Places", ["anchor"]),
    new Emoji("🚧", "Places", ["construction"]),
    new Emoji("⛽️", "Places", ["fuelpump"]),
    new Emoji("🚏", "Places", ["busstop"]),
    new Emoji("🚦", "Places", ["vertical_traffic_light"]),
    new Emoji("🚥", "Places", ["traffic_light"]),
    new Emoji("🗺", "Places", ["world_map"]),
    new Emoji("🗿", "Places", ["moyai"]),
    new Emoji("🗽", "Places", ["statue_of_liberty"]),
    new Emoji("⛲️", "Places", ["fountain"]),
    new Emoji("🗼", "Places", ["tokyo_tower"]),
    new Emoji("🏰", "Places", ["european_castle"]),
    new Emoji("🏯", "Places", ["japanese_castle"]),
    new Emoji("🏟", "Places", ["stadium"]),
    new Emoji("🎡", "Places", ["ferris_wheel"]),
    new Emoji("🎢", "Places", ["roller_coaster"]),
    new Emoji("🎠", "Places", ["carousel_horse"]),
    new Emoji("⛱", "Places", ["parasol_on_ground"]),
    new Emoji("🏖", "Places", ["beach_umbrella"]),
    new Emoji("🏝", "Places", ["desert_island"]),
    new Emoji("⛰", "Places", ["mountain"]),
    new Emoji("🏔", "Places", ["mountain_snow"]),
    new Emoji("🗻", "Places", ["mount_fuji"]),
    new Emoji("🌋", "Places", ["volcano"]),
    new Emoji("🏜", "Places", ["desert"]),
    new Emoji("🏕", "Places", ["camping"]),
    new Emoji("⛺️", "Places", ["tent"]),
    new Emoji("🛤", "Places", ["railway_track"]),
    new Emoji("🛣", "Places", ["motorway"]),
    new Emoji("🏗", "Places", ["building_construction"]),
    new Emoji("🏭", "Places", ["factory"]),
    new Emoji("🏠", "Places", ["house"]),
    new Emoji("🏡", "Places", ["house_with_garden"]),
    new Emoji("🏘", "Places", ["houses"]),
    new Emoji("🏚", "Places", ["derelict_house"]),
    new Emoji("🏢", "Places", ["office"]),
    new Emoji("🏬", "Places", ["department_store"]),
    new Emoji("🏣", "Places", ["post_office"]),
    new Emoji("🏤", "Places", ["european_post_office"]),
    new Emoji("🏥", "Places", ["hospital"]),
    new Emoji("🏦", "Places", ["bank"]),
    new Emoji("🏨", "Places", ["hotel"]),
    new Emoji("🏪", "Places", ["convenience_store"]),
    new Emoji("🏫", "Places", ["school"]),
    new Emoji("🏩", "Places", ["love_hotel"]),
    new Emoji("💒", "Places", ["wedding"]),
    new Emoji("🏛", "Places", ["classical_building"]),
    new Emoji("⛪️", "Places", ["church"]),
    new Emoji("🕌", "Places", ["mosque"]),
    new Emoji("🕍", "Places", ["synagogue"]),
    new Emoji("🕋", "Places", ["kaaba"]),
    new Emoji("⛩", "Places", ["shinto_shrine"]),
    new Emoji("🗾", "Places", ["japan"]),
    new Emoji("🎑", "Places", ["rice_scene"]),
    new Emoji("🏞", "Places", ["national_park"]),
    new Emoji("🌅", "Places", ["sunrise"]),
    new Emoji("🌄", "Places", ["sunrise_over_mountains"]),
    new Emoji("🌠", "Places", ["stars"]),
    new Emoji("🎇", "Places", ["sparkler"]),
    new Emoji("🎆", "Places", ["fireworks"]),
    new Emoji("🌇", "Places", ["city_sunrise"]),
    new Emoji("🌆", "Places", ["city_sunset"]),
    new Emoji("🏙", "Places", ["cityscape"]),
    new Emoji("🌃", "Places", ["night_with_stars"]),
    new Emoji("🌌", "Places", ["milky_way"]),
    new Emoji("🌉", "Places", ["bridge_at_night"]),
    new Emoji("🌁", "Places", ["foggy"]),
    new Emoji("⌚️", "Objects", ["watch"]),
    new Emoji("📱", "Objects", ["iphone"]),
    new Emoji("📲", "Objects", ["calling"]),
    new Emoji("💻", "Objects", ["computer"]),
    new Emoji("⌨️", "Objects", ["keyboard"]),
    new Emoji("🖥", "Objects", ["desktop_computer"]),
    new Emoji("🖨", "Objects", ["printer"]),
    new Emoji("🖱", "Objects", ["computer_mouse"]),
    new Emoji("🖲", "Objects", ["trackball"]),
    new Emoji("🕹", "Objects", ["joystick"]),
    new Emoji("🗜", "Objects", ["clamp"]),
    new Emoji("💽", "Objects", ["minidisc"]),
    new Emoji("💾", "Objects", ["floppy_disk"]),
    new Emoji("💿", "Objects", ["cd"]),
    new Emoji("📀", "Objects", ["dvd"]),
    new Emoji("📼", "Objects", ["vhs"]),
    new Emoji("📷", "Objects", ["camera"]),
    new Emoji("📸", "Objects", ["camera_flash"]),
    new Emoji("📹", "Objects", ["video_camera"]),
    new Emoji("🎥", "Objects", ["movie_camera"]),
    new Emoji("📽", "Objects", ["film_projector"]),
    new Emoji("🎞", "Objects", ["film_strip"]),
    new Emoji("📞", "Objects", ["telephone_receiver"]),
    new Emoji("☎️", "Objects", ["phone", "telephone"]),
    new Emoji("📟", "Objects", ["pager"]),
    new Emoji("📠", "Objects", ["fax"]),
    new Emoji("📺", "Objects", ["tv"]),
    new Emoji("📻", "Objects", ["radio"]),
    new Emoji("🎙", "Objects", ["studio_microphone"]),
    new Emoji("🎚", "Objects", ["level_slider"]),
    new Emoji("🎛", "Objects", ["control_knobs"]),
    new Emoji("⏱", "Objects", ["stopwatch"]),
    new Emoji("⏲", "Objects", ["timer_clock"]),
    new Emoji("⏰", "Objects", ["alarm_clock"]),
    new Emoji("🕰", "Objects", ["mantelpiece_clock"]),
    new Emoji("⌛️", "Objects", ["hourglass"]),
    new Emoji("⏳", "Objects", ["hourglass_flowing_sand"]),
    new Emoji("📡", "Objects", ["satellite"]),
    new Emoji("🔋", "Objects", ["battery"]),
    new Emoji("🔌", "Objects", ["electric_plug"]),
    new Emoji("💡", "Objects", ["bulb"]),
    new Emoji("🔦", "Objects", ["flashlight"]),
    new Emoji("🕯", "Objects", ["candle"]),
    new Emoji("🗑", "Objects", ["wastebasket"]),
    new Emoji("🛢", "Objects", ["oil_drum"]),
    new Emoji("💸", "Objects", ["money_with_wings"]),
    new Emoji("💵", "Objects", ["dollar"]),
    new Emoji("💴", "Objects", ["yen"]),
    new Emoji("💶", "Objects", ["euro"]),
    new Emoji("💷", "Objects", ["pound"]),
    new Emoji("💰", "Objects", ["moneybag"]),
    new Emoji("💳", "Objects", ["credit_card"]),
    new Emoji("💎", "Objects", ["gem"]),
    new Emoji("⚖️", "Objects", ["balance_scale"]),
    new Emoji("🔧", "Objects", ["wrench"]),
    new Emoji("🔨", "Objects", ["hammer"]),
    new Emoji("⚒", "Objects", ["hammer_and_pick"]),
    new Emoji("🛠", "Objects", ["hammer_and_wrench"]),
    new Emoji("⛏", "Objects", ["pick"]),
    new Emoji("🔩", "Objects", ["nut_and_bolt"]),
    new Emoji("⚙️", "Objects", ["gear"]),
    new Emoji("⛓", "Objects", ["chains"]),
    new Emoji("🔫", "Objects", ["gun"]),
    new Emoji("💣", "Objects", ["bomb"]),
    new Emoji("🔪", "Objects", ["hocho", "knife"]),
    new Emoji("🗡", "Objects", ["dagger"]),
    new Emoji("⚔️", "Objects", ["crossed_swords"]),
    new Emoji("🛡", "Objects", ["shield"]),
    new Emoji("🚬", "Objects", ["smoking"]),
    new Emoji("⚰️", "Objects", ["coffin"]),
    new Emoji("⚱️", "Objects", ["funeral_urn"]),
    new Emoji("🏺", "Objects", ["amphora"]),
    new Emoji("🔮", "Objects", ["crystal_ball"]),
    new Emoji("📿", "Objects", ["prayer_beads"]),
    new Emoji("💈", "Objects", ["barber"]),
    new Emoji("⚗️", "Objects", ["alembic"]),
    new Emoji("🔭", "Objects", ["telescope"]),
    new Emoji("🔬", "Objects", ["microscope"]),
    new Emoji("🕳", "Objects", ["hole"]),
    new Emoji("💊", "Objects", ["pill"]),
    new Emoji("💉", "Objects", ["syringe"]),
    new Emoji("🌡", "Objects", ["thermometer"]),
    new Emoji("🚽", "Objects", ["toilet"]),
    new Emoji("🚰", "Objects", ["potable_water"]),
    new Emoji("🚿", "Objects", ["shower"]),
    new Emoji("🛁", "Objects", ["bathtub"]),
    new Emoji("🛀", "Objects", ["bath"]),
    new Emoji("🛎", "Objects", ["bellhop_bell"]),
    new Emoji("🔑", "Objects", ["key"]),
    new Emoji("🗝", "Objects", ["old_key"]),
    new Emoji("🚪", "Objects", ["door"]),
    new Emoji("🛋", "Objects", ["couch_and_lamp"]),
    new Emoji("🛏", "Objects", ["bed"]),
    new Emoji("🛌", "Objects", ["sleeping_bed"]),
    new Emoji("🖼", "Objects", ["framed_picture"]),
    new Emoji("🛍", "Objects", ["shopping"]),
    new Emoji("🛒", "Objects", ["shopping_cart"]),
    new Emoji("🎁", "Objects", ["gift"]),
    new Emoji("🎈", "Objects", ["balloon"]),
    new Emoji("🎏", "Objects", ["flags"]),
    new Emoji("🎀", "Objects", ["ribbon"]),
    new Emoji("🎊", "Objects", ["confetti_ball"]),
    new Emoji("🎉", "Objects", ["tada"]),
    new Emoji("🎎", "Objects", ["dolls"]),
    new Emoji("🏮", "Objects", ["izakaya_lantern", "lantern"]),
    new Emoji("🎐", "Objects", ["wind_chime"]),
    new Emoji("✉️", "Objects", ["email", "envelope"]),
    new Emoji("📩", "Objects", ["envelope_with_arrow"]),
    new Emoji("📨", "Objects", ["incoming_envelope"]),
    new Emoji("📧", "Objects", ["e-mail"]),
    new Emoji("💌", "Objects", ["love_letter"]),
    new Emoji("📥", "Objects", ["inbox_tray"]),
    new Emoji("📤", "Objects", ["outbox_tray"]),
    new Emoji("📦", "Objects", ["package"]),
    new Emoji("🏷", "Objects", ["label"]),
    new Emoji("📪", "Objects", ["mailbox_closed"]),
    new Emoji("📫", "Objects", ["mailbox"]),
    new Emoji("📬", "Objects", ["mailbox_with_mail"]),
    new Emoji("📭", "Objects", ["mailbox_with_no_mail"]),
    new Emoji("📮", "Objects", ["postbox"]),
    new Emoji("📯", "Objects", ["postal_horn"]),
    new Emoji("📜", "Objects", ["scroll"]),
    new Emoji("📃", "Objects", ["page_with_curl"]),
    new Emoji("📄", "Objects", ["page_facing_up"]),
    new Emoji("📑", "Objects", ["bookmark_tabs"]),
    new Emoji("📊", "Objects", ["bar_chart"]),
    new Emoji("📈", "Objects", ["chart_with_upwards_trend"]),
    new Emoji("📉", "Objects", ["chart_with_downwards_trend"]),
    new Emoji("🗒", "Objects", ["spiral_notepad"]),
    new Emoji("🗓", "Objects", ["spiral_calendar"]),
    new Emoji("📆", "Objects", ["calendar"]),
    new Emoji("📅", "Objects", ["date"]),
    new Emoji("📇", "Objects", ["card_index"]),
    new Emoji("🗃", "Objects", ["card_file_box"]),
    new Emoji("🗳", "Objects", ["ballot_box"]),
    new Emoji("🗄", "Objects", ["file_cabinet"]),
    new Emoji("📋", "Objects", ["clipboard"]),
    new Emoji("📁", "Objects", ["file_folder"]),
    new Emoji("📂", "Objects", ["open_file_folder"]),
    new Emoji("🗂", "Objects", ["card_index_dividers"]),
    new Emoji("🗞", "Objects", ["newspaper_roll"]),
    new Emoji("📰", "Objects", ["newspaper"]),
    new Emoji("📓", "Objects", ["notebook"]),
    new Emoji("📔", "Objects", ["notebook_with_decorative_cover"]),
    new Emoji("📒", "Objects", ["ledger"]),
    new Emoji("📕", "Objects", ["closed_book"]),
    new Emoji("📗", "Objects", ["green_book"]),
    new Emoji("📘", "Objects", ["blue_book"]),
    new Emoji("📙", "Objects", ["orange_book"]),
    new Emoji("📚", "Objects", ["books"]),
    new Emoji("📖", "Objects", ["book", "open_book"]),
    new Emoji("🔖", "Objects", ["bookmark"]),
    new Emoji("🔗", "Objects", ["link"]),
    new Emoji("📎", "Objects", ["paperclip"]),
    new Emoji("🖇", "Objects", ["paperclips"]),
    new Emoji("📐", "Objects", ["triangular_ruler"]),
    new Emoji("📏", "Objects", ["straight_ruler"]),
    new Emoji("📌", "Objects", ["pushpin"]),
    new Emoji("📍", "Objects", ["round_pushpin"]),
    new Emoji("✂️", "Objects", ["scissors"]),
    new Emoji("🖊", "Objects", ["pen"]),
    new Emoji("🖋", "Objects", ["fountain_pen"]),
    new Emoji("✒️", "Objects", ["black_nib"]),
    new Emoji("🖌", "Objects", ["paintbrush"]),
    new Emoji("🖍", "Objects", ["crayon"]),
    new Emoji("📝", "Objects", ["memo", "pencil"]),
    new Emoji("✏️", "Objects", ["pencil2"]),
    new Emoji("🔍", "Objects", ["mag"]),
    new Emoji("🔎", "Objects", ["mag_right"]),
    new Emoji("🔏", "Objects", ["lock_with_ink_pen"]),
    new Emoji("🔐", "Objects", ["closed_lock_with_key"]),
    new Emoji("🔒", "Objects", ["lock"]),
    new Emoji("🔓", "Objects", ["unlock"]),
    new Emoji("❤️", "Symbols", ["heart"]),
    new Emoji("💛", "Symbols", ["yellow_heart"]),
    new Emoji("💚", "Symbols", ["green_heart"]),
    new Emoji("💙", "Symbols", ["blue_heart"]),
    new Emoji("💜", "Symbols", ["purple_heart"]),
    new Emoji("🖤", "Symbols", ["black_heart"]),
    new Emoji("💔", "Symbols", ["broken_heart"]),
    new Emoji("❣️", "Symbols", ["heavy_heart_exclamation"]),
    new Emoji("💕", "Symbols", ["two_hearts"]),
    new Emoji("💞", "Symbols", ["revolving_hearts"]),
    new Emoji("💓", "Symbols", ["heartbeat"]),
    new Emoji("💗", "Symbols", ["heartpulse"]),
    new Emoji("💖", "Symbols", ["sparkling_heart"]),
    new Emoji("💘", "Symbols", ["cupid"]),
    new Emoji("💝", "Symbols", ["gift_heart"]),
    new Emoji("💟", "Symbols", ["heart_decoration"]),
    new Emoji("☮️", "Symbols", ["peace_symbol"]),
    new Emoji("✝️", "Symbols", ["latin_cross"]),
    new Emoji("☪️", "Symbols", ["star_and_crescent"]),
    new Emoji("🕉", "Symbols", ["om"]),
    new Emoji("☸️", "Symbols", ["wheel_of_dharma"]),
    new Emoji("✡️", "Symbols", ["star_of_david"]),
    new Emoji("🔯", "Symbols", ["six_pointed_star"]),
    new Emoji("🕎", "Symbols", ["menorah"]),
    new Emoji("☯️", "Symbols", ["yin_yang"]),
    new Emoji("☦️", "Symbols", ["orthodox_cross"]),
    new Emoji("🛐", "Symbols", ["place_of_worship"]),
    new Emoji("⛎", "Symbols", ["ophiuchus"]),
    new Emoji("♈️", "Symbols", ["aries"]),
    new Emoji("♉️", "Symbols", ["taurus"]),
    new Emoji("♊️", "Symbols", ["gemini"]),
    new Emoji("♋️", "Symbols", ["cancer"]),
    new Emoji("♌️", "Symbols", ["leo"]),
    new Emoji("♍️", "Symbols", ["virgo"]),
    new Emoji("♎️", "Symbols", ["libra"]),
    new Emoji("♏️", "Symbols", ["scorpius"]),
    new Emoji("♐️", "Symbols", ["sagittarius"]),
    new Emoji("♑️", "Symbols", ["capricorn"]),
    new Emoji("♒️", "Symbols", ["aquarius"]),
    new Emoji("♓️", "Symbols", ["pisces"]),
    new Emoji("🆔", "Symbols", ["id"]),
    new Emoji("⚛️", "Symbols", ["atom_symbol"]),
    new Emoji("🉑", "Symbols", ["accept"]),
    new Emoji("☢️", "Symbols", ["radioactive"]),
    new Emoji("☣️", "Symbols", ["biohazard"]),
    new Emoji("📴", "Symbols", ["mobile_phone_off"]),
    new Emoji("📳", "Symbols", ["vibration_mode"]),
    new Emoji("🈶", "Symbols", ["u6709"]),
    new Emoji("🈚️", "Symbols", ["u7121"]),
    new Emoji("🈸", "Symbols", ["u7533"]),
    new Emoji("🈺", "Symbols", ["u55b6"]),
    new Emoji("🈷️", "Symbols", ["u6708"]),
    new Emoji("✴️", "Symbols", ["eight_pointed_black_star"]),
    new Emoji("🆚", "Symbols", ["vs"]),
    new Emoji("💮", "Symbols", ["white_flower"]),
    new Emoji("🉐", "Symbols", ["ideograph_advantage"]),
    new Emoji("㊙️", "Symbols", ["secret"]),
    new Emoji("㊗️", "Symbols", ["congratulations"]),
    new Emoji("🈴", "Symbols", ["u5408"]),
    new Emoji("🈵", "Symbols", ["u6e80"]),
    new Emoji("🈹", "Symbols", ["u5272"]),
    new Emoji("🈲", "Symbols", ["u7981"]),
    new Emoji("🅰️", "Symbols", ["a"]),
    new Emoji("🅱️", "Symbols", ["b"]),
    new Emoji("🆎", "Symbols", ["ab"]),
    new Emoji("🆑", "Symbols", ["cl"]),
    new Emoji("🅾️", "Symbols", ["o2"]),
    new Emoji("🆘", "Symbols", ["sos"]),
    new Emoji("❌", "Symbols", ["x"]),
    new Emoji("⭕️", "Symbols", ["o"]),
    new Emoji("🛑", "Symbols", ["stop_sign"]),
    new Emoji("⛔️", "Symbols", ["no_entry"]),
    new Emoji("📛", "Symbols", ["name_badge"]),
    new Emoji("🚫", "Symbols", ["no_entry_sign"]),
    new Emoji("💯", "Symbols", ["100"]),
    new Emoji("💢", "Symbols", ["anger"]),
    new Emoji("♨️", "Symbols", ["hotsprings"]),
    new Emoji("🚷", "Symbols", ["no_pedestrians"]),
    new Emoji("🚯", "Symbols", ["do_not_litter"]),
    new Emoji("🚳", "Symbols", ["no_bicycles"]),
    new Emoji("🚱", "Symbols", ["non-potable_water"]),
    new Emoji("🔞", "Symbols", ["underage"]),
    new Emoji("📵", "Symbols", ["no_mobile_phones"]),
    new Emoji("🚭", "Symbols", ["no_smoking"]),
    new Emoji("❗️", "Symbols", ["exclamation", "heavy_exclamation_mark"]),
    new Emoji("❕", "Symbols", ["grey_exclamation"]),
    new Emoji("❓", "Symbols", ["question"]),
    new Emoji("❔", "Symbols", ["grey_question"]),
    new Emoji("‼️", "Symbols", ["bangbang"]),
    new Emoji("⁉️", "Symbols", ["interrobang"]),
    new Emoji("🔅", "Symbols", ["low_brightness"]),
    new Emoji("🔆", "Symbols", ["high_brightness"]),
    new Emoji("〽️", "Symbols", ["part_alternation_mark"]),
    new Emoji("⚠️", "Symbols", ["warning"]),
    new Emoji("🚸", "Symbols", ["children_crossing"]),
    new Emoji("🔱", "Symbols", ["trident"]),
    new Emoji("⚜️", "Symbols", ["fleur_de_lis"]),
    new Emoji("🔰", "Symbols", ["beginner"]),
    new Emoji("♻️", "Symbols", ["recycle"]),
    new Emoji("✅", "Symbols", ["white_check_mark"]),
    new Emoji("🈯️", "Symbols", ["u6307"]),
    new Emoji("💹", "Symbols", ["chart"]),
    new Emoji("❇️", "Symbols", ["sparkle"]),
    new Emoji("✳️", "Symbols", ["eight_spoked_asterisk"]),
    new Emoji("❎", "Symbols", ["negative_squared_cross_mark"]),
    new Emoji("🌐", "Symbols", ["globe_with_meridians"]),
    new Emoji("💠", "Symbols", ["diamond_shape_with_a_dot_inside"]),
    new Emoji("Ⓜ️", "Symbols", ["m"]),
    new Emoji("🌀", "Symbols", ["cyclone"]),
    new Emoji("💤", "Symbols", ["zzz"]),
    new Emoji("🏧", "Symbols", ["atm"]),
    new Emoji("🚾", "Symbols", ["wc"]),
    new Emoji("♿️", "Symbols", ["wheelchair"]),
    new Emoji("🅿️", "Symbols", ["parking"]),
    new Emoji("🈳", "Symbols", ["u7a7a"]),
    new Emoji("🈂️", "Symbols", ["sa"]),
    new Emoji("🛂", "Symbols", ["passport_control"]),
    new Emoji("🛃", "Symbols", ["customs"]),
    new Emoji("🛄", "Symbols", ["baggage_claim"]),
    new Emoji("🛅", "Symbols", ["left_luggage"]),
    new Emoji("🚹", "Symbols", ["mens"]),
    new Emoji("🚺", "Symbols", ["womens"]),
    new Emoji("🚼", "Symbols", ["baby_symbol"]),
    new Emoji("🚻", "Symbols", ["restroom"]),
    new Emoji("🚮", "Symbols", ["put_litter_in_its_place"]),
    new Emoji("🎦", "Symbols", ["cinema"]),
    new Emoji("📶", "Symbols", ["signal_strength"]),
    new Emoji("🈁", "Symbols", ["koko"]),
    new Emoji("🔣", "Symbols", ["symbols"]),
    new Emoji("ℹ️", "Symbols", ["information_source"]),
    new Emoji("🔤", "Symbols", ["abc"]),
    new Emoji("🔡", "Symbols", ["abcd"]),
    new Emoji("🔠", "Symbols", ["capital_abcd"]),
    new Emoji("🆖", "Symbols", ["ng"]),
    new Emoji("🆗", "Symbols", ["ok"]),
    new Emoji("🆙", "Symbols", ["up"]),
    new Emoji("🆒", "Symbols", ["cool"]),
    new Emoji("🆕", "Symbols", ["new"]),
    new Emoji("🆓", "Symbols", ["free"]),
    new Emoji("0️⃣", "Symbols", ["zero"]),
    new Emoji("1️⃣", "Symbols", ["one"]),
    new Emoji("2️⃣", "Symbols", ["two"]),
    new Emoji("3️⃣", "Symbols", ["three"]),
    new Emoji("4️⃣", "Symbols", ["four"]),
    new Emoji("5️⃣", "Symbols", ["five"]),
    new Emoji("6️⃣", "Symbols", ["six"]),
    new Emoji("7️⃣", "Symbols", ["seven"]),
    new Emoji("8️⃣", "Symbols", ["eight"]),
    new Emoji("9️⃣", "Symbols", ["nine"]),
    new Emoji("🔟", "Symbols", ["keycap_ten"]),
    new Emoji("🔢", "Symbols", ["1234"]),
    new Emoji("#️⃣", "Symbols", ["hash"]),
    new Emoji("*️⃣", "Symbols", ["asterisk"]),
    new Emoji("▶️", "Symbols", ["arrow_forward"]),
    new Emoji("⏸", "Symbols", ["pause_button"]),
    new Emoji("⏯", "Symbols", ["play_or_pause_button"]),
    new Emoji("⏹", "Symbols", ["stop_button"]),
    new Emoji("⏺", "Symbols", ["record_button"]),
    new Emoji("⏭", "Symbols", ["next_track_button"]),
    new Emoji("⏮", "Symbols", ["previous_track_button"]),
    new Emoji("⏩", "Symbols", ["fast_forward"]),
    new Emoji("⏪", "Symbols", ["rewind"]),
    new Emoji("⏫", "Symbols", ["arrow_double_up"]),
    new Emoji("⏬", "Symbols", ["arrow_double_down"]),
    new Emoji("◀️", "Symbols", ["arrow_backward"]),
    new Emoji("🔼", "Symbols", ["arrow_up_small"]),
    new Emoji("🔽", "Symbols", ["arrow_down_small"]),
    new Emoji("➡️", "Symbols", ["arrow_right"]),
    new Emoji("⬅️", "Symbols", ["arrow_left"]),
    new Emoji("⬆️", "Symbols", ["arrow_up"]),
    new Emoji("⬇️", "Symbols", ["arrow_down"]),
    new Emoji("↗️", "Symbols", ["arrow_upper_right"]),
    new Emoji("↘️", "Symbols", ["arrow_lower_right"]),
    new Emoji("↙️", "Symbols", ["arrow_lower_left"]),
    new Emoji("↖️", "Symbols", ["arrow_upper_left"]),
    new Emoji("↕️", "Symbols", ["arrow_up_down"]),
    new Emoji("↔️", "Symbols", ["left_right_arrow"]),
    new Emoji("↪️", "Symbols", ["arrow_right_hook"]),
    new Emoji("↩️", "Symbols", ["leftwards_arrow_with_hook"]),
    new Emoji("⤴️", "Symbols", ["arrow_heading_up"]),
    new Emoji("⤵️", "Symbols", ["arrow_heading_down"]),
    new Emoji("🔀", "Symbols", ["twisted_rightwards_arrows"]),
    new Emoji("🔁", "Symbols", ["repeat"]),
    new Emoji("🔂", "Symbols", ["repeat_one"]),
    new Emoji("🔄", "Symbols", ["arrows_counterclockwise"]),
    new Emoji("🔃", "Symbols", ["arrows_clockwise"]),
    new Emoji("🎵", "Symbols", ["musical_note"]),
    new Emoji("🎶", "Symbols", ["notes"]),
    new Emoji("➕", "Symbols", ["heavy_plus_sign"]),
    new Emoji("➖", "Symbols", ["heavy_minus_sign"]),
    new Emoji("➗", "Symbols", ["heavy_division_sign"]),
    new Emoji("✖️", "Symbols", ["heavy_multiplication_x"]),
    new Emoji("💲", "Symbols", ["heavy_dollar_sign"]),
    new Emoji("💱", "Symbols", ["currency_exchange"]),
    new Emoji("™️", "Symbols", ["tm"]),
    new Emoji("©️", "Symbols", ["copyright"]),
    new Emoji("®️", "Symbols", ["registered"]),
    new Emoji("〰️", "Symbols", ["wavy_dash"]),
    new Emoji("➰", "Symbols", ["curly_loop"]),
    new Emoji("➿", "Symbols", ["loop"]),
    new Emoji("🔚", "Symbols", ["end"]),
    new Emoji("🔙", "Symbols", ["back"]),
    new Emoji("🔛", "Symbols", ["on"]),
    new Emoji("🔝", "Symbols", ["top"]),
    new Emoji("🔜", "Symbols", ["soon"]),
    new Emoji("✔️", "Symbols", ["heavy_check_mark"]),
    new Emoji("☑️", "Symbols", ["ballot_box_with_check"]),
    new Emoji("🔘", "Symbols", ["radio_button"]),
    new Emoji("⚪️", "Symbols", ["white_circle"]),
    new Emoji("⚫️", "Symbols", ["black_circle"]),
    new Emoji("🔴", "Symbols", ["red_circle"]),
    new Emoji("🔵", "Symbols", ["large_blue_circle"]),
    new Emoji("🔺", "Symbols", ["small_red_triangle"]),
    new Emoji("🔻", "Symbols", ["small_red_triangle_down"]),
    new Emoji("🔸", "Symbols", ["small_orange_diamond"]),
    new Emoji("🔹", "Symbols", ["small_blue_diamond"]),
    new Emoji("🔶", "Symbols", ["large_orange_diamond"]),
    new Emoji("🔷", "Symbols", ["large_blue_diamond"]),
    new Emoji("🔳", "Symbols", ["white_square_button"]),
    new Emoji("🔲", "Symbols", ["black_square_button"]),
    new Emoji("▪️", "Symbols", ["black_small_square"]),
    new Emoji("▫️", "Symbols", ["white_small_square"]),
    new Emoji("◾️", "Symbols", ["black_medium_small_square"]),
    new Emoji("◽️", "Symbols", ["white_medium_small_square"]),
    new Emoji("◼️", "Symbols", ["black_medium_square"]),
    new Emoji("◻️", "Symbols", ["white_medium_square"]),
    new Emoji("⬛️", "Symbols", ["black_large_square"]),
    new Emoji("⬜️", "Symbols", ["white_large_square"]),
    new Emoji("🔈", "Symbols", ["speaker"]),
    new Emoji("🔇", "Symbols", ["mute"]),
    new Emoji("🔉", "Symbols", ["sound"]),
    new Emoji("🔊", "Symbols", ["loud_sound"]),
    new Emoji("🔔", "Symbols", ["bell"]),
    new Emoji("🔕", "Symbols", ["no_bell"]),
    new Emoji("📣", "Symbols", ["mega"]),
    new Emoji("📢", "Symbols", ["loudspeaker"]),
    new Emoji("👁‍🗨", "Symbols", ["eye_speech_bubble"]),
    new Emoji("💬", "Symbols", ["speech_balloon"]),
    new Emoji("💭", "Symbols", ["thought_balloon"]),
    new Emoji("🗯", "Symbols", ["right_anger_bubble"]),
    new Emoji("♠️", "Symbols", ["spades"]),
    new Emoji("♣️", "Symbols", ["clubs"]),
    new Emoji("♥️", "Symbols", ["hearts"]),
    new Emoji("♦️", "Symbols", ["diamonds"]),
    new Emoji("🃏", "Symbols", ["black_joker"]),
    new Emoji("🎴", "Symbols", ["flower_playing_cards"]),
    new Emoji("🀄️", "Symbols", ["mahjong"]),
    new Emoji("🕐", "Symbols", ["clock1"]),
    new Emoji("🕑", "Symbols", ["clock2"]),
    new Emoji("🕒", "Symbols", ["clock3"]),
    new Emoji("🕓", "Symbols", ["clock4"]),
    new Emoji("🕔", "Symbols", ["clock5"]),
    new Emoji("🕕", "Symbols", ["clock6"]),
    new Emoji("🕖", "Symbols", ["clock7"]),
    new Emoji("🕗", "Symbols", ["clock8"]),
    new Emoji("🕘", "Symbols", ["clock9"]),
    new Emoji("🕙", "Symbols", ["clock10"]),
    new Emoji("🕚", "Symbols", ["clock11"]),
    new Emoji("🕛", "Symbols", ["clock12"]),
    new Emoji("🕜", "Symbols", ["clock130"]),
    new Emoji("🕝", "Symbols", ["clock230"]),
    new Emoji("🕞", "Symbols", ["clock330"]),
    new Emoji("🕟", "Symbols", ["clock430"]),
    new Emoji("🕠", "Symbols", ["clock530"]),
    new Emoji("🕡", "Symbols", ["clock630"]),
    new Emoji("🕢", "Symbols", ["clock730"]),
    new Emoji("🕣", "Symbols", ["clock830"]),
    new Emoji("🕤", "Symbols", ["clock930"]),
    new Emoji("🕥", "Symbols", ["clock1030"]),
    new Emoji("🕦", "Symbols", ["clock1130"]),
    new Emoji("🕧", "Symbols", ["clock1230"]),
    new Emoji("🏳️", "Flags", ["white_flag"]),
    new Emoji("🏴", "Flags", ["black_flag"]),
    new Emoji("🏁", "Flags", ["checkered_flag"]),
    new Emoji("🚩", "Flags", ["triangular_flag_on_post"]),
    new Emoji("🏳️‍🌈", "Flags", ["rainbow_flag"]),
    new Emoji("🇦🇫", "Flags", ["afghanistan"]),
    new Emoji("🇦🇽", "Flags", ["aland_islands"]),
    new Emoji("🇦🇱", "Flags", ["albania"]),
    new Emoji("🇩🇿", "Flags", ["algeria"]),
    new Emoji("🇦🇸", "Flags", ["american_samoa"]),
    new Emoji("🇦🇩", "Flags", ["andorra"]),
    new Emoji("🇦🇴", "Flags", ["angola"]),
    new Emoji("🇦🇮", "Flags", ["anguilla"]),
    new Emoji("🇦🇶", "Flags", ["antarctica"]),
    new Emoji("🇦🇬", "Flags", ["antigua_barbuda"]),
    new Emoji("🇦🇷", "Flags", ["argentina"]),
    new Emoji("🇦🇲", "Flags", ["armenia"]),
    new Emoji("🇦🇼", "Flags", ["aruba"]),
    new Emoji("🇦🇺", "Flags", ["australia"]),
    new Emoji("🇦🇹", "Flags", ["austria"]),
    new Emoji("🇦🇿", "Flags", ["azerbaijan"]),
    new Emoji("🇧🇸", "Flags", ["bahamas"]),
    new Emoji("🇧🇭", "Flags", ["bahrain"]),
    new Emoji("🇧🇩", "Flags", ["bangladesh"]),
    new Emoji("🇧🇧", "Flags", ["barbados"]),
    new Emoji("🇧🇾", "Flags", ["belarus"]),
    new Emoji("🇧🇪", "Flags", ["belgium"]),
    new Emoji("🇧🇿", "Flags", ["belize"]),
    new Emoji("🇧🇯", "Flags", ["benin"]),
    new Emoji("🇧🇲", "Flags", ["bermuda"]),
    new Emoji("🇧🇹", "Flags", ["bhutan"]),
    new Emoji("🇧🇴", "Flags", ["bolivia"]),
    new Emoji("🇧🇶", "Flags", ["caribbean_netherlands"]),
    new Emoji("🇧🇦", "Flags", ["bosnia_herzegovina"]),
    new Emoji("🇧🇼", "Flags", ["botswana"]),
    new Emoji("🇧🇷", "Flags", ["brazil"]),
    new Emoji("🇮🇴", "Flags", ["british_indian_ocean_territory"]),
    new Emoji("🇻🇬", "Flags", ["british_virgin_islands"]),
    new Emoji("🇧🇳", "Flags", ["brunei"]),
    new Emoji("🇧🇬", "Flags", ["bulgaria"]),
    new Emoji("🇧🇫", "Flags", ["burkina_faso"]),
    new Emoji("🇧🇮", "Flags", ["burundi"]),
    new Emoji("🇨🇻", "Flags", ["cape_verde"]),
    new Emoji("🇰🇭", "Flags", ["cambodia"]),
    new Emoji("🇨🇲", "Flags", ["cameroon"]),
    new Emoji("🇨🇦", "Flags", ["canada"]),
    new Emoji("🇮🇨", "Flags", ["canary_islands"]),
    new Emoji("🇰🇾", "Flags", ["cayman_islands"]),
    new Emoji("🇨🇫", "Flags", ["central_african_republic"]),
    new Emoji("🇹🇩", "Flags", ["chad"]),
    new Emoji("🇨🇱", "Flags", ["chile"]),
    new Emoji("🇨🇳", "Flags", ["cn"]),
    new Emoji("🇨🇽", "Flags", ["christmas_island"]),
    new Emoji("🇨🇨", "Flags", ["cocos_islands"]),
    new Emoji("🇨🇴", "Flags", ["colombia"]),
    new Emoji("🇰🇲", "Flags", ["comoros"]),
    new Emoji("🇨🇬", "Flags", ["congo_brazzaville"]),
    new Emoji("🇨🇩", "Flags", ["congo_kinshasa"]),
    new Emoji("🇨🇰", "Flags", ["cook_islands"]),
    new Emoji("🇨🇷", "Flags", ["costa_rica"]),
    new Emoji("🇨🇮", "Flags", ["cote_divoire"]),
    new Emoji("🇭🇷", "Flags", ["croatia"]),
    new Emoji("🇨🇺", "Flags", ["cuba"]),
    new Emoji("🇨🇼", "Flags", ["curacao"]),
    new Emoji("🇨🇾", "Flags", ["cyprus"]),
    new Emoji("🇨🇿", "Flags", ["czech_republic"]),
    new Emoji("🇩🇰", "Flags", ["denmark"]),
    new Emoji("🇩🇯", "Flags", ["djibouti"]),
    new Emoji("🇩🇲", "Flags", ["dominica"]),
    new Emoji("🇩🇴", "Flags", ["dominican_republic"]),
    new Emoji("🇪🇨", "Flags", ["ecuador"]),
    new Emoji("🇪🇬", "Flags", ["egypt"]),
    new Emoji("🇸🇻", "Flags", ["el_salvador"]),
    new Emoji("🇬🇶", "Flags", ["equatorial_guinea"]),
    new Emoji("🇪🇷", "Flags", ["eritrea"]),
    new Emoji("🇪🇪", "Flags", ["estonia"]),
    new Emoji("🇪🇹", "Flags", ["ethiopia"]),
    new Emoji("🇪🇺", "Flags", ["eu", "european_union"]),
    new Emoji("🇫🇰", "Flags", ["falkland_islands"]),
    new Emoji("🇫🇴", "Flags", ["faroe_islands"]),
    new Emoji("🇫🇯", "Flags", ["fiji"]),
    new Emoji("🇫🇮", "Flags", ["finland"]),
    new Emoji("🇫🇷", "Flags", ["fr"]),
    new Emoji("🇬🇫", "Flags", ["french_guiana"]),
    new Emoji("🇵🇫", "Flags", ["french_polynesia"]),
    new Emoji("🇹🇫", "Flags", ["french_southern_territories"]),
    new Emoji("🇬🇦", "Flags", ["gabon"]),
    new Emoji("🇬🇲", "Flags", ["gambia"]),
    new Emoji("🇬🇪", "Flags", ["georgia"]),
    new Emoji("🇩🇪", "Flags", ["de"]),
    new Emoji("🇬🇭", "Flags", ["ghana"]),
    new Emoji("🇬🇮", "Flags", ["gibraltar"]),
    new Emoji("🇬🇷", "Flags", ["greece"]),
    new Emoji("🇬🇱", "Flags", ["greenland"]),
    new Emoji("🇬🇩", "Flags", ["grenada"]),
    new Emoji("🇬🇵", "Flags", ["guadeloupe"]),
    new Emoji("🇬🇺", "Flags", ["guam"]),
    new Emoji("🇬🇹", "Flags", ["guatemala"]),
    new Emoji("🇬🇬", "Flags", ["guernsey"]),
    new Emoji("🇬🇳", "Flags", ["guinea"]),
    new Emoji("🇬🇼", "Flags", ["guinea_bissau"]),
    new Emoji("🇬🇾", "Flags", ["guyana"]),
    new Emoji("🇭🇹", "Flags", ["haiti"]),
    new Emoji("🇭🇳", "Flags", ["honduras"]),
    new Emoji("🇭🇰", "Flags", ["hong_kong"]),
    new Emoji("🇭🇺", "Flags", ["hungary"]),
    new Emoji("🇮🇸", "Flags", ["iceland"]),
    new Emoji("🇮🇳", "Flags", ["india"]),
    new Emoji("🇮🇩", "Flags", ["indonesia"]),
    new Emoji("🇮🇷", "Flags", ["iran"]),
    new Emoji("🇮🇶", "Flags", ["iraq"]),
    new Emoji("🇮🇪", "Flags", ["ireland"]),
    new Emoji("🇮🇲", "Flags", ["isle_of_man"]),
    new Emoji("🇮🇱", "Flags", ["israel"]),
    new Emoji("🇮🇹", "Flags", ["it"]),
    new Emoji("🇯🇲", "Flags", ["jamaica"]),
    new Emoji("🇯🇵", "Flags", ["jp"]),
    new Emoji("🎌", "Flags", ["crossed_flags"]),
    new Emoji("🇯🇪", "Flags", ["jersey"]),
    new Emoji("🇯🇴", "Flags", ["jordan"]),
    new Emoji("🇰🇿", "Flags", ["kazakhstan"]),
    new Emoji("🇰🇪", "Flags", ["kenya"]),
    new Emoji("🇰🇮", "Flags", ["kiribati"]),
    new Emoji("🇽🇰", "Flags", ["kosovo"]),
    new Emoji("🇰🇼", "Flags", ["kuwait"]),
    new Emoji("🇰🇬", "Flags", ["kyrgyzstan"]),
    new Emoji("🇱🇦", "Flags", ["laos"]),
    new Emoji("🇱🇻", "Flags", ["latvia"]),
    new Emoji("🇱🇧", "Flags", ["lebanon"]),
    new Emoji("🇱🇸", "Flags", ["lesotho"]),
    new Emoji("🇱🇷", "Flags", ["liberia"]),
    new Emoji("🇱🇾", "Flags", ["libya"]),
    new Emoji("🇱🇮", "Flags", ["liechtenstein"]),
    new Emoji("🇱🇹", "Flags", ["lithuania"]),
    new Emoji("🇱🇺", "Flags", ["luxembourg"]),
    new Emoji("🇲🇴", "Flags", ["macau"]),
    new Emoji("🇲🇰", "Flags", ["macedonia"]),
    new Emoji("🇲🇬", "Flags", ["madagascar"]),
    new Emoji("🇲🇼", "Flags", ["malawi"]),
    new Emoji("🇲🇾", "Flags", ["malaysia"]),
    new Emoji("🇲🇻", "Flags", ["maldives"]),
    new Emoji("🇲🇱", "Flags", ["mali"]),
    new Emoji("🇲🇹", "Flags", ["malta"]),
    new Emoji("🇲🇭", "Flags", ["marshall_islands"]),
    new Emoji("🇲🇶", "Flags", ["martinique"]),
    new Emoji("🇲🇷", "Flags", ["mauritania"]),
    new Emoji("🇲🇺", "Flags", ["mauritius"]),
    new Emoji("🇾🇹", "Flags", ["mayotte"]),
    new Emoji("🇲🇽", "Flags", ["mexico"]),
    new Emoji("🇫🇲", "Flags", ["micronesia"]),
    new Emoji("🇲🇩", "Flags", ["moldova"]),
    new Emoji("🇲🇨", "Flags", ["monaco"]),
    new Emoji("🇲🇳", "Flags", ["mongolia"]),
    new Emoji("🇲🇪", "Flags", ["montenegro"]),
    new Emoji("🇲🇸", "Flags", ["montserrat"]),
    new Emoji("🇲🇦", "Flags", ["morocco"]),
    new Emoji("🇲🇿", "Flags", ["mozambique"]),
    new Emoji("🇲🇲", "Flags", ["myanmar"]),
    new Emoji("🇳🇦", "Flags", ["namibia"]),
    new Emoji("🇳🇷", "Flags", ["nauru"]),
    new Emoji("🇳🇵", "Flags", ["nepal"]),
    new Emoji("🇳🇱", "Flags", ["netherlands"]),
    new Emoji("🇳🇨", "Flags", ["new_caledonia"]),
    new Emoji("🇳🇿", "Flags", ["new_zealand"]),
    new Emoji("🇳🇮", "Flags", ["nicaragua"]),
    new Emoji("🇳🇪", "Flags", ["niger"]),
    new Emoji("🇳🇬", "Flags", ["nigeria"]),
    new Emoji("🇳🇺", "Flags", ["niue"]),
    new Emoji("🇳🇫", "Flags", ["norfolk_island"]),
    new Emoji("🇲🇵", "Flags", ["northern_mariana_islands"]),
    new Emoji("🇰🇵", "Flags", ["north_korea"]),
    new Emoji("🇳🇴", "Flags", ["norway"]),
    new Emoji("🇴🇲", "Flags", ["oman"]),
    new Emoji("🇵🇰", "Flags", ["pakistan"]),
    new Emoji("🇵🇼", "Flags", ["palau"]),
    new Emoji("🇵🇸", "Flags", ["palestinian_territories"]),
    new Emoji("🇵🇦", "Flags", ["panama"]),
    new Emoji("🇵🇬", "Flags", ["papua_new_guinea"]),
    new Emoji("🇵🇾", "Flags", ["paraguay"]),
    new Emoji("🇵🇪", "Flags", ["peru"]),
    new Emoji("🇵🇭", "Flags", ["philippines"]),
    new Emoji("🇵🇳", "Flags", ["pitcairn_islands"]),
    new Emoji("🇵🇱", "Flags", ["poland"]),
    new Emoji("🇵🇹", "Flags", ["portugal"]),
    new Emoji("🇵🇷", "Flags", ["puerto_rico"]),
    new Emoji("🇶🇦", "Flags", ["qatar"]),
    new Emoji("🇷🇪", "Flags", ["reunion"]),
    new Emoji("🇷🇴", "Flags", ["romania"]),
    new Emoji("🇷🇺", "Flags", ["ru"]),
    new Emoji("🇷🇼", "Flags", ["rwanda"]),
    new Emoji("🇧🇱", "Flags", ["st_barthelemy"]),
    new Emoji("🇸🇭", "Flags", ["st_helena"]),
    new Emoji("🇰🇳", "Flags", ["st_kitts_nevis"]),
    new Emoji("🇱🇨", "Flags", ["st_lucia"]),
    new Emoji("🇵🇲", "Flags", ["st_pierre_miquelon"]),
    new Emoji("🇻🇨", "Flags", ["st_vincent_grenadines"]),
    new Emoji("🇼🇸", "Flags", ["samoa"]),
    new Emoji("🇸🇲", "Flags", ["san_marino"]),
    new Emoji("🇸🇹", "Flags", ["sao_tome_principe"]),
    new Emoji("🇸🇦", "Flags", ["saudi_arabia"]),
    new Emoji("🇸🇳", "Flags", ["senegal"]),
    new Emoji("🇷🇸", "Flags", ["serbia"]),
    new Emoji("🇸🇨", "Flags", ["seychelles"]),
    new Emoji("🇸🇱", "Flags", ["sierra_leone"]),
    new Emoji("🇸🇬", "Flags", ["singapore"]),
    new Emoji("🇸🇽", "Flags", ["sint_maarten"]),
    new Emoji("🇸🇰", "Flags", ["slovakia"]),
    new Emoji("🇸🇮", "Flags", ["slovenia"]),
    new Emoji("🇸🇧", "Flags", ["solomon_islands"]),
    new Emoji("🇸🇴", "Flags", ["somalia"]),
    new Emoji("🇿🇦", "Flags", ["south_africa"]),
    new Emoji("🇬🇸", "Flags", ["south_georgia_south_sandwich_islands"]),
    new Emoji("🇰🇷", "Flags", ["kr"]),
    new Emoji("🇸🇸", "Flags", ["south_sudan"]),
    new Emoji("🇪🇸", "Flags", ["es"]),
    new Emoji("🇱🇰", "Flags", ["sri_lanka"]),
    new Emoji("🇸🇩", "Flags", ["sudan"]),
    new Emoji("🇸🇷", "Flags", ["suriname"]),
    new Emoji("🇸🇿", "Flags", ["swaziland"]),
    new Emoji("🇸🇪", "Flags", ["sweden"]),
    new Emoji("🇨🇭", "Flags", ["switzerland"]),
    new Emoji("🇸🇾", "Flags", ["syria"]),
    new Emoji("🇹🇼", "Flags", ["taiwan"]),
    new Emoji("🇹🇯", "Flags", ["tajikistan"]),
    new Emoji("🇹🇿", "Flags", ["tanzania"]),
    new Emoji("🇹🇭", "Flags", ["thailand"]),
    new Emoji("🇹🇱", "Flags", ["timor_leste"]),
    new Emoji("🇹🇬", "Flags", ["togo"]),
    new Emoji("🇹🇰", "Flags", ["tokelau"]),
    new Emoji("🇹🇴", "Flags", ["tonga"]),
    new Emoji("🇹🇹", "Flags", ["trinidad_tobago"]),
    new Emoji("🇹🇳", "Flags", ["tunisia"]),
    new Emoji("🇹🇷", "Flags", ["tr"]),
    new Emoji("🇹🇲", "Flags", ["turkmenistan"]),
    new Emoji("🇹🇨", "Flags", ["turks_caicos_islands"]),
    new Emoji("🇹🇻", "Flags", ["tuvalu"]),
    new Emoji("🇺🇬", "Flags", ["uganda"]),
    new Emoji("🇺🇦", "Flags", ["ukraine"]),
    new Emoji("🇦🇪", "Flags", ["united_arab_emirates"]),
    new Emoji("🇬🇧", "Flags", ["gb", "uk"]),
    new Emoji("🇺🇸", "Flags", ["us"]),
    new Emoji("🇻🇮", "Flags", ["us_virgin_islands"]),
    new Emoji("🇺🇾", "Flags", ["uruguay"]),
    new Emoji("🇺🇿", "Flags", ["uzbekistan"]),
    new Emoji("🇻🇺", "Flags", ["vanuatu"]),
    new Emoji("🇻🇦", "Flags", ["vatican_city"]),
    new Emoji("🇻🇪", "Flags", ["venezuela"]),
    new Emoji("🇻🇳", "Flags", ["vietnam"]),
    new Emoji("🇼🇫", "Flags", ["wallis_futuna"]),
    new Emoji("🇪🇭", "Flags", ["western_sahara"]),
    new Emoji("🇾🇪", "Flags", ["yemen"]),
    new Emoji("🇿🇲", "Flags", ["zambia"]),
    new Emoji("🇿🇼", "Flags", ["zimbabwe"])
];var CategoryItem = /** @class */ (function (_super) {
    __extends(CategoryItem, _super);
    function CategoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoryItem.prototype, "styleSVG", {
        get: function () {
            return __assign({}, this.styles);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true })
    ], CategoryItem.prototype, "label", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true })
    ], CategoryItem.prototype, "icon", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], CategoryItem.prototype, "styles", void 0);
    CategoryItem = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({})
    ], CategoryItem);
    return CategoryItem;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}/* script */
const __vue_script__ = CategoryItem;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"svg",style:(_vm.styleSVG),attrs:{"title":_vm.label},domProps:{"innerHTML":_vm._s(_vm.icon)}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3d397e3a_0", { source: ".svg[data-v-3d397e3a]{display:inline-block;vertical-align:middle}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-3d397e3a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );var Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Categories.prototype.onSelect = function (category) {
        return category;
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], Categories.prototype, "categories", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], Categories.prototype, "current", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Emit)("select")
    ], Categories.prototype, "onSelect", null);
    Categories = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            components: {
                CategoryItem: __vue_component__
            }
        })
    ], Categories);
    return Categories;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$1 = Categories;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(category,index){return _c('div',{key:index,class:['category', { active: category.name === _vm.current }],on:{"click":function($event){return _vm.onSelect(category)}}},[_c('CategoryItem',{attrs:{"label":category.label,"icon":category.icon}})],1)}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-6d975e7c_0", { source: "#Categories[data-v-6d975e7c]{display:flex;width:100%;flex-direction:row;align-items:center;border-bottom:1px solid var(--ep-color-border);background:var(--ep-color-bg);overflow-x:auto}.category[data-v-6d975e7c]{flex:1;padding:5px;text-align:center;cursor:pointer}.category.active[data-v-6d975e7c]{border-bottom:3px solid var(--ep-color-active);filter:saturate(3);padding-bottom:2px}.category>img[data-v-6d975e7c]{width:22px;height:22px}.category[data-v-6d975e7c]:hover{filter:saturate(3)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-6d975e7c";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiItem = /** @class */ (function (_super) {
    __extends(EmojiItem, _super);
    function EmojiItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmojiItem.prototype, "styleSize", {
        get: function () {
            return {
                fontSize: this.size - 5 + "px",
                lineHeight: this.size + "px",
                height: this.size + "px",
                width: this.size + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiItem.prototype, "emoji", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiItem.prototype, "size", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiItem.prototype, "withBorder", void 0);
    EmojiItem = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({})
    ], EmojiItem);
    return EmojiItem;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$2 = EmojiItem;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['emoji', { 'border': _vm.withBorder } ],style:(_vm.styleSize),domProps:{"innerHTML":_vm._s(_vm.emoji.data)}})};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5a35c3ac_0", { source: ".emoji[data-v-5a35c3ac]{display:inline-block;text-align:center;padding:3px;box-sizing:content-box;overflow:hidden;transition:transform .2s;cursor:pointer}.emoji[data-v-5a35c3ac]:hover{transform:scale(1.05)}.border[data-v-5a35c3ac]:hover{background:#00000010;border-radius:8px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5a35c3ac";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );var CategoryLabel = /** @class */ (function (_super) {
    __extends(CategoryLabel, _super);
    function CategoryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true })
    ], CategoryLabel.prototype, "name", void 0);
    CategoryLabel = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({})
    ], CategoryLabel);
    return CategoryLabel;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$3 = CategoryLabel;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category-title"},[_vm._v(_vm._s(_vm.name))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-b863a738_0", { source: ".category-title[data-v-b863a738]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#676666}.category-title[data-v-b863a738]:not(:first-of-type){padding:10px 0 0 16px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-b863a738";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiList.prototype.searchByAlias = function (term, emoji) {
        var isRelevant = function (alias) { return alias.toLowerCase().includes(term); };
        return emoji.aliases.some(function (alias) { return isRelevant(alias); });
    };
    EmojiList.prototype.calcScrollTop = function () {
        return this.hasSearch ? 88 : 44;
    };
    Object.defineProperty(EmojiList.prototype, "gridDynamic", {
        get: function () {
            var percent = 100 / this.emojisByRow;
            return {
                gridTemplateColumns: "repeat(" + this.emojisByRow + ", " + percent + "%)"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFiltered", {
        get: function () {
            var _this = this;
            var data = this.data[this.category];
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                data = data.filter(function (emoji) {
                    return _this.searchByAlias(searchValue, emoji);
                });
            }
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFilteredByCategory", {
        get: function () {
            var _this = this;
            var _data = Object.assign({}, this.data);
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                this.categories.forEach(function (category) {
                    _data[category] = _this.data[category].filter(function (item) {
                        return _this.searchByAlias(searchValue, item);
                    });
                });
            }
            return _data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "categories", {
        get: function () {
            return Object.keys(this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "containerEmoji", {
        get: function () {
            return this.$refs["container-emoji"];
        },
        enumerable: false,
        configurable: true
    });
    EmojiList.prototype.onSelect = function (emoji) {
        return emoji;
    };
    EmojiList.prototype.onDataChanged = function () {
        this.containerEmoji.scrollTop = 0;
    };
    EmojiList.prototype.onCategoryChanged = function (newValue) {
        if (this.continuousList) {
            var categoryEl = this.$refs[newValue][0].$el;
            this.containerEmoji.scrollTop =
                categoryEl.offsetTop - this.calcScrollTop();
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true })
    ], EmojiList.prototype, "data", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true })
    ], EmojiList.prototype, "emojisByRow", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "emojiWithBorder", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "emojiSize", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "filter", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "continuousList", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "category", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], EmojiList.prototype, "hasSearch", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Emit)("select")
    ], EmojiList.prototype, "onSelect", null);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("data")
    ], EmojiList.prototype, "onDataChanged", null);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("category")
    ], EmojiList.prototype, "onCategoryChanged", null);
    EmojiList = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            components: {
                EmojiItem: __vue_component__$2,
                CategoryLabel: __vue_component__$3
            }
        })
    ], EmojiList);
    return EmojiList;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$4 = EmojiList;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name},[_c('CategoryLabel',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,attrs:{"name":category_name}}),_vm._v(" "),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('EmojiItem',{key:(category_name + "-" + index_e),attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()],1)}):[_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('EmojiItem',{key:index,attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)]],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-5c988bee_0", { source: "#Emojis[data-v-5c988bee]{font-family:Twemoji,NotomojiColor,Notomoji,EmojiOne Color,Symbola,Noto,Segoe UI Emoji,OpenSansEmoji,monospace;display:block;width:100%;max-width:100%;color:var(--ep-color-text)}#Emojis[data-v-5c988bee] ::-webkit-scrollbar{border-radius:4px;width:4px;overflow:hidden}.container-emoji[data-v-5c988bee]{overflow-x:hidden;overflow-y:scroll;height:350px}.grid-emojis[data-v-5c988bee]{display:grid;margin:5px 0;justify-items:center}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-5c988bee";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector,
    undefined,
    undefined
  );var timemout = 500;
var listenInput;
var InputSearch = /** @class */ (function (_super) {
    __extends(InputSearch, _super);
    function InputSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSearch = "";
        return _this;
    }
    InputSearch.prototype.onInputChanged = function (newValue, old) {
        var _this = this;
        clearTimeout(listenInput);
        listenInput = setTimeout(function () { return _this.$emit("update", newValue); }, timemout);
    };
    Object.defineProperty(InputSearch.prototype, "placeholder", {
        get: function () {
            return t("search");
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("inputSearch")
    ], InputSearch.prototype, "onInputChanged", null);
    InputSearch = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({})
    ], InputSearch);
    return InputSearch;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$5 = InputSearch;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputSearch),expression:"inputSearch"}],attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.inputSearch)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputSearch=$event.target.value;}}})])])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-839ecda0_0", { source: "#InputSearch[data-v-839ecda0]{display:block;width:100%;max-width:100%}.container-search[data-v-839ecda0]{display:block;justify-content:center;box-sizing:border-box;width:100%;margin:5px 0;padding:0 5%}.container-search input[data-v-839ecda0]{width:100%;font-size:14px;padding:6px 8px;box-sizing:border-box;border-radius:8px;background:var(--ep-color-sbg);color:var(--ep-color-text);border:1px solid var(--ep-color-border)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-839ecda0";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector,
    undefined,
    undefined
  );var VEmojiPicker = /** @class */ (function (_super) {
    __extends(VEmojiPicker, _super);
    function VEmojiPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapEmojis = {};
        _this.currentCategory = _this.initialCategory;
        _this.filterEmoji = "";
        return _this;
    }
    VEmojiPicker.prototype.created = function () {
        var categoriesNames = this.customCategories.map(function (c) { return c.name; });
        if (!categoriesNames.includes(this.initialCategory)) {
            this.initialCategory = categoriesNames[0];
        }
        // Create map
        this.mapperEmojisCategory(this.customEmojis);
        this.restoreFrequentlyEmojis();
        // Configure i18n
        if (this.i18n) {
            locale.i18n(this.i18n);
        }
    };
    VEmojiPicker.prototype.beforeDestroy = function () {
        this.mapEmojis = {};
    };
    VEmojiPicker.prototype.onSearch = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.filterEmoji = term;
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.changeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var hasEmojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasEmojis = this.mapEmojis[category.name].length;
                        this.currentCategory = category.name;
                        if (!hasEmojis) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onChangeCategory(category)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.updateFrequently = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            var oldEmojis, emojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldEmojis = this.mapEmojis["Frequently"];
                        emojis = __spread(new Set(__spread([emoji], oldEmojis)));
                        this.mapEmojis["Frequently"] = emojis.slice(0, this.limitFrequently);
                        return [4 /*yield*/, this.saveFrequentlyEmojis(emojis)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.mapperEmojisCategory = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.$set(this.mapEmojis, "Frequently", []);
                emojis
                    .filter(function (emoji) { return !_this.exceptEmojis.includes(emoji); })
                    .forEach(function (emoji) {
                    var _category = emoji.category;
                    if (!_this.mapEmojis[_category]) {
                        _this.$set(_this.mapEmojis, _category, []);
                    }
                    _this.mapEmojis[_category].push(emoji);
                });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.restoreFrequentlyEmojis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonMapIndexEmojis, mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                jsonMapIndexEmojis = localStorage.getItem("frequentlyEmojis");
                mapIndexEmojis = JSON.parse(jsonMapIndexEmojis) || [];
                this.mapEmojis["Frequently"] = mapIndexEmojis.map(function (index) { return _this.customEmojis[index]; });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.saveFrequentlyEmojis = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                mapIndexEmojis = emojis.map(function (emoji) {
                    return _this.customEmojis.indexOf(emoji);
                });
                localStorage.setItem("frequentlyEmojis", JSON.stringify(mapIndexEmojis));
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(VEmojiPicker.prototype, "categoriesFiltered", {
        get: function () {
            var _this = this;
            return this.customCategories.filter(function (category) { return !_this.exceptCategories.includes(category); });
        },
        enumerable: false,
        configurable: true
    });
    VEmojiPicker.prototype.onSelectEmoji = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateFrequently(emoji)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, emoji];
                }
            });
        });
    };
    VEmojiPicker.prototype.onChangeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, category];
            });
        });
    };
    VEmojiPicker.prototype.onChangeCustomEmojis = function (newEmojis) {
        if (newEmojis && newEmojis.length) {
            this.mapEmojis = {};
            this.mapperEmojisCategory(newEmojis);
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: function () { return emojisDefault; } })
    ], VEmojiPicker.prototype, "customEmojis", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: function () { return categoriesDefault; } })
    ], VEmojiPicker.prototype, "customCategories", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: 15 })
    ], VEmojiPicker.prototype, "limitFrequently", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: 5 })
    ], VEmojiPicker.prototype, "emojisByRow", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: false })
    ], VEmojiPicker.prototype, "continuousList", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: 32 })
    ], VEmojiPicker.prototype, "emojiSize", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: true })
    ], VEmojiPicker.prototype, "emojiWithBorder", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: true })
    ], VEmojiPicker.prototype, "showSearch", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: true })
    ], VEmojiPicker.prototype, "showCategories", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: false })
    ], VEmojiPicker.prototype, "dark", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: "Peoples" })
    ], VEmojiPicker.prototype, "initialCategory", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptCategories", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptEmojis", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)({})
    ], VEmojiPicker.prototype, "i18n", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Emit)("select")
    ], VEmojiPicker.prototype, "onSelectEmoji", null);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Emit)("changeCategory")
    ], VEmojiPicker.prototype, "onChangeCategory", null);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("customEmojis")
    ], VEmojiPicker.prototype, "onChangeCustomEmojis", null);
    VEmojiPicker = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            components: {
                Categories: __vue_component__$1,
                EmojiList: __vue_component__$4,
                InputSearch: __vue_component__$5
            }
        })
    ], VEmojiPicker);
    return VEmojiPicker;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));/* script */
const __vue_script__$6 = VEmojiPicker;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['emoji-picker', {dark: _vm.dark}],attrs:{"id":"EmojiPicker"}},[(_vm.showCategories)?_c('Categories',{attrs:{"categories":_vm.categoriesFiltered,"current":_vm.currentCategory},on:{"select":_vm.changeCategory}}):_vm._e(),_vm._v(" "),(_vm.showSearch)?_c('InputSearch',{on:{"update":_vm.onSearch}}):_vm._e(),_vm._v(" "),_c('EmojiList',{attrs:{"data":_vm.mapEmojis,"category":_vm.currentCategory,"filter":_vm.filterEmoji,"emojiWithBorder":_vm.emojiWithBorder,"emojiSize":_vm.emojiSize,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList,"hasSearch":_vm.showSearch},on:{"select":_vm.onSelectEmoji}})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-f1d527bc_0", { source: ".emoji-picker[data-v-f1d527bc]{--ep-color-bg:#f0f0f0;--ep-color-sbg:#f6f6f6;--ep-color-border:#e4e4e4;--ep-color-text:#4a4a4a;--ep-color-active:#009688;display:inline-flex;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeSpeed;flex-direction:column;align-items:center;background-color:var(--ep-color-bg);border-radius:4px;border:1px solid var(--ep-color-border);overflow:hidden;width:325px;user-select:none}@media screen and (max-width:325px){.emoji-picker[data-v-f1d527bc]{width:100%}}.dark[data-v-f1d527bc]{--ep-color-bg:#191B1A;--ep-color-sbg:#212221;--ep-color-border:#3E3D42;--ep-color-text:#f0f0f0;--ep-color-active:#009688}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-f1d527bc";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    createInjector,
    undefined,
    undefined
  );var defaultOptions = {
    i18n: {}
};
var plugin = {
    VEmojiPicker: __vue_component__$6,
    install: function (Vue, opts) {
        if (opts === void 0) { opts = defaultOptions; }
        locale.i18n(opts.i18n);
        Vue.component("VEmojiPicker", __vue_component__$6);
    }
};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);

/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=template&id=299eb344& */ "./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&");
/* harmony import */ var _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ChatComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterGlobal.vue?vue&type=template&id=44aae92f& */ "./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&");
/* harmony import */ var _FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterGlobal.vue?vue&type=script&lang=js& */ "./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&");
/* harmony import */ var _FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterGlobal.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/FooterGlobal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/utils/ConfirmDialog.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/utils/ConfirmDialog.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialog.vue?vue&type=template&id=270c5c2f& */ "./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f&");
/* harmony import */ var _ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/utils/ConfirmDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/utils/SharedDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/utils/SharedDialog.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedDialog.vue?vue&type=template&id=37bbb2d6& */ "./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6&");
/* harmony import */ var _SharedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharedDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedDialog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/utils/SharedDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/post/categoria/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/post/categoria/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=792f0a60& */ "./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/post/categoria/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedDialog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=template&id=299eb344& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&");


/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=template&id=44aae92f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&");


/***/ }),

/***/ "./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialog_vue_vue_type_template_id_270c5c2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmDialog.vue?vue&type=template&id=270c5c2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f&");


/***/ }),

/***/ "./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedDialog_vue_vue_type_template_id_37bbb2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedDialog.vue?vue&type=template&id=37bbb2d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6&");


/***/ }),

/***/ "./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_792f0a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=792f0a60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-btn",
        {
          attrs: {
            link: "",
            href: _vm.wame,
            target: "_blank",
            fab: "",
            dark: "",
            large: "",
            color: "primary",
            fixed: "",
            right: "",
            bottom: "",
          },
        },
        [
          _c("v-icon", { attrs: { large: "", dark: "" } }, [
            _vm._v("mdi-whatsapp "),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-2 mx-auto footer-container" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 pa-0 ma-0 rotate-180 container-bandwith" },
            [_c("v-img", { attrs: { src: "/app/bandwith.PNG " } })],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "primary pa-0 ma-0 content-wrap-2 mx-auto" },
        [
          _c(
            "v-col",
            {
              staticClass:
                "col-12 col-md-6 d-flex flex-wrap justify-center align-center",
            },
            [
              _c(
                "div",
                { staticClass: "footer-logo" },
                [
                  _c("v-img", {
                    staticClass: "footer-logo",
                    attrs: { src: "/app/white_logo.png", contain: "" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("span", { staticClass: "white--text as-footer_text px-4" }, [
                _vm._v(
                  "\n        Copyright ©" +
                    _vm._s(_vm.yearActual) +
                    " by A&S Consulting Group.\n      "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "col-12 col-md-6 text-center text-md-left " },
            [
              _c("v-col", [
                _c(
                  "span",
                  {
                    staticClass:
                      "white--text d-block d-md-inline-flex align-center justify-center",
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: {
                          fab: "",
                          text: "",
                          small: "",
                          link: "",
                          href: _vm.phone_send,
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-phone-message"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(
                      "\n          " + _vm._s(_vm.phone_contact) + "\n        "
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "white--text d-block d-md-inline-flex align-center justify-center",
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: { fab: "", text: "", small: "", link: "" },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-email-open"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v("\n          " + _vm._s(_vm.email) + "\n        "),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("v-col", [
                _c(
                  "span",
                  {
                    staticClass:
                      "white--text d-block d-md-inline-flex align-center justify-center",
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: {
                          fab: "",
                          text: "",
                          small: "",
                          href: _vm.wame,
                          target: "_blank",
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-whatsapp"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(
                      "\n          " + _vm._s(_vm.phone_contact) + "\n        "
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "white--text d-block d-md-inline-flex align-center justify-center",
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: { fab: "", text: "", small: "", link: "" },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-map-marker"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v("\n          " + _vm._s(_vm.address) + "\n        "),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ConfirmDialog.vue?vue&type=template&id=270c5c2f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      style: { zIndex: _vm.options.zIndex },
      attrs: { opacity: "0.3", "max-width": _vm.options.width, persistent: "" },
      on: {
        keydown: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.cancel.apply(null, arguments)
        },
      },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: _vm.options.color, dense: "", flat: "" } },
            [
              _c(
                "v-toolbar-title",
                { staticClass: "text-body-2 font-weight-bold white--text" },
                [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !!_vm.message,
                expression: "!!message",
              },
            ],
            staticClass: "pa-4 black--text text-justify",
            domProps: { innerHTML: _vm._s(_vm.message) },
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pt-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "body-2 font-weight-bold text-normal rounded-0",
                  attrs: { color: _vm.options.color, outlined: "" },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.agree.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Aceptar")]
              ),
              _vm._v(" "),
              !_vm.options.noconfirm
                ? _c(
                    "v-btn",
                    {
                      staticClass:
                        "body-2 font-weight-bold text-normal rounded-0",
                      attrs: { color: "grey", text: "" },
                      nativeOn: {
                        click: function ($event) {
                          return _vm.cancel.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Cancelar")]
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/SharedDialog.vue?vue&type=template&id=37bbb2d6& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { opacity: "0.3", width: "450" },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        { staticClass: "rounded-0 elevation-0 pa-8" },
        [
          _c("v-card-text", { staticClass: "text-center" }, [
            _c("span", { staticClass: "text-h6 black--text" }, [
              _vm._v("Compartir entrada"),
            ]),
          ]),
          _vm._v(" "),
          !_vm.linked
            ? _c(
                "v-row",
                { staticClass: "pa-4" },
                [
                  _c(
                    "v-col",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "ShareNetwork",
                        {
                          attrs: {
                            network: "facebook",
                            url: _vm.link,
                            title: _vm.title,
                            description: _vm.contenido,
                          },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "elevation-0",
                              attrs: { fab: "", small: "", color: "facebook" },
                            },
                            [
                              _c("v-icon", { attrs: { color: "white" } }, [
                                _vm._v("mdi-facebook"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "ShareNetwork",
                        {
                          attrs: {
                            network: "twitter",
                            url: _vm.link,
                            title: _vm.title,
                            description: _vm.contenido,
                          },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "elevation-0",
                              attrs: { fab: "", small: "", color: "twitter" },
                            },
                            [
                              _c("v-icon", { attrs: { color: "white" } }, [
                                _vm._v("mdi-twitter"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "ShareNetwork",
                        {
                          attrs: {
                            network: "linkedin",
                            url: _vm.link,
                            title: _vm.title,
                            description: _vm.contenido,
                          },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "elevation-0",
                              attrs: { fab: "", small: "", color: "linkedin" },
                            },
                            [
                              _c("v-icon", { attrs: { color: "white" } }, [
                                _vm._v("mdi-linkedin"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "elevation-0",
                          attrs: { fab: "", small: "", color: "black" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              _vm.linked = !_vm.linked
                            },
                          },
                        },
                        [
                          _c("v-icon", { attrs: { color: "white" } }, [
                            _vm._v("mdi-link-variant"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "v-row",
                { staticClass: "pa-4" },
                [
                  _c(
                    "v-col",
                    { staticClass: "col-12" },
                    [
                      _c("v-text-field", {
                        model: {
                          value: _vm.link,
                          callback: function ($$v) {
                            _vm.link = $$v
                          },
                          expression: "link",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "col-12 text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "primary white--text rounded-0 text-normal",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.copyText()
                            },
                          },
                        },
                        [_vm._v("Copiar enlace")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "rounded-0 text-normal mr-2 my-2",
                          attrs: { text: "" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              _vm.linked = !_vm.linked
                            },
                          },
                        },
                        [_vm._v("Cancelar")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/post/categoria/Index.vue?vue&type=template&id=792f0a60& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "content-wrap-2 pa-0 mx-auto" },
    [
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        [
          _c(
            "v-col",
            {
              staticClass:
                "col-12 ma-0 pa-4 px-md-16 d-flex flex-wrap align-center",
            },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    { attrs: { color: "grey" } },
                    [
                      _vm.post.user_foto != null
                        ? _c(
                            "v-avatar",
                            { staticClass: "pa-1" },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: _vm.post.user_foto,
                                  alt: _vm.post.name,
                                  "aspect-ratio": "1",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "v-avatar",
                            { staticClass: "grey lighten-3 pa-1" },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "s2FZSQ",
                                  attrs: {
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 60 60",
                                    "enable-background": "new 0 0 60 60;",
                                    "xml:space": "preserve",
                                    height: "36",
                                    width: "36",
                                  },
                                },
                                [
                                  _c("g", [
                                    _c("ellipse", {
                                      attrs: {
                                        fill: "#979797",
                                        cx: "30.7",
                                        cy: "22.3",
                                        rx: "11.5",
                                        ry: "11.6",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("g", [
                                      _c("ellipse", {
                                        attrs: {
                                          fill: "none",
                                          cx: "30.7",
                                          cy: "22.3",
                                          rx: "11.5",
                                          ry: "11.6",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          fill: "#979797",
                                          d: "M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8\n\t\t\tc5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1\n\t\t\tC46.3,41.6,38.6,37.1,29.9,37.1z",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          fill: "#D8D8D8",
                                          d: "M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6\n\t\t\tc0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8\n\t\t\tc0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4\n\t\t\tc0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8\n\t\t\tc0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5\n\t\t\tc0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1\n\t\t\tc0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1\n\t\t\tc0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5\n\t\t\tc0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7\n\t\t\tc0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6\n\t\t\tc0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8\n\t\t\tc0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6\n\t\t\tc0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z\n\t\t\t M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.post.name + " " + _vm.post.last_name
                          ),
                        },
                      }),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.formatDate(_vm.post.fecha_publicacion) +
                              " - " +
                              _vm.getInt(_vm.post.lectura) +
                              " min de lectura"
                          ),
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: { bottom: "", left: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass:
                                            "elevation-0 primary--text",
                                          attrs: {
                                            dark: "",
                                            icon: "",
                                            text: "",
                                            fab: "",
                                            small: "",
                                          },
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-dots-vertical"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { staticClass: "pa-0 ma-0" },
                            [
                              _c(
                                "v-list-item",
                                { attrs: { link: "" } },
                                [
                                  _c(
                                    "v-list-item-title",
                                    {
                                      staticClass: "caption",
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.showSharedDialog(_vm.post)
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { small: "", left: "" } },
                                        [_vm._v("mdi-share")]
                                      ),
                                      _vm._v(
                                        "Compartir entrada\n                                "
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        [
          _c(
            "v-col",
            {
              staticClass: "col-12 ma-0 pa-4 px-md-16 pb-md-16",
              staticStyle: { "min-height": "588px" },
            },
            [
              _c(
                "v-card-text",
                { staticClass: "pa-0" },
                [
                  _c(
                    "div",
                    { staticClass: "display-1 mb-5 alternative--text mb-4" },
                    [_vm._v(_vm._s(_vm.post.titulo))]
                  ),
                  _vm._v(" "),
                  _c("v-img", { attrs: { src: _vm.post.foto } }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "ql-editor pa-0 py-6",
                    domProps: { innerHTML: _vm._s(this.post.contenido) },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-chip-group",
                    { attrs: { column: "" } },
                    _vm._l(_vm.tags, function (tag) {
                      return _c(
                        "div",
                        { key: tag.id },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var hover = ref.hover
                                    return [
                                      _c(
                                        "v-chip",
                                        {
                                          staticClass:
                                            "black elevation-0 px-6 py-4 rounded-0 subtitle-2",
                                          class: { "grey lighten-2 ": hover },
                                          attrs: {
                                            color: "black",
                                            outlined: "",
                                          },
                                        },
                                        [_vm._v("#" + _vm._s(tag.tag))]
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          }),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 ma-0 pa-0 px-md-16" },
            [_c("v-divider", { attrs: { horizontal: "" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass:
                "col-12 ma-0 pa-2 d-flex flex-wrap space-between align-center pa-4 px-md-16",
            },
            [
              _c(
                "ShareNetwork",
                {
                  attrs: {
                    network: "facebook",
                    url: _vm.getSharedPost(_vm.post.route),
                    title: _vm.post.titulo,
                    description: _vm.post.contenido,
                  },
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "elevation-0 mr-2",
                      attrs: { fab: "", small: "" },
                    },
                    [
                      _c("v-icon", { attrs: { color: "primary" } }, [
                        _vm._v("mdi-facebook"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ShareNetwork",
                {
                  attrs: {
                    network: "twitter",
                    url: _vm.getSharedPost(_vm.post.route),
                    title: _vm.post.titulo,
                    description: _vm.post.contenido,
                  },
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "elevation-0 mx-2",
                      attrs: { fab: "", small: "" },
                    },
                    [
                      _c("v-icon", { attrs: { color: "primary" } }, [
                        _vm._v("mdi-twitter"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ShareNetwork",
                {
                  attrs: {
                    network: "linkedin",
                    url: _vm.getSharedPost(_vm.post.route),
                    title: _vm.post.titulo,
                    description: _vm.post.contenido,
                  },
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "elevation-0 mx-2",
                      attrs: { fab: "", small: "" },
                    },
                    [
                      _c("v-icon", { attrs: { color: "primary" } }, [
                        _vm._v("mdi-linkedin"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "elevation-0 mx-2",
                  attrs: { fab: "", small: "" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.copyText()
                    },
                  },
                },
                [
                  _c("v-icon", { attrs: { color: "primary" } }, [
                    _vm._v("mdi-link-variant"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.post.categorias, function (categoria) {
                return _c(
                  "v-btn",
                  {
                    key: "categoria-" + categoria.id,
                    staticClass: "caption",
                    attrs: { text: "", color: "primary" },
                  },
                  [_vm._v(_vm._s(categoria.nombre_categoria))]
                )
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "col-12 ma-0 pa-0 px-md-16" },
            [_c("v-divider", { attrs: { horizontal: "" } })],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        [
          _c(
            "v-col",
            {
              staticClass:
                "col-12 pa-2 d-flex flex-wrap space-between align-center pa-4 px-md-16 pb-md-16",
            },
            [
              _c("span", { staticClass: "mr-2 primary--text" }, [
                _vm._v(
                  _vm._s(_vm.post.visualizaciones.length) + " visualizaciones"
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "primary--text" }, [
                _vm._v(_vm._s(_vm.post.comments.length) + " comentarios"),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "primary--text", attrs: { fab: "", small: "" } },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.post.favoritos.length) +
                      "\n                "
                  ),
                  _c(
                    "v-btn",
                    {
                      staticClass: "elevation-0 ml-2",
                      attrs: { fab: "", small: "" },
                    },
                    [
                      _c(
                        "v-icon",
                        {
                          attrs: { color: "error" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.isFavorite()
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.icon_heart) +
                              "\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 mt-3 pa-4 px-md-16" },
            [
              _c(
                "v-card-text",
                { staticClass: "pa-0 align-center d-flex flex-wrap" },
                [
                  _c("span", { staticClass: "primary--text title" }, [
                    _vm._v("Comentarios"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "my-0 py-0",
                attrs: { horizontal: "" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "col-12 d-flex flex-wrap pa-4 px-md-16" },
            [
              _c("v-avatar", { staticClass: "grey lighten-3 pa-1" }, [
                _c(
                  "svg",
                  {
                    staticClass: "s2FZSQ",
                    attrs: {
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 60 60",
                      "enable-background": "new 0 0 60 60;",
                      "xml:space": "preserve",
                      height: "36",
                      width: "36",
                    },
                  },
                  [
                    _c("g", [
                      _c("ellipse", {
                        attrs: {
                          fill: "#979797",
                          cx: "30.7",
                          cy: "22.3",
                          rx: "11.5",
                          ry: "11.6",
                        },
                      }),
                      _vm._v(" "),
                      _c("g", [
                        _c("ellipse", {
                          attrs: {
                            fill: "none",
                            cx: "30.7",
                            cy: "22.3",
                            rx: "11.5",
                            ry: "11.6",
                          },
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            fill: "#979797",
                            d: "M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8\n\t\t\tc5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1\n\t\t\tC46.3,41.6,38.6,37.1,29.9,37.1z",
                          },
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            fill: "#D8D8D8",
                            d: "M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6\n\t\t\tc0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8\n\t\t\tc0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4\n\t\t\tc0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8\n\t\t\tc0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5\n\t\t\tc0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1\n\t\t\tc0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1\n\t\t\tc0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5\n\t\t\tc0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7\n\t\t\tc0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6\n\t\t\tc0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8\n\t\t\tc0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6\n\t\t\tc0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z\n\t\t\t M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z",
                          },
                        }),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "align-center",
                  staticStyle: { width: "calc(100% - 50px) !important" },
                },
                [
                  _c("v-text-field", {
                    staticClass: "ml-4 my-0 py-3",
                    attrs: {
                      "hide-details": "auto",
                      placeholder: "Escribir un comentario",
                      maxlength: "500",
                      counter: "",
                    },
                    on: {
                      focus: function ($event) {
                        _vm.isComment = true
                      },
                    },
                    model: {
                      value: _vm.comment,
                      callback: function ($$v) {
                        _vm.comment = $$v
                      },
                      expression: "comment",
                    },
                  }),
                  _vm._v(" "),
                  _vm.isComment
                    ? _c(
                        "v-card-text",
                        { staticClass: "py-2 d-flex flex-wrap space-between" },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "elevation-0",
                                  attrs: { fab: "", small: "", text: "" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      _vm.showEmojis = !_vm.showEmojis
                                    },
                                  },
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v("mdi-emoticon-outline"),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.showEmojis
                                ? _c("VEmojiPicker", {
                                    staticClass: "showEmoji",
                                    on: { select: _vm.selectEmoji },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-normal elevation-0 rounded-0",
                              attrs: { text: "", color: "primary" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.cancelComment()
                                },
                              },
                            },
                            [_vm._v("Cancelar")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass:
                                "text-normal elevation-0 rounded-0 ml-2",
                              attrs: { color: "primary" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.sendComment()
                                },
                              },
                            },
                            [_vm._v("Publicar")]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-article mx-auto elevation-0" },
        _vm._l(_vm.post.comments, function (comment) {
          return _c(
            "v-col",
            {
              key: "comment" + comment.id,
              staticClass: "col-12 d-flex flex-wrap pa-4 px-md-16",
            },
            [
              comment.autor === "Anónimo"
                ? _c("v-avatar", { staticClass: "grey lighten-3 pa-1" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "s2FZSQ",
                        attrs: {
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 60 60",
                          "enable-background": "new 0 0 60 60;",
                          "xml:space": "preserve",
                          height: "36",
                          width: "36",
                        },
                      },
                      [
                        _c("g", [
                          _c("ellipse", {
                            attrs: {
                              fill: "#979797",
                              cx: "30.7",
                              cy: "22.3",
                              rx: "11.5",
                              ry: "11.6",
                            },
                          }),
                          _vm._v(" "),
                          _c("g", [
                            _c("ellipse", {
                              attrs: {
                                fill: "none",
                                cx: "30.7",
                                cy: "22.3",
                                rx: "11.5",
                                ry: "11.6",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                fill: "#979797",
                                d: "M29.9,37.1c-9,0-17,3.9-21.4,10.1c-0.5,0.7-1,1.4-1.4,2.1c0.5,0.7,1.1,1.3,1.7,1.9c1,1,2.1,2,3.3,2.8\n        c5,3.7,11.2,6,17.9,6s12.9-2.2,17.9-6c1.2-0.9,2.2-1.8,3.3-2.8c0.3-0.3,0.6-0.6,0.9-0.9c-0.4-0.7-0.8-1.4-1.3-2.1\n        C46.3,41.6,38.6,37.1,29.9,37.1z",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                fill: "#D8D8D8",
                                d: "M30,0C13.4,0,0,13.4,0,30c0,0.5,0,1,0,1.5c0,0.2,0,0.3,0,0.5c0,0.3,0,0.7,0.1,1c0,0.2,0,0.4,0.1,0.6\n        c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.3,0.1,0.6,0.1,0.8c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.1,0.5,0.2,0.8\n        c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.5c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.3,0.2,0.4\n        c0.2,0.4,0.3,0.8,0.5,1.2c0,0,0,0,0,0c0.2,0.4,0.4,0.8,0.6,1.3c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.3,0.6,0.4,0.8\n        c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.3,0.5,0.4,0.7c0.1,0.2,0.2,0.3,0.3,0.5\n        c0.2,0.2,0.3,0.4,0.5,0.7C5.9,47.8,6,48,6.1,48.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1\n        c0.4-0.7,0.9-1.4,1.4-2.1c4.5-6.2,12.4-10.1,21.4-10.1c8.8,0,16.5,4.5,20.9,11.1c0.5,0.7,0.9,1.4,1.3,2.1c0,0,0,0,0.1-0.1\n        c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.3,0.4-0.5\n        c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.3-0.4,0.4-0.7\n        c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.4-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6\n        c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8\n        c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.8c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.8c0-0.2,0.1-0.4,0.1-0.6\n        c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.7,0.1-1c0-0.2,0-0.3,0-0.5c0-0.5,0-1,0-1.5C60,13.4,46.6,0,30,0z\n        M30.7,33.9c-6.4,0-11.5-5.2-11.5-11.6c0-6.4,5.2-11.6,11.5-11.6s11.5,5.2,11.5,11.6C42.3,28.7,37.1,33.9,30.7,33.9z",
                              },
                            }),
                          ]),
                        ]),
                      ]
                    ),
                  ])
                : _c(
                    "v-avatar",
                    { staticClass: "grey lighten-3 pa-1" },
                    [
                      _c("v-img", {
                        attrs: {
                          src: comment.foto_autor,
                          alt: comment.autor,
                          height: "40",
                          width: "40",
                        },
                      }),
                    ],
                    1
                  ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { width: "calc(100% - 50px) !important" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "elevation-0 caption black--text ml-4",
                      attrs: {
                        solo: "",
                        "auto-grow": "",
                        filled: "",
                        disabled: "",
                        color: "white",
                        rows: "1",
                        "max-height": "200",
                      },
                    },
                    [
                      _c("h3", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(comment.autor)),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            overflow: "hidden",
                            "text-overflow": "ellipsis",
                            display: "-webkit-box",
                            "-webkit-line-clamp": "8",
                            "-webkit-box-orient": "vertical",
                          },
                        },
                        [_c("p", [_vm._v(_vm._s(comment.comentario))])]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("FooterGlobal"),
      _vm._v(" "),
      _c("ConfirmDialog", { ref: "confirmDialog" }),
      _vm._v(" "),
      _c("ChatComponent"),
      _vm._v(" "),
      _c("SharedDialog", { ref: "sharedDialog" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);