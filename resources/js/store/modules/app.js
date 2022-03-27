// initial state

const state = () => ({
    pageTransition: {
        name: "route",
        mode: "out-in",
        duration:{ enter: 800, leave: 800 }
    },
    isHome: true,
    title_page : "Empresa Consultora Peruana | A&S Consulting Group | Santiago de Surco",
    path:"/",
    actual_page:"",
    visita_id:-1//para las estadisticas de visitas a la pagina
})

// getters
const getters = {
    notPublic(state){

        /**verificamos que la path no sea publica
         * para ver que navbar mostramos
         */
        if(state.path.includes("/admin")){
            return true
        }
        return false
    },

}

// actions
const actions = {

    setPath({ commit }, value) {

        if (value != '/') {
            commit("savePath",value)
            commit('setPath', false)
        } else {
            commit("savePath",value)
            commit('setPath', true)
        }


    },
    saveActualPage({commit},value){
        commit("saveActualPage",value)
    },
    changeTitlePage({ commit },value){

        commit('changeTitlePage',value)
    },
    openPage(context,payload){

        let data = new FormData()
        data.append("page",payload.page)
        data.append("link",payload.link)
        axios.post('/api/open-page',data).then(res=>{

            if(res.data.id > 0){
                context.commit('openPage',res.data.id)
            }
        }).catch(err => {

        })
    },
    closePage(context,payload){

        let data = new FormData()
        data.append("visita_id",payload.visita_id)
        axios.post('/api/close-page',data).then(res=>{
            console.log("pagina visitada")
        }).catch(err => {

        })
    }
}

// mutations
const mutations = {

    setPath(state, value) {
        state.isHome = value
    },
    changeTitlePage(state,value){
        state.title_page = value
    },
    savePath(state,value){
        state.path = value
    },
    saveActualPage(state,value){
        state.actual_page = value
    },
    openPage(state,visita_id){
        state.visita_id = visita_id
    },


}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
