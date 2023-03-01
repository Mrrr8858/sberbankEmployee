import api from "./api";

export default {
    namespaced: true,
    state: {},

    mutations: {},

    actions: {
        async createNewUser(context, payload) {
            await api.user.createNewUser(payload);
        },
        async blockUser(context, payload) {
            await api.user.blockUser(payload);
        },
    },
};
