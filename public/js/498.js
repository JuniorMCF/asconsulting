"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[498],{3819:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(3645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".as-footer_text{font-size:.8rem}.footer-logo{height:116px!important;width:112px!important}",""]);const s=i},5084:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(3645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".overlap-video[data-v-7cbaab7a]{background-color:rgba(0,0,102,.38)!important;height:326px;position:absolute;width:100%;z-index:1}.container-card[data-v-7cbaab7a]{background-color:#e3e2e2!important}.container-video[data-v-7cbaab7a]{max-height:326px;overflow:hidden}#myVideo[data-v-7cbaab7a]{position:relative;transform:translateY(-25%);width:100%}.size_img[data-v-7cbaab7a]{height:89px;width:89px;z-index:2}.content-img[data-v-7cbaab7a]{position:absolute;top:2.8rem;width:100%;z-index:2}.span_title[data-v-7cbaab7a]{font-size:3rem;margin:0!important;padding:10px 0 0}@media screen and (max-width:960px){.overlap-video[data-v-7cbaab7a]{background-color:rgba(0,0,102,.38)!important;height:135px;position:absolute;width:100%;z-index:1}.container-video[data-v-7cbaab7a]{max-height:135px;overflow:hidden}#myVideo[data-v-7cbaab7a]{position:relative;transform:translateY(-20%);width:100%}.size_img[data-v-7cbaab7a]{height:60px;width:60px;z-index:2}.content-img[data-v-7cbaab7a]{position:absolute;top:1.2rem!important;width:100%;z-index:2}.span_title[data-v-7cbaab7a]{font-size:1.4rem;margin:0!important;padding:5px 0 0}}",""]);const s=i},3798:(e,a,t)=>{t.d(a,{Z:()=>i});const o={data:function(){return{wame:"https://wa.me/51926302115"}}};const i=(0,t(1900).Z)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-btn",{attrs:{link:"",href:e.wame,target:"_blank",fab:"",dark:"",large:"",color:"primary",fixed:"",right:"",bottom:""}},[t("v-icon",{attrs:{large:"",dark:""}},[e._v("mdi-whatsapp ")])],1)],1)}),[],!1,null,null,null).exports},1095:(e,a,t)=>{t.d(a,{Z:()=>l});const o={data:function(){return{heightLogo:116,widthLogo:112,phone_contact:"926 302 115",phone_send:"tel:+51926302115",wame:"https://wa.me/51926302115",email:"reactivatunegocio@asconsulting.pe",address:"Av. Alfredo Benavides 3695. Surco."}},computed:{yearActual:function(){return(new Date).getFullYear()}}};var i=t(3379),s=t.n(i),n=t(3819),r={insert:"head",singleton:!1};s()(n.Z,r);n.Z.locals;const l=(0,t(1900).Z)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-row",{staticClass:"pa-0 ma-0 content-wrap-2 mx-auto footer-container"},[t("v-col",{staticClass:"col-12 pa-0 ma-0 rotate-180 container-bandwith"},[t("v-img",{attrs:{src:"/app/bandwith.PNG "}})],1)],1),e._v(" "),t("v-row",{staticClass:"primary pa-0 ma-0 content-wrap-2 mx-auto"},[t("v-col",{staticClass:"col-12 col-md-6 d-flex flex-wrap justify-center align-center"},[t("div",{staticClass:"footer-logo"},[t("v-img",{staticClass:"footer-logo",attrs:{src:"/app/white_logo.png",contain:""}})],1),e._v(" "),t("span",{staticClass:"white--text as-footer_text px-4"},[e._v("\n        Copyright ©"+e._s(e.yearActual)+" by A&S Consulting Group.\n      ")])]),e._v(" "),t("v-col",{staticClass:"col-12 col-md-6 text-center text-md-left "},[t("v-col",[t("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[t("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:"",href:e.phone_send}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-phone-message")])],1),e._v("\n          "+e._s(e.phone_contact)+"\n        ")],1),e._v(" "),t("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[t("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:""}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-email-open")])],1),e._v("\n          "+e._s(e.email)+"\n        ")],1)]),e._v(" "),t("v-col",[t("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[t("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",href:e.wame,target:"_blank"}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-whatsapp")])],1),e._v("\n          "+e._s(e.phone_contact)+"\n        ")],1),e._v(" "),t("span",{staticClass:"white--text d-block d-md-inline-flex align-center justify-center"},[t("v-btn",{staticClass:"white--text",attrs:{fab:"",text:"",small:"",link:""}},[t("v-icon",{attrs:{color:"white"}},[e._v("mdi-map-marker")])],1),e._v("\n          "+e._s(e.address)+"\n        ")],1)])],1)],1)],1)}),[],!1,null,null,null).exports},6075:(e,a,t)=>{t.d(a,{Z:()=>i});const o={data:function(){return{dialog:!1,resolve:null,reject:null,title:null,description:[],beneficios:[],foto:null,cateogoria:"",options:{color:"alternative",width:400,zIndex:200,noconfirm:!1},categoria:""}},methods:{open:function(e,a,t){var o=this;return this.dialog=!0,this.title=e.titulo,this.description=e.descripcion,this.beneficios=e.beneficios,this.foto=e.icon,this.categoria="mailto:reactivatunegocio@asconsulting.pe?subject="+a+" / "+e.titulo,this.options=Object.assign(this.options,t),new Promise((function(e,a){o.resolve=e,o.reject=a}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}};const i=(0,t(1900).Z)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{style:{zIndex:e.options.zIndex},attrs:{opacity:"0.3","max-width":e.options.width,persistent:""},on:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:e.cancel.apply(null,arguments)}},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",{staticClass:"rounded-0 elevation-0 pa-4",attrs:{"min-height":"550"}},[t("v-fab-transition",[t("v-btn",{staticClass:"elevation-0 pa-0",attrs:{fab:"",right:"",absolute:"",small:""},on:{click:function(a){a.preventDefault(),e.dialog=!e.dialog}}},[t("v-icon",{staticClass:"pa-0",attrs:{"x-large":"",color:"primary"}},[e._v("mdi-close-circle-outline")])],1)],1),e._v(" "),t("v-card-text",{staticClass:"pa-0 pt-5 pb-2 font-weight-bold"},[t("v-img",{staticClass:"mx-auto",attrs:{src:e.foto,height:"68",width:"68"}})],1),e._v(" "),t("v-card-text",{staticClass:"text-center"},[t("p",{staticClass:"\n          ma-0\n          mx-auto\n          primary--text\n          font-weight-bold\n          text-h5 text-uppercase\n          after-center_block_2\n        ",staticStyle:{"max-width":"350px"}},[e._v("\n        "+e._s(e.title)+"\n      ")])]),e._v(" "),t("v-card-text",[t("v-container",{staticClass:"pa-0 ma-0"},[t("v-row",{staticClass:"pa-0 ma-0"},[t("v-col",{staticClass:"\n              col-12 col-md-6\n              pa-0\n              px-3\n              text-justify\n              alternative--text\n              d-flex\n              flex-wrap flex-row\n              align-start\n              \n            "},[t("p",{staticClass:"text-center mx-auto text-h5"},[e._v("DESCRIPCIÓN")]),e._v(" "),e._l(e.description,(function(a,o){return t("span",{key:"desc"+o},["normal"==a.type?t("p",{staticClass:"py-2 subtitle-1 line-height_1_3 my-1"},[e._v("\n                "+e._s(a.text))]):"black"==a.type?t("strong",{staticClass:"py-4 subtitle-1 line-height_1_3"},[e._v("\n                "+e._s(a.text)+"\n              ")]):"list"==a.type?t("ol",{staticClass:"py-4 subtitle-1 line-height_1_3"},e._l(a.elements,(function(a,o){return t("li",{key:"el"+o},[t("span",[e._v(e._s(a))])])})),0):e._e()])})),e._v(" "),t("v-card-actions",{staticClass:"align-end py-4 mt-auto",staticStyle:{width:"100%"}},[t("v-btn",{staticClass:"white--text font-weight-bold px-4 rounded-xl mx-auto",attrs:{color:"primary",link:"",href:e.categoria}},[e._v("SOLICITAR COTIZACIÓN")])],1)],2),e._v(" "),t("v-col",{staticClass:"\n              col-12 col-md-6\n              pa-0\n              px-3\n              text-justify\n              alternative--text\n              d-flex\n              flex-wrap flex-row\n              align-content-start\n\n            "},[t("p",{staticClass:"text-center mx-auto text-h5"},[e._v("BENEFICIOS")]),e._v(" "),e._l(e.beneficios,(function(a,o){return t("span",{key:"benef"+o,staticClass:"line-height_1"},[t("ul",{staticClass:"subtitle-1 py-1 pl-4"},[t("li",{staticClass:"line-height_1_3"},[t("strong",[e._v(e._s(a.titulo))]),e._v(" "),t("span",{},[e._v(e._s(a.descripcion))])])])])}))],2)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},498:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var o=t(3798),i=t(1095),s=t(6075);const n={components:{ChatComponent:o.Z,FooterGlobal:i.Z,ShowDetailsDialog:s.Z},data:function(){return{height:89,width:89,procesos:[{icon:"/app/optimization.png",titulo:"Diseño y optimización de procesos",subtitulo:"",button:"Ver más",descripcion:[{type:"normal",text:"En este servicio determinamos el grado de madurez de los procesos de la empresa con la información que relevamos y las entrevistas que realizamos a los colaboradores clave."},{type:"normal",text:"Además, diseñamos planes que  optimizan los aspectos financieros, operativos y tecnológicos de la empresa, considerando las mejores prácticas del mercado y los objetivos que necesite alcanzar la alta dirección."}],beneficios:[{titulo:"Proporcionamos un diagnóstico ",descripcion:"de los actuales procesos de la empresa"},{titulo:"Proponemos planes de optimización del control financiero, ",descripcion:"diseñando y adaptándolos de manera flexible para el control de los directivos de la empresa."},{titulo:"Proponemos controles ",descripcion:"y procedimientos de las cuentas por cobrar que permitan actuar de manera eficiente y anticipada ante los documentos vencidos"},{titulo:"Diseñamos procedimientos para mejorar los controles de los activos fijos y existencias",descripcion:"de su empresa."},{titulo:"Diseñamos procedimientos para la optimización de la atención a proveedores",descripcion:"y sus cumplimientos contractuales."},{titulo:"Evaluación de riesgos legales",descripcion:"como: incumplimientos de contratos, licencias, manejo del personal."}]},{icon:"/app/inventory.png",titulo:"Inventario de activos",subtitulo:"",button:"Ver más",descripcion:[{type:"normal",text:"Nuestro inventario de activo fijo tiene como base la metodología ágil, misma que nos permite evaluar diariamente el avance del trabajo comprometido, la duración de las actividades y la calidad de las mismas."}],beneficios:[{titulo:"Experiencia comprobada ",descripcion:"en el servicio de inventario de activos."},{titulo:"Recomendación ",descripcion:"de nuestros clientes."},{titulo:"Etiquetado de activos de distintos tipos, ",descripcion:"dependiendo la exposición al medio ambiente o materias corrosivas."},{titulo:"Alcance",descripcion:"del servicio a nivel nacional."},{titulo:"Reportes de estado en línea",descripcion:"del servicio para la alta gerencia y los stakeholders."}]},{icon:"/app/team-management.png",titulo:"Programa de reducción de costos",subtitulo:"​",button:"Ver más",descripcion:[{type:"normal",text:"En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima."},{type:"normal",text:"La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento."}],beneficios:[{titulo:"Contar y optimizar los procesos de control",descripcion:"con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores."},{titulo:"Generar líderes, con la capacidad de enseñar a su empleados",descripcion:"para que puedan medir sus resultados en función a los objetivos de la empresa."},{titulo:"Capacitar e incentivar a los colaboradores",descripcion:"para que sean proactivos y sean capaces de realizar múltiples labores."},{titulo:"Mejorar las actividades de los colaboradores,",descripcion:"en base a los resultados de cada gestión. "},{titulo:"Implementar controles en cada proceso ",descripcion:"con la finalidad de minimizar los costos. "},{titulo:"Contar con informes sobre los potenciales impactos ambientales.",descripcion:""}]},{icon:"/app/team-management.png",titulo:"Reingeniería organizacional",subtitulo:"",button:"Ver más",descripcion:[{type:"normal",text:"En A&S Consulting brindamos asesoría en procesos organización y reorganización empresarial, la cual servirá de base para la mejora continua, adaptándose rápidamente a los futuros cambios económicos y nuevos proyectos, los cual servirá de base para la sostenibilidad de su participación en el mercado con una rentabilidad óptima."},{type:"normal",text:"La reingeniería organizacional se basa en la planificación operativa, que involucra a todas las áreas de la empresa, colaborando con la alta dirección a liderar los esfuerzos de su planeamiento, para ello se necesita actualizar los procesos e implementar nuevos que añadan valor a la organización del consumidor, rompiendo con la estructura y cultura de trabajo que se tenía hasta el momento."}],beneficios:[{titulo:"Contar y optimizar los procesos de control",descripcion:"con la finalidad de hacerlos agiles y simples que faciliten la labor de los colaboradores."},{titulo:"Generar líderes, con la capacidad de enseñar a su empleados",descripcion:"para que puedan medir sus resultados en función a los objetivos de la empresa."},{titulo:"Capacitar e incentivar a los colaboradores",descripcion:"para que sean proactivos y sean capaces de realizar múltiples labores."},{titulo:"Mejorar las actividades de los colaboradores,",descripcion:" en base a los resultados de cada gestión. "},{titulo:"Implementar controles en cada proceso",descripcion:"con la finalidad de minimizar los costos."},{titulo:"Contar con informes sobre los potenciales impactos ambientales.",descripcion:""}]},{icon:"/app/review.png",titulo:"GestiÓn de riesgos",subtitulo:"",button:"Ver más",descripcion:[{type:"normal",text:"En A&S Consulting proponemos el servicio de gestión de riesgos, la cual nos permite identificar, analizar y responder a factores de riesgo que nuestros clientes se enfrentan a lo largo del desarrollo de sus operaciones y proyectos futuros, los cuales pueden afectar el ciclo económico de sus objetivos trazados."}],beneficios:[{titulo:"Proporcionamos un diagnóstico profesional",descripcion:"que nos permita prevenir las posibles amenazas y eliminar las causas que se originan en cada área."},{titulo:"Recomendación de controles",descripcion:" que aseguren el cumplimiento oportuno de cada una de las actividades que realicen cada área dentro de la organización."},{titulo:"Elaboración de cronograma de actividades ",descripcion:"con la finalidad de determinar el cumplimiento de cada actividad. "},{titulo:"Evaluación de riesgos internos y externos impredecibles",descripcion:" que afecten el desarrollo de la economía de la empresa."},{titulo:"Evaluación de riesgos técnicos como tecnología y diseño",descripcion:"que afecten el desarrollo de la empresa."}]}]}},mounted:function(){this.getPath(),this.$store.dispatch("app/changeTitlePage","Procesos A&S"),document.title=this.$store.state.app.title_page,this.$store.dispatch("app/openPage",{page:window.location.pathname,link:window.location.host+window.location.pathname})},destroyed:function(){this.$store.dispatch("app/closePage",{visita_id:this.$store.state.app.visita_id})},methods:{getPath:function(){var e=window.location.pathname+window.location.search;this.$store.dispatch("app/setPath",e)},showDetails:function(e){this.$refs.showDetailsDialog.open(e,"PROCESOS",{color:"primary",width:750}).then((function(e){}))}}};var r=t(3379),l=t.n(r),c=t(5084),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const p=(0,t(1900).Z)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"content-wrap-2 pa-0 mx-auto"},[t("v-row",{staticClass:"pa-0 ma-0 content-wrap-2"},[t("div",{staticClass:"overlap-video content-wrap-2"}),e._v(" "),t("div",{staticClass:"col-12 pa-0 container-video"},[t("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[t("source",{attrs:{src:"/app/procesos.mp4",type:"video/mp4"}})])]),e._v(" "),t("div",{staticClass:"content-img content-wrap-2 text-center"},[t("v-img",{staticClass:"mx-auto size_img",attrs:{src:"/app/skill.PNG"}}),e._v(" "),t("p",{staticClass:"white--text font-weight-bold span_title"},[e._v("Procesos")])],1)]),e._v(" "),t("v-row",{staticClass:"pa-0 ma-0 content-wrap-2 mx-auto container-bandwith"},[t("v-col",{staticClass:"col-12 pa-0 ma-0"},[t("v-img",{attrs:{src:"/app/bandwith.PNG"}})],1)],1),e._v(" "),t("v-row",{staticClass:"pa-0 ma-0 justify-center content-wrap-0 mx-auto"},e._l(e.procesos,(function(a,o){return t("v-col",{key:"tec"+o,staticClass:"col-12 col-md-4 pa-1"},[t("v-card",{staticClass:"container-card elevation-0 pa-10",attrs:{height:"350"}},[t("v-card-text",{staticClass:"pa-0",staticStyle:{height:"200px"}},[t("v-img",{staticClass:"mx-auto",attrs:{src:a.icon,height:e.height,width:e.width}}),e._v(" "),t("h5",{staticClass:"line-height_1 text-h6 font-weight-bold text-uppercase text-center primary--text py-3"},[e._v(e._s(a.titulo))]),e._v(" "),t("p",{staticClass:"ma-0 text-center alternative--text"},[e._v(e._s(a.subtitulo))])],1),e._v(" "),t("v-card-actions",{staticClass:"text-center"},[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"rounded-xl white--text font-weight-bold px-10",attrs:{large:"",color:"primary"},on:{click:function(t){return t.preventDefault(),e.showDetails(a)}}},[e._v("ver más")]),e._v(" "),t("v-spacer")],1)],1)],1)})),1),e._v(" "),t("FooterGlobal"),e._v(" "),t("ShowDetailsDialog",{ref:"showDetailsDialog"}),e._v(" "),t("ChatComponent")],1)}),[],!1,null,"7cbaab7a",null).exports}}]);
