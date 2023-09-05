import User from "@/model/User";
import api from "./api";
export default {
    namespaced: true,
    state: {
        roles: [],
        users: [],
        clientsList: [],
        employeesList: [],
        token: localStorage.getItem("token") || "",
        status: null,
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
        auth_request: (state) => {
            state.status = "loading";
        },
        auth_success: (state, token) => {
            state.status = "success";
            state.token = token;
        },
        auth_error: (state) => {
            state.status = "error";
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
        async unblockUser(context, payload) {
            await api.user.unblockUser(payload);
        },
        async getUsersRole(context, payload) {
            await api.user.getUsersRole(payload);
        },
        async auth(context) {
            //(context, payload) {
            localStorage.setItem("token", "123");
            context.commit("auth_success", "123");
            /* await api.user.auth(payload).then(() =>
                this.$router.push({
                    path: `/users`,
                })
            ); */
        },
        async logout() {
            localStorage.removeItem("token");
            //await api.user.logout();
        },
    },
    getters: {
        isAuthenticated(state) {
            console.log(state.token);
            if (state.token == "") {
                return false;
            }
            return true;
        },
        authStatus: (state) => state.status,
    },
};
