import axios from "axios";
import { CardsData } from "../mockData/";
const api = axios.create({
  BaseURL: "https://670f589f3e715186165771a0.mockapi.io",
});

export default api;
