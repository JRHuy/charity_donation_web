import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../components/setAuthToken";

export default function Login() {
    // const required = (value) => {
    //     if (!value) {
    //         return (
    //             <div className="alert alert-danger" role="alert">
    //                 This field is required!
    //             </div>
    //         )
    //     }
    // }

    let navigate = useNavigate();

    const [user, setUser] = useState({
        userPassword: '',
        phoneNum: ''
    });

    const [error, setError] = useState(false);

    const { userPassword, phoneNum } = user;


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length === 0 || userPassword.length === 0) {
            setError(true);
        } else {
            Axios.post("http://localhost:8080/api/auth/login", user)
                .then(res => {
                    const token = res.data.token;

                    // save token to local storage
                    localStorage.setItem("token", token);

                    // set token to headers
                    setAuthToken(token);

                    // window.location.href = '/';
                    navigate('/admin/users');
                }).catch(err => console.log(err));
        }
    };

    return (
        <div className="outside">
            <div className="form4enter">
                <div className="row justify-content-center">
                    <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">LOGIN</h3>
                    <form onSubmit={(e) => onSubmit(e)} method="POST">
                        <div className="form-group">
                            <input type="text" name="phoneNum" id="phoneNum" className="form-control" placeholder="Phone number" value={phoneNum} onChange={(e) => onInputChange(e)} />
                        </div>
                        {error && phoneNum.length <= 0 ?
                            <div className="alert alert-danger" role="alert">
                                This field is required!
                            </div>
                            : ""}
                        <div className="form-group">
                            <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Enter password" value={userPassword} onChange={(e) => onInputChange(e)} />
                        </div>
                        {error && userPassword.length <= 0 ?
                            <div className="alert alert-danger" role="alert">
                                This field is required!
                            </div>
                            : ""}
                        <div className="form-group">
                            <button type="submit" value="register" id="loginbtn">LOGIN</button>
                        </div>
                    </form>
                    {/* <div className="redirection">
                        <a href="" id="redirection">Back To Login Page</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}