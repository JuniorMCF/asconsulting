/*! For license information please see 117.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[117],{3819:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,".as-footer_text{font-size:.8rem}.footer-logo{height:116px!important;width:112px!important}",""]);const o=a},4033:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,".container-map{height:350px}.parallax{background-attachment:fixed;background-image:linear-gradient(180deg,rgba(31,38,99,.7),rgba(31,38,99,.7)),url(/app/equipo.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:780px}.text-16{font-size:16px}.divider{border-bottom-left-radius:80px 80px;border-bottom-right-radius:80px 80px;padding:2px}.card-equipo{height:390px}.card-equipo-container{height:730px}.position-linkedin{position:relative}@media screen and (max-width:960px){.card-equipo,.card-equipo-container{height:auto}.position-linkedin{position:absolute;right:calc(50% - 100px);top:150px}}",""]);const o=a},3798:(t,e,n)=>{n.d(e,{Z:()=>a});const r={data:function(){return{wame:"https://wa.me/51926302115"}}};const a=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{link:"",href:t.wame,target:"_blank",fab:"",dark:"",large:"",color:"primary",fixed:"",right:"",bottom:""}},[n("v-icon",{attrs:{large:"",dark:""}},[t._v("mdi-whatsapp ")])],1)],1)}),[],!1,null,null,null).exports},4423:(t,e,n)=>{n.d(e,{Z:()=>p});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new E(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=b(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function h(){}function v(){}function f(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==e&&n.call(w,i)&&(m=w);var x=f.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function a(o,i,s,c){var l=p(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=p(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=f,l(x,"constructor",f),l(f,"constructor",v),v.displayName=l(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},y(_.prototype),l(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new _(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(x),l(x,c,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}const i={data:function(){return{heightLogo:116,widthLogo:112,phone_contact:"926 302 115",phone_send:"tel:+51926302115",wame:"https://wa.me/51926302115",email:"reactivatunegocio@asconsulting.pe",address:"Av. Alfredo Benavides 3695. Surco."}},methods:{openEmail:function(){var t,e=this;return(t=a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={title:"A&S Consulting Group",text:"Solicita tu asesoría",url:e.email},t.prev=1,t.next=4,navigator.share(n);case 4:console.log("OpenBrowserEmail"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,c,"next",t)}function c(t){o(i,r,a,s,c,"throw",t)}s(void 0)}))})()},goToLocation:function(){this.$router.push({name:"contacto"})}},computed:{yearActual:function(){return(new Date).getFullYear()}}};var s=n(3379),c=n.n(s),l=n(3819),u={insert:"head",singleton:!1};c()(l.Z,u);l.Z.locals;const p=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pa-0 ma-0 content-wrap-2 mx-auto footer-container"},[n("v-col",{staticClass:"col-12 pa-0 ma-0 rotate-180 container-bandwith"},[n("v-img",{attrs:{src:"/app/bandwith.png "}})],1)],1),t._v(" "),n("v-row",{staticClass:"primary pa-0 ma-0 content-wrap-2 mx-auto"},[n("v-col",{staticClass:"col-12 col-md-6 d-flex flex-wrap justify-center align-center"},[n("div",{staticClass:"footer-logo"},[n("v-img",{staticClass:"footer-logo",attrs:{src:"/app/white_logo.png",contain:""}})],1),t._v(" "),n("span",{staticClass:"white--text as-footer_text px-4"},[t._v("\n                Copyright ©"+t._s(t.yearActual)+" by A&S Consulting Group.\n            ")])]),t._v(" "),n("v-col",{staticClass:"col-12 col-md-6 text-center text-md-left "},[n("v-col",[n("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[n("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:"",href:t.phone_send}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-phone-message")])],1),t._v("\n                    "+t._s(t.phone_contact)+"\n                ")],1),t._v(" "),n("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[n("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:""},on:{click:function(e){return e.preventDefault(),t.openEmail()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-email-open")])],1),t._v("\n                    "+t._s(t.email)+"\n                ")],1)]),t._v(" "),n("v-col",[n("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[n("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",href:t.wame,target:"_blank"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-whatsapp")])],1),t._v("\n                    "+t._s(t.phone_contact)+"\n                ")],1),t._v(" "),n("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[n("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:""},on:{click:function(e){return e.preventDefault(),t.goToLocation()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-map-marker")])],1),t._v("\n                    "+t._s(t.address)+"\n                ")],1)])],1)],1)],1)}),[],!1,null,null,null).exports},4117:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(3798),a=n(4423);const o={components:{ChatComponent:r.Z,FooterGlobal:a.Z},data:function(){return{width:216,height:216,vertical:!0,color:"white"}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize),this.getPath(),this.$store.dispatch("app/changeTitlePage","Equipo A&S"),document.title=this.$store.state.app.title_page,this.$store.dispatch("app/openPage",{page:window.location.pathname,link:window.location.host+window.location.pathname})},destroyed:function(){this.$store.dispatch("app/closePage",{visita_id:this.$store.state.app.visita_id})},methods:{getPath:function(){var t=window.location.pathname+window.location.search;this.$store.dispatch("app/setPath",t)},onResize:function(){window.innerWidth<960?(this.width=150,this.height=150):(this.width=216,this.height=216)}}};var i=n(3379),s=n.n(i),c=n(4033),l={insert:"head",singleton:!1};s()(c.Z,l);c.Z.locals;const u=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"content-wrap-2 pa-0 mx-auto",attrs:{fluid:""}},[n("v-row",{staticClass:"pa-0 ma-0 content-wrap-2 mx-auto"},[n("v-col",{staticClass:"col-12 pa-0 ma-0"},[n("v-card",{staticClass:"elevation-2 rounded-0",attrs:{color:"primary",height:"25"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pa-0 ma-0 content-wrap-0 mx-auto align-center my-8"},[n("v-col",{staticClass:"col-12 col-md-6 text-center my-4 mx-auto"},[n("span",{staticClass:"primary--text text-uppercase as-text_extralarge line-height_1"},[t._v("Nuestro")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"pl-6 primary--text font-weight-bold text-uppercase as-text_extralarge line-height_1 after-center_block"},[t._v("equipo")])])],1),t._v(" "),n("v-container",{staticClass:"content-wrap-0 pa-0 mx-auto",attrs:{fluid:""}},[n("div",{staticClass:"parallax"},[n("v-row",{staticClass:"pa-0 ma-0 content-wrap-0 mx-auto my-8 d-flex flex-wrap flex-md-row flex-column",staticStyle:{"min-height":"740px"}},[n("v-col",[n("v-card",{staticClass:"elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container",attrs:{color:"transparent"}},[n("div",{staticClass:"mx-auto"},[n("v-img",{staticClass:"rounded-circle",attrs:{src:"/app/gerardo_alvarez.jpg",height:t.height,width:t.width}})],1),t._v(" "),n("v-card-text",{staticClass:"text-center card-equipo"},[n("div",{staticClass:"d-block mx-auto"},[n("span",{staticClass:"as-text_normal_2 font-weight-bold white--text"},[t._v("Gerardo")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"as-text_normal_2 pl-7 font-weight-bold white--text"},[t._v("Álvarez")])]),t._v(" "),n("div",{staticClass:"text-justify white--text text-16 py-4"},[n("span",[t._v("\n                                    Ejecutivo y consultor de tecnología con\n                                    "),n("strong",[t._v("18 años de experiencia")]),t._v(" en el sector\n                                    financiero. Ingeniero de Sistemas titulado, Magister en\n                                    administración de empresas con mención en gestión avanzada\n                                    de proyectos.\n                                    "),n("strong",[t._v("\n                                        Líder de equipos ágiles con enfoque a resultados y\n                                        satisfacción del cliente.\n                                    ")])])])]),t._v(" "),n("v-card-actions",{staticClass:"align-end"},[n("v-btn",{staticClass:"elevation-0 px-2 position-linkedin",staticStyle:{"min-width":"auto !important"},attrs:{large:"",color:"#0073b2",link:"",href:"https://www.linkedin.com/in/gerardo-alvarez/",target:"_blank"}},[n("v-icon",{attrs:{color:"white",large:""}},[t._v("mdi-linkedin")])],1)],1)],1)],1),t._v(" "),n("v-divider",{staticClass:"divider",attrs:{vertical:t.vertical,color:t.color}}),t._v(" "),n("v-col",[n("v-card",{staticClass:"elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container",attrs:{color:"transparent"}},[n("div",{staticClass:"mx-auto"},[n("v-img",{staticClass:"rounded-circle",attrs:{src:"/app/victor_alvarez.png",height:t.height,width:t.width}})],1),t._v(" "),n("v-card-text",{staticClass:"text-center card-equipo"},[n("div",{staticClass:"d-block mx-auto"},[n("span",{staticClass:"as-text_normal_2 font-weight-bold white--text"},[t._v("Victor")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"as-text_normal_2 pl-7 font-weight-bold white--text"},[t._v("Álvarez")])]),t._v(" "),n("div",{staticClass:"text-justify white--text text-16 py-4"},[n("span",[t._v("\n                                    Ejecutivo, consultor financiero y contable con\n                                    "),n("strong",[t._v("25 años de experiencia")]),t._v(" Contador con\n                                    estudios especializados en la Contraloría General de la\n                                    República. Auditor Interno en empresas Petroleras\n                                    Comerciales y de Construcción. Asesora a empresas en su\n                                    crecimiento y la reducción de sus costos.\n                                    "),n("strong",[t._v("\n                                        Experto en la optimización de procesos, reingeniería\n                                        organizacional y saneamiento tributario.\n                                    ")])])])]),t._v(" "),n("v-card-actions",{staticClass:"align-end"},[n("v-btn",{staticClass:"elevation-0 px-2 position-linkedin",staticStyle:{"min-width":"auto !important"},attrs:{large:"",color:"#0073b2",link:"",href:"https://www.linkedin.com/in/victor-alvarez-rojas/",target:"_blank"}},[n("v-icon",{attrs:{color:"white",large:""}},[t._v("mdi-linkedin")])],1)],1)],1)],1),t._v(" "),n("v-divider",{staticClass:"divider",attrs:{vertical:t.vertical,color:t.color}}),t._v(" "),n("v-col",[n("v-card",{staticClass:"elevation-0 mx-auto pt-8 d-flex flex-wrap space-between card-equipo-container",attrs:{color:"transparent"}},[n("div",{staticClass:"mx-auto"},[n("v-img",{staticClass:"rounded-circle",attrs:{src:"/app/jorge_carrera.jpg",height:t.height,width:t.width}})],1),t._v(" "),n("v-card-text",{staticClass:"text-center card-equipo"},[n("div",{staticClass:"d-block mx-auto"},[n("span",{staticClass:"as-text_normal_2 font-weight-bold white--text"},[t._v("Jorge")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"as-text_normal_2 pl-7 font-weight-bold white--text"},[t._v("Carrera")])]),t._v(" "),n("div",{staticClass:"text-justify white--text text-16 py-4"},[n("span",[t._v("\n                                    Ejecutivo, consultor, docente y auditor en entidades\n                                    privadas y públicas con más de\n                                    "),n("strong",[t._v("35 años de experiencia")]),t._v(" en la dirección de\n                                    empresas. Contador Público Colegiado, Auditor Certificado,\n                                    Maestría en Contabilidad y Doctorado en Administración.\n                                    Experiencia como Gerente apoderado de una Corporación\n                                    Global.\n                                    "),n("strong",[t._v("\n                                        Líder en Dirección de Control de Gestión y mitigación de\n                                        riesgos.\n                                    ")])])])]),t._v(" "),n("v-card-actions",{staticClass:"align-end"},[n("v-btn",{staticClass:"elevation-0 px-2 position-linkedin",staticStyle:{"min-width":"auto !important"},attrs:{large:"",color:"#0073b2",link:"",href:"http://linkedin.com/in/jorge-carreras-aa96a7204",target:"_blank"}},[n("v-icon",{attrs:{color:"white",large:""}},[t._v("mdi-linkedin")])],1)],1)],1)],1)],1)],1)]),t._v(" "),n("FooterGlobal"),t._v(" "),n("ChatComponent")],1)}),[],!1,null,null,null).exports}}]);