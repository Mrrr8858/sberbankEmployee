<template>
    <v-card>
        <v-card-title> Авторизация </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="submitForm" v-model="form">
                <v-text-field
                    v-model="login"
                    label="Логин"
                    max="50"
                    :rules="[required]"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Пароль"
                    type="password"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-btn type="submit" :disabled="!form" color="primary"
                    >Войти</v-btn
                >
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "LogInPage",

    data() {
        return {
            login: null,
            password: null,
            valid: true,
            form: false,
        };
    },
    methods: {
        async submitForm() {
            const payload = {
                login: this.login,
                password: this.password,
            };
            await this.$store.dispatch("user/auth", payload);
            this.$router.push({
                path: `/users`,
            });
        },
        required(v) {
            return !!v || "Field is required";
        },
    },
};
</script>
