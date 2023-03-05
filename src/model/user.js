//users class
export default class User {
    //public
    name;
    surname;
    id;

    constructor(row) {
        this.name = row.name;
        this.surname = row.surname;
        this.id = row.id;
    }
}
