(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_contacto_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/ChatComponent.vue */ "./resources/js/components/global/ChatComponent.vue");
/* harmony import */ var _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/FooterGlobal.vue */ "./resources/js/components/global/FooterGlobal.vue");
/* harmony import */ var _map_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map_style */ "./resources/js/map_style.js");
/* harmony import */ var _map_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var x5_gmaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! x5-gmaps */ "./node_modules/x5-gmaps/dist/x5-gmaps.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    gmapsMap: x5_gmaps__WEBPACK_IMPORTED_MODULE_3__.gmapsMap,
    gmapsMarker: x5_gmaps__WEBPACK_IMPORTED_MODULE_3__.gmapsMarker,
    gmapsInfoWindow: x5_gmaps__WEBPACK_IMPORTED_MODULE_3__.gmapsInfoWindow
  },
  data: function data() {
    return {
      loading: false,
      error_email: false,
      contacto: {
        nombres: "",
        emai: "",
        telefono: "",
        mensaje: ""
      },
      lat_as: -12.12856,
      lng_as: -76.9971846,
      mapOptions: {
        fullscreenControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        disableDefaultUI: true,
        zoomControl: false,
        title: "A&S Consulting Group",
        center: {
          lat: -12.12856,
          lng: -76.9971846
        },
        zoom: 17,
        gestureHandling: "greedy",
        styles: (_map_style__WEBPACK_IMPORTED_MODULE_2___default().style_map)
      },
      markerOptions: {
        draggable: false,
        icon: "/app/location_icon.png",
        animation: 0
      },
      empresa: "A&S Consulting Group.",
      address: "Av. Alfredo Benavides 3695. Santiago de Surco. Lima, Perú."
    };
  },
  mounted: function mounted() {
    this.getPath();
    this.$store.dispatch("app/changeTitlePage", "Contacto A&S");
    document.title = this.$store.state.app.title_page;
    /**for visite */

    this.$store.dispatch("app/openPage", {
      page: window.location.pathname,
      link: window.location.host + window.location.pathname
    });
  },
  destroyed: function destroyed() {
    this.$store.dispatch("app/closePage", {
      visita_id: this.$store.state.app.visita_id
    });
  },
  methods: {
    getPath: function getPath() {
      var path = window.location.pathname + window.location.search;
      this.$store.dispatch("app/setPath", path);
    },
    OnSubmitContacto: function OnSubmitContacto() {
      var _this = this;

      if (this.contacto.nombres != "" && this.contacto.email != "" && this.contacto.telefono != "" && this.contacto.mensaje != "") {
        this.loading = true;
        axios.post("/api/contacto", this.contacto).then(function (res) {
          _this.loading = false;
          _this.error_email = false;
          _this.contacto = {
            nombres: "",
            emai: "",
            telefono: "",
            mensaje: ""
          }, Vue.$toast.success("Se guardaron los cambios");
        })["catch"](function (err) {
          _this.error_email = true;
          _this.loading = false;
          Vue.$toast.error("email inválido");
        });
        return;
      }

      Vue.$toast.warning("Llene todos los campos del formulario");
    }
  }
});

/***/ }),

