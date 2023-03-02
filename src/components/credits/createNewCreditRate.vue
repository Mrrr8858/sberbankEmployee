<template>
    <v-card>
        <v-card-title> Создание кредитной ставки </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="submitForm" v-model="form">
                <v-text-field
                    v-model.number="rate"
                    label="Ставка"
                    type="number"
                    max="50"
                    :rules="[required]"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="name"
                    label="Название"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-btn type="submit" :disabled="!form" color="primary"
                    >Отправить</v-btn
                >
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "CreateNewCreditRate",

    data() {
        return {
            rate: null,
            name: "",
            valid: true,
            form: false,
        };
    },
    methods: {
        async submitForm() {
            const payload = {
                name: this.name,
                rate: this.rate,
            };
            console.log(payload);
        },
        required(v) {
            return !!v || "Field is required";
        },
    },
};
</script>
