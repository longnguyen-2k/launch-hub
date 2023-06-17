import axios from "axios";
import { headerAuthInterceptor } from "./HeaderConfig.js";

const axiosProvider = axios.create({
  headers: { ...headerAuthInterceptor() },
});
export default axiosProvider;
