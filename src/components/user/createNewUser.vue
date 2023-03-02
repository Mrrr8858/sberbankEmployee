<template>
    <v-card>
        <v-card-title> Создать пользователя </v-card-title>
        <v-card-text class="mt-2">
            <v-text-field
                v-model="name"
                :counter="10"
                label="Имя"
            ></v-text-field>

            <v-text-field
                v-model="phone"
                :counter="11"
                label="Телефон"
            ></v-text-field>

            <v-text-field v-model="email" label="E-mail"></v-text-field>

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
                :disabled="!name || !phone || !email || !selectedRole"
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
            email: "",
            name: "",
            phone: "",
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
                (this.email = ""),
                (this.name = ""),
                (this.phone = "");
        },
        create() {
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                roleId: this.selectedRole,
            };
            console.log(payload);
        },
    },
    mounted() {
        //this.$store.dispatch("user/getUsersRole");
    },
};
</script>
