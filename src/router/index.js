import { createRouter, createWebHistory } from "vue-router";
import Users from "@/views/Users.vue";

const routes = [
    {
        path: "/users",
        name: "users",
        component: Users,
    },
    {
        path: "/credits",
        name: "credits",
        component: () => import("@/views/Credits.vue"),
    },
    {
        path: "/users/create",
        name: "createNewUser",
        component: () => import("@/components/user/createNewUser.vue"),
    },
    {
        path: "/client/account/:id",
        name: "createNewUser",
        component: () => import("@/components/client/clientsAccount.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
