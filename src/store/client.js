import AccountClient from "@/model/AccountClient";
import AccountHistory from "@/model/AccountHistory";
import api from "./api";

export default {
    namespaced: true,
    state: {
        clientList: [],
        clientsAccount: {
            fullName: "",
            accounts: [],
        },
        accountHistory: [],
    },

    mutations: {
        setClientsAccount(state, data) {
            state.clientsAccount.fullName = data.fullName;
            state.clientsAccount.accounts = data.accounts.map(
                (row) => new AccountClient(row)
            );
        },
        setAccountHistory(state, data) {
            state.accountHistory = data.map((row) => new AccountHistory(row));
        },
    },

    actions: {
        async getClientsAccount(context, payload) {
            context.commit(
                "setClientsAccount",
                await api.client.getClientsAccount(payload)
            );
        },
        async getAccountHistory(context, payload) {
            context.commit(
                "setAccountHistory",
                await api.client.getAccountHistory(payload)
            );
        },
    },
};
