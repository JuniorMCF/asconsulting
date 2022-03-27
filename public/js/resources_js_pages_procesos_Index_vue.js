"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_procesos_Index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      title: null,
      description: [],
      beneficios: [],
      foto: null,
      cateogoria: '',
      options: {
        color: "alternative",
        width: 400,
        zIndex: 200,
        noconfirm: false
      },
      categoria: ''
    };
  },
  methods: {
    open: function open(object, categoria, options) {
      var _this = this;

      this.dialog = true;
      this.title = object.titulo;
      this.description = object.descripcion;
      this.beneficios = object.beneficios;
      this.foto = object.icon;
      this.categoria = "mailto:reactivatunegocio@asconsulting.pe?subject=" + categoria + " / " + object.titulo;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/ChatComponent.vue */ "./resources/js/components/global/ChatComponent.vue");
/* harmony import */ var _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/FooterGlobal.vue */ "./resources/js/components/global/FooterGlobal.vue");
/* harmony import */ var _components_utils_ShowDetailsDialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utils/ShowDetailsDialog.vue */ "./resources/js/components/utils/ShowDetailsDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ShowDetailsDialog: _components_utils_ShowDetailsDialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      height: 89,
      width: 89,
      procesos: [{
        icon: "/app/optimization.png",
        titulo: "Diseño y optimización de procesos",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "En este servicio determinamos el grado de madurez de los procesos de la empresa con la información que relevamos y las entrevistas que realizamos a los colaboradores clave."
        }, {
          type: "normal",
          text: "Además, diseñamos planes que  optimizan los aspectos financieros, operativos y tecnológicos de la empresa, considerando las mejores prácticas del mercado y los objetivos que necesite alcanzar la alta dirección."
        }],
        beneficios: [{
          titulo: "Proporcionamos un diagnóstico ",
          descripcion: "de los actuales procesos de la empresa"
        }, {
          titulo: "Proponemos planes de optimización del control financiero, ",
          descripcion: "diseñando y adaptándolos de manera flexible para el control de los directivos de la empresa."
        }, {
          titulo: "Proponemos controles ",
          descripcion: "y procedimientos de las cuentas por cobrar que permitan actuar de manera eficiente y anticipada ante los documentos vencidos"
        }, {
          titulo: "Diseñamos procedimientos para mejorar los controles de los activos fijos y existencias",
          descripcion: "de su empresa."
        }, {
          titulo: "Diseñamos procedimientos para la optimización de la atención a proveedores",
          descripcion: "y sus cumplimientos contractuales."
        }, {
          titulo: "Evaluación de riesgos legales",
          descripcion: "como: incumplimientos de contratos, licencias, manejo del personal."
        }]
      }, {
        icon: "/app/inventory.png",
        titulo: "Inventario de activos",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "Nuestro inventario de activo fijo tiene como base la metodología ágil, misma que nos permite evaluar diariamente el avance del trabajo comprometido, la duración de las actividades y la calidad de las mismas."
        }],
        beneficios: [{
          titulo: "Experiencia comprobada ",
          descripcion: "en el servicio de inventario de activos."
        }, {
          titulo: "Recomendación ",
          descripcion: "de nuestros clientes."
        }, {
          titulo: "Etiquetado de activos de distintos tipos, ",
          descripcion: "dependiendo la exposición al medio ambiente o materias corrosivas."
        }, {
          titulo: "Alcance",
          descripcion: "del servicio a nivel nacional."
        }, {
          titulo: "Reportes de estado en línea",
          descripcion: "del servicio para la alta gerencia y los stakeholders."
        }]
      }, {
        icon: "/app/team-management.png",
        titulo: "Programa de reducción de costos",
        subtitulo: "​",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima."
        }, {
          type: "normal",
          text: "La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento."
        }],
        beneficios: [{
          titulo: "Contar y optimizar los procesos de control",
          descripcion: "con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores."
        }, {
          titulo: "Generar líderes, con la capacidad de enseñar a su empleados",
          descripcion: "para que puedan medir sus resultados en función a los objetivos de la empresa."
        }, {
          titulo: "Capacitar e incentivar a los colaboradores",
          descripcion: "para que sean proactivos y sean capaces de realizar múltiples labores."
        }, {
          titulo: "Mejorar las actividades de los colaboradores,",
          descripcion: "en base a los resultados de cada gestión. "
        }, {
          titulo: "Implementar controles en cada proceso ",
          descripcion: "con la finalidad de minimizar los costos. "
        }, {
          titulo: "Contar con informes sobre los potenciales impactos ambientales.",
          descripcion: ""
        }]
      }, {
        icon: "/app/team-management.png",
        titulo: "Reingeniería organizacional",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima."
        }, {
          type: "normal",
          text: "La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento."
        }],
        beneficios: [{
          titulo: "Contar y optimizar los procesos de control",
          descripcion: "con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores."
        }, {
          titulo: "Generar líderes, con la capacidad de enseñar a su empleados",
          descripcion: "para que puedan medir sus resultados en función a los objetivos de la empresa."
        }, {
          titulo: "Capacitar e incentivar a los colaboradores",
          descripcion: "para que sean proactivos y sean capaces de realizar múltiples labores."
        }, {
          titulo: "Mejorar las actividades de los colaboradores,",
          descripcion: " en base a los resultados de cada gestión. "
        }, {
          titulo: "Implementar controles en cada proceso",
          descripcion: "con la finalidad de minimizar los costos."
        }, {
          titulo: "Contar con informes sobre los potenciales impactos ambientales.",
          descripcion: ""
        }]
      }, {
        icon: "/app/review.png",
        titulo: "GestiÓn de riesgos",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "En A&S Consulting proponemos el servicio de gestión de riesgos, la cual nos permite identificar, analizar y responder a factores de riesgo que nuestros clientes se enfrentan a lo largo del desarrollo de sus operaciones y proyectos futuros, los cuales pueden afectar el ciclo económico de sus objetivos trazados."
        }],
        beneficios: [{
          titulo: "Proporcionamos un diagnóstico profesional",
          descripcion: "que nos permita prevenir las posibles amenazas y eliminar las causas que se originan en cada área."
        }, {
          titulo: "Recomendación de controles",
          descripcion: " que aseguren el cumplimiento oportuno de cada una de las actividades que realicen cada área dentro de la organización."
        }, {
          titulo: "Elaboración de cronograma de actividades ",
          descripcion: "con la finalidad de determinar el cumplimiento de cada actividad. "
        }, {
          titulo: "Evaluación de riesgos internos y externos impredecibles",
          descripcion: " que afecten el desarrollo de la economía de la empresa."
        }, {
          titulo: "Evaluación de riesgos técnicos como tecnología y diseño",
          descripcion: "que afecten el desarrollo de la empresa."
        }]
      }]
    };
  },
  mounted: function mounted() {
    this.getPath();
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
    showDetails: function showDetails(obj) {
      this.$refs.showDetailsDialog.open(obj, "PROCESOS", {
        color: "primary",
        width: 750
      }).then(function (res) {
        if (res) {}
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.overlap-video[data-v-44249118] {\n    position: absolute;\n    z-index: 1;\n    height: 326px;\n    width: 100%;\n    background-color: rgba(0, 0, 102, 0.38) !important;\n}\n.container-card[data-v-44249118] {\n    background-color: #ededed !important;\n}\n.container-video[data-v-44249118] {\n    max-height: 326px;\n    overflow: hidden;\n}\n#myVideo[data-v-44249118] {\n    position: relative;\n    width: 100%;\n    transform: translateY(-25%);\n}\n.size_img[data-v-44249118] {\n    height: 89px;\n    z-index: 2;\n    width: 89px;\n}\n.content-img[data-v-44249118] {\n    position: absolute;\n    width: 100%;\n    z-index: 2;\n    top: 2.8rem;\n}\n.span_title[data-v-44249118] {\n    padding: 10px 0px 0px 0px;\n    margin: 0px !important;\n    font-size: 3rem;\n}\n@media screen and (max-width: 960px) {\n.overlap-video[data-v-44249118] {\n        position: absolute;\n        z-index: 1;\n        height: 135px;\n        width: 100%;\n        background-color: rgba(0, 0, 102, 0.38) !important;\n}\n.container-video[data-v-44249118] {\n        max-height: 135px;\n        overflow: hidden;\n}\n#myVideo[data-v-44249118] {\n        position: relative;\n        width: 100%;\n        transform: translateY(-20%);\n}\n.size_img[data-v-44249118] {\n        height: 60px;\n        z-index: 2;\n        width: 60px;\n}\n.content-img[data-v-44249118] {\n        position: absolute;\n        width: 100%;\n        z-index: 2;\n        top: 1.2rem !important;\n}\n.span_title[data-v-44249118] {\n        font-size: 1.4rem;\n        padding: 5px 0px 0px 0px;\n        margin: 0px !important;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_44249118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_44249118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_44249118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/utils/ShowDetailsDialog.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& */ "./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&");
/* harmony import */ var _ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowDetailsDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/utils/ShowDetailsDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/procesos/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/procesos/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=44249118&scoped=true& */ "./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_44249118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& */ "./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44249118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/procesos/Index.vue"
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

/***/ "./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=script&lang=js&");
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

/***/ "./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_44249118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=style&index=0&id=44249118&scoped=true&lang=css&");


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

/***/ "./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&");


/***/ }),

/***/ "./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44249118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=44249118&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        {
          staticClass: "rounded-0 elevation-0 pa-4",
          attrs: { "min-height": "550" },
        },
        [
          _c(
            "v-fab-transition",
            [
              _c(
                "v-btn",
                {
                  staticClass: "elevation-0 pa-0",
                  attrs: { fab: "", right: "", absolute: "", small: "" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      _vm.dialog = !_vm.dialog
                    },
                  },
                },
                [
                  _c(
                    "v-icon",
                    {
                      staticClass: "pa-0",
                      attrs: { "x-large": "", color: "primary" },
                    },
                    [_vm._v("mdi-close-circle-outline")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "pa-0 pt-5 pb-2 font-weight-bold" },
            [
              _c("v-img", {
                staticClass: "mx-auto",
                attrs: { src: _vm.foto, height: "68", width: "68" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "text-center" }, [
            _c(
              "p",
              {
                staticClass:
                  "\n          ma-0\n          mx-auto\n          primary--text\n          font-weight-bold\n          text-h5 text-uppercase\n          after-center_block_2\n        ",
                staticStyle: { "max-width": "350px" },
              },
              [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
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
                        {
                          staticClass:
                            "\n              col-12 col-md-6\n              pa-0\n              px-3\n              text-justify\n              alternative--text\n              d-flex\n              flex-wrap flex-row\n              align-start\n              \n            ",
                        },
                        [
                          _c(
                            "p",
                            { staticClass: "text-center mx-auto text-h5" },
                            [_vm._v("DESCRIPCIÓN")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.description, function (text, i) {
                            return _c("span", { key: "desc" + i }, [
                              text.type == "normal"
                                ? _c(
                                    "p",
                                    {
                                      staticClass:
                                        "py-2 subtitle-1 line-height_1_3 my-1",
                                    },
                                    [
                                      _vm._v(
                                        "\n                " + _vm._s(text.text)
                                      ),
                                    ]
                                  )
                                : text.type == "black"
                                ? _c(
                                    "strong",
                                    {
                                      staticClass:
                                        "py-4 subtitle-1 line-height_1_3",
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(text.text) +
                                          "\n              "
                                      ),
                                    ]
                                  )
                                : text.type == "list"
                                ? _c(
                                    "ol",
                                    {
                                      staticClass:
                                        "py-4 subtitle-1 line-height_1_3",
                                    },
                                    _vm._l(
                                      text.elements,
                                      function (element, i) {
                                        return _c("li", { key: "el" + i }, [
                                          _c("span", [_vm._v(_vm._s(element))]),
                                        ])
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e(),
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            {
                              staticClass: "align-end py-4 mt-auto",
                              staticStyle: { width: "100%" },
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass:
                                    "white--text font-weight-bold px-4 rounded-xl mx-auto",
                                  attrs: {
                                    color: "primary",
                                    link: "",
                                    href: _vm.categoria,
                                  },
                                },
                                [_vm._v("SOLICITAR COTIZACIÓN")]
                              ),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass:
                            "\n              col-12 col-md-6\n              pa-0\n              px-3\n              text-justify\n              alternative--text\n              d-flex\n              flex-wrap flex-row\n              align-content-start\n\n            ",
                        },
                        [
                          _c(
                            "p",
                            { staticClass: "text-center mx-auto text-h5" },
                            [_vm._v("BENEFICIOS")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.beneficios, function (text, i) {
                            return _c(
                              "span",
                              {
                                key: "benef" + i,
                                staticClass: "line-height_1",
                              },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "subtitle-1 py-1 pl-4" },
                                  [
                                    _c(
                                      "li",
                                      { staticClass: "line-height_1_3" },
                                      [
                                        _c("strong", [
                                          _vm._v(_vm._s(text.titulo)),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", {}, [
                                          _vm._v(_vm._s(text.descripcion)),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            )
                          }),
                        ],
                        2
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/procesos/Index.vue?vue&type=template&id=44249118&scoped=true& ***!
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
      _c("v-row", { staticClass: "pa-0 ma-0 content-wrap-2" }, [
        _c("div", { staticClass: "overlap-video content-wrap-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 pa-0 container-video" }, [
          _c(
            "video",
            {
              attrs: { autoplay: "", muted: "", loop: "", id: "myVideo" },
              domProps: { muted: true },
            },
            [
              _c("source", {
                attrs: { src: "/app/procesos.mp4", type: "video/mp4" },
              }),
            ]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-img content-wrap-2 text-center" },
          [
            _c("v-img", {
              staticClass: "mx-auto size_img",
              attrs: { src: "/app/skill.PNG" },
            }),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "white--text font-weight-bold span_title" },
              [_vm._v("Procesos")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-2 mx-auto container-bandwith" },
        [
          _c(
            "v-col",
            { staticClass: "col-12 pa-0 ma-0" },
            [_c("v-img", { attrs: { src: "/app/bandwith.PNG" } })],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-0 ma-0 content-wrap-0 mx-auto" },
        _vm._l(_vm.procesos, function (tec, i) {
          return _c(
            "v-col",
            { key: "tec" + i, staticClass: "col-12 col-md-4 pa-1" },
            [
              _c(
                "v-card",
                {
                  staticClass: "container-card elevation-0 pa-10",
                  attrs: { height: "350" },
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "pa-0", staticStyle: { height: "200px" } },
                    [
                      _c("v-img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: tec.icon,
                          height: _vm.height,
                          width: _vm.width,
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "h5",
                        {
                          staticClass:
                            "line-height_1 text-h6 font-weight-bold text-uppercase text-center primary--text py-3",
                        },
                        [_vm._v(_vm._s(tec.titulo))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "ma-0 text-center alternative--text" },
                        [_vm._v(_vm._s(tec.subtitulo))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { staticClass: "text-center" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "rounded-xl white--text font-weight-bold px-10",
                          attrs: { large: "", color: "primary" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.showDetails(tec)
                            },
                          },
                        },
                        [_vm._v("ver más")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                    ],
                    1
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
      _c("ShowDetailsDialog", { ref: "showDetailsDialog" }),
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