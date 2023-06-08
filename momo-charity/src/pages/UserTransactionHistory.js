import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { NumericFormat } from "react-number-format";

export default function UserTransactionHistory() {
    const [transactions, setTransactions] = useState(null);
    const userData = JSON.parse(localStorage.getItem("user"));
    const id = userData.userID;

    useEffect(() => {
        showHistory();
    }, []);

    const showHistory = () => {
        axios.get(`http://localhost:8080/api/user/transaction/${id}`)
            .then(res => {
                // console.log(res.data);
                setTransactions(res.data);
            }).catch(err => console.error(err));
    }

    return (
        <Container style={{ width: "800px" }}>
            <h3>Lịch sử giao dịch</h3>
            <ListGroup>
                {
                    transactions?.map((transaction) => (
                        <ListGroup.Item key={transaction.id} className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                            {transaction?.transaction === "AddMoney" ?
                                <>
                                    <img src="/wallet.png" id="deposit"></img>
                                    <div className="ms-2 me-auto">
                                        <div style={{ color: "black", fontWeight: "bold" }}>Thêm tiền vào tài khoản thành công</div>
                                        <span style={{ fontSize: "13px" }}>{transaction?.transactionTime}</span>
                                    </div>
                                    <div style={{ color: "green", fontWeight: "bold" }}>+
                                        <NumericFormat value={transaction?.money} suffix="đ" displayType="text" thousandSeparator="." decimalSeparator="," />
                                    </div>
                                </> :
                                <>
                                    <img src="/donate.png" id="donate"></img>
                                    <div className="ms-2 me-auto">
                                        <div style={{ color: "black", fontWeight: "bold" }}>Quyên góp thành công vào chương trình {transaction?.program.programName}</div>
                                        <span style={{ fontSize: "13px" }}>{transaction?.transactionTime}</span>
                                    </div>
                                    <div style={{ color: "red", fontWeight: "bold" }}>-
                                        <NumericFormat value={transaction?.money} suffix="đ" displayType="text" thousandSeparator="." decimalSeparator="," />
                                    </div>
                                </>
                            }
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}