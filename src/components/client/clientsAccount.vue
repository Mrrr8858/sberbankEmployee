<template>
    <v-card>
        <v-card-title>{{ userName }}</v-card-title>

        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">Номер счета</th>
                        <th class="text-left">Баланс</th>
                        <th class="text-left">История</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in accountsList" :key="item.number">
                        <td>{{ item.number }}</td>
                        <td>{{ item.balance }}</td>
                        <td>
                            <v-btn
                                icon="mdi-eye"
                                size="small"
                                @click="openHistory(item.id, item.number)"
                            ></v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ClientsAccount",

    data() {
        return {};
    },
    methods: {
        openHistory(id, number) {
            this.$router.push({
                path: `/client/account/history/${id}`,
                query: { number: number },
            });
        },
    },
    computed: {
        userName() {
            return this.$store.state.client.clientsAccount.fullName;
        },
        accountsList() {
            return this.$store.state.client.clientsAccount.accounts;
        },
    },
    mounted() {
        this.$store.dispatch("client/getClientsAccount", this.$route.params.id);
    },
};
</script>
