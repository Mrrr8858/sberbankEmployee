<template>
    <v-card>
        <v-card-title>История счета {{ number }}</v-card-title>

        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">Дата</th>
                        <th class="text-left">Операция</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in accounts" :key="item.name">
                        <td>{{ item.date }}</td>
                        <td>{{ item.operation }}</td>
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
    mounted() {
        //
    },
};
</script>
