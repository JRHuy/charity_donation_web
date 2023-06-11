import "../App.css";
// import BottomCredit from "./BottomCredit";
import chevronRight from "../chevron-right.svg";
import Partner from "../components/Partner";
import CardItem from "../components/CardItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
// import Navbar from "./Navbar";
import ReadMoreReadLess from "../components/ReadMoreReadLess";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [program1, setProgram1] = useState(null);
  const [program2, setProgram2] = useState(null);
  const [program3, setProgram3] = useState(null);
  const [program4, setProgram4] = useState(null);
  const [program5, setProgram5] = useState(null);
  const [program6, setProgram6] = useState(null);
  const [dayCount1, setDayCount1] = useState(null);
  const [dayCount2, setDayCount2] = useState(null);
  const [dayCount3, setDayCount3] = useState(null);
  const [dayCount4, setDayCount4] = useState(null);
  const [dayCount5, setDayCount5] = useState(null);
  const [dayCount6, setDayCount6] = useState(null);

  useEffect(() => {
    showProgram1();
    showProgram2();
    showProgram3();
    showProgram4();
    showProgram5();
    showProgram6();
  }, []);

  const showProgram1 = () => {
    axios
      .get("http://localhost:8080/program/1")
      .then((res) => {
        // console.log(res.data);
        setProgram1(res.data);
        setDayCount1(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const showProgram2 = () => {
    axios
      .get("http://localhost:8080/program/2")
      .then((res) => {
        setProgram2(res.data);
        setDayCount2(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const showProgram3 = () => {
    axios
      .get("http://localhost:8080/program/3")
      .then((res) => {
        setProgram3(res.data);
        setDayCount3(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const showProgram4 = () => {
    axios
      .get("http://localhost:8080/program/4")
      .then((res) => {
        setProgram4(res.data);
        setDayCount4(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const showProgram5 = () => {
    axios
      .get("http://localhost:8080/program/5")
      .then((res) => {
        setProgram5(res.data);
        setDayCount5(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const showProgram6 = () => {
    axios
      .get("http://localhost:8080/program/52")
      .then((res) => {
        setProgram6(res.data);
        setDayCount6(dayCalculate(res.data.deadline));
      })
      .catch((err) => console.log(err));
  };
  const dayCalculate = (deadline) => {
    const current = new Date();
    const final = new Date(deadline);

    return Math.ceil((final - current) / (1000 * 60 * 60 * 24));
  };

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

      <section id="block-2">
        <div className="container pb-3">
          <i className="fa fa-fw fa-home" />
          <img src={chevronRight} />
          <span>Ví Nhân Ái</span>
        </div>
        <img src="momo_banner.jpg" className="img-fluid" alt="banner" />
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pb-3">Ví Nhân Ái - Thiện nguyện mỗi ngày</h1>
              <p className="pb-2">
                Ví Nhân Ái là tính năng tập hợp tất cả các dự án, tổ chức đang
                gây quỹ từ thiện trên MoMo. Nơi bạn có thể thực hiện “sống tốt”
                bằng cách quyên góp Heo Vàng hoặc tiền mặt.{" "}
              </p>
              <p className="pb-2">Nhìn lại chặng đường Ví Nhân Ái đã đi qua</p>
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
                    <h5 className="">874</h5>
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
                    <h5>56+ tỷ</h5>
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
                    <h5>777+ triệu</h5>
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
                    <h5>128+ triệu</h5>
                  </div>
                  <p>lượt quyên góp</p>
                </div>
              </div>
              <div className="hstack gap-2 pb-3">
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ color: "white" }}
                >
                  Quyên góp
                </button>
                <button type="button" className="btn btn-outline-info">
                  Giới thiệu
                </button>
              </div>
            </div>
            <div className="col-6 mobile-img">
              <img
                src="vi-nhan-ai.png"
                className="img-fluid"
                alt="vi-nhan-ai"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="block-a">
        <div id="text-header-a" className="text-center p-5">
          <h2>Các hoàn cảnh quyên góp</h2>
          <h3 id="sub-header">
            Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả
            nước.
          </h3>
        </div>
        <ul className="nav nav-tabs">
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
        </ul>
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
            <Col>
              <CardItem
                id={program1?.programID}
                image={program1?.imageLink}
                title={program1?.programName}
                avatar={program1?.organization.pfpLink}
                orgName={program1?.organization.organizationName}
                dayCount={dayCount1}
                current={program1?.currentMoney + " VND"}
                target={program1?.targetMoney + " VND"}
                pbar="10"
                donateCount={program1?.donateTotal}
                donatePercentage="2.97%"
              />
              <CardItem
                image={program2?.imageLink}
                title={program2?.programName}
                avatar={program1?.organization.pfpLink}
                orgName={program2?.organization.organizationName}
                dayCount={dayCount2}
                current={program2?.currentMoney + " VND"}
                target={program2?.targetMoney + " VND"}
                pbar="10"
                donateCount={program2?.donateTotal}
                donatePercentage="2.97%"
              />
            </Col>
            <Col>
              <CardItem
                // image="https://static.mservice.io/blogscontents/momo-upload-api-230407133412-638164712526405249.jpg"
                id={program3?.programID}
                image={program3?.imageLink}
                title={program3?.programName}
                avatar={program3?.organization.pfpLink}
                orgName={program3?.organization.organizationName}
                dayCount={dayCount3}
                current={program3?.currentMoney + " VND"}
                target={program3?.targetMoney + " VND"}
                pbar="10"
                donateCount={program3?.donateTotal}
                donatePercentage="2.97%"
              />
              <CardItem
                image={program4?.imageLink}
                title={program4?.programName}
                avatar={program4?.organization.pfpLink}
                orgName={program4?.organization.organizationName}
                dayCount={dayCount4}
                current={program4?.currentMoney + " VND"}
                target={program4?.targetMoney + " VND"}
                pbar="10"
                donateCount={program4?.donateTotal}
                donatePercentage="2.97%"
              />
            </Col>
            <Col>
              <CardItem
                image={program5?.imageLink}
                title={program5?.programName}
                avatar={program5?.organization.pfpLink}
                orgName={program5?.organization.organizationName}
                dayCount={dayCount5}
                current={program5?.currentMoney + " VND"}
                target={program5?.targetMoney + " VND"}
                pbar="10"
                donateCount={program5?.donateTotal}
                donatePercentage="2.97%"
              />
              <CardItem
                image={program6?.imageLink}
                title={program6?.programName}
                avatar={program6?.organization.pfpLink}
                orgName={program6?.organization.organizationName}
                dayCount={dayCount6}
                current={program6?.currentMoney + " VND"}
                target={program6?.targetMoney + " VND"}
                pbar="10"
                donateCount={program6?.donateTotal}
                donatePercentage="2.97%"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ví Nhân Ái - Thiện nguyện mỗi ngày */}
      <section id="block-3">
        <div id="text-header-2" className="text-center p-5">
          <h2>
            <b>Ví Nhân Ái - Thiện nguyện mỗi ngày</b>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div id="col-1" className="col">
              <img
                id="img-1"
                src="1.png"
                className="rounded-4 shadow-4 float-xl-start"
                alt="ad"
                style={{ width: "100px", height: "90px" }}
              />
              <h3 className="title-block-3">Quyên góp nhanh chóng, dễ dàng</h3>
              <div>
                <p></p>
                <p id="text-col">
                  Chỉ với vài chạm, bạn đã góp phần giúp đỡ 1 hoàn cảnh khó khăn
                  có cuộc sống tốt đẹp hơn.
                </p>
              </div>

              <div>
                {" "}
                <br />{" "}
              </div>

              <img
                id="img-2"
                src="2.png"
                className="rounded-4 shadow-4 float-xl-start"
                alt="ad"
                style={{ width: "100px", height: "90px" }}
              />
              <h3 className="title-block-3">1000đ cũng là đáng quý</h3>
              <div>
                <p></p>
                <p id="text-col">
                  Với mức ủng hộ tối thiểu 1.000 đồng, bạn đã cùng hàng triệu
                  nhà hảo tâm khác của “Trái tim MoMo” giúp đỡ những mảnh đời
                  khó khăn.
                </p>
              </div>
            </div>

            <div id="col-2" className="col-4">
              <div id="container-image" className="container">
                <img
                  src="vinhanai.jpeg"
                  className="rounded mx-auto d-block img-fluid"
                  alt="vi-nhan-ai"
                />
                <div className="reason-cta absolute bottom-4 w-full text-center">
                  <div className="qrtype-22 w-full md:flex md:items-center md:justify-center">
                    <button type="button" className="btn-primary">
                      QUYÊN GÓP NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div id="col-3" className="col">
              <img
                id="img-3"
                src="3.png"
                className="rounded-4 shadow-4 float-end"
                alt="ad"
                style={{ width: "100px", height: "90px" }}
              />
              <h3 className="title-block-3 text-end">
                Minh bạch, công khai mọi khoản đóng góp
              </h3>
              <div>
                <p></p>
                <p id="text-col" className="text-end">
                  Mọi thông tin về hoạt động đóng góp, tài trợ đều được công
                  khai và cập nhật liên tục.
                </p>
              </div>

              <div>
                {" "}
                <br />{" "}
              </div>

              <img
                id="img-4"
                src="4.png"
                className="rounded-4 shadow-4 float-end"
                alt="ad"
                style={{ width: "100px", height: "90px" }}
              />
              <h3 className="title-block-3 text-end">
                Đối tác của các cơ quan, tổ chức hảo tâm uy tín
              </h3>
              <div>
                <p></p>
                <p id="text-col" className="text-end">
                  “Trái tim MoMo” đã và đang kết nối được với rất nhiều đơn vị
                  bảo trợ, báo chí, đơn vị hảo tâm uy tín trên cả nước.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Các đối tác đồng hành  */}
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

      {/* Khi thiện nguyện là nguồn hạnh phúc */}
      <section id="block-5">
        <div id="text-header-2" className="text-center p-5">
          <h2>
            <b>Khi thiện nguyện là nguồn hạnh phúc</b>
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

      {/* Phần thông tin ở cuối trang */}
      {/* <BottomCredit /> */}
    </div>
  );
}

export default Home;
