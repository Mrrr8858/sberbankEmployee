<template>
    <v-card>
        <v-card-title>История счета №{{ numberAccount }}</v-card-title>

        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">Дата</th>
                        <th class="text-left">Операция</th>
                        <th class="text-left">Счета</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in historyList" :key="item.date">
                        <td>{{ item.date }}</td>
                        <td>{{ item.operationText() + item.amount }}</td>
                        <td>
                            Счет снятия {{ item.accountDebitingId }} Cчет
                            пополнения {{ item.accountReplenishmentId }}
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script>
//import socket from "../../store/socket";
export default {
    name: "accountsHistory",
    data() {
        return {
            number: 123,
            connection: null,
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
        /*         socket.emit("hello", "world");
        socket.on("open", () => {
            console.log("ok");
        });
        socket.on("message", (data) => {
            console.log(data);
        }); */
        /* var sock = new SockJS("https://mydomain.com/my_prefix");
        sock.onopen = function () {
            console.log("open");
            sock.send("test");
        };

        sock.onmessage = function (e) {
            console.log("message", e.data);
            sock.close();
        };

        sock.onclose = function () {
            console.log("close");
        }; */

        const socket = new WebSocket(
            "ws://localhost:8765/my-websocket-endpoint"
        );
        socket.onopen = function () {
            console.log("Соединение установлено.");
            socket.send("Привет от клиента!");
        };
        socket.onerror = function (event) {
            console.log(event);
        };
        socket.onmessage = function (event) {
            console.log(event);
            console.log("Получено сообщение: " + event.data);
        };

        /* this.connection.onopen = function (event) {
            this.connection.send(
                JSON.stringify({ accountId: this.$route.params.id })
            );
            console.log(event);
            console.log(
                "Successfully connected to the echo websocket server..."
            );
        };
        this.connection.onerror = function (event) {
            // Обработка ошибок соединения
            console.error("Ошибка соединения:", event);
        };
        this.connection.onmessage = function (event) {
            console.log(event.reason);
        }; */
        this.$store.dispatch("client/getAccountHistory", this.$route.params.id);
    },
};
</script>
