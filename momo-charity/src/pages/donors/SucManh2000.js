import React, { useEffect, useState } from "react";
import "../../App.css";
// import BottomCredit from "./BottomCredit";
import chevronRight from "../../chevron-right.svg";
import Partner from "../../components/Partner";
import CardItem from "../../components/CardItem";
import Button from "react-bootstrap/button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
// import Navbar from "./Navbar";
import ReadMoreReadLess from "../../components/ReadMoreReadLess";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SucManh2000() {
  const [org, setOrg] = useState(null);
  const params = useParams();
  const fetchOrg = () => {
    axios
      .get(`http://localhost:8080/organization/${params.organizationID}`)
      .then((res) => {
        console.log(res.data);
        setOrg(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let value = document.querySelectorAll(".num");
    let interval = 3000;
    value.forEach((value) => {
      let start = 0;
      let end = parseInt(value.getAttribute("data-val"));
      let duration = Math.floor(interval / end);
      let counter = setInterval(() => {
        start += 1;
        value.textContent = start;
        if (start == end) {
          clearInterval(counter);
        }
      }, duration);
    });
    fetchOrg();
  }, []);

  return (
    <div>
      {/* ------------------ Section 1 ----------------- */}
      {/* <Navbar /> */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ví Nhân Ái - Triệu người chung tay quyên góp vì một Việt Nam tốt đẹp
          hơn | MoMo
        </title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <meta name="description" content="Home" />
      </Helmet>
      <div className="container pb-3">
        <i className="fa fa-fw fa-home" />
        <img src={chevronRight} />
        <span>Ví Nhân Ái</span>
        <img src={chevronRight} />
        <span>Đối Tác Đồng Hành</span>
        <img src={chevronRight} />
        <span>{org?.organizationName}</span>
      </div>
      <section id="block-2a">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pb-3" style={{ color: "#d82f8b" }}>
                {org?.organizationName}
              </h1>
              <p className="pb-2">
                {org?.description}
                <br />
                <span></span>
                <br />
                Mỗi người{" "}
                <strong style={{ color: "#d82f8b" }}>2.000 đồng/ngày</strong>,
                chúng tôi đã xây dựng trong 10 năm qua
              </p>

              <div className="row">
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{
                        color: "darkviolet",
                        width: "2px",
                      }}
                    ></div>
                    <h5 className="num" data-val="874">
                      0
                    </h5>
                  </div>
                  <p>dự án đã được gây quỹ thành công</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{
                        color: "darkviolet",
                        width: "2px",
                      }}
                    ></div>
                    <h5>
                      <span className="num" data-val="56">
                        0
                      </span>
                      <span>+ tỷ</span>
                    </h5>
                  </div>
                  <p>đồng được quyên góp</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{
                        color: "darkviolet",
                        width: "2px",
                      }}
                    ></div>
                    <h5>
                      <span className="num" data-val="777">
                        0
                      </span>
                      <span>+ triệu</span>
                    </h5>
                  </div>
                  <p>heo vàng được quyên góp</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{
                        color: "darkviolet",
                        width: "2px",
                      }}
                    ></div>
                    <h5>
                      <span className="num" data-val="128">
                        0
                      </span>{" "}
                      <span>+ triệu</span>
                    </h5>
                  </div>
                  <p>lượt quyên góp</p>
                </div>
              </div>
              <div className="hstack gap-2 pb-3">
                <button type="button" id="quyengop-btn" className="btn">
                  Quyên góp
                </button>
                <button type="button" className="btn" id="gioithieu-btn">
                  Giới thiệu
                </button>
              </div>
            </div>
            <div className="col-6 mobile-img">
              <img
                src={org?.program[0]?.imageLink}
                className="img-fluid"
                alt="vi-nhan-ai"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="text-header-a" className="text-center p-5">
          <h2 id="text-header-a">Chương trình quyên góp</h2>
          <h3 id="sub-header">
            Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả
            nước.
          </h3>
        </div>
        {/* <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Trái Tim MoMo
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Heo Đất MoMo
            </a>
          </li>
        </ul> */}
        {/* <div id="info-container">
                <CardItem></CardItem>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div> */}
        <Container>
          <Row xs={1} md={2} lg={3}>
            {org?.program?.map((prog) => {
              return (
                <Col>
                  <CardItem
                    image={prog?.imageLink}
                    title={prog?.programName}
                    avatar={org?.pfpLink}
                    orgName={org?.organizationName}
                    dayCount="57"
                    current={prog?.currentMoney}
                    target={prog?.targetMoney}
                    pbar="10"
                    donateCount="0"
                    donatePercentage="2.97%"
                  />
                </Col>
              );
            })}
            {/* <Col>
              <CardItem
                image="https://static.mservice.io/blogscontents/momo-upload-api-230407133412-638164712526405249.jpg"
                title="Chung tay xây điểm trường mới giúp các em học sinh nghèo khó khăn Bản Xía Nọi chuyên tâm học tập"
                avatar="https://static.mservice.io/blogscontents/momo-upload-api-230407133501-638164713012492867.jpg"
                orgName="Đoàn Thanh niên cơ quan Trung ương Đoàn"
                dayCount="57"
                current="4.459.000đ"
                target="150.000.000đ"
                pbar="10"
                donateCount="612"
                donatePercentage="2.97%"
              />
              <CardItem
                image="https://static.mservice.io/blogscontents/momo-upload-api-230407133412-638164712526405249.jpg"
                title="Chung tay xây điểm trường mới giúp các em học sinh nghèo khó khăn Bản Xía Nọi chuyên tâm học tập"
                avatar="https://static.mservice.io/blogscontents/momo-upload-api-230407133501-638164713012492867.jpg"
                orgName="Đoàn Thanh niên cơ quan Trung ương Đoàn"
                dayCount="57"
                current="4.459.000đ"
                target="150.000.000đ"
                pbar="10"
                donateCount="612"
                donatePercentage="2.97%"
              />
            </Col>
            <Col>
              <CardItem
                image="https://static.mservice.io/blogscontents/momo-upload-api-230407133412-638164712526405249.jpg"
                title="Chung tay xây điểm trường mới giúp các em học sinh nghèo khó khăn Bản Xía Nọi chuyên tâm học tập"
                avatar="https://static.mservice.io/blogscontents/momo-upload-api-230407133501-638164713012492867.jpg"
                orgName="Đoàn Thanh niên cơ quan Trung ương Đoàn"
                dayCount="57"
                current="4.459.000đ"
                target="150.000.000đ"
                pbar="10"
                donateCount="612"
                donatePercentage="2.97%"
              />
              <CardItem
                image="https://static.mservice.io/blogscontents/momo-upload-api-230407133412-638164712526405249.jpg"
                title="Chung tay xây điểm trường mới giúp các em học sinh nghèo khó khăn Bản Xía Nọi chuyên tâm học tập"
                avatar="https://static.mservice.io/blogscontents/momo-upload-api-230407133501-638164713012492867.jpg"
                orgName="Đoàn Thanh niên cơ quan Trung ương Đoàn"
                dayCount="57"
                current="4.459.000đ"
                target="150.000.000đ"
                pbar="10"
                donateCount="612"
                donatePercentage="2.97%"
              />
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Ví Nhân Ái - Thiện nguyện mỗi ngày */}

      {/* Khi thiện nguyện là nguồn hạnh phúc */}
      <section id="block-5">
        <div id="text-header-2" className="text-center p-5">
          <h2>
            <b>2.000 đồng tuy nhỏ nhưng mang ý nghĩa phi thường</b>
          </h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div id="col-paragraph" className="col-10">
              <p id="paragraph">
                <p>
                  Đời sống xã hội ngày càng được nâng cao cũng là lúc người ta
                  phát sinh nhu cầu muốn được chia sẻ, được đóng góp cho xã hội,
                  giúp đỡ những cộng đồng yếu thế, những hoàn cảnh khó khăn.
                </p>

                <p>
                  Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà
                  còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý
                  nghĩa. Với tôn chỉ “người dùng hạnh phúc”, MoMo quyết định
                  khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện
                  nguyện.
                </p>
                <ReadMoreReadLess limit={300}>
                  <p>
                    Có sẵn ưu thế nền tảng công nghệ cao, hướng tới sự thuận
                    tiện và minh bạch, Trái tim MoMo liên kết với những quỹ
                    thiện nguyện, những dự án cộng đồng, trở thành cầu nối cho
                    các nhà hảo tâm.
                  </p>

                  <p>
                    Việc quyên góp tiền từ thiện trở nên đơn giản, chỉ gói gọn
                    trong vài thao tác nhỏ trên điện thoại thông minh. Các thông
                    tin về đóng góp, tài trợ được công khai và cập nhật liên
                    tục, người dùng có thể dễ dàng tra cứu.
                  </p>

                  <p>
                    Từ đó, những dự án đầy ý nghĩa như Sức mạnh 2000; Quỹ Hy
                    Vọng; Hoa Chia Sẻ… nhận được thêm nhiều nguồn lực đóng góp.
                  </p>

                  <p>
                    Một trong những dự án thiện nguyện nổi bật được liên kết với
                    Ví MoMo phải kể đến Sức mạnh 2000, dự án quyên góp tiền xây
                    trường học vùng cao với ý tưởng “xin” nhà hảo tâm 2.000 đồng
                    mỗi ngày.
                  </p>

                  <p>
                    Anh Hoàng Hoa Trung, đại diện dự án từng nhận xét, MoMo là
                    nền tảng phù hợp nhất bởi “chẳng có hệ thống nào khác giúp
                    tự trừ 2.000 đồng mỗi ngày”.
                  </p>

                  <p>
                    Tầm nhìn của dự án Sức mạnh 2000 cũng tương đồng với thông
                    điệp về thiện nguyện của MoMo là “một ngàn đồng cũng đáng
                    quý”. Với mức quyên góp tối thiểu 1.000 đồng, người dùng
                    MoMo có thể tận dụng tiền lẻ sau mỗi lần giao dịch để làm từ
                    thiện, chỉ là số tiền nhỏ nhưng đem lại những giá trị lớn
                    lao, cao cả.
                  </p>

                  <p>
                    Đối với tính năng Heo đất MoMo, người dùng nhận được Heo
                    vàng sau mỗi lần giao dịch, chuyển tiền hoặc những hoạt động
                    như đi bộ, dậy sớm, giải câu đố, tương tác với bạn bè… Heo
                    Vàng được quy đổi thành tiền và quyên góp vào các dự án
                    thiện nguyện.
                  </p>

                  <p>
                    Ngoại trừ chi phí chuyển khoản ngân hàng, 100% số tiền quyên
                    góp được từ Heo đất MoMo được chuyển tới các tổ chức bảo
                    trợ, tổ chức từ thiện. Trong trường hợp gây quỹ không thành
                    công (không đủ số Heo vàng), MoMo vẫn chuyển số tiền tương
                    ứng với số Heo vàng đã nhận được hoặc có thể gia hạn thời
                    gian gây quỹ.
                  </p>

                  <p>
                    Ra mắt từ tháng 9/2019, những chú Heo Vàng đã đồng hành cùng
                    nhiều nhà tài trợ, quyên góp được hơn 45 tỷ đồng tiền mặt và
                    hơn 520 triệu Heo Vàng (tính đến tháng 6/2022, trung bình 1
                    Heo Vàng trị giá 140đ), hỗ trợ cho hơn 94 nghìn em nhỏ có
                    hoàn cảnh khó khăn, giúp các em được ăn no, được đến trường.
                  </p>

                  <p>
                    “Ngoài số tiền quy đổi, ý nghĩa của Heo đất MoMo còn nằm ở
                    thông điệp: thiện nguyện không phải là điều gì to tát, mà
                    chỉ là công việc hàng ngày, ai ai cũng có thể góp sức, dù
                    chỉ bằng việc đi bộ, dậy sớm, có lối sống lành mạnh. Những
                    điều nhỏ bé đó không chỉ cùng nhau tạo nên sự thay đổi vĩ
                    đại cho cộng đồng, mà còn là nguồn cảm hứng sống tích cực
                    cho mỗi người dùng Ví MoMo”, ông Diệp chia sẻ.
                  </p>

                  <p>
                    Theo :{" "}
                    <a href="https://theleader.vn">https://theleader.vn</a>/
                  </p>
                </ReadMoreReadLess>
              </p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <section id="block-4">
        <div id="text-header-2" className="text-center p-5">
          <h2>
            <b>Các đối tác đồng hành</b>
          </h2>
          <h5 id="text-header-5" className="text-center">
            Các tổ chức nhân đạo Phi Lợi Nhuận đồng hành cùng Ví MoMo giúp đỡ
            các hoàn cảnh khó khăn
            <br /> trên khắp cả nước.
          </h5>
        </div>
      </section>
      <Partner />

      {/* Phần thông tin ở cuối trang */}
      {/* <BottomCredit /> */}
    </div>
  );
}
