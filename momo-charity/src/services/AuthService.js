import axios from "axios";
import { setAuthToken } from "../components/setAuthToken";

// let navigate = useNavigate();
class AuthService {
    async login(user) {
        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", user);
            const data = res.data;
            console.log(res.data);

            // save token to local storage
            localStorage.setItem("user", data);

            // set token to headers
            setAuthToken(data.token);

            // window.location.href = '/admin/users';
            // navigate('/admin/users');
            return data;
        } catch (err) {
            return console.log(err);
        }
    }

    logout() {
        localStorage.removeItem("token");
        window.location.href = '/login';
    }
}

export default new AuthService();