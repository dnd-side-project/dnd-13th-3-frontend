import axios from "axios";
import { API_BASE_URL } from "@/lib/config";

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    const message = error?.response?.data?.message ?? error.message;
    return Promise.reject(
      new Error(`${message}${status ? ` (${status})` : ""}`)
    );
  }
);
