<template>
    <v-card>
        <v-card-title>История счета №{{ numberAccount }}</v-card-title>

        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">Дата</th>
                        <th class="text-left">Операция</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in historyList" :key="item.date">
                        <td>{{ item.date }}</td>
                        <td>{{ item.operationText() + item.amount }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "accountsHistory",
    data() {
        return {
            number: 123,
            accounts: [
                {
                    id: 1,
                    date: "01.01.01",
                    operation: "-22",
                },
                {
                    id: 2,
                    date: "01.01.01",
                    operation: "-222",
                },
                {
                    id: 3,
                    date: "01.01.01",
                    operation: "-2222",
                },
            ],
        };
    },
    methods: {},
    computed: {
        historyList() {
            return this.$store.state.client.accountHistory;
        },
        numberAccount() {
            return this.$route.query.number;
        },
    },
    mounted() {
        this.$store.dispatch("client/getAccountHistory", this.$route.params.id);
    },
};
</script>
