import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gds-api-web.herokuapp.com/'
})