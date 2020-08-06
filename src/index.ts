import axios from 'axios';
import {registerMessageHandler} from "./registerMessageHandler";
import {adapter} from "./adapter";

registerMessageHandler();

export const axiosInstance = axios.create({
    adapter,
})
