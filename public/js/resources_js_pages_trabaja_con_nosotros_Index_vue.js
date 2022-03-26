"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_trabaja_con_nosotros_Index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/ChatComponent.vue */ "./resources/js/components/global/ChatComponent.vue");
/* harmony import */ var _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/FooterGlobal.vue */ "./resources/js/components/global/FooterGlobal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FooterGlobal: _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      profesiones: [{
        id: 1,
        profesion: "Analista"
      }, {
        id: 2,
        profesion: "Contador"
      }, {
        id: 3,
        profesion: "Administrador"
      }],
      menu: false,
      date: null,
      form: {
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        profesion: '',
        fecha_inicio: '',
        file: null
      },
      profesion: {
        profesion: ''
      },
      loadingApply: false,
      file_error: false
    };
  },
  mounted: function mounted() {
    this.getPath();
  },
  methods: {
    getPath: function getPath() {
      var path = window.location.pathname + window.location.search;
      this.$store.dispatch("app/setPath", path);
    },
    applyNow: function applyNow() {
      var _this = this;

      this.loadingApply = true;
      this.form.profesion = this.profesion.profesion;
      this.form.fecha_inicio = this.date;

      if (this.form.file == null) {
        Vue.$toast.warning("Documentos obligatorio");
        this.loadingApply = false;
        this.file_error = true;
        return;
      }

      if (this.form.nombres != '' && this.form.apellidos != '' && this.form.email != '' && this.form.telefono && this.form.fecha_inicio != '' && this.form.profesion != '') {
        var data = new FormData();
        data.append("nombres", this.form.nombres);
        data.append("apellidos", this.form.apellidos);
        data.append("telefono", this.form.telefono);
        data.append("email", this.form.email);
        data.append("profesion", this.form.profesion);
        data.append("fecha_inicio", this.form.fecha_inicio);
        data.append("file", this.form.file);
        var config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        };
        axios({
          method: 'post',
          url: "/api/trabajador",
          data: data,
          headers: config
        }).then(function (res) {
          console.log(res);

          if (res.status == 200) {
            Vue.$toast.success("Registro exitoso!, le enviaremos un correo de confirmación");
            _this.form = {
              nombres: '',
              apellidos: '',
              email: '',
              telefono: '',
              profesion: '',
              fecha_inicio: '',
              file: null
            };
            _this.profesion = {
              profesion: ''
            };
            _this.date = null;
          } else if (res.status == 201) {
            Vue.$toast.info("Ya existe un trabajador con este correo");
          } else if (res.status == 203) {
            Vue.$toast.error("Formato de archivo inválido");
          }

          _this.loadingApply = false;
        })["catch"](function (err) {
          _this.loadingApply = false;
          console.log(err);
        });
      }
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

/***/ "./resources/js/pages/trabaja_con_nosotros/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/trabaja_con_nosotros/Index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=aebab9e4& */ "./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trabaja_con_nosotros/Index.vue"
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

/***/ "./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=script&lang=js&");
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

/***/ "./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_aebab9e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=aebab9e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/trabaja_con_nosotros/Index.vue?vue&type=template&id=aebab9e4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pa-0 ma-0 content-wrap-2 mx-auto" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 pa-0 ma-0 container-bandwith" },
            [_c("v-img", { attrs: { src: "/app/bandwith.PNG " } })],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-0 mx-auto align-center mb-10" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 col-md-6 text-center text-md-left my-4" },
            [
              _c(
                "span",
                {
                  staticClass:
                    "primary--text text-uppercase as-text_extralarge line-height_1",
                },
                [_vm._v("Trabaja con")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-right_block",
                },
                [_vm._v("nosotros")]
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticClass:
            "pa-0 ma-0 content-wrap-0 mx-auto align-center justify-center mb-10",
        },
        [
          _c(
            "v-col",
            {
              staticClass:
                "col-12 col-md-10 d-flex align-center justify-md-start justify-center",
            },
            [
              _c("div", { staticClass: "text-md-start text-center" }, [
                _c("span", { staticClass: "as-p_normal primary--text" }, [
                  _vm._v(
                    "\n                    Únete a la\n                    "
                  ),
                  _c("strong", [_vm._v("firma más especializada")]),
                  _vm._v(" del país\n                "),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "col-12 col-md-10 pa-0" },
            [
              _c(
                "v-container",
                { staticClass: "pa-0 ma-0" },
                [
                  _c(
                    "v-row",
                    { staticClass: "pa-0 ma-0" },
                    [
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-6" },
                        [
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Nombres",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.form.nombres,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "nombres", $$v)
                              },
                              expression: "form.nombres",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-6" },
                        [
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Apellidos",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.form.apellidos,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "apellidos", $$v)
                              },
                              expression: "form.apellidos",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Email",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Teléfono",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.form.telefono,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "telefono", $$v)
                              },
                              expression: "form.telefono",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("v-select", {
                            staticClass: "rounded-0",
                            attrs: {
                              items: _vm.profesiones,
                              label: "Elije una opción",
                              "item-text": "profesion",
                              outlined: "",
                              "return-object": "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.profesion,
                              callback: function ($$v) {
                                _vm.profesion = $$v
                              },
                              expression: "profesion",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
                                "close-on-content-click": false,
                                "return-value": _vm.date,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              on: {
                                "update:returnValue": function ($event) {
                                  _vm.date = $event
                                },
                                "update:return-value": function ($event) {
                                  _vm.date = $event
                                },
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "Fecha de inicio",
                                                "append-icon": "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                "hide-details": "auto",
                                              },
                                              model: {
                                                value: _vm.date,
                                                callback: function ($$v) {
                                                  _vm.date = $$v
                                                },
                                                expression: "date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu,
                                callback: function ($$v) {
                                  _vm.menu = $$v
                                },
                                expression: "menu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-date-picker",
                                {
                                  attrs: {
                                    "no-title": "",
                                    scrollable: "",
                                    color: "primary",
                                  },
                                  model: {
                                    value: _vm.date,
                                    callback: function ($$v) {
                                      _vm.date = $$v
                                    },
                                    expression: "date",
                                  },
                                },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "text-normal rounded-0",
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function ($event) {
                                          _vm.menu = false
                                        },
                                      },
                                    },
                                    [_vm._v("Cancelar")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "text-normal rounded-0",
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$refs.menu.save(_vm.date)
                                        },
                                      },
                                    },
                                    [_vm._v("Aceptar")]
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
                        "v-col",
                        { staticClass: "col-12 col-md-8" },
                        [
                          _c("v-file-input", {
                            attrs: {
                              "persistent-hint": "",
                              label: "Seleccione un archivo",
                              outlined: "",
                              "prepend-icon": "mdi-paperclip",
                              "show-size": "",
                              error: _vm.file_error,
                              hint: "Máximo 15MB",
                            },
                            model: {
                              value: _vm.form.file,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "file", $$v)
                              },
                              expression: "form.file",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-12" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "rounded-0 text-normal",
                              attrs: {
                                block: "",
                                color: "primary",
                                "x-large": "",
                                loading: _vm.loadingApply,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.applyNow()
                                },
                              },
                            },
                            [_vm._v("Aplicar ahora")]
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
      _c("FooterGlobal"),
      _vm._v(" "),
      _c("ChatComponent"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);