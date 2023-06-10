import { Card, ProgressBar, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardProgramInfo(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Thông tin quyên góp</Card.Title>
        <div className="d-flex gap-1 align-items-baseline">
          <h5 className="pt-2" style={{ fontWeight: "bold" }}>
            {props.currentMoney}
          </h5>
          <span style={{ color: "gray", fontSize: "small" }}>
            {" "}
            quyên góp / {props.target}
          </span>
        </div>
        <ProgressBar variant="warning" now={props.currentPercent}></ProgressBar>
        <Row className="pt-2" style={{ color: "gray" }}>
          <Col>Lượt quyên góp</Col>
          <Col>Đạt được (%)</Col>
          <Col>Thời hạn còn</Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col>{props.count}</Col>
          <Col>{props.currentPercent}</Col>
          <Col>{props.daysLeft}</Col>
        </Row>
        <div className="d-grid gap-2 pt-4">
          <Button variant="warning" size="lg" style={{ color: "white" }}>
            <Link
              to="/details/program/donate"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
              }}
            >
              Quyên góp
            </Link>
          </Button>
        </div>
        <Row>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
        <p>Đồng hành cùng dự án</p>
        <img src={props.partnerImg} id="partner-ProjectDetailed"></img>
        <span className="ms-2">{props.partnerName}</span>
      </Card.Body>
    </Card>
  );
}

export default CardProgramInfo;
