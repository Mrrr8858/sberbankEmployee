export default class AccountHistory {
    //public
    type;
    amount;
    date;

    constructor(row) {
        this.type = row.type;
        this.date = row.executeDate;
        this.amount = row.value;
    }
    operationText() {
        switch (this.type) {
            case "WITHDRAWAL_OF_FUNDS_FROM_ACCOUNT":
                return "Списание средств в размере ";
            case "ACCOUNT_REPLENISHMENT":
                return "Пополнение счета на сумму ";
        }
    }
}
