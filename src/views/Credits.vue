<template>
    <v-card>
        <v-card-title
            >Кредитные ставки
            <v-spacer></v-spacer>
            <v-btn @click="openCreateNewRate" class="my-2"
                >Создать новую кредитную ставку</v-btn
            >
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item v-for="(rate, index) in rates" :key="index">
                    <v-list-item-title>{{ rate.name }}</v-list-item-title>
                    <v-list-item-subtitle
                        >{{ rate.percent }}%</v-list-item-subtitle
                    >
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "CreditsView",

    data() {
        return {
            rates: [
                { name: "Кредитная ставка 1", percent: 10 },
                { name: "Кредитная ставка 2", percent: 12 },
                { name: "Кредитная ставка 3", percent: 15 },
                { name: "Кредитная ставка 4", percent: 18 },
            ],
        };
    },
    methods: {
        openCreateNewRate() {
            this.$router.push({
                path: `/credits/create`,
            });
        },
    },
};
</script>
