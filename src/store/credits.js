import api from "./api";

export default {
    namespaced: true,
    state: {
        creditList: [],
    },

    mutations: {
        setCreditList(state, data) {
            state.creditList = data;
        },
        setCredit(state, data) {
            state.creditList.push(data);
        },
    },

    actions: {
        async createNewCreditRate(context, payload) {
            context.commit(
                "setCredit",
                await api.credits.createNewCreditRate(payload)
            );
        },
        async getCredit(context) {
            context.commit("setCreditList", await api.credits.getCredit());
        },
    },
};
