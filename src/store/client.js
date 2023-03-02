import api from "./api";

export default {
    namespaced: true,
    state: {
        clientList: [],
        clientsAccount: [],
    },

    mutations: {
        setClientList(state, data) {
            state.clientList = data;
        },
        setClientsAccount(state, data) {
            state.clientsAccount = data;
        },
    },

    actions: {
        async getClientsList(context) {
            context.commit("setClientList", await api.client.getClientsList());
        },
        async getClientsAccount(context, payload) {
            context.commit(
                "setClientsAccount",
                await api.client.getClientsAccount(payload)
            );
        },
    },
};
