import AccountClient from "@/model/AccountClient";
import AccountHistory from "@/model/AccountHistory";
import api from "./api";

export default {
    namespaced: true,
    state: {
        clientList: [],
        clientsAccount: {
            name: "",
            surname: "",
            accounts: [],
        },
        accountHistory: {
            accountNumber: "",
            history: [],
        },
    },

    mutations: {
        setClientsAccount(state, data) {
            state.clientsAccount.name = data.name;
            state.clientsAccount.surname = data.surname;
            state.clientsAccount.accounts = data.accounts.map(
                (row) => new AccountClient(row)
            );
        },
        setAccountHistory(state, data) {
            state.accountHistory.accountNumber = data.number;
            state.accountHistory.history = data.history.map(
                (row) => new AccountHistory(row)
            );
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
