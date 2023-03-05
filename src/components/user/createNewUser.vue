<template>
    <v-card>
        <v-card-title> Создать пользователя </v-card-title>
        <v-card-text class="mt-2">
            <v-text-field v-model="name" label="Имя"></v-text-field>

            <v-text-field v-model="surname" label="Фамилия"></v-text-field>

            <v-text-field v-model="login" label="Login"></v-text-field>

            <v-autocomplete
                v-model="selectedRole"
                :items="roles"
                item-text="title"
                item-value="id"
                label="Роль"
            ></v-autocomplete>

            <v-btn
                @click="create"
                class="mr-2"
                :disabled="!name || !surname || !login || !selectedRole"
            >
                Создать
            </v-btn>

            <v-btn @click="clear"> Очистить </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "CreateNewUser",

    data() {
        return {
            selectedRole: null,
            surname: "",
            name: "",
            login: "",
            roles: [
                {
                    id: 1,
                    title: "Клиент",
                },
                {
                    id: 2,
                    title: "Сотрудник",
                },
            ],
        };
    },
    methods: {
        clear() {
            (this.selectedRole = null),
                (this.surname = ""),
                (this.name = ""),
                (this.login = "");
        },
        async create() {
            const payload = {
                name: this.name,
                surname: this.surname,
                login: this.login,
                roleId: this.selectedRole,
            };
            await this.$store.dispatch("user/createNewUser", payload);
            this.$router.push({
                path: `/users`,
            });
        },
    },
    mounted() {
        this.$store.dispatch("user/getUsersRole");
    },
};
</script>
