import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import style from "../styles/style.module.css"

function Donate() {
    const [error, setError] = useState(false);

    const [money, setMoney] = useState("");
    const [user, setUser] = useState("");
    const [program, setProgram] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("user"));

    const [donateInfo, setDonateInfo] = useState(null);

    const params = useParams();

    // handle check password to confirm transation
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [userPhoneNum, setUserPhoneNum] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [wrongPassword, setWrongPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        showInfo();
    }, [])

    const showInfo = () => {
        axios.get(`http://localhost:8080/program/${params.programID}`)
            .then((res) => {
                console.log(res.data);
                setDonateInfo(res.data);
            }).catch(err => console.log(err))
    }

    const data = {
        user: userData,
        program: program,
        money: money
    }

    const onInputChange = (value) => {
        setUser(user);
        setProgram(donateInfo);
        setMoney(value);
    };

    const goBack = () => {
        navigate(-1);
    }

    // pop-up to ask for credentials
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleTransationClick = (e) => {
        e.preventDefault();
        setUserPhoneNum(userData.phoneNum);
        setShowConfirmDialog(true);
    };

    const onPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleConfirmTransaction = () => {
        const user = {
            'phoneNum': userPhoneNum,
            'userPassword': userPassword
        }
        Axios.post('http://localhost:8080/api/auth/login', user)
            .then(() => {
                setShowConfirmDialog(false);
                onSubmit();
            }).catch(err => {
                console.log(err);
                setWrongPassword(true);
            });
    };

    const handleCancel = () => {
        setShowConfirmDialog(false);
    };

    const onSubmit = () => {
        if (money.length === 0) {
            setError(true);
        } else {
            Axios.post("http://localhost:8080/api/user/donate", data)
                .then(() => {
                    setSuccess(true);
                    setMoney("");
                }).catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className="container">
                <div className="form4enter">
                    <div className="row justify-content-center">
                        <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">QUYÊN GÓP</h3>
                        <form method="POST" onSubmit={(e) => handleTransationClick(e)}>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Chương trình quyên góp</label>
                                <input type="url" name="money" id="money" className="form-control" value={donateInfo?.programName} disabled />
                            </div>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Nhập số tiền bạn muốn quyên góp</label>
                                {/* <input type="number" name="money" id="money" className="form-control" placeholder="0 VND" value={money} onChange={(e) => onInputChange(e)} /> */}
                                <NumericFormat name="money" id="money" value={money} suffix="đ" displayType="input" type="tel" thousandSeparator="." decimalSeparator="," placeholder="0đ" className={style.money} onValueChange={(values, e) => {
                                    const { value } = values;
                                    onInputChange(value);
                                }} />
                            </div>
                            {error && money.length <= 0 ?
                                <div className="alert alert-danger" role="alert">
                                    Không được để trống ô này!
                                </div>
                                : ""}
                            <div className="form-group">
                                <button type="submit" value="register" id="loginbtn">Quyên góp ngay</button>
                            </div>
                        </form>
                        <div className="redirection">
                            <Link onClick={goBack} id="redirection">Hủy</Link>
                        </div>
                        {success && <div className="alert alert-success" role="alert">
                            Quyên góp thành công!
                        </div>}
                    </div>
                </div>
            </div>

            {showConfirmDialog && (
                <div className='modal-overlay'>
                    <div className='modalContainer'>
                        <h3>Xác nhận</h3>
                        <p>Vui lòng nhập mật khẩu để xác nhận</p>
                        <div className="form-group" style={{ display: "inline-flex", justifyContent: "center" }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="userPassword"
                                id="userPassword"
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                                value={userPassword}
                                onChange={(e) => onPasswordChange(e)}
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
                        {wrongPassword &&
                            <div className="alert alert-danger" role="alert">
                                Mật khẩu vừa nhập không chính xác!
                            </div>
                        }
                        <div>
                            <button
                                className='btn btn-confirm btn-danger'
                                onClick={handleConfirmTransaction}
                            >
                                Xác nhận
                            </button>
                            <button
                                className='btn btn-cancel btn-secondary'
                                onClick={handleCancel}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Donate;