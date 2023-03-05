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
                <v-list-item v-for="(rate, index) in creditsList" :key="index">
                    <v-list-item-title>{{ rate.name }}</v-list-item-title>
                    <v-list-item-subtitle
                        >{{ rate.rate }}%</v-list-item-subtitle
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
        return {};
    },
    methods: {
        openCreateNewRate() {
            this.$router.push({
                path: `/credits/create`,
            });
        },
    },
    computed: {
        creditsList() {
            return this.$store.state.credits.creditList;
        },
    },
    mounted() {
        this.$store.dispatch("credits/getCredit");
    },
};
</script>
