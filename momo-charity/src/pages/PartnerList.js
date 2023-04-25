import { Container, Row, Col } from "react-bootstrap";
import chevronRight from "../chevron-right.svg";
import PartnerCard from "../components/PartnerCard";
import ReadMoreReadLess from "../components/ReadMoreReadLess";
import CardItem from "../components/CardItem";

function PartnerList() {
    return (
        <>
            <section id="partnerlist">
                <div className="container pb-3">
                    <i className="fa fa-fw fa-home" />
                    <img src={chevronRight} />
                    <span>Ví Nhân Ái</span>
                    <img src={chevronRight} />
                    <span>Đối tác đồng hành</span>
                </div>
                {/* list of partners */}
                <Row>
                    <Col xs={12} style={{ opacity: "0.5" }}><hr /></Col>
                </Row>
                <Container>
                    <Row>
                        <Col md={12} lg={8}>
                            <h4>Các đối tác đồng hành</h4>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.png"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <div className="m-3">
                                <ReadMoreReadLess >
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/saigonchildren.png"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                </ReadMoreReadLess>
                            </div>
                        </Col>

                        <Col className="vertical-line">
                            <h5>Hoàn cảnh quyên góp mới nhất</h5>
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

                            <div className="text-center p-3">
                                <button type="button" className="btn" id="btn-outline-custom">Xem tất cả</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PartnerList;