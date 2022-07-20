import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDZhOTQwMjlhODU3MzM3ODhkMWZmOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgzMTI4ODAsImV4cCI6MTY1ODU3MjA4MH0.0zv2lrFNnLWaTJ8kpB2HtpIP-FD-YEbQjfyQqhTwCGk";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN} `},
});  