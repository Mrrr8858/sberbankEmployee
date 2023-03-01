import api from "./api";

export default {
    namespaced: true,
    state: {
        employeesList: [],
    },

    mutations: {
        setEmployeesList(state, data) {
            state.employeesList = data;
        },
    },

    actions: {
        async getEmployeesList(context) {
            context.commit(
                "setEmployeesList",
                await api.employees.getEmployeesList()
            );
        },
    },
};
