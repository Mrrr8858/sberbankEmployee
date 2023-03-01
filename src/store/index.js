import { createStore } from "vuex";

import user from "./user";
import client from "./client";
import credits from "./credits";
import employees from "./employees";

export default createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        user,
        client,
        credits,
        employees,
    },
});
