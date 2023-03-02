<template>
    <v-card>
        <v-card-title>
            Список пользователей
            <v-spacer></v-spacer>
            <v-btn @click="createNewUser" class="my-2">
                Создать пользователя
            </v-btn></v-card-title
        >
        <v-tabs v-model="tab" align-tabs="center">
            <v-tab value="clients">Клиенты</v-tab>
            <v-tab value="employee">Сотрудники</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="clients">
                    <v-list>
                        <v-list-item v-for="item in clients" :key="item.index">
                            <v-list-item-title>
                                {{ item.name }} {{ item.surname }}
                            </v-list-item-title>
                            <template v-slot:append>
                                <v-btn
                                    icon="mdi-account-cash"
                                    size="small"
                                    @click="openClientsAccount(item.id)"
                                ></v-btn>
                                <v-btn
                                    icon="mdi-account-cancel"
                                    size="small"
                                    @click="blockUser(item.id)"
                                ></v-btn>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-window-item>

                <v-window-item value="employee">
                    <v-list>
                        <v-list-item v-for="item in employee" :key="item.index">
                            <v-list-item-title>
                                {{ item.name }}
                                {{ item.surname }} </v-list-item-title
                            ><template v-slot:append>
                                <v-btn
                                    icon="mdi-account-cancel"
                                    size="small"
                                    @click="blockUser(item.id)"
                                ></v-btn>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "UserView",

    data() {
        return {
            tab: null,
            clients: [
                {
                    id: 1,
                    name: "Liza",
                    surname: "QQQ",
                    phone: 123,
                },
                {
                    id: 2,
                    name: "Ilya",
                    surname: "QQQ",
                    phone: 123,
                },
                {
                    id: 3,
                    name: "Ira",
                    surname: "QQQ",
                    phone: 123,
                },
            ],
            employee: [
                {
                    id: 1,
                    name: "Лиза",
                    surname: "QQQ",
                    phone: 123,
                },
                {
                    id: 2,
                    name: "Илья",
                    surname: "QQQ",
                    phone: 123,
                },
                {
                    id: 3,
                    name: "Ира",
                    surname: "QQQ",
                    phone: 123,
                },
            ],
        };
    },
    methods: {
        createNewUser() {
            this.$router.push({
                path: `/users/create`,
            });
        },
        openClientsAccount(id) {
            this.$router.push({
                path: `/client/account/${id}`,
            });
        },
        blockUser(id) {
            console.log(id);
            //this.$store.dispatch("user/blockUser", { id: id });
        },
    },
    mounted() {
        this.$store.dispatch("client/getClientsList");
    },
};
</script>
