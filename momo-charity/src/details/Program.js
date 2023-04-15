import { Button, Card, Carousel, Col, Container, ListGroup, Navbar, ProgressBar, Row, Stack, Tab, Tabs } from "react-bootstrap";
import chevronRight from "../chevron-right.svg";
import CardItem from "../CardItem";
import CardProgramInfo from "../components/CardProgramInfo";

function Program() {
    return (
        <div>
            <section id="detailedProgram">
                <div className="container pb-3">
                    <i className="fa fa-fw fa-home" />
                    <img src={chevronRight} />
                    <span>Ví Nhân Ái</span>
                    <img src={chevronRight} />
                    <span>Trái tim quyên góp</span>
                </div>
                <Container>
                    <h2 style={{ fontWeight: "bold" }} id="scrollspyCircumstance">Chung tay xây dựng sân chơi cho các em nhỏ khiếm thị tại Trung tâm trẻ em khiếm thị Tây Ninh</h2>
                    <p style={{ color: "gray" }}>❤️ Tăng cường sức khỏe thể chất và tinh thần cho trẻ em khiếm thị tại trung tâm trẻ em khiếm thị Tây Ninh thông qua việc kiến tạo sân chơi hòa nhập.</p>
                    <span style={{ color: "gray" }}>10/04/2023</span>
                    <div className="py-4">
                        <Carousel>
                            <Carousel.Item>
                                <Stack direction="horizontal" gap={3}>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                </Stack>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Stack direction="horizontal" gap={3}>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                    <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142539-638168199392425352.jpg" id="detailed-photos"></img>
                                </Stack>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <Container fluid>
                        <Row>
                            <Col md={7}>
                                <Tabs id="tab-content" defaultActiveKey="story" style={{ justifyContent: "left" }}>
                                    {/* <Tab eventKey="circumstance" title="Hoàn cảnh">/</Tab> */}
                                    <Tab eventKey="story" title="Câu chuyện"></Tab>
                                    <Tab eventKey="donators" title="Nhà hảo tâm"></Tab>
                                </Tabs>
                                <Container className="py-4">
                                    <h3>Câu chuyện</h3>
                                    <p>
                                        Tham gia các hoạt động vui chơi tập thể  là một yếu tố hết sức quan trọng
                                        giúp trẻ em phát triển toàn diện về cả thể chất và trí tuệ. Đồng thời vui
                                        chơi còn giúp trẻ em hoàn thiện các kỹ năng về xã hội, cảm xúc. Đặc biệt
                                        hơn nữa, đối với những em nhỏ khuyết tật, sân chơi vừa là nơi vui chơi
                                        giải trí vừa là nơi trị liệu hỗ trợ phục hồi và tăng cường sức khỏe thể
                                        chất và tinh thần của các em.
                                    </p>
                                    <div className="py-2">
                                        <img className="img-fluid" src="https://static.mservice.io/blogscontents/momo-upload-api-230411142648-638168200084074967.jpg"></img>
                                    </div>
                                    <div className="py-2">
                                        {/* <img className="img-fluid" src="https://static.mservice.io/blogscontents/momo-upload-api-230411142701-638168200215165921.jpg" style={{ width: "672.2px", height: "334.29px" }}></img> */}
                                        <img className="img-fluid" src="https://static.mservice.io/blogscontents/momo-upload-api-230411142701-638168200215165921.jpg"></img>
                                    </div>
                                    <p style={{ fontStyle: "italic", textAlign: "center" }}>Các em nhỏ khiếm thị đang học tập và sinh hoạt tại Trung tâm nuôi dạy trẻ em khiếm thị Tây Ninh</p>
                                    <p>
                                        Think Playgrounds (TPG)  là đơn vị tiên phong trong việc thiết kế và xây dựng các sân chơi sáng tạo tại Việt Nam.
                                        Với mong muốn mọi trẻ em đều được tiếp cận và tham gia vui chơi sáng tạo, đội ngũ thiết kế TPG đã nghiên cứu và
                                        phát triển các thiết kế sân chơi hòa nhập dành cho trẻ em khiếm thị với các góc chơi sáng tạo như: đường mòn giác
                                        quan, hệ âm thanh tương tác, lều trú ẩn… TPG rất mong muốn được hợp tác với các đơn vị để đưa các thiết kế có giá
                                        trị này trở thành những sân chơi trong thực tế để góp phần giúp đỡ các em nhỏ khiếm thị.
                                    </p>
                                    <div className="py-2">
                                        <img className="img-fluid" src="https://static.mservice.io/blogscontents/momo-upload-api-230411142718-638168200381105876.jpg"></img>
                                    </div>
                                    <p style={{ fontStyle: "italic", textAlign: "center" }}>Dự án sân chơi sẽ giúp các em nhỏ khiếm thị được tiếp cận và tham gia vui chơi sáng tạo</p>
                                    <p>
                                        Năm 2023, TPG đề xuất phối hợp cùng Trung tâm nuôi dạy trẻ em khiếm thị Tây Ninh để xây dựng mô hình sân chơi hòa nhập cho trẻ khiếm thị. Sân chơi
                                        sẽ là món quà tinh thần quý giá dành tặng cho 58 trẻ em khiếm thị đang sinh sống và học tập tại trung tâm.
                                    </p>
                                    <p>
                                        Tổng số kinh phí cải tạo sân chơi là 150 triệu đồng. Think Playgrounds rất mong muốn sẽ nhận được sự đóng góp của các mạnh thường quân - những người
                                        yêu mến trẻ thông qua Ví  điện tử MoMo cùng chung tay quyên góp số tiền là 30.000.000 đồng.  Ngoài ra hiện nay, các tổ chức, nhà tài trợ sẽ quy đổi
                                        từ dự án quyên góp Heo Vàng thành số tiền tương ứng 120.000.000 đồng trên Heo Đất MoMo.
                                    </p>
                                    <div className="py-2">
                                        <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142733-638168200531712600.jpg" className="img-fluid"></img>
                                    </div>
                                    <p style={{ fontStyle: "italic", textAlign: "center" }}>Sân chơi là món quà tinh thần quý giá dành tặng cho 58 trẻ em khiếm thị </p>
                                    <p>
                                        Dù quyên góp ít hay nhiều, số tiền mà bạn ủng hộ sẽ được sử dụng cho việc xây dựng thêm hạng mục thiết bị chơi đa năng dành cho trẻ em khuyết tật. Sân chơi sẽ
                                        được đưa vào sử dụng và trở thành một không gian ý nghĩa, sáng tạo góp phần giúp trẻ em khiếm thị hòa nhập và tăng cường sức khỏe tinh thần và thể chất. Dự án
                                        cũng hy vọng từ sự thành công của mô hình sân chơi cho trẻ khiếm thị đầu tiên, TPG và các đối tác có thể nhân rộng mô hình để có thêm nhiều trẻ em khiếm thị
                                        được tiếp cận, hòa nhập tham gia các hoạt động vui chơi sáng tạo.
                                    </p>
                                    <div className="py-2">
                                        <img src="https://static.mservice.io/blogscontents/momo-upload-api-230411142748-638168200689796212.jpg" className="img-fluid"></img>
                                    </div>
                                    <p style={{ fontStyle: "italic", textAlign: "center" }}>Cùng kiến tạo không gian dành tặng các em nhỏ khiếm thị ở Tây Ninh</p>
                                    <p>
                                        Mọi sự đóng của các bạn đều vô cùng quý giá và góp phần kiến tạo nên không gian vui chơi lành mạnh, bổ ích cho trẻ em khiếm thị. Hãy cùng chung tay cùng Think
                                        Playgrounds và các đối tác nhé!
                                    </p>
                                    <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
                                        Về Think Playgrounds:
                                    </p>
                                    <p>
                                        Think playgrounds (TPG) là một doanh nghiệp xã hội được thành lập với sứ mệnh vận động cho “Quyền được chơi” của trẻ em thông qua việc chung tay cải tạo các không
                                        gian công cộng xanh sinh thái thân thiện với trẻ em và với môi trường (sân chơi tái chế, vườn cộng đồng, công viên nhỏ, tác phẩm nghệ thuật cộng đồng….)  Cho đến
                                        cuối năm 2022, TPG cùng các đối tác đã xây dựng hơn 230 sân chơi công cộng và vườn cộng đồng trên cả nước, thử nghiệm mô hình sân chơi phiêu lưu,mô hình Vườn rừng
                                        cộng đồng đầu tiên tại Việt Nam; tổ chức hơn 30 sự kiện chơi trên phố, ngày vui chơi, chơi tái chế... ở Hà Nội và TP HCM. Trong mảng kinh doanh, TPG đã thực hiện
                                        gần 100 sân chơi cho các trường học tư nhân, trang trại giáo dục và các khu đô thị mới. 50% lợi nhuận trong mảng kinh doanh được sử dụng để duy trì các sân chơi
                                        công cộng trong thành phố.
                                    </p>


                                    {/* list of top donators */}
                                    <Row>
                                        <Col xs={12}><hr /></Col>
                                    </Row>
                                    <h3>Nhà hảo tâm hàng đầu</h3>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className="text-center p-3">
                                        <button type="button" className="btn" id="btn-outline-custom">Xem tất cả</button>
                                    </div>


                                    {/* list of newest donators */}
                                    <Row>
                                        <Col xs={12}><hr /></Col>
                                    </Row>
                                    <h3>Nhà hảo tâm mới nhất</h3>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" style={{ color: "gray" }}>
                                            <div className="ms-2 me-auto">
                                                <div style={{ color: "black" }}>Tran Thi Chanh</div>
                                                <span style={{ fontSize: "13px" }}>*******787</span>
                                            </div>
                                            <div style={{ color: "black" }}>200.000đ</div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className="text-center p-3">
                                        <button type="button" className="btn" id="btn-outline-custom">Xem tất cả</button>
                                    </div>

                                </Container>
                            </Col>
                            <Col>
                                {/* <Card>
                                    <Card.Body>
                                        <Card.Title>Thông tin quyên góp</Card.Title>
                                        <div className="d-flex gap-1 align-items-baseline">
                                            <h5 className="pt-2" style={{ fontWeight: "bold" }}>326.000đ</h5>
                                            <span style={{ color: "gray", fontSize: "small" }}> quyên góp / 150.000.000đ</span>
                                        </div>
                                        <ProgressBar variant="warning" now={0.2}></ProgressBar>
                                        <Row className="pt-2" style={{ color: "gray" }}>
                                            <Col>Lượt quyên góp</Col>
                                            <Col>Đạt được</Col>
                                            <Col>Thời hạn còn</Col>
                                        </Row>
                                        <Row style={{ fontWeight: "bold" }}>
                                            <Col>82</Col>
                                            <Col>0.22%</Col>
                                            <Col>59 Ngày</Col>
                                        </Row>
                                        <div className="d-grid gap-2 pt-4">
                                            <Button variant="warning" size="lg">
                                                Quyên góp
                                            </Button>
                                        </div>
                                        <Row>
                                            <Col xs={12}><hr /></Col>
                                        </Row>
                                        <p>Đồng hành cùng dự án</p>
                                        <img src="https://static.mservice.io/blogscontents/momo-upload-api-230413144833-638169941135279441.jpg" id="partner-ProjectDetailed"></img>
                                        <span className="ms-2">MSD United Way</span>
                                    </Card.Body>
                                </Card> */}

                                <CardProgramInfo
                                    currentMoney="326.000đ"
                                    target="150.000.000đ"
                                    currentPercent="0.22%"
                                    count="82"
                                    daysLeft="59 ngày"
                                    partnerImg="https://static.mservice.io/blogscontents/momo-upload-api-230413144833-638169941135279441.jpg"
                                    partnerName="MSD United Way"
                                />

                                <h4 className="mt-5">Chương trình đang diễn ra</h4>
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
                        </Row>
                    </Container>
                </Container>
            </section>
        </div>
    );
}

export default Program;