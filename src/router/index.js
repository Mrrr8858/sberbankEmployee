import { createRouter, createWebHistory } from "vue-router";
import Users from "@/views/Users.vue";
//import store from "@/store";

/* const ifNotAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
}; */

/* const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/login");
}; */

const routes = [
    {
        path: "/users",
        name: "users",
        component: Users,
        //beforeEnter: ifAuthenticated,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LogInPage.vue"),
        //beforeEnter: ifNotAuthenticated,
    },
    {
        path: "/credits",
        name: "credits",
        component: () => import("@/views/Credits.vue"),
    },
    {
        path: "/credits/create",
        name: "createNewCreditRate",
        component: () => import("@/components/credits/createNewCreditRate.vue"),
    },
    {
        path: "/users/create",
        name: "createNewUser",
        component: () => import("@/components/user/createNewUser.vue"),
    },
    {
        path: "/client/account/:id",
        name: "clientsAccount",
        component: () => import("@/components/client/clientsAccount.vue"),
    },
    {
        path: "/client/account/history/:id",
        name: "accountsHistory",
        component: () => import("@/components/client/accountsHistory.vue"),
    },
    {
        path: "/client/creditpayment/:id",
        name: "clientsPayments",
        component: () => import("@/components/client/clientsPayments.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
