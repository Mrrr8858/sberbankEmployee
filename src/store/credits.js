import api from "./api";
import Credit from "@/model/Credit";

export default {
    namespaced: true,
    state: {
        creditList: [],
        creditInfo: {},
        rating: null,
        userCredits: [],
    },

    mutations: {
        setCreditList(state, data) {
            state.creditList = data.map((row) => new Credit(row));
        },
        setCredit(state, data) {
            state.creditList.push(data);
        },
        setCreditInfo(state, data) {
            state.creditInfo = data;
        },
        setCreditRating(state, data) {
            state.rating = data;
        },
        setUsersCredits(state, data) {
            state.userCredits = data;
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
        async getCreditInfo(context, payload) {
            context.commit(
                "setCreditInfo",
                await api.credits.getCreditInfo(payload)
            );
        },
        async getCreditRating(context, payload) {
            context.commit(
                "setCreditRating",
                await api.credits.getCreditRating(payload)
            );
        },
        async getUsersCredits(context, payload) {
            context.commit(
                "setUsersCredits",
                await api.credits.getUsersCredits(payload)
            );
        },
    },
};
