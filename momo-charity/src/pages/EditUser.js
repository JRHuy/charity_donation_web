import { useEffect, useState } from 'react';
// import '../styles/style.css';
import Axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let { id } = useParams();
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

    useEffect(() => {
        loadUser();
    }, []);

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

    // Submit event
    const onSubmit = async (e) => {
        e.preventDefault();
        await Axios.put(`http://localhost:8080/api/user/${id}`, user);
        navigate('/admin/users');
    };

    const loadUser = () => {
        Axios.get(`http://localhost:8080/api/user/${id}`).then((res) => {
            setUser(res.data);
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div id="outside">
            <div className="form4enter">
                <div className="row justify-content-center">
                    <h3 style={{ fontWeight: "500", color: "red !important" }} className="text-center text-secondary mt-5 mb-3">EDIT INFORMATION</h3>
                    <form onSubmit={(e) => onSubmit(e)} method="POST">
                        <div className="form-group">
                            <input type="email" name="userEmail" id="userEmail" className="form-control" placeholder="Enter email" value={userEmail} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="userPassword" id="userPassword" className="form-control" placeholder="Enter password" value={userPassword} onChange={(e) => onInputChange(e)} />
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

                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="MALE" value={gender} onChange={(e) => onInputChange(e)} checked={gender === "MALE"} />
                            <label htmlFor="MALE" style={{ color: "#34495e" }} className='ms-2'>Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="FEMALE" value={gender} onChange={(e) => onInputChange(e)} checked={gender === "FEMALE"} />
                            <label htmlFor="FEMALE" style={{ color: "#34495e" }} className='ms-2'>Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" name="gender" id="OTHERS" value={gender} onChange={(e) => onInputChange(e)} checked={gender === "OTHERS"} />
                            <label htmlFor="OTHERS" style={{ color: "#34495e" }} className='ms-2'>Others</label>
                        </div>

                        {/* <input type="hidden" name="roleID" id="roleID" className="form-control" value={roleID} onChange={(e) => onInputChange(e)} /> */}

                        <div className="form-group">
                            <button type="submit" id="loginbtn">UPDATE</button>
                        </div>
                    </form>
                    <div className="redirection">
                        <Link to="/admin/users" id='redirection'>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}