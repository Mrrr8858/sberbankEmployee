//users class
export default class User {
    //public
    name;
    surname;
    status;
    id;

    constructor(row) {
        this.name = row.name;
        this.surname = row.surname;
        this.status = row.status;
        this.id = row.id;
    }
}
