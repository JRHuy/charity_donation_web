import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardProgramInfo from "../components/CardProgramInfo";
import axios from "axios";

function Donate() {
    const [error, setError] = useState(false);

    const [money, setMoney] = useState("");
    const [user, setUser] = useState("");
    const [program, setProgram] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("user"));

    const [donateInfo, setDonateInfo] = useState(null);

    useEffect(() => {
        showInfo();
    }, [])

    const showInfo = () => {
        axios.get("http://localhost:8080/program/1")
            .then((res) => {
                // console.log(res.data.programName);
                setDonateInfo(res.data);
            }).catch(err => console.log(err))
    }

    const data = {
        user: userData,
        program: program,
        money: money
    }

    const onInputChange = (e) => {
        setUser(user);
        setProgram(donateInfo);
        setMoney(e.target.value);
    };

    const goBack = () => {
        navigate(-1);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (money.length === 0) {
            setError(true);
        } else {
            Axios.post("http://localhost:8080/api/user/donate", data)
                .then(res => {
                    setSuccess(true);
                    setMoney("")
                }).catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className="container">
                <div className="form4enter">
                    <div className="row justify-content-center">
                        <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">QUYÊN GÓP</h3>
                        <form method="POST" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Chương trình quyên góp</label>
                                <input type="url" name="money" id="money" className="form-control" value={donateInfo?.programName} disabled />
                            </div>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Nhập số tiền bạn muốn quyên góp</label>
                                <input type="number" name="money" id="money" className="form-control" placeholder="0 VND" value={money} onChange={(e) => onInputChange(e)} />
                            </div>
                            {error && money.length <= 0 ?
                                <div className="alert alert-danger" role="alert">
                                    This field is required!
                                </div>
                                : ""}
                            <div className="form-group">
                                <button type="submit" value="register" id="loginbtn">Nạp tiền</button>
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
        </>
    )
}

export default Donate;