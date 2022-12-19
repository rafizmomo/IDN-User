import axios from 'axios';
// import { response } from 'express';

const API_URL = "http://127.0.0.1:8000/api/";

const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
    })
};

const login = (username, password) => {
    return axios.post(API_URL + "/login/admin", {
        username,
        password,
    }).then((response) => {
        if (response.data.name) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });


};