import axios from "axios";
const service = axios.create({
    baseURL: 'http://120.76.142.160:8008',
    timeout:5000
})
export default service;
