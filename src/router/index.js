import { createRouter, createWebHistory } from "vue-router";
import Clients from "@/views/Client.vue";

const routes = [
    {
        path: "/clients",
        name: "home",
        component: Clients,
    },
    {
        path: "/credits",
        name: "credits",
        component: () => import("@/views/Credits.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
