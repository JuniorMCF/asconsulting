"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29],{7029:(t,a,e)=>{e.r(a),e.d(a,{default:()=>i});const s={data:function(){return{headers:[{text:"",align:"left",sortable:!1,value:"foto"},{text:"Nombres",align:"left",sortable:!1,value:"nombre"},{text:"Rol",value:"roles"},{text:"Contador de entrada",value:"entradas"},{text:" ",align:"right",value:"actions",sortable:!1}],users:[],search:null,options:[{icon:"mdi-restore",title:"Cambiar rol"},{icon:"mdi-pencil",title:"Editar"},{icon:"mdi-trash-can",title:"Eliminar"}]}},mounted:function(){this.setActualPage(),this.getData()},methods:{setActualPage:function(){this.$store.dispatch("app/saveActualPage","Escritores")},getData:function(){var t=this;axios({method:"get",url:"/api/oauth/writers",headers:{Authorization:"Bearer "+this.$store.state.auth.token}}).then((function(a){t.users=a.data})).catch((function(t){console.log(t.response)}))}},computed:{actualPage:function(){return this.$store.state.app.actual_page}}};const i=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card-title",{staticClass:"font-weight-bold px-md-10 px-3"},[t._v(t._s(t.actualPage))]),t._v(" "),e("v-container",{staticClass:"pa-0 ma-0 px-md-10 px-3",attrs:{fluid:""}},[e("v-row",{staticClass:"pa-0 ma-0"},[e("v-col",{staticClass:"pa-0 ma-0 col-12"},[e("v-card-text",{staticClass:"px-0 py-0"},[e("p",{staticClass:"caption ma-0"},[t._v("Administra a los escritores de tu blog, crea y personaliza sus perfiles públicos. Todos aquí tienen permiso para escribir entradas.")])])],1)],1)],1),t._v(" "),e("v-container",{staticClass:"pa-0 ma-0 px-md-10 px-3",attrs:{fluid:""}},[e("v-row",{staticClass:"pa-0 ma-0"},[e("v-col",{staticClass:"col-12 pa-0 ma-0"},[e("v-data-table",{staticClass:"elevation-0 px-0 rounded-0",attrs:{headers:t.headers,items:t.users,search:t.search,"sort-by":"calories","hide-default-footer":"","disable-pagination":""},scopedSlots:t._u([{key:"item.foto",fn:function(a){var s=a.item;return[e("div",{staticClass:"pa-2"},[s.foto?e("v-img",{staticClass:"mx-auto",attrs:{src:s.foto,height:"60",width:"42"}}):e("div",{staticClass:"gray lighten-5 rounded-lg align-center justify-center d-flex mx-auto",staticStyle:{width:"60px",height:"60px"}},[e("v-btn",{staticClass:"elevation-0 disable-events",attrs:{fab:"",color:"white","x-small":""}},[e("v-icon",{attrs:{color:"sky"}},[t._v("mdi-image-outline")])],1)],1)],1)]}},{key:"item.roles",fn:function(a){var s=a.item;return[e("span",[t._v(t._s(s.roles[0].name))])]}},{key:"item.entradas",fn:function(a){var s=a.item;return[e("span",[t._v(t._s(s.entradas.length))])]}},{key:"item.nombre",fn:function(a){var s=a.item;return[e("span",[t._v(t._s(s.name+" "+s.last_name))])]}},{key:"item.actions",fn:function(a){var s=a.item;return[e("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"elevation-0 sky--text",attrs:{dark:"",icon:"",text:"",fab:"","x-small":""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.options,(function(a,i){return e("v-list-item",{key:"options"+i,attrs:{link:""},on:{click:function(e){return e.preventDefault(),t.OnClickOption(a,s)}}},[e("v-list-item-title",{staticClass:"caption"},[e("v-icon",{attrs:{small:"",left:""}},[t._v(t._s(a.icon))]),t._v("\n                                        "+t._s(a.title)+"\n                                    ")],1),t._v(" "),3===i?e("v-divider",{attrs:{horizontal:""}}):t._e()],1)})),1)],1)]}},{key:"no-data",fn:function(){return[e("span",[t._v("No hay publicaciones disponibles")])]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);