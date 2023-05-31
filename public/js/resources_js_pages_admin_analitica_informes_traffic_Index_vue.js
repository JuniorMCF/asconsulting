"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_analitica_informes_traffic_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_google_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-google-charts */ "./node_modules/vue-google-charts/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    GChart: vue_google_charts__WEBPACK_IMPORTED_MODULE_0__.GChart
  },
  data: function data() {
    return {
      pages: [],
      pageOptions: {
        title: 'Páginas más visitadas',
        height: 450
      },
      posts: [],
      postOptions: {
        title: 'Posts más vistos',
        height: 450
      },
      countrys: [],
      countryOptions: {
        title: 'Paises desde donde nos visitan',
        height: 450
      },
      countrySettings: {
        packages: ['geochart']
      }
    };
  },
  mounted: function mounted() {
    this.setActualPage();
    this.getData();
  },
  methods: {
    setActualPage: function setActualPage() {
      this.$store.dispatch("app/saveActualPage", "Resumen del tráfico");
    },
    getData: function getData() {
      var _this = this;
      axios({
        method: "get",
        url: "/api/oauth/statistics/all",
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.token
        }
      })
      //.post("/api/oauth/posts/pub", headers)
      .then(function (res) {
        console.log(res);
        var header_visitas = ["Page", "Popularidad"];
        _this.pages.push(header_visitas);
        var header_posts = ["Post", "Cantidad de visitas"];
        _this.posts.push(header_posts);
        var header_countrys = ["Country", "Popularidad"];
        _this.countrys.push(header_countrys);
        var _res$data = res.data,
          visitas = _res$data.visitas,
          posts = _res$data.posts,
          countrys = _res$data.countrys;
        for (var i = 0; i < visitas.length; i++) {
          var element = [visitas[i].page == "/" ? "/home" : visitas[i].page, visitas[i].total];
          _this.pages.push(element);
        }
        for (var _i = 0; _i < posts.length; _i++) {
          var _element = [posts[_i].titulo, visitas[_i].total];
          _this.posts.push(_element);
        }
        for (var _i2 = 0; _i2 < countrys.length; _i2++) {
          var _element2 = [countrys[_i2].country, countrys[_i2].total];
          _this.countrys.push(_element2);
        }
        console.log(_this.countrys);
      })["catch"](function (err) {
        console.log(err.response);
        //Vue.$toast.error("");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-card-title", {
    staticClass: "font-weight-bold px-md-10 px-3"
  }, [_vm._v(_vm._s(_vm.actualPage))]), _vm._v(" "), _c("v-container", {
    staticClass: "pa-0 ma-0 px-md-10 px-3",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-col", {
    staticClass: "col-12 pa-0 ma-0"
  }, [_c("GChart", {
    attrs: {
      type: "GeoChart",
      data: _vm.countrys,
      options: _vm.countryOptions,
      settings: _vm.countrySettings
    }
  })], 1)], 1), _vm._v(" "), _c("v-divider", {
    attrs: {
      horizontal: ""
    }
  }), _vm._v(" "), _c("v-row", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 ma-0"
  }, [_c("GChart", {
    attrs: {
      type: "PieChart",
      data: _vm.pages,
      options: _vm.pageOptions
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 ma-0"
  }, [_c("GChart", {
    attrs: {
      type: "BarChart",
      data: _vm.posts,
      options: _vm.postOptions
    }
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/analitica_informes/traffic/Index.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/analitica_informes/traffic/Index.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=78dfc1e8& */ "./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/analitica_informes/traffic/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_78dfc1e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=78dfc1e8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/analitica_informes/traffic/Index.vue?vue&type=template&id=78dfc1e8&");


/***/ })

}]);