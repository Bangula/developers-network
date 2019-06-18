import axios from "axios";
import { authRequest, authResponse } from "./interceptors/authentication";

const production = "https://nameless-beach-56804.herokuapp.com";
const development = "http://localhost:5000/";
const url = process.env.NODE_ENV === "production" ? production : development;

const http = axios.create({
  baseURL: url
});

http.interceptors.request.use(authRequest);
http.interceptors.response.use(...authResponse);

export default http;
