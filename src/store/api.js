const endpoints = {
    client: {
        getClientsList: "",
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
    },
};

export default {
    client: {
        getClientsList: () => {
            endpoints.client.getClientsList;
        }, //get
        getClientsAccount: () => {
            //payload
            endpoints.client.getClientsAccount;
        }, //post
        getAccountHistory: () => {
            //payload
            endpoints.client.getAccountHistory;
        }, //post
    },
    employees: {
        getEmployeesList: () => {}, //get
    },
    credits: {
        getCredit: () => {}, //get
        createNewCreditRate: () => {}, //post //payload
    },
    user: {
        createNewUser: () => {}, //post //payload
        blockUser: () => {}, //post //payload
    },
};
