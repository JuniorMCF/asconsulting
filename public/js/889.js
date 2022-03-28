"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[889],{417:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(3645),o=a.n(n)()((function(t){return t[1]}));o.push([t.id,".ql-editor{height:auto!important}",""]);const i=o},7129:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(3645),o=a.n(n)()((function(t){return t[1]}));o.push([t.id,".ql-editor{height:auto!important}",""]);const i=o},6518:t=>{t.exports=function(t){var e=void 0;e="string"==typeof t?[t]:t.raw;for(var a="",n=0;n<e.length;n++)a+=e[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<(arguments.length<=1?0:arguments.length-1)&&(a+=arguments.length<=n+1?void 0:arguments[n+1]);var o=a.split("\n"),i=null;return o.forEach((function(t){var e=t.match(/^(\s+)\S+/);if(e){var a=e[1].length;i=i?Math.min(i,a):a}})),null!==i&&(a=o.map((function(t){return" "===t[0]?t.slice(i):t})).join("\n")),(a=a.trim()).replace(/\\n/g,"\n")}},2293:(t,e,a)=>{a.d(e,{Z:()=>o});const n={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"sky",width:400,zIndex:200,noconfirm:!1}}},methods:{open:function(t,e,a){var n=this;return this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,a),new Promise((function(t,e){n.resolve=t,n.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}};const o=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{opacity:"0.3","max-width":t.options.width,persistent:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:t.options.color,dense:"",flat:""}},[a("v-toolbar-title",{staticClass:"text-body-2 font-weight-bold white--text"},[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"pa-4 black--text text-justify",domProps:{innerHTML:t._s(t.message)}}),t._v(" "),a("v-card-actions",{staticClass:"pt-3"},[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"body-2 font-weight-bold text-normal rounded-0",attrs:{color:t.options.color,outlined:""},nativeOn:{click:function(e){return t.agree.apply(null,arguments)}}},[t._v("Aceptar")]),t._v(" "),t.options.noconfirm?t._e():a("v-btn",{staticClass:"body-2 font-weight-bold text-normal rounded-0",attrs:{color:"grey",text:""},nativeOn:{click:function(e){return t.cancel.apply(null,arguments)}}},[t._v("Cancelar")])],1)],1)],1)}),[],!1,null,null,null).exports},9558:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(6518),o=a.n(n);const i={data:function(){return{dialog:!1,resolve:null,reject:null,foto:null,title:null,content:null}},methods:{open:function(t,e,a){var n=this;return this.dialog=!0,this.title=t,this.foto=e,this.content=null!=a?o()(a):"<div></div>",new Promise((function(t,e){n.resolve=t,n.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1}}};var s=a(3379),l=a.n(s),r=a(417),c={insert:"head",singleton:!1};l()(r.Z,c);r.Z.locals;const d=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{scrollable:"",opacity:"0.3",persistent:"",width:"1000"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"rounded-0 elevation-0 pa-4"},[a("v-card-text",{staticClass:"pa-4"},[a("div",{staticClass:"display-1 mb-5 alternative--text mb-4"},[t._v(t._s(t.title))]),t._v(" "),a("v-img",{attrs:{src:t.foto}}),t._v(" "),a("div",{staticClass:"ql-editor",domProps:{innerHTML:t._s(this.content)}})],1),t._v(" "),a("v-card-actions",{staticClass:"pt-3"},[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"body-2 font-weight-bold text-normal rounded-0",attrs:{color:"sky",outlined:""},on:{click:function(e){return e.preventDefault(),t.agree.apply(null,arguments)}}},[t._v("Ok")])],1)],1)],1)}),[],!1,null,null,null).exports},1735:(t,e,a)=>{a.d(e,{Z:()=>r});const n={data:function(){return{linked:!1,dialog:!1,resolve:null,reject:null,link:"",title:"",user:"",contenido:null,tags:null}},methods:{open:function(t,e,a,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return this.dialog=!0,this.link=location.protocol+"//"+location.host+"/post/"+t,this.title=e,this.contenido=a,this.user=n,this.tags=i,new Promise((function(t,e){o.resolve=t,o.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1},copyText:function(){navigator.clipboard.writeText(this.link),Vue.$toast.success("url del post copiado")}}};var o=a(3379),i=a.n(o),s=a(7129),l={insert:"head",singleton:!1};i()(s.Z,l);s.Z.locals;const r=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{opacity:"0.3",width:"450"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"rounded-0 elevation-0 pa-8"},[a("v-card-text",{staticClass:"text-center"},[a("span",{staticClass:"text-h6 black--text"},[t._v("Compartir entrada")])]),t._v(" "),t.linked?a("v-row",{staticClass:"pa-4"},[a("v-col",{staticClass:"col-12"},[a("v-text-field",{model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1),t._v(" "),a("v-col",{staticClass:"col-12 text-center"},[a("v-btn",{staticClass:"primary white--text rounded-0 text-normal",on:{click:function(e){return e.preventDefault(),t.copyText()}}},[t._v("Copiar enlace")]),t._v(" "),a("v-btn",{staticClass:"rounded-0 text-normal mr-2 my-2",attrs:{text:""},on:{click:function(e){e.preventDefault(),t.linked=!t.linked}}},[t._v("Cancelar")])],1)],1):a("v-row",{staticClass:"pa-4"},[a("v-col",{staticClass:"text-center"},[a("ShareNetwork",{attrs:{network:"facebook",url:t.link,title:t.title,description:t.contenido}},[a("v-btn",{staticClass:"elevation-0",attrs:{fab:"",small:"",color:"facebook"}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-facebook")])],1)],1)],1),t._v(" "),a("v-col",{staticClass:"text-center"},[a("ShareNetwork",{attrs:{network:"twitter",url:t.link,title:t.title,description:t.contenido}},[a("v-btn",{staticClass:"elevation-0",attrs:{fab:"",small:"",color:"twitter"}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-twitter")])],1)],1)],1),t._v(" "),a("v-col",{staticClass:"text-center"},[a("ShareNetwork",{attrs:{network:"linkedin",url:t.link,title:t.title,description:t.contenido}},[a("v-btn",{staticClass:"elevation-0",attrs:{fab:"",small:"",color:"linkedin"}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-linkedin")])],1)],1)],1),t._v(" "),a("v-col",{staticClass:"text-center"},[a("v-btn",{staticClass:"elevation-0",attrs:{fab:"",small:"",color:"black"},on:{click:function(e){e.preventDefault(),t.linked=!t.linked}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-link-variant")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},9889:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var n=a(9558),o=a(1735),i=a(2293);var s,l,r;const c=(s={components:{DialogArticle:n.Z,SharedDialog:o.Z,ConfirmDialog:i.Z},data:function(){return{loadingRestore:!1,search:"",headers:[{text:"Image",align:"left",sortable:!1,value:"foto"},{text:"Título",value:"titulo"},{text:"Creado por",value:"creado_por"},{text:"Fecha publicación",value:"fecha_publicacion"},{text:" ",align:"right",value:"actions",sortable:!1}],selected:[],posts:[],options:[{icon:"mdi-eye",title:"Ver entrada"},{icon:"mdi-share",title:"Compartir entrada"},{icon:"mdi-chart-bar",title:"Ver informe"},{icon:"mdi-trash-can-outline",title:"Mover a la papelera"}]}},mounted:function(){this.setActualPage(),this.getData()},methods:{setActualPage:function(){this.$store.dispatch("app/saveActualPage","Publicadas")},getData:function(){var t=this;axios({method:"get",url:"/api/oauth/posts/all",headers:{Authorization:"Bearer "+this.$store.state.auth.token}}).then((function(e){t.posts=e.data})).catch((function(t){console.log(t.response)}))},formatDate:function(t){return this.moment(t).format("DD MMMM YYYY hh:mm a")},editItem:function(t){this.$router.push({name:"edit-blog",params:{id:t.id}})},OnClickOption:function(t,e){var a=this;switch(t.title){case"Ver entrada":this.$router.push({name:"show-blog",params:{route:e.route}});break;case"Compartir entrada":this.$refs.sharedDialog.open(e.route,e.titulo,e.descripcion,e.tags);break;case"Ver informe":break;case"Mover a la papelera":var n=new FormData;n.append("post_id",e.id),axios({method:"post",url:"/api/oauth/post/papelera",data:n,headers:{Authorization:"Bearer "+this.$store.state.auth.token}}).then((function(t){a.getData()})).catch((function(t){console.log(t)}))}},createNewPost:function(){var t=this,e=new FormData;e.append("user_id",this.$store.getters["auth/getUserId"]),axios({method:"post",url:"/api/oauth/post/new",data:e,headers:{Authorization:"Bearer "+this.$store.state.auth.token}}).then((function(e){var a=e.data;t.$router.push({name:"edit-blog",params:{id:a}})})).catch((function(t){console.log(t)}))},trashAll:function(){var t=this;this.$refs.confirmDialog.open("Eliminar todos","¿Está seguro que quiere mover a papelera todos los posts seleccionados?").then((function(e){if(e){var a=new FormData;a.append("posts",JSON.stringify(t.selected)),axios({method:"post",url:"/api/oauth/post/trash/all",data:a,headers:{Authorization:"Bearer "+t.$store.state.auth.token}}).then((function(e){t.selected=[],t.getData()})).catch((function(t){console.log(t)}))}})).catch((function(t){}))}},computed:{actualPage:function(){return this.$store.state.app.actual_page}},watch:{selected:function(t,e){t.length>0?this.selected_items=t.length+"seleccionados":this.selected_items="seleccionado"}}},l="components",r={DialogArticle:n.Z,SharedDialog:o.Z,ConfirmDialog:i.Z},l in s?Object.defineProperty(s,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[l]=r,s);const d=(0,a(1900).Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card-title",{staticClass:"font-weight-bold px-md-10 px-3"},[t._v("\n        "+t._s(t.actualPage)+"\n        "),a("span",{staticClass:"ml-2 grey--text text-h5"},[t._v(t._s(t.posts.length))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"sky white--text text-normal rounded-xl ekevation-1",on:{click:function(e){return e.preventDefault(),t.createNewPost()}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("Crear nueva entrada\n        ")],1)],1),t._v(" "),a("v-container",{staticClass:"pa-0 ma-0 px-md-10 px-3",attrs:{fluid:""}},[a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticClass:"col-12 pa-0 ma-0"},[a("v-data-table",{staticClass:"elevation-0 px-0 rounded-0",attrs:{headers:t.headers,items:t.posts,"show-select":"",search:t.search,"sort-by":"calories","hide-default-footer":"","disable-pagination":""},scopedSlots:t._u([{key:"item.foto",fn:function(e){var n=e.item;return[a("div",{staticClass:"pa-2"},[n.foto?a("v-img",{attrs:{src:n.foto,height:"60",width:"42"}}):a("div",{staticClass:"gray lighten-5 rounded-lg align-center justify-center d-flex",staticStyle:{width:"60px",height:"60px"}},[a("v-btn",{staticClass:"elevation-0 disable-events",attrs:{fab:"",color:"white","x-small":""}},[a("v-icon",{attrs:{color:"sky"}},[t._v("mdi-image-outline")])],1)],1)],1)]}},{key:"item.fecha_publicacion",fn:function(e){var n=e.item;return[a("span",[t._v(t._s(t.formatDate(n.fecha_publicacion)))])]}},{key:"top",fn:function(){return[a("v-card-text",{staticClass:"px-0 d-flex flex-wrap align-center",attrs:{flat:""}},[a("div",{staticClass:"col-12 col-md-6 text-center text-md-start"},[t.selected.length>0?a("p",{staticClass:"ma-0"},[t._v(t._s(t.selected.length)+" seleccionados")]):t._e()]),t._v(" "),a("div",{staticClass:"col-12 col-md-3 text-center text-md-end"},[t.selected.length>0?a("v-btn",{staticClass:"white--text text-normal caption mr-3 elevation-0",attrs:{color:"sky",large:"",rounded:""},on:{click:function(e){return e.preventDefault(),t.trashAll()}}},[t._v("mover seleecionados a papelera")]):t._e()],1),t._v(" "),a("div",{staticClass:"col-12 col-md-3 text-end"},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar",color:"sky","single-line":"",outlined:"",dense:"",rounded:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-btn",{staticClass:"mr-2 rounded-xl text-normal white--text elevation-1",attrs:{color:"sky"},on:{click:function(e){return t.editItem(n)}}},[t._v("editar")]),t._v(" "),a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"elevation-0 sky--text",attrs:{dark:"",icon:"",text:"",fab:"","x-small":""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),a("v-list",t._l(t.options,(function(e,o){return a("v-list-item",{key:"options"+o,attrs:{link:""},on:{click:function(a){return a.preventDefault(),t.OnClickOption(e,n)}}},[a("v-list-item-title",{staticClass:"caption"},[a("v-icon",{attrs:{small:"",left:""}},[t._v(t._s(e.icon))]),t._v("\n                                        "+t._s(e.title)+"\n                                    ")],1),t._v(" "),3===o?a("v-divider",{attrs:{horizontal:""}}):t._e()],1)})),1)],1)]}},{key:"no-data",fn:function(){return[a("span",[t._v("No hay publicaciones disponibles")])]},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1),t._v(" "),a("DialogArticle",{ref:"dialogArticle"}),t._v(" "),a("SharedDialog",{ref:"sharedDialog"}),t._v(" "),a("ConfirmDialog",{ref:"confirmDialog"})],1)}),[],!1,null,null,null).exports}}]);