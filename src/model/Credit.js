export default class Credit {
    //public
    name;
    rate;
    id;

    constructor(row) {
        this.name = row.name;
        this.rate = row.rate;
        this.id = row.id;
    }
}
