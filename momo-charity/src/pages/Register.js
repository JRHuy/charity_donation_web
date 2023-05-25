import { useState } from 'react';
import '../styles/style.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import {Helmet} from "react-helmet";

export default function Register() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        userEmail: "",
        name: "",
        userPassword: "",
        phoneNum: "",
        citizenIdentityNum: "",
        dateOfBirth: "",
        gender: "",
        role: {
            roleID: 2,
            roleName: "CUSTOMER"
        }
    });

    const { userEmail, name, userPassword, phoneNum, citizenIdentityNum, dateOfBirth, gender, role } = user;

    const [validEmail, setValidEmail] = useState(true);
    const [error, setError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (userEmail) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(userEmail);
    };

    const onInputChange = (e) => {
        if (e.target.name !== "gender") {
            setUser({ ...user, [e.target.name]: e.target.value });
        } else {
            let allgenders = document.getElementsByName("gender");
            allgenders.forEach((allradio) => {
                if (allradio.checked) {
                    setUser({ ...user, [e.target.name]: e.target.id }); // <-- grab input id
                }
            });
        }
        if (e.target.name === 'userEmail') {
            const isValidEmail = validateEmail(e.target.value);
            setValidEmail(isValidEmail);
        }
    };

    
    const onSubmit = async (e) => {
        e.preventDefault();
        if (name.length === 0 || userEmail.length === 0 || dateOfBirth.length === 0 || citizenIdentityNum.length === 0 || phoneNum.length === 0 || userPassword.length === 0) {
            setError(true);
        } else if (!validateEmail(userEmail)) {
            setValidEmail(false);
        } else {
            await Axios.post('http://localhost:8080/api/user', user);
            navigate('/admin/users');
        }
    };

    return (
        <div className="container">
            <div className="form4enter">
                <div className="row justify-content-center">
                    <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">REGISTER</h3>
                    <form onSubmit={(e) => onSubmit(e)} method="POST">
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => onInputChange(e)} />
                                </div>
                                {error && name.length <= 0 ?
                                    <div className="alert alert-danger" role="alert">
                                        This field is required!
                                    </div>
                                    : ""}

                                <div className="form-group">
                                    <input type="email" name="userEmail" id="userEmail" className={`form-control ${validEmail ? '' : 'is-invalid'}`} placeholder="Enter email" value={userEmail} onChange={(e) => onInputChange(e)} />
                                    {!validEmail && (
                                        <div className='invalid-feedback'>
                                            Please enter a valid email address.
                                        </div>
                                    )}
                                </div>
                                {error && userEmail.length <= 0 ?
                                    <div className="alert alert-danger" role="alert">
                                        This field is required!
                                    </div>
                                    : ""}

                            </Col>


                            <Col>
                                <div className="form-group">
                                    <input type="date" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={(e) => onInputChange(e)} />
                                </div>
                                {error && dateOfBirth.length <= 0 ?
                                    <div className="alert alert-danger" role="alert">
                                        This field is required!
                                    </div>
                                    : ""}
                                <div className="form-group">
                                    <input type="text" name="citizenIdentityNum" id="citizenIdentityNum" className="form-control" placeholder="Identity Number" value={citizenIdentityNum} onChange={(e) => onInputChange(e)} />
                                </div>
                                {error && citizenIdentityNum.length <= 0 ?
                                    <div className="alert alert-danger" role="alert">
                                        This field is required!
                                    </div>
                                    : ""}
                            </Col>
                        </Row>


                        <div className="form-group">
                            <input type="text" name="phoneNum" id="phoneNum" className="form-control" placeholder="Phone number" value={phoneNum} onChange={(e) => onInputChange(e)} />
                        </div>
                        {error && phoneNum.length <= 0 ?
                            <div className="alert alert-danger" role="alert">
                                This field is required!
                            </div>
                            : ""}

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
                        <br />

                        {/* radio button for gender */}
                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="MALE" value={gender} onChange={(e) => onInputChange(e)} />
                            <label htmlFor="MALE" style={{ color: "#34495e" }} className='ms-2'>Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="FEMALE" value={gender} onChange={(e) => onInputChange(e)} />
                            <label htmlFor="FEMALE" style={{ color: "#34495e" }} className='ms-2'>Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="OTHERS" value={gender} onChange={(e) => onInputChange(e)} />
                            <label htmlFor="OTHERS" style={{ color: "#34495e" }} className='ms-2'>Others</label>
                        </div>
                        {error && gender.length <= 0 ?
                            <div className="alert alert-danger" role="alert">
                                This field is required!
                            </div>
                            : ""}

                        {/* <input type="hidden" name="roleID" id="roleID" className="form-control" value={roleID} onChange={(e) => onInputChange(e)} /> */}

                        <div className="form-group">
                            <button type="submit" value="register" id="loginbtn">REGISTER</button>
                        </div>
                    </form>
                    <div className="redirection">
                        <Link to={'/login'} id='redirection'>Back To Login Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}