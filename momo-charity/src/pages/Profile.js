import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'));
    const id = data.userID;
    const [user, setUser] = useState(null);
    const [showMoney, setShowMoney] = useState(false);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        showUserData();
    }, []);

    const toggleShowMoney = () => {
        setShowMoney(!showMoney);
    };

    const showUserData = () => {
        axios.get(`http://localhost:8080/api/user/${id}`).then(res => {
            setUser(res.data);
        }).catch(err => console.log(err))
    }

    return (
        <>
            <div className="container">
                <div className="form4enter">
                    <div className="row justify-content-center">
                        <h1 id='profile_name' className="text-center mt-5 mb-3">{user?.name}</h1>
                        <form>
                            <i class="fa-solid fa-wallet" style={{ color: "#942192", marginRight: "10px" }}></i>
                            <NumericFormat name="money" id="money" suffix="đ" displayType="text" type="tel" thousandSeparator="." decimalSeparator="," value={showMoney ? user?.money : '*****'} />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                id='showMoneyBtn'
                                onClick={toggleShowMoney}
                            >
                                {showMoney ? (
                                    <i className="fa fa-eye"></i>
                                ) : (
                                    <i className="fa fa-eye-slash"></i>
                                )}
                            </button>
                            <div className="form-control mt-3" id="information">
                                <i className="fa-solid fa-phone" style={{ color: "#257426", marginRight: "15px" }}></i>
                                <input style={{ border: "none", backgroundColor: "white" }} type="url" value={user?.phoneNum} disabled />
                            </div>
                            <div className="form-control mt-3" id="information">
                                <i className="fa-solid fa-envelope" style={{ color: "#d29d00", marginRight: "15px" }}></i>
                                <input style={{ border: "none", backgroundColor: "white" }} type="url" value={user?.userEmail} disabled />
                            </div>
                            <div className="form-control mt-3" id="information">
                                <i class="fa-solid fa-cake-candles" style={{ color: "#b51a00", marginRight: "15px" }}></i>
                                <input style={{ border: "none", backgroundColor: "white" }} type="url" value={user?.dateOfBirth} disabled />
                            </div>
                            <div className="form-control mt-3" id="information">
                                {user?.gender === "MALE" ? <i class="fa-solid fa-mars" style={{ color: "#0433ff", marginRight: "16px" }}></i> : <i class="fa-solid fa-venus" style={{ color: "#942192", marginRight: "16px" }}></i>}
                                <input style={{ border: "none", backgroundColor: "white" }} type="url" value={user?.gender} disabled />
                            </div>
                            <div className="form-control mt-3" id="information">
                                <i className="fa-regular fa-id-card" style={{ marginRight: "14px" }}></i>
                                <input style={{ border: "none", backgroundColor: "white" }} type="url" value={user?.citizenIdentityNum} disabled />
                            </div>
                            <div className="form-group">
                                <Link to={`/profile/edit/${user?.userID}`} style={{textDecoration: "none"}}>
                                    <button type="submit" value="register" id="loginbtn">
                                        Chỉnh sửa
                                    </button>
                                </Link>
                            </div>
                        </form>
                        <div className="redirection">
                            <Link onClick={goBack} id="redirection">Thoát</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}