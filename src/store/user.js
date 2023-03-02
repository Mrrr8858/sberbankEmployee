import api from "./api";

export default {
    namespaced: true,
    state: {
        roles: [],
    },

    mutations: {
        setUsersRole(state, data) {
            state.roles = data;
        },
    },

    actions: {
        async createNewUser(context, payload) {
            await api.user.createNewUser(payload);
        },
        async blockUser(context, payload) {
            await api.user.blockUser(payload);
        },
        async getUsersRole(context, payload) {
            await api.user.getUsersRole(payload);
        },
    },
};
