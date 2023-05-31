"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_finanzas_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      wame: "https://wa.me/51926302115"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      heightLogo: 116,
      widthLogo: 112,
      phone_contact: "926 302 115",
      phone_send: "tel:+51926302115",
      wame: "https://wa.me/51926302115",
      email: "reactivatunegocio@asconsulting.pe",
      address: "Av. Alfredo Benavides 3695. Santiago de Surco. Lima, Perú."
    };
  },
  methods: {
    openEmail: function openEmail() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var shareData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              shareData = {
                title: "A&S Consulting Group",
                text: "Solicita tu asesoría",
                url: _this.email
              };
              _context.prev = 1;
              _context.next = 4;
              return navigator.share(shareData);
            case 4:
              console.log("OpenBrowserEmail");
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 7]]);
      }))();
    },
    goToLocation: function goToLocation() {
      this.$router.push({
        name: "contacto"
      });
    },
    goToWork: function goToWork() {
      this.$router.push({
        name: "trabaja-con-nosotros"
      });
    }
  },
  computed: {
    yearActual: function yearActual() {
      var now = new Date();
      return now.getFullYear();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      title: null,
      description: [],
      beneficios: [],
      incluye: [],
      foto: null,
      cateogoria: "",
      options: {
        color: "alternative",
        width: 400,
        zIndex: 200,
        noconfirm: false
      },
      categoria: ""
    };
  },
  methods: {
    open: function open(object, categoria, options) {
      var _this = this;
      this.dialog = true;
      this.title = object.titulo;
      this.description = object.descripcion;
      this.beneficios = object.beneficios;
      this.incluye = object.incluye;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/ChatComponent.vue */ "./resources/js/components/global/ChatComponent.vue");
/* harmony import */ var _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/FooterGlobal.vue */ "./resources/js/components/global/FooterGlobal.vue");
/* harmony import */ var _components_utils_ShowDetailsDialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utils/ShowDetailsDialog.vue */ "./resources/js/components/utils/ShowDetailsDialog.vue");
/* harmony import */ var _components_utils_ShowDetailsDialog2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/ShowDetailsDialog2.vue */ "./resources/js/components/utils/ShowDetailsDialog2.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ChatComponent: _components_global_ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterGlobal: _components_global_FooterGlobal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ShowDetailsDialog: _components_utils_ShowDetailsDialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ShowDetailsDialog2: _components_utils_ShowDetailsDialog2_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      height: 89,
      width: 89,
      tecnologias: [{
        icon: "/app/outsourcing_contable.png",
        titulo: "Outsourcing contable",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "En AS Consulting Group, lo apoyamos a resolver su problema mediante nuestros servicios de Outsourcing Contable, garantizando una adecuada solución a su problemática actual."
        }],
        beneficios: [{
          titulo: "Minimiza errores.",
          descripcion: ""
        }, {
          titulo: "Permite reducir y controlar ",
          descripcion: "los costos operativos."
        }, {
          titulo: "Generación de información",
          descripcion: "oportuna."
        }, {
          titulo: "Asesoría Especializada.",
          descripcion: ""
        }],
        incluye: ["Definición de políticas contables. ", "Registro y procesamiento de transacciones.", "Análisis de cuentas contables y reportes gerenciales. ", "Elaboración de Estados Financieros e indicadores.", "Asesoría permanente, con personal altamente calificado. ", "Elaboración de declaraciones mensuales IGV Renta-Plame.", "Elaboración y declaración de libros electrónicos.", "Impresión y declaración de libros contables.", "Trámites ante la Administración Tributaria. ", "Generación de Indicadores Financieros."]
      }, {
        icon: "/app/outsourcing.png",
        titulo: "Outsourcing de planillas",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "Servicio que brinda soporte técnico computacional de primer nivel (telefónico y remoto) y segundo nivel (presencial y correctivo) para empresas."
        }],
        beneficios: [{
          titulo: null,
          descripcion: "Reducción de costos (horas de trabajo, insumos, equipos, capacitación, licenciamiento)."
        }, {
          titulo: null,
          descripcion: "Gestión por indicadores de servicio."
        }, {
          titulo: null,
          descripcion: "Focalización de la empresa en su actividad principal externalizando un servicio técnico complementario."
        }, {
          titulo: null,
          descripcion: "Mejora de la calidad del servicio técnico pues somos expertos en la materia."
        }],
        incluye: ["Proceso y cálculo de remuneraciones y tributos.", "Elaboración y declaración de AFP Net y PLAME.", "Mantenimiento de T-Registro.", "Elaboración de reportes a entidades reguladoras.", "Liquidación de CTS y  beneficios sociales."]
      }, {
        icon: "/app/megaphone.png",
        titulo: "Auditorías especializadas",
        subtitulo: "​",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "La experiencia de nuestro staff de gerentes de proyecto y scrum masters, asegura un adecuado control al alcance, tiempo y presupuesto asignado (proyectos tradicionales) así como facilitar y brindar soporte metodológico al equipo (proyectos ágiles) para que cumpla el objetivo del sprint. "
        }],
        beneficios: [{
          titulo: "Experiencia de nuestros gerentes",
          descripcion: "de proyecto / scrum masters en proyectos grandes de tecnología."
        }, {
          titulo: "Certificación de nuestros gerentes",
          descripcion: "de proyecto / scrum masters."
        }, {
          titulo: "Aumento de la capacidad",
          descripcion: "instalada para el desarrollo de proyectos de TI."
        }, {
          titulo: "Reportes de estado en línea",
          descripcion: "del proyecto para la alta gerencia y los stakeholders."
        }],
        incluye: []
      }, {
        icon: "/app/line-chart.png",
        titulo: "Reestructuración financiera",
        subtitulo: "​",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "Servicio que permite dar vida a los datos de las empresas a través de los paneles e informes dinámicos que desarrollamos. Nuestros especialistas trabajan la conexión de distintos orígenes de datos, la preparación de datos simplificada y la generación dinámica de análisis ad hoc."
        }],
        beneficios: [{
          titulo: "Permite extraer información importante",
          descripcion: "para analizar una amplia gama de escenarios (ventas, clientes, inventarios, procesos internos)."
        }, {
          titulo: "Toma de decisiones empresariales",
          descripcion: "con base en la información en línea presentada."
        }, {
          titulo: "Optimizar, transformar y combinar datos ",
          descripcion: "de múltiples orígenes."
        }, {
          titulo: "Permite crear informes sorprendentes",
          descripcion: "con visualizaciones de datos interactivas e informes personalizados."
        }, {
          titulo: "Visualización de los tableros",
          descripcion: "desde PC, Laptop, Tablet, teléfono móvil (multiplataforma)."
        }],
        incluye: []
      }, {
        icon: "/app/meeting.png",
        titulo: "Consultoría tributaria y legal",
        subtitulo: "",
        button: "Ver más",
        descripcion: [{
          type: "normal",
          text: "Servicio de administración y control integral de los proveedores estratégicos con los que cuenta la empresa. Este servicio incluye a gestores de campo para el control de: niveles de servicio, consumos realizados, cumplimiento de las cláusulas del contrato y los riesgos de operación."
        }],
        beneficios: [{
          titulo: "Evitar la fuga de valor",
          descripcion: "de los contratos vigentes. "
        }, {
          titulo: "Asegurar el cumplimiento de las cláusulas",
          descripcion: " de los contratos."
        }, {
          titulo: "Reducción de costos ",
          descripcion: "(horas de trabajo, insumos, equipos, capacitación, licenciamiento)."
        }, {
          titulo: "Gestión de los contratos",
          descripcion: "por indicadores de servicio."
        }, {
          titulo: "Mejora de la calidad",
          descripcion: "de los servicios."
        }],
        incluye: []
      }]
    };
  },
  mounted: function mounted() {
    this.getPath();
    this.$store.dispatch("app/changeTitlePage", "Finanzas y Contabilidad A&S");
    document.title = this.$store.state.app.title_page;
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
      if (obj.incluye.length > 0) {
        this.$refs.showDetailsDialog2.open(obj, "FINANZAS Y CONTABILIDAD", {
          color: "primary",
          width: 750
        }).then(function (res) {
          if (res) {}
        });
        return;
      }
      this.$refs.showDetailsDialog.open(obj, "FINANZAS Y CONTABILIDAD", {
        color: "primary",
        width: 750
      }).then(function (res) {
        if (res) {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-btn", {
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
      bottom: ""
    }
  }, [_c("v-icon", {
    attrs: {
      large: "",
      dark: ""
    }
  }, [_vm._v("mdi-whatsapp ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-row", {
    staticClass: "grey darken-4 pa-0 ma-0 mx-auto justify-center align-start py-10"
  }, [_c("v-col", {
    staticClass: "col-12 col-md-2 col-xl-2 d-flex flex-wrap justify-center align-center"
  }, [_c("div", {
    staticClass: "footer-logo"
  }, [_c("v-img", {
    staticClass: "footer-logo",
    attrs: {
      src: "/app/white_logo.png",
      contain: ""
    }
  })], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-3 col-xl-3 d-flex flex-column justify-center align-start"
  }, [_c("p", {
    staticClass: "white--text font-weight-bold px-4"
  }, [_vm._v("CONTACTO")]), _vm._v(" "), _c("a", {
    staticClass: "white--text px-4",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.goToLocation();
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: "",
      color: "white",
      left: ""
    }
  }, [_vm._v("mdi-map-marker")]), _vm._v(" " + _vm._s(_vm.address) + "\n            ")], 1), _vm._v(" "), _c("a", {
    staticClass: "white--text px-4",
    attrs: {
      href: _vm.phone_send
    }
  }, [_c("v-icon", {
    attrs: {
      small: "",
      color: "white",
      left: ""
    }
  }, [_vm._v("mdi-phone")]), _vm._v(" " + _vm._s(_vm.phone_contact) + "\n            ")], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-3 col-xl-3 d-flex flex-column justify-center align-start"
  }, [_c("p", {
    staticClass: "white--text font-weight-bold px-4"
  }, [_vm._v("LEGAL")]), _vm._v(" "), _c("a", {
    staticClass: "white--text px-4"
  }, [_vm._v(" Términos y condiciones ")]), _vm._v(" "), _c("a", {
    staticClass: "white--text px-4"
  }, [_vm._v(" Privacidad ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-2 col-xl-2 d-flex flex-column justify-center align-start"
  }, [_c("p", {
    staticClass: "white--text font-weight-bold px-4"
  }, [_vm._v("TRABAJA CON NOSOTROS")]), _vm._v(" "), _c("a", {
    staticClass: "white--text px-4",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.goToWork();
      }
    }
  }, [_vm._v(" Solicitud de admisión ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-2 col-xl-2 d-flex flex-column justify-center align-start"
  }, [_c("p", {
    staticClass: "white--text font-weight-bold px-4"
  }, [_vm._v("SÍGUENOS")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap px-4"
  }, [_c("v-btn", {
    staticClass: "elevation-0",
    attrs: {
      fab: "",
      small: "",
      text: "",
      color: "primary",
      href: "https://www.facebook.com/AS-Consulting-Group-141818089928155",
      target: "_blank"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-facebook")])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "elevation-0",
    attrs: {
      fab: "",
      small: "",
      text: "",
      color: "primary",
      href: "https://www.instagram.com/asconsultinggroup/",
      target: "_blank"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-instagram")])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "elevation-0",
    attrs: {
      fab: "",
      small: "",
      text: "",
      color: "primary",
      href: "https://www.linkedin.com/company/as.consulting/",
      target: "_blank"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-linkedin")])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "elevation-0",
    attrs: {
      fab: "",
      small: "",
      text: "",
      color: "primary",
      href: "https://www.youtube.com/channel/UCLGe4u_VDbkoJWE2LkMni9w/featured?view_as=subscriber",
      target: "_blank"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-youtube")])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "elevation-0",
    attrs: {
      fab: "",
      small: "",
      text: "",
      color: "primary",
      href: "https://twitter.com/pymedigitalAS",
      target: "_blank"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-twitter")])], 1)], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-dialog", {
    style: {
      zIndex: _vm.options.zIndex
    },
    attrs: {
      opacity: "0.3",
      "max-width": _vm.options.width,
      persistent: ""
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancel.apply(null, arguments);
      }
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c("v-card", {
    staticClass: "rounded-0 elevation-0 pa-4",
    attrs: {
      "min-height": "550"
    }
  }, [_c("v-fab-transition", [_c("v-btn", {
    staticClass: "elevation-0 pa-0",
    attrs: {
      fab: "",
      right: "",
      absolute: "",
      small: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.dialog = !_vm.dialog;
      }
    }
  }, [_c("v-icon", {
    staticClass: "pa-0",
    attrs: {
      "x-large": "",
      color: "primary"
    }
  }, [_vm._v("mdi-close-circle-outline")])], 1)], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-0 pt-5 pb-2 font-weight-bold"
  }, [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      src: _vm.foto,
      height: "68",
      width: "68"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_c("p", {
    staticClass: "ma-0 mx-auto primary--text font-weight-bold text-h5 text-uppercase after-center_block_2",
    staticStyle: {
      "max-width": "350px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-row", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 px-3 text-justify alternative--text d-flex flex-wrap flex-row align-start"
  }, [_c("p", {
    staticClass: "text-center mx-auto text-h5"
  }, [_vm._v("DESCRIPCIÓN")]), _vm._v(" "), _vm._l(_vm.description, function (text, i) {
    return _c("span", {
      key: "desc" + i
    }, [text.type == "normal" ? _c("p", {
      staticClass: "py-2 subtitle-1 line-height_1_3 my-1"
    }, [_vm._v("\n                " + _vm._s(text.text))]) : text.type == "black" ? _c("strong", {
      staticClass: "py-4 subtitle-1 line-height_1_3"
    }, [_vm._v("\n                " + _vm._s(text.text) + "\n              ")]) : text.type == "list" ? _c("ol", {
      staticClass: "py-4 subtitle-1 line-height_1_3"
    }, _vm._l(text.elements, function (element, i) {
      return _c("li", {
        key: "el" + i
      }, [_c("span", [_vm._v(_vm._s(element))])]);
    }), 0) : _vm._e()]);
  }), _vm._v(" "), _c("v-card-actions", {
    staticClass: "align-end py-4 mt-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("v-btn", {
    staticClass: "white--text font-weight-bold px-4 rounded-xl mx-auto",
    attrs: {
      color: "primary",
      link: "",
      href: _vm.categoria
    }
  }, [_vm._v("SOLICITAR COTIZACIÓN")])], 1)], 2), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 px-3 text-justify alternative--text d-flex flex-wrap flex-row align-content-start"
  }, [_c("p", {
    staticClass: "text-center mx-auto text-h5"
  }, [_vm._v("BENEFICIOS")]), _vm._v(" "), _vm._l(_vm.beneficios, function (text, i) {
    return _c("span", {
      key: "benef" + i,
      staticClass: "line-height_1"
    }, [_c("ul", {
      staticClass: "subtitle-1 py-1 pl-4"
    }, [_c("li", {
      staticClass: "line-height_1_3"
    }, [_c("strong", [_vm._v(_vm._s(text.titulo))]), _vm._v(" "), _c("span", {}, [_vm._v(_vm._s(text.descripcion))])])])]);
  })], 2)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-dialog", {
    style: {
      zIndex: _vm.options.zIndex
    },
    attrs: {
      opacity: "0.3",
      "max-width": _vm.options.width,
      persistent: ""
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancel.apply(null, arguments);
      }
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c("v-card", {
    staticClass: "rounded-0 elevation-0 pa-4",
    attrs: {
      "min-height": "550"
    }
  }, [_c("v-fab-transition", [_c("v-btn", {
    staticClass: "elevation-0 pa-0",
    attrs: {
      fab: "",
      right: "",
      absolute: "",
      small: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.dialog = !_vm.dialog;
      }
    }
  }, [_c("v-icon", {
    staticClass: "pa-0",
    attrs: {
      "x-large": "",
      color: "primary"
    }
  }, [_vm._v("mdi-close-circle-outline")])], 1)], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-0 pt-5 pb-2 font-weight-bold"
  }, [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      src: _vm.foto,
      height: "68",
      width: "68"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_c("p", {
    staticClass: "ma-0 mx-auto primary--text font-weight-bold text-h5 text-uppercase after-center_block_2",
    staticStyle: {
      "max-width": "350px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-row", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 px-3 text-justify alternative--text d-flex flex-wrap flex-row align-start"
  }, [_c("p", {
    staticClass: "text-center mx-auto text-h5"
  }, [_vm._v("DESCRIPCIÓN")]), _vm._v(" "), _vm._l(_vm.description, function (text, i) {
    return _c("span", {
      key: "desc" + i
    }, [text.type == "normal" ? _c("span", {
      staticClass: "py-4 subtitle-1 line-height_1_3"
    }, [_vm._v("\n                " + _vm._s(text.text))]) : text.type == "black" ? _c("strong", {
      staticClass: "py-4 subtitle-1 line-height_1_3"
    }, [_vm._v("\n                " + _vm._s(text.text) + "\n              ")]) : text.type == "list" ? _c("ol", {
      staticClass: "py-4 subtitle-1 line-height_1_3"
    }, _vm._l(text.elements, function (element, i) {
      return _c("li", {
        key: "el" + i
      }, [_c("span", [_vm._v(_vm._s(element))])]);
    }), 0) : _vm._e()]);
  }), _vm._v(" "), _c("v-card-text", [_c("p", {
    staticClass: "text-center mx-auto text-h5 mb-0"
  }, [_vm._v("BENEFICIOS")])]), _vm._v(" "), _vm._l(_vm.beneficios, function (text, i) {
    return _c("span", {
      key: "benef" + i,
      staticClass: "line-height_1"
    }, [_c("ul", {
      staticClass: "subtitle-1 py-0 pl-4"
    }, [_c("li", {
      staticClass: "line-height_1_3"
    }, [_c("strong", [_vm._v(_vm._s(text.titulo))]), _vm._v(" "), _c("span", {}, [_vm._v(_vm._s(text.descripcion))])])])]);
  })], 2), _vm._v(" "), _c("v-col", {
    staticClass: "col-12 col-md-6 pa-0 px-3 text-justify alternative--text d-flex flex-wrap flex-row align-content-start"
  }, [_c("p", {
    staticClass: "text-center mx-auto text-h5"
  }, [_vm._v("INCLUYE")]), _vm._v(" "), _vm._l(_vm.incluye, function (text, i) {
    return _c("span", {
      key: "incluye" + i,
      staticClass: "line-height_1"
    }, [_c("ul", {
      staticClass: "subtitle-1 py-0 pl-4"
    }, [_c("li", {
      staticClass: "line-height_1_3"
    }, [_c("span", {}, [_vm._v(_vm._s(text))])])])]);
  })], 2), _vm._v(" "), _c("v-col", {
    staticClass: "col-12"
  }, [_c("v-card-actions", {
    staticClass: "align-end py-4 mt-auto",
    staticStyle: {
      width: "100%"
    }
  }, [_c("v-btn", {
    staticClass: "white--text font-weight-bold px-4 rounded-xl mx-auto",
    attrs: {
      color: "primary",
      link: "",
      href: _vm.categoria
    }
  }, [_vm._v("SOLICITAR COTIZACIÓN")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-container", {
    staticClass: "pa-0 mx-auto pt-5 py-16",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "pa-0 ma-0"
  }, [_c("div", {
    staticClass: "overlap-video"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12 pa-0 container-video"
  }, [_c("video", {
    attrs: {
      autoplay: "",
      muted: "",
      loop: "",
      id: "myVideo"
    },
    domProps: {
      muted: true
    }
  }, [_c("source", {
    attrs: {
      src: "/app/finanzas.mp4",
      type: "video/mp4"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "content-img text-center"
  }, [_c("v-img", {
    staticClass: "mx-auto size_img",
    attrs: {
      src: "/app/statistics.png"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "white--text font-weight-bold span_title line-height_1"
  }, [_vm._v("\n                    Finanzas y\n                    "), _c("br"), _vm._v("Contabilidad\n                ")])], 1)]), _vm._v(" "), _c("v-row", {
    staticClass: "pa-0 ma-0 justify-center content-wrap-0 mx-auto py-16"
  }, _vm._l(_vm.tecnologias, function (tec, i) {
    return _c("v-col", {
      key: "tec" + i,
      staticClass: "col-12 col-md-4 pa-1"
    }, [_c("v-card", {
      staticClass: "container-card elevation-0 pa-10",
      attrs: {
        height: "350"
      }
    }, [_c("v-card-text", {
      staticClass: "pa-0",
      staticStyle: {
        height: "200px"
      }
    }, [_c("v-img", {
      staticClass: "mx-auto",
      attrs: {
        src: tec.icon,
        height: _vm.height,
        width: _vm.width
      }
    }), _vm._v(" "), _c("h5", {
      staticClass: "line-height_1 text-h6 font-weight-bold text-uppercase text-center primary--text py-3"
    }, [_vm._v("\n                            " + _vm._s(tec.titulo) + "\n                        ")]), _vm._v(" "), _c("p", {
      staticClass: "ma-0 text-center alternative--text"
    }, [_vm._v("\n                            " + _vm._s(tec.subtitulo) + "\n                        ")])], 1), _vm._v(" "), _c("v-card-actions", {
      staticClass: "text-center"
    }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
      staticClass: "rounded-xl white--text font-weight-bold px-10",
      attrs: {
        large: "",
        color: "primary"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showDetails(tec);
        }
      }
    }, [_vm._v("ver más")]), _vm._v(" "), _c("v-spacer")], 1)], 1)], 1);
  }), 1)], 1), _vm._v(" "), _c("FooterGlobal"), _vm._v(" "), _c("ShowDetailsDialog2", {
    ref: "showDetailsDialog2"
  }), _vm._v(" "), _c("ShowDetailsDialog", {
    ref: "showDetailsDialog"
  }), _vm._v(" "), _c("ChatComponent")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.as-footer_text {\n    font-size: 0.8rem;\n}\n.footer-logo {\n    height: 116px !important;\n    width: 112px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.overlap-video[data-v-60b8ca80] {\n    position: absolute;\n    z-index: 1;\n    height: 326px;\n    width: 100%;\n    background-color: rgba(0, 0, 102, 0.38) !important;\n}\n.container-card[data-v-60b8ca80] {\n    background-color: #e3e2e2 !important;\n}\n.container-video[data-v-60b8ca80] {\n    max-height: 326px;\n    overflow: hidden;\n}\n#myVideo[data-v-60b8ca80] {\n    position: relative;\n    width: 100%;\n    transform: translateY(-25%);\n}\n.size_img[data-v-60b8ca80] {\n    height: 89px;\n    z-index: 2;\n    width: 89px;\n}\n.content-img[data-v-60b8ca80] {\n    position: absolute;\n    width: 100%;\n    z-index: 2;\n    top: 2.8rem;\n}\n.span_title[data-v-60b8ca80] {\n    padding: 10px 0px 0px 0px;\n    margin: 0px !important;\n    font-size: 3rem;\n}\n@media screen and (max-width: 960px) {\n.overlap-video[data-v-60b8ca80] {\n        position: absolute;\n        z-index: 1;\n        height: 135px;\n        width: 100%;\n        background-color: rgba(0, 0, 102, 0.38) !important;\n}\n.container-video[data-v-60b8ca80] {\n        max-height: 135px;\n        overflow: hidden;\n}\n#myVideo[data-v-60b8ca80] {\n        position: relative;\n        width: 100%;\n        transform: translateY(-20%);\n}\n.size_img[data-v-60b8ca80] {\n        height: 60px;\n        z-index: 2;\n        width: 60px;\n}\n.content-img[data-v-60b8ca80] {\n        position: absolute;\n        width: 100%;\n        z-index: 2;\n        top: 1.2rem !important;\n}\n.span_title[data-v-60b8ca80] {\n        font-size: 1.4rem;\n        padding: 5px 0px 0px 0px;\n        margin: 0px !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_id_44aae92f_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_id_44aae92f_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_id_44aae92f_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_60b8ca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_60b8ca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_60b8ca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _FooterGlobal_vue_vue_type_style_index_0_id_44aae92f_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& */ "./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&");
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

/***/ "./resources/js/components/utils/ShowDetailsDialog2.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog2.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4& */ "./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4&");
/* harmony import */ var _ShowDetailsDialog2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowDetailsDialog2.vue?vue&type=script&lang=js& */ "./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowDetailsDialog2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/utils/ShowDetailsDialog2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/finanzas/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/finanzas/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=60b8ca80&scoped=true& */ "./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_60b8ca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& */ "./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "60b8ca80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/finanzas/Index.vue"
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_299eb344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=template&id=299eb344& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/ChatComponent.vue?vue&type=template&id=299eb344&");


/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_template_id_44aae92f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=template&id=44aae92f& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=template&id=44aae92f&");


/***/ }),

/***/ "./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog_vue_vue_type_template_id_2fa53c34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog.vue?vue&type=template&id=2fa53c34& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog.vue?vue&type=template&id=2fa53c34&");


/***/ }),

/***/ "./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailsDialog2_vue_vue_type_template_id_75cc18a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/utils/ShowDetailsDialog2.vue?vue&type=template&id=75cc18a4&");


/***/ }),

/***/ "./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60b8ca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=60b8ca80&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=template&id=60b8ca80&scoped=true&");


/***/ }),

/***/ "./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterGlobal_vue_vue_type_style_index_0_id_44aae92f_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/global/FooterGlobal.vue?vue&type=style&index=0&id=44aae92f&lang=css&");


/***/ }),

/***/ "./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_60b8ca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/finanzas/Index.vue?vue&type=style&index=0&id=60b8ca80&scoped=true&lang=css&");


/***/ })

}]);