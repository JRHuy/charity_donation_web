import { useState } from 'react';
// import '../styles/style.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const { userEmail, name, userPassword, phoneNum, citizenIdentityNum, dateOfBirth, gender } = user;

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
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await Axios.post('http://localhost:8080/api/user', user);
        navigate('/admin/users');
    };

    return (
        <div className="outside">
            <div className="form4enter">
                <div className="row justify-content-center">
                <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">REGISTER</h3>
                    <form onSubmit={(e) => onSubmit(e)} method="POST">
                        <div className="form-group">
                            <input type="email" name="userEmail" id="userEmail" className="form-control" placeholder="Enter email" value={userEmail} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Enter password" value={userPassword} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="phoneNum" id="phoneNum" className="form-control" placeholder="Phone number" value={phoneNum} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="citizenIdentityNum" id="citizenIdentityNum" className="form-control" placeholder="Identity Number" value={citizenIdentityNum} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="date" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={(e) => onInputChange(e)} />
                        </div>
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

                        {/* <input type="hidden" name="roleID" id="roleID" className="form-control" value={roleID} onChange={(e) => onInputChange(e)} /> */}

                        <div className="form-group">
                            <button type="submit" value="register" id="loginbtn">REGISTER</button>
                        </div>
                    </form>
                    <div className="redirection">
                        <a href="" id="redirection">Back To Login Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}