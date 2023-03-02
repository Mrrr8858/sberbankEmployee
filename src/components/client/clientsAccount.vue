<template>
    <v-card>
        <v-card-title>Name</v-card-title>

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
                    <tr v-for="item in accounts" :key="item.name">
                        <td>{{ item.number }}</td>
                        <td>{{ item.value }}</td>
                        <td>
                            <v-btn
                                icon="mdi-eye"
                                size="small"
                                @click="openHistory(item.id)"
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
        return {
            accounts: [
                {
                    id: 1,
                    number: 123,
                    value: 22,
                },
                {
                    id: 2,
                    number: 234,
                    value: 333,
                },
                {
                    id: 3,
                    number: 345,
                    value: 4444,
                },
            ],
        };
    },
    methods: {
        openHistory(id) {
            this.$router.push({
                path: `/client/account/history/${id}`,
            });
        },
    },
    mounted() {},
};
</script>
