<template>
    <v-card>
        <v-card-title> <v-btn> Создать пользователя </v-btn></v-card-title>
        <v-list>
            <v-list-item v-for="item in items" :key="item.index">
                <v-list-item-title> {{ item.name }} </v-list-item-title>
                <v-divider></v-divider>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "ClietView",

    data() {
        return {
            items: [
                {
                    id: 1,
                    name: "Liza",
                },
                {
                    id: 2,
                    name: "Ilya",
                },
                {
                    id: 3,
                    name: "Ira",
                },
            ],
        };
    },
    mounted() {
        this.$store.dispatch("client/getClientsList");
    },
};
</script>
