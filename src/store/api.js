import axios from "axios";

const endpoints = {
    client: {
        getClientsList: "https://api.coindesk.com/v1/bpi/currentprice.json",
        getClientsAccount: "",
        getAccountHistory: "",
    },
    employees: {
        getEmployeesList: "",
    },
    credits: {
        createNewCreditRate: "",
        getCredit: "",
    },
    user: {
        createNewUser: "",
        blockUser: "",
        getUsersRole: "",
    },
};

export default {
    client: {
        //get
        getClientsList: () =>
            axios
                .get(endpoints.client.getClientsList)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //post
        getClientsAccount: (payload) =>
            axios
                .post(endpoints.client.getClientsAccount, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //post
        getAccountHistory: (payload) =>
            axios
                .post(endpoints.client.getAccountHistory, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
    employees: {
        //get
        getEmployeesList: () =>
            axios
                .get(endpoints.employees.getEmployeesList)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
    credits: {
        //get
        getCredit: () =>
            axios
                .get(endpoints.credits.getCredit)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //post
        createNewCreditRate: (payload) =>
            axios
                .post(endpoints.credits.createNewCreditRate, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
    user: {
        //post
        createNewUser: (payload) =>
            axios
                .post(endpoints.user.createNewUser, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //post
        blockUser: (payload) =>
            axios
                .post(endpoints.user.blockUser, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //get
        getUsersRole: () =>
            axios
                .get(endpoints.user.getUsersRole)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
};
