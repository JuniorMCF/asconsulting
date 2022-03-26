"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_blog_categorias_edit_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categoria: {
        nombre: ''
      },
      loadSave: false
    };
  },
  mounted: function mounted() {
    this.setActualPage();
    this.getData();
  },
  methods: {
    setActualPage: function setActualPage() {
      this.$store.dispatch("app/saveActualPage", "Editar categoría");
    },
    getData: function getData() {
      var _this = this;

      var data = new FormData();
      data.append("categoria_id", this.$route.params.id);
      axios({
        method: "post",
        url: "/api/oauth/category",
        data: data,
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.token
        }
      }).then(function (res) {
        console.log(res);
        _this.categoria = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    saveCategory: function saveCategory() {
      var _this2 = this;

      this.loadSave = true;
      var data = new FormData();
      data.append("categoria_id", this.$route.params.id);
      data.append("nombre", this.categoria.nombre);
      axios({
        method: 'post',
        url: "/api/oauth/category/save",
        data: data,
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.token
        }
      }).then(function (res) {
        _this2.loadSave = false;

        if (res) {
          Vue.$toast.success("Categoría actualizada!");
          setTimeout(function () {
            _this2.$router.push({
              path: '/admin/categorias'
            });
          }, 2000);
        } else {
          Vue.$toast.success("Error de conexión");
        }
      })["catch"](function (err) {
        Vue.$toast.success("Error de conexión");
        _this2.loadSave = false;
        console.log(err);
      });
    },
    goToCategorys: function goToCategorys() {
      this.$router.push({
        path: '/admin/categorias'
      });
    }
  },
  computed: {
    actualPage: function actualPage() {
      return this.$store.state.app.actual_page;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/blog/categorias/edit/Index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/edit/Index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48bf7c38& */ "./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/blog/categorias/edit/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48bf7c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=48bf7c38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/edit/Index.vue?vue&type=template&id=48bf7c38& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { staticClass: "pa-0 ma-0 px-md-10 px-3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "justify-center" },
            [
              _c(
                "v-col",
                { staticClass: "col-12 col-md-6" },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "font-weight-bold px-0 ma-0" },
                    [_vm._v(_vm._s(_vm.actualPage))]
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
            { staticClass: "pa-0 ma-0 justify-center" },
            [
              _c("v-col", { staticClass: "pa-0 ma-0 col-12 col-md-6 mb-4" }, [
                _c(
                  "span",
                  { staticClass: "text-h4 black--text font-weight-bold" },
                  [_vm._v(_vm._s(_vm.categoria.nombre))]
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "pa-0 ma-0 justify-center" },
            [
              _c(
                "v-col",
                { staticClass: "pa-0 ma-0 col-12 col-md-6" },
                [
                  _c("v-text-field", {
                    attrs: {
                      "hide-details": "auto",
                      color: "sky",
                      value: _vm.categoria.nombre,
                      outlined: "",
                      placeholder: "Nombre de la categpría",
                      dense: "",
                    },
                    model: {
                      value: _vm.categoria.nombre,
                      callback: function ($$v) {
                        _vm.$set(_vm.categoria, "nombre", $$v)
                      },
                      expression: "categoria.nombre",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "pa-0 ma-0 justify-center" },
            [
              _c(
                "v-col",
                { staticClass: "py-4 ma-0 col-6 col-md-3 pl-0" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass:
                        "text-normal elevation-0 white--text rounded-lg",
                      attrs: { loading: _vm.loadSave, color: "sky", block: "" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.saveCategory()
                        },
                      },
                    },
                    [_vm._v("Guardar")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "py-4 ma-0 col-6 col-md-3 pr-0" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "text-normal elevation-0 rounded-lg",
                      attrs: {
                        block: "",
                        text: "",
                        outlined: "",
                        color: "sky",
                      },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.goToCategorys()
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



/***/ })

}]);