import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        showHistory();
    }, []);

    const showHistory = () => {
        axios.get('http://localhost:8080/transactions')
            .then(res => {
                console.log(res.data);
                setTransactions(res.data);
            }).catch(err => console.error(err));
    }

    const showImg = (type) => {
        if (type === "AddMoney") {
            <img src="wallet.png" id="deposit"></img>
        } else {
            <img src="donate.png" id="donate"></img>
        }
    }

    return (
        <Container style={{ width: "800px" }}>
            <h3>Nhà hảo tâm hàng đầu</h3>
            <ListGroup>
                {/* <ListGroup.Item className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                    <img src="wallet.png" id="deposit"></img>
                    <div className="ms-2 me-auto">
                        <div style={{ color: "black", fontWeight: "bold" }}>Thêm tiền vào tài khoản thành công</div>
                        <span style={{ fontSize: "13px" }}>06/06/2023 11:02</span>
                    </div>
                    <div style={{ color: "black", fontWeight: "bold" }}>+200.000đ</div>
                </ListGroup.Item> */}
                {
                    transactions?.map((transaction) => (
                        <ListGroup.Item key={transaction.id} className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                            {transaction.transaction === "AddMoney" ?
                                <>
                                    <img src="wallet.png" id="deposit"></img>
                                    <div className="ms-2 me-auto">
                                        <div style={{ color: "black", fontWeight: "bold" }}>Thêm tiền vào tài khoản thành công</div>
                                        <span style={{ fontSize: "13px" }}>06/06/2023 11:02</span>
                                    </div>
                                    <div style={{ color: "black", fontWeight: "bold" }}>+{transaction?.money}đ</div>
                                </> :
                                <>
                                    <img src="donate.png" id="donate"></img>
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
            {/* <div className="text-center p-3">
                <button type="button" className="btn" id="btn-outline-custom">Xem tất cả</button>
            </div> */}
        </Container>
    )
}