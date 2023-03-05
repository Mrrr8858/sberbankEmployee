export default class AccountClient {
    //public
    number;
    id;
    balance;

    constructor(row) {
        this.number = row.number;
        this.id = row.id;
        this.balance = row.amount;
    }
}
