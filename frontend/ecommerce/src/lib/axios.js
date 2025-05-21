import axios from "axios";
//  import.meta.mode === "development" ? "http://localhost:5000/api" : "/api"
const axiosInstance = axios.create({
	baseURL:"http://localhost:5000/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;