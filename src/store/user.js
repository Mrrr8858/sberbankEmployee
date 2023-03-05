import User from "@/model/User";
import api from "./api";
//import { toRaw } from "vue";
export default {
    namespaced: true,
    state: {
        roles: [],
        users: [],
        clientsList: [],
        employeesList: [],
    },

    mutations: {
        setUsersList(state, data) {
            state.clientsList = data.clients.map((user) => new User(user));
            state.employeesList = data.employees.map((user) => new User(user));
            state.users.push(state.clientsList, state.employeesList);
        },
        setUsersRole(state, data) {
            state.roles = data;
        },
    },

    actions: {
        async getUsersList(context) {
            context.commit("setUsersList", await api.user.getUsersList());
        },
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
