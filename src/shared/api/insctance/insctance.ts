import axios from 'axios';

const INSTANCE_TIMEOUT = 5000;
const INSTANCE_HEADER = {
  'Content-Type': 'application/json',
};

export const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: INSTANCE_HEADER,
  timeout: INSTANCE_TIMEOUT,
});
