// initial state

const state = () => ({
    token: '',
    token_type: '',
    expired_at: null,
    userLoadStatus: false,
    user:null,
    roles:[],
    permissions:[]
})

// getters
const getters = {
    isAuth(state) {

        if (state.user == null)
            return false

        const now = new Date();
        const expires_at = new Date(state.expired_at);


        if (now.getTime() > expires_at.getTime()) {
            return false
        }
        return true
    },
    getUserLoadStatus(state) {
        return function () {
            return state.userLoadStatus;
        }
    },

}

// actions
const actions = {
    login(context, payload) {

        return new Promise((resolve, reject) => {
            let form_data = new FormData()
            form_data.append("email", payload.email)
            form_data.append("password", payload.password)

            axios.post(`api/login`, form_data)
            .then(res => {
                //this.axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + res.data.access_token
                context.commit('auth', {
                    token: res.data.access_token,
                    token_type: res.data.token_type,
                    expired_at: res.data.expires_at,
                    userLoadStatus: true,
                    user:res.data.user,
                    roles:res.data.roles,
                    permissions:res.data.permissions
                })
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

}

// mutations
const mutations = {
    auth(state, payload) {

        state.token = payload.token
        state.token_type = payload.token_type
        state.expired_at = payload.expired_at
        state.userLoadStatus = payload.userLoadStatus
        state.user = payload.user
        state.roles = payload.roles
        state.permissions = payload.permissions
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}