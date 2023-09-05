export default class AccountHistory {
    //public
    type;
    amount;
    date;
    accountReplenishmentId;
    accountDebitingId;

    constructor(row) {
        this.type = row.type;
        this.date = row.executeDate;
        this.amount = row.value;
        this.accountDebitingId = row.accountDebitingId;
        this.accountReplenishmentId = row.accountReplenishmentId;
    }
    operationText() {
        switch (this.type) {
            case "WITHDRAWAL_OF_FUNDS_FROM_ACCOUNT":
                return "Списание средств в размере ";
            case "ACCOUNT_REPLENISHMENT":
                return "Пополнение счета на сумму ";
            case "TRANSFER":
                return "Перевод на сумму ";
        }
    }
}
