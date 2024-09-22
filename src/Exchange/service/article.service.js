/*
* Los services (o servicios) son los encargados de interactuar directamente con la API. Aquí es donde
* utilizas librerías como axios o la API fetch para hacer las solicitudes HTTP (GET, POST, PUT, DELETE, etc.).
*
* */

import axios from 'axios';

const https = axios.create({
    baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
});

export class ArticleService {
    getSources() {
        return https.get();
    }
}