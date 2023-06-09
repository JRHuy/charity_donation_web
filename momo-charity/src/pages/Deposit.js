import Axios from "axios";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/style.module.css"

function Deposit() {
    const [error, setError] = useState(false);

    const [money, setMoney] = useState("");
    const [id, setId] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const data = {
        id: id,
        money: money
    }

    const onInputChange = (value) => {
        setId(user.userID);
        setMoney(value);
    };

    const goBack = () => {
        navigate(-1);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (money.length === 0) {
            setError(true);
        } else {
            Axios.post("http://localhost:8080/api/user/deposit", data)
                .then(res => {
                    setSuccess(true);
                    setMoney("");
                    console.log(res.data);
                }).catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className="container">
                <div className="form4enter">
                    <div className="row justify-content-center">
                        <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">THÊM TIỀN VÀO TÀI KHOẢN</h3>
                        <form method="POST" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Nhập số tiền</label>
                                <NumericFormat name="money" id="money" value={money} suffix="đ" displayType="input" type="tel" thousandSeparator="." decimalSeparator="," placeholder="0đ" className={style.money} onValueChange={(values, e) => {
                                    const {formattedValue, value, floatValue} = values;
                                    console.log(values.value);
                                    onInputChange(value);
                                }} />
                                {/* <input type="number" className="form-control" placeholder="0 VND" value={money} onChange={(e) => onInputChange(e)} /> */}
                            </div>
                            {error && money.length <= 0 ?
                                <div className="alert alert-danger" role="alert">
                                    This field is required!
                                </div>
                                : ""}
                            <div className="form-group">
                                <button type="submit" value="register" id="loginbtn">DEPOSIT</button>
                            </div>
                        </form>
                        <div className="redirection">
                            <Link onClick={goBack} id="redirection">Cancel</Link>
                        </div>
                        {success && <div className="alert alert-success" role="alert">
                            Nạp tiền thành công!
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit;