export default class AccountHistory {
    //public
    operation;
    amount;
    date;
    id;

    constructor(row) {
        this.operation = row.text;
        this.date = row.executeDate;
        this.amount = row.amount;
        this.id = row.id;
    }
    formateDate(dateStr) {
        const date = new Date(dateStr);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().substr(-2);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}
