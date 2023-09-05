<template>
    <v-card>
        <v-card-title> Просроченные платежи</v-card-title>

        <v-card-text>
            Рейтинг доверия - {{ this.$store.state.credits.rating }}/10
        </v-card-text>
        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">Ставка кредита</th>
                        <th class="text-left">Сумма кредита</th>
                        <th class="text-left">№</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in creditsList"
                        :key="item.id"
                        @click="open(item.id)"
                    >
                        <td>{{ item.rate.name }} - {{ item.rate.rate }}</td>
                        <td>{{ item.loanAmount }}</td>
                        <td>
                            {{ item.id }}
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-text>
                    <v-list lines="one">
                        <v-list-item
                            v-for="item in payments"
                            :key="item.loanId"
                            :title="payment(item.payment)"
                            :subtitle="date(item.scheduledPaymentDate)"
                        ></v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false"
                        >Close Dialog</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    name: "ClientsPayments",

    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        open(id) {
            this.dialog = true;
            this.$store.dispatch("credits/getCreditInfo", id);
        },
        payment(num) {
            return `Размер платежа ${num}`;
        },
        date(num) {
            return `Дата выплаты ${num}`;
        },
    },
    computed: {
        creditsList() {
            return this.$store.state.credits.userCredits;
        },
        payments() {
            return this.$store.state.credits.creditInfo;
        },
    },
    async mounted() {
        console.log(this.$route.params.id);
        this.$store.dispatch("credits/getCreditRating", this.$route.params.id);
        this.$store.dispatch("credits/getUsersCredits", this.$route.params.id);
    },
};
</script>
