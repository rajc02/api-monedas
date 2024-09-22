/*
* Los models (o modelos) en Vue generalmente representan la estructura de los datos que
* obtienes o envías a la API
* */

export class Article {
    constructor(code='', symbol='', rate="", description="", rate_float='') {
        this.code = code;
        this.symbol = symbol;
        this.rate = rate;
        this.description = description;
        this.rate_float = rate_float;
    }
    /*static fromAPI(data) {
        return new Patient(data.login.uuid, data.email, fullName, address, data.phone, data.gender);
    }*/
}


