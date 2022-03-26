"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_blog_categorias_Index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/utils/ConfirmDialog.vue */ "./resources/js/components/utils/ConfirmDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      categorias: [],
      headers: [{
        text: "Imagen",
        align: "left",
        sortable: false,
        value: "foto"
      }, {
        text: "Nombre",
        value: "nombre"
      }, {
        text: "Entradas",
        value: "entrys"
      }, {
        text: " ",
        align: "right",
        value: "actions",
        sortable: false
      }],
      options: [{
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
      this.$store.dispatch("app/saveActualPage", "Categorías");
    },
    createNewCategory: function createNewCategory() {
      this.$router.push({
        path: "/admin/categorias/nuevo"
      });
    },
    editItem: function editItem(item) {
      this.$router.push({
        name: "edit-categoria-blog",
        params: {
          id: item.id
        }
      });
    },
    OnClickOption: function OnClickOption(option, item) {
      var _this = this;

      //console.log(item.route)
      switch (option.title) {
        case "Eliminar":
          this.$refs.confirmDialog.open("Eliminar categoría", "¿Está seguro que quiere eliminar esta categoría?").then(function (res) {
            if (res) {
              var data = new FormData();
              data.append("categoria_id", item.id);
              axios__WEBPACK_IMPORTED_MODULE_0___default()({
                method: 'post',
                url: "/api/oauth/category/delete",
                data: data,
                headers: {
                  Authorization: "Bearer " + _this.$store.state.auth.token
                }
              }).then(function (res) {
                Vue.$toast.info("Categoría eliminada");

                _this.getData();
              })["catch"](function (err) {
                console.log(err);
              });
            }
          })["catch"](function (err) {});
          break;
      }
    },
    //async
    getData: function getData() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "/api/oauth/all-categorys",
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.token
        }
      }).then(function (res) {
        console.log(res);
        _this2.categorias = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    actualPage: function actualPage() {
      return this.$store.state.app.actual_page;
    },
    totaEntradas: function totaEntradas() {
      var total = 0;

      for (var i in this.categorias) {
        total += this.categorias[i].entrys.length;
      }

      return total;
    }
  },
  components: {
    ConfirmDialog: _components_utils_ConfirmDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

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

/***/ "./resources/js/pages/admin/blog/categorias/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/Index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0b15f2b7& */ "./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/blog/categorias/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b15f2b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=0b15f2b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/blog/categorias/Index.vue?vue&type=template&id=0b15f2b7& ***!
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
      _c(
        "v-card-title",
        { staticClass: "font-weight-bold px-md-10 px-3" },
        [
          _vm._v("\n        " + _vm._s(_vm.actualPage) + "\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "sky white--text text-normal rounded-xl ekevation-1",
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.createNewCategory()
                },
              },
            },
            [
              _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-plus")]),
              _vm._v("Crear nueva categoría\n        "),
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
                { staticClass: "pa-0 ma-0 col-12" },
                [
                  _c("v-card-text", { staticClass: "px-0" }, [
                    _c(
                      "span",
                      { staticClass: "title font-weight-bold subtitle-1" },
                      [_vm._v("Todas las Entradas")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "caption ma-0" }, [
                      _vm._v(
                        "Este es el feed principal del blog que muestra todas tus entradas."
                      ),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", [_vm._v("TODAS")]),
              _vm._v(" "),
              _c("v-col", [_vm._v(_vm._s(_vm.totaEntradas) + " entradas")]),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { attrs: { horizontal: "" } }),
          _vm._v(" "),
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
                      items: _vm.categorias,
                      "sort-by": "calories",
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
                                          "gray lighten-5 rounded-lg align-center justify-center d-flex",
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
                        key: "item.entrys",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("span", [_vm._v(_vm._s(item.entrys.length))]),
                          ]
                        },
                      },
                      {
                        key: "top",
                        fn: function () {
                          return [
                            _c(
                              "v-card-text",
                              {
                                staticClass: "px-0 d-flex flex-wrap",
                                attrs: { flat: "" },
                              },
                              [
                                _c(
                                  "v-toolbar-title",
                                  {
                                    staticClass:
                                      "px-0 subtitle-1 font-weight-bold",
                                  },
                                  [
                                    _c("span", [_vm._v("Categorías")]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "caption ma-0" }, [
                                      _vm._v(
                                        "Edita las categorías para configurar la URL, SEO e imagen que compartirás en las redes sociales."
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "mx-4",
                                  attrs: { inset: "", vertical: "" },
                                }),
                                _vm._v(" "),
                                _c("v-spacer"),
                              ],
                              1
                            ),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "item.actions",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-btn",
                              {
                                staticClass:
                                  "mr-2 rounded-xl text-normal white--text elevation-1",
                                attrs: { color: "sky" },
                                on: {
                                  click: function ($event) {
                                    return _vm.editItem(item)
                                  },
                                },
                              },
                              [_vm._v("editar")]
                            ),
                            _vm._v(" "),
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
                                  { staticClass: "py-0" },
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
      _vm._v(" "),
      _c("ConfirmDialog", { ref: "confirmDialog" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);