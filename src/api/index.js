import axios from "axios";

const fetcer = axios.create({
    baseURL: "http://localhost:5000",
});

export default fetcer;