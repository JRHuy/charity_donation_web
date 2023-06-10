import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    // <div id="card-items" className="">
    //     <Button>1</Button>
    //     <div className="card" id="card-context">
    //         <img
    //             src="https://static.mservice.io/blogscontents/momo-upload-api-230323151231-638151811516624864.jpg"
    //             alt=""
    //             className="border rounded-top"
    //         />

    //         <div className="card-body">
    //             <div id="card-title">
    //                 <h5>
    //                     Cùng chung tay xoa dịu nỗi đau mất đi người thân của
    //                     chú Lượm
    //                 </h5>
    //             </div>
    //             <div id="donor-info">
    //                 <div id="donor-avatar" className="avatar">
    //                     <img
    //                         src="https://quytrangkhuyet.com/wp-content/uploads/2021/08/logo.png"
    //                         alt=""
    //                         className=""
    //                     />
    //                 </div>
    //                 <div id="donor-name" className="">
    //                     Quỹ Từ Thiện & BTXH Trăng Khuyết
    //                 </div>
    //                 <span className="badge badge-pill badge-warning">
    //                     Còn 60 Ngày
    //                 </span>
    //             </div>
    //             <div class="money-progress mt-2">
    //                 <strong>10.000đ </strong>
    //                 <span>/ 30.000.000đ</span>
    //             </div>
    //             <div class="progress mt-2">
    //                 <div
    //                     class="progress-bar w-25 bg-danger"
    //                     role="progressbar"
    //                     aria-valuenow="10"
    //                     aria-valuemin="0"
    //                     aria-valuemax="100"
    //                 ></div>
    //             </div>
    //             <div id="donation-info" className="mt-2">
    //                 <div id="donation-count">
    //                     <div id="dc-label">Lượt quyên góp</div>
    //                     <div id="dc-count">1</div>
    //                 </div>
    //                 <div id="percentage">
    //                     <div id="p-label">Đạt được</div>
    //                     <div id="p-count">0.03%</div>
    //                 </div>
    //                 <a
    //                     href=""
    //                     id="donate-btn"
    //                     className="stretched-link text-decoration-none"
    //                 >
    //                     Quyên góp
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <Card style={{ width: "20rem" }} className="my-4 mx-auto">
      <Link
        to={`/details/program/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <h5 className="program-title">{props.title}</h5>
        </Card.Body>
      </Link>
      <Card.Footer className="">
        <div className="d-flex align-items-center gap-2 mt-2">
          <div className="avatar flex-shrink-0">
            <Image src={props.avatar}></Image>
          </div>
          <div className="org-name">{props.orgName}</div>
          <Badge pill bg="warning" className="flex-shrink-0">
            Còn {props.dayCount} ngày
          </Badge>
        </div>
        <div className="d-flex gap-1 mt-2">
          <strong>{props.current}</strong>
          <span>/ {props.target}</span>
        </div>
        <ProgressBar variant="danger" now={props.pbar} />
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="d-flex flex-column">
            <span className="count-label">Lượt quyên góp</span>
            <strong>{props.donateCount}</strong>
          </div>
          <div className="d-flex flex-column">
            <span className="count-label">Đạt được</span>
            <strong>{props.donatePercentage}</strong>
          </div>
          <Button id="btn-quyengop" variant="outline-danger">
            Quyên góp
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