/***/ "./resources/js/map_style.js":
/*!***********************************!*\
  !*** ./resources/js/map_style.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = {
  style_map: [{
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{
      color: "#d6e2e6"
    }]
  }, {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{
      color: "#cfd4d5"
    }]
  }, {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#7492a8"
    }]
  }, {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [{
      lightness: 25
    }]
  }, {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [{
      color: "#dde2e3"
    }]
  }, {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [{
      color: "#cfd4d5"
    }]
  }, {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{
      color: "#dde2e3"
    }]
  }, {
    featureType: "landscape.natural",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#7492a8"
    }]
  }, {
    featureType: "landscape.natural.terrain",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [{
      color: "#dde2e3"
    }]
  }, {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [{
      saturation: -100
    }]
  }, {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#588ca4"
    }]
  }, {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{
      color: "#a9de83"
    }]
  }, {
    featureType: "poi.park",
    elementType: "geometry.stroke",
    stylers: [{
      color: "#bae6a1"
    }]
  }, {
    featureType: "poi.sports_complex",
    elementType: "geometry.fill",
    stylers: [{
      color: "#c6e8b3"
    }]
  }, {
    featureType: "poi.sports_complex",
    elementType: "geometry.stroke",
    stylers: [{
      color: "#bae6a1"
    }]
  }, {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{
      saturation: -45
    }, {
      lightness: 10
    }, {
      visibility: "on"
    }]
  }, {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#41626b"
    }]
  }, {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{
      color: "#ffffff"
    }]
  }, {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{
      color: "#c1d1d6"
    }]
  }, {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{
      color: "#a6b5bb"
    }]
  }, {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [{
      visibility: "on"
    }]
  }, {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [{
      color: "#9fb6bd"
    }]
  }, {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [{
      color: "#ffffff"
    }]
  }, {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{
      saturation: -70
    }]
  }, {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [{
      color: "#b4cbd4"
    }]
  }, {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#588ca4"
    }]
  }, {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#008cb5"
    }]
  }, {
    featureType: "transit.station.airport",
    elementType: "geometry.fill",
    stylers: [{
      saturation: -100
    }, {
      lightness: -5
    }]
  }, {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{
      color: "#a6cbe3"
    }]
  }] // Estilos del mapa

};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-map {\n    height: 350px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./resources/js/pages/contacto/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/contacto/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=69c5b39b& */ "./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/contacto/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=template&id=44aae92f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&");


/***/ }),

/***/ "./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_69c5b39b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=69c5b39b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/contacto/Index.vue?vue&type=template&id=69c5b39b& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
                [_vm._v("Ponte en")]
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
                [_vm._v("contacto")]
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
            { staticClass: "col-12 col-md-5 pa-0" },
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
                        { staticClass: "col-12" },
                        [
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Nombres completos",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.contacto.nombres,
                              callback: function ($$v) {
                                _vm.$set(_vm.contacto, "nombres", $$v)
                              },
                              expression: "contacto.nombres",
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
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Email",
                              error: _vm.error_email,
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.contacto.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.contacto, "email", $$v)
                              },
                              expression: "contacto.email",
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
                          _c("v-text-field", {
                            staticClass: "rounded-0",
                            attrs: {
                              color: "primary",
                              label: "Teléfono",
                              outlined: "",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.contacto.telefono,
                              callback: function ($$v) {
                                _vm.$set(_vm.contacto, "telefono", $$v)
                              },
                              expression: "contacto.telefono",
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
                          _c("v-textarea", {
                            staticClass: "rounded-0",
                            attrs: {
                              outlined: "",
                              height: "100",
                              label: "Agrega un mensaje",
                              "hide-details": "auto",
                            },
                            model: {
                              value: _vm.contacto.mensaje,
                              callback: function ($$v) {
                                _vm.$set(_vm.contacto, "mensaje", $$v)
                              },
                              expression: "contacto.mensaje",
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
                                loading: _vm.loading,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.OnSubmitContacto()
                                },
                              },
                            },
                            [_vm._v("Enviar")]
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
            "v-col",
            { staticClass: "col-12 col-md-7" },
            [
              _c(
                "v-container",
                { staticClass: "pa-0 ma-0" },
                [
                  _c(
                    "v-row",
                    { staticClass: "pa-0 ma-0 align-center justify-center" },
                    [
                      _c("v-col", { staticClass: "col-5 col-md-4" }, [
                        _c(
                          "h2",
                          { staticClass: "font-weight-bold primary--text" },
                          [_vm._v("¡VISÍTANOS!")]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-7 col-md-8 text-justify" },
                        [
                          _c(
                            "span",
                            { staticClass: "as-p_normal primary--text" },
                            [
                              _c(
                                "v-icon",
                                { attrs: { color: "primary", left: "" } },
                                [_vm._v("mdi-map-marker")]
                              ),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.address) +
                                  "\n                        "
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-col", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { staticClass: "container-map" },
                          [
                            _c(
                              "gmaps-map",
                              { attrs: { options: _vm.mapOptions } },
                              [
                                _c("gmaps-marker", {
                                  attrs: {
                                    options: _vm.markerOptions,
                                    position: {
                                      lat: _vm.lat_as,
                                      lng: _vm.lng_as,
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
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