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
    }

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
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}