import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

export default function UserTransactionHistory() {
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        showHistory();
    }, []);

    const showHistory = () => {
        axios.get('http://localhost:8080/transactions')
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
                            {transaction.transaction === "AddMoney" ?
                                <>
                                    <img src="/wallet.png" id="deposit"></img>
                                    <div className="ms-2 me-auto">
                                        <div style={{ color: "black", fontWeight: "bold" }}>Thêm tiền vào tài khoản thành công</div>
                                        <span style={{ fontSize: "13px" }}>{transaction?.transactionTime}</span>
                                    </div>
                                    <div style={{ color: "black", fontWeight: "bold" }}>+{transaction?.money}đ</div>
                                </> :
                                <>
                                    <img src="/donate.png" id="donate"></img>
                                    <div className="ms-2 me-auto">
                                        <div style={{ color: "black", fontWeight: "bold" }}>Quyên góp thành công vào chương trình {transaction?.program.programName}</div>
                                        <span style={{ fontSize: "13px" }}>{transaction?.transactionTime}</span>
                                    </div>
                                    <div style={{ color: "black", fontWeight: "bold" }}>-{transaction?.money}đ</div>
                                </>
                            }
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}