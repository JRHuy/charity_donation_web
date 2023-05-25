import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "../components/setAuthToken";
import {Helmet} from "react-helmet";

function Login() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userPassword: '',
        phoneNum: ''
    });

    const [error, setError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                    // console.log(res.data.role[0].authority);
                    const authority = res.data.role[0].authority;

                    // save token to local storage
                    localStorage.setItem("token", token);
                    localStorage.setItem("authority", authority);

                    // set token to headers
                    setAuthToken(token);

                    // navigate('/admin/users');
                    navigate('/');
                }).catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
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
                        {/* <div className="form-group">
                            <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Enter password" value={userPassword} onChange={(e) => onInputChange(e)} />
                        </div> */}
                        <div className="form-group" style={{ display: "inline-flex", justifyContent: "center" }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="userPassword"
                                id="userPassword"
                                className="form-control"
                                placeholder="Enter password"
                                value={userPassword}
                                onChange={(e) => onInputChange(e)}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                id='showPasswordBtn'
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? (
                                    <i className="fa fa-eye"></i>
                                ) : (
                                    <i className="fa fa-eye-slash"></i>
                                )}
                            </button>
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
                    <div className="redirection">
                        <p>Don't have an account yet? <Link to={"/register"} id="redirection">Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;