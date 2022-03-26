"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_blog_escritores_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        text: "",
        align: "left",
        sortable: false,
        value: "foto"
      }, {
        text: "Nombres",
        align: "left",
        sortable: false,
        value: "nombre"
      }, {
        text: "Rol",
        value: "roles"
      }, {
        text: "Contador de entrada",
        value: "entradas"
      }, {
        text: " ",
        align: "right",
        value: "actions",
        sortable: false
      }],
      users: [],
      search: null,
      options: [{
        icon: "mdi-restore",
        title: "Cambiar rol"
      }, {
        icon: "mdi-pencil",
        title: "Editar"
      }, {
        icon: "mdi-trash-can",
        title: "Eliminar"
      }]
    };
  },
  mounted: function mounted() {
    this.setActualPage();
    this.getData();
  },
  methods: {
    setActualPage: function setActualPage() {
      this.$store.dispatch("app/saveActualPage", "Escritores");
    },
    getData: function getData() {
      var _this = this;

      axios({
        method: "get",
        url: "/api/oauth/writers",
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.token
        }
      }) //.post("/api/oauth/posts/pub", headers)
      .then(function (res) {
        console.log(res);
        _this.users = res.data;
      })["catch"](function (err) {
        console.log(err.response); //Vue.$toast.error("");
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

/***/ "./resources/js/pages/admin/blog/escritores/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/admin/blog/escritores/Index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=890bf9a0& */ "./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/blog/escritores/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_890bf9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=890bf9a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/escritores/Index.vue?vue&type=template&id=890bf9a0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", { staticClass: "font-weight-bold px-md-10 px-3" }, [
        _vm._v(_vm._s(_vm.actualPage)),
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pa-0 ma-0 px-md-10 px-3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "pa-0 ma-0" },
            [
              _c(
                "v-col",
                { staticClass: "pa-0 ma-0 col-12" },
                [
                  _c("v-card-text", { staticClass: "px-0 py-0" }, [
                    _c("p", { staticClass: "caption ma-0" }, [
                      _vm._v(
                        "Administra a los escritores de tu blog, crea y personaliza sus perfiles públicos. Todos aquí tienen permiso para escribir entradas."
                      ),
                    ]),
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
        "v-container",
        { staticClass: "pa-0 ma-0 px-md-10 px-3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "pa-0 ma-0" },
            [
              _c(
                "v-col",
                { staticClass: "col-12 pa-0 ma-0" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0 px-0 rounded-0",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.users,
                      search: _vm.search,
                      "sort-by": "calories",
                      "hide-default-footer": "",
                      "disable-pagination": "",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.foto",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "div",
                              { staticClass: "pa-2" },
                              [
                                item.foto
                                  ? _c("v-img", {
                                      staticClass: "mx-auto",
                                      attrs: {
                                        src: item.foto,
                                        height: "60",
                                        width: "42",
                                      },
                                    })
                                  : _c(
                                      "div",
                                      {
                                        staticClass:
                                          "gray lighten-5 rounded-lg align-center justify-center d-flex mx-auto",
                                        staticStyle: {
                                          width: "60px",
                                          height: "60px",
                                        },
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "elevation-0 disable-events",
                                            attrs: {
                                              fab: "",
                                              color: "white",
                                              "x-small": "",
                                            },
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "sky" } },
                                              [_vm._v("mdi-image-outline")]
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
                          ]
                        },
                      },
                      {
                        key: "item.roles",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("span", [_vm._v(_vm._s(item.roles[0].name))]),
                          ]
                        },
                      },
                      {
                        key: "item.entradas",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("span", [_vm._v(_vm._s(item.entradas.length))]),
                          ]
                        },
                      },
                      {
                        key: "item.nombre",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(item.name + " " + item.last_name)),
                            ]),
                          ]
                        },
                      },
                      {
                        key: "item.actions",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-menu",
                              {
                                attrs: { bottom: "", left: "" },
                                scopedSlots: _vm._u(
                                  [
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
                                                    "elevation-0 sky--text",
                                                  attrs: {
                                                    dark: "",
                                                    icon: "",
                                                    text: "",
                                                    fab: "",
                                                    "x-small": "",
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
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  _vm._l(_vm.options, function (option, i) {
                                    return _c(
                                      "v-list-item",
                                      {
                                        key: "options" + i,
                                        attrs: { link: "" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.OnClickOption(
                                              option,
                                              item
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "v-list-item-title",
                                          { staticClass: "caption" },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { small: "", left: "" },
                                              },
                                              [_vm._v(_vm._s(option.icon))]
                                            ),
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(option.title) +
                                                "\n                                    "
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        i === 3
                                          ? _c("v-divider", {
                                              attrs: { horizontal: "" },
                                            })
                                          : _vm._e(),
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                      {
                        key: "no-data",
                        fn: function () {
                          return [
                            _c("span", [
                              _vm._v("No hay publicaciones disponibles"),
                            ]),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  }),
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