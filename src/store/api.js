import axios from "axios";

const endpoints = {
    client: {
        getClientsAccount: "/account/",
        getAccountHistory: "/account/history/",
    },
    employees: {},
    credits: {
        createNewCreditRate: "/credit/create",
        getCredit: "/credit",
        getCreditInfo: "/credit/",
        getCreditRating: "/credit/rating/",
        getCreditsList: "/credit/client/",
    },
    user: {
        getUsersList: "/employee",
        createNewUser: "/employee/create",
        blockUser: "/employee/block",
        unblockUser: "/employee/unblock",
        getUsersRole: "/employee/role",
    },
};
export default {
    client: {
        getClientsAccount: (payload) =>
            axios
                .get(endpoints.client.getClientsAccount + payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //post
        getAccountHistory: (payload) =>
            axios
                .get(endpoints.client.getAccountHistory + payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
    employees: {},
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
        getCreditInfo: (payload) =>
            axios
                .get(endpoints.credits.getCreditInfo + payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        getCreditRating: (payload) =>
            axios
                .get(endpoints.credits.getCreditRating + payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        getUsersCredits: (payload) =>
            axios
                .get(endpoints.credits.getCreditsList + payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
    },
    user: {
        //get
        getUsersList: () =>
            axios
                .get(endpoints.user.getUsersList)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
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
        //post
        unblockUser: (payload) =>
            axios
                .post(endpoints.user.unblockUser, payload)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        //get
        getUsersRole: () =>
            axios
                .get(endpoints.user.getUsersRole)
                .then((response) => response.data)
                .catch((error) => console.log(error)),
        auth: () =>
            axios
                .post(endpoints.user.auth)
                .then((response) => {
                    axios.defaults.headers.common["Authorization"] =
                        response.data;

                    localStorage.setItem("token", response.data);
                    return response.data;
                })
                .catch((error) => console.log(error)),
        logout: () =>
            axios
                .post(endpoints.user.auth)
                .then((response) => {
                    localStorage.removeItem("token");
                    delete axios.defaults.headers.common["Authorization"];
                    return response.data;
                })
                .catch((error) => console.log(error)),
    },
};
