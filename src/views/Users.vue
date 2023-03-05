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
                        <v-list-item
                            v-for="item in clientsList"
                            :key="item.index"
                        >
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
                        <v-list-item
                            v-for="item in employeesList"
                            :key="item.index"
                        >
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
            this.$store.dispatch("user/blockUser", Number(id));
        },
    },
    computed: {
        clientsList() {
            return this.$store.state.user.clientsList;
        },
        employeesList() {
            return this.$store.state.user.employeesList;
        },
    },
    async mounted() {
        await this.$store.dispatch("user/getUsersList");
    },
};
</script>
