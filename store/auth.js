export const state = () => ({
    token: '',
    user: null,
})

export const getters = {
    getToken: (state) => {
        return state.token
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        state.user = user
    }
}

export const actions = {
    async fetchUser({ commit, state }, { token, user }) {
        try {

            commit('setToken', token)
            commit('setUser', user)
        } catch (e) {
            console.error('Request for user info encountered an error: ', e)
        }
    },
}