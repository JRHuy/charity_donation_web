import { Container, Row, Col } from "react-bootstrap";
import chevronRight from "../chevron-right.svg";
import PartnerCard from "../components/PartnerCard";
import ReadMoreReadLess from "../components/ReadMoreReadLess";
import CardItem from "../components/CardItem";
import { useEffect } from "react";
import '../App.css';
import {Helmet} from "react-helmet";

function PartnerList() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>Các tổ chức quỹ từ thiện giúp đỡ cộng đồng đồng hành cùng MoMo</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <meta name="description" content="PartnerList" />
            </Helmet>
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
                    <Col xs={12} style={{ opacity: "0.5" }}>
                        <hr />
                    </Col>
                </Row>
                <Container>
                <Row>
                        <Col md={12} lg={8}>
                            <h4 className="text-momo opacity-100 mb-3 text-2xl font-bold">Các đối tác đồng hành</h4>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/sucmanh2000.jpeg"
                                        partnerName="Sức mạnh 2000"
                                        partnerDescription="Tiền lẻ mỗi ngày xây ngay nghìn trường mới"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/quyhyvong.jpeg"
                                        partnerName="Quỹ Hy Vọng"
                                        partnerDescription="Hỗ trợ các hoàn cảnh khó khăn"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/MSD.jpeg"
                                        partnerName="Viện Nghiên cứu Quản lý Phát triển bền vững (MSD)"
                                        partnerDescription="Bảo vệ các đối tượng có hoàn cảnh khó khăn"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/hoachiase.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/vinacapital.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/vitamvocviet.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/saigonchildren.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/scdi.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/thiennhan.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/tuonglaicentre.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6} xs={12} className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/quytrangkhuyet.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <PartnerCard
                                        partnerImg="doitac/operationsmile.jpeg"
                                        partnerName="Saigon Children's Charity"
                                        partnerDescription="Hỗ trợ trẻ em"
                                    />
                                </Col>
                            </Row>

                            <div className="m-3">
                                <ReadMoreReadLess>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/isee.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/duannuoiem.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/quyphananh.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/vc.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/baolaodong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/giaohoiphatgiao.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/baodantri.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/baonguoilaodong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/baotuoitre.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/mattrantoquocvn.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/nangbuoctuoitho.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/red.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/bebetter.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/sachvahanhdong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/ruybangtim.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/quynamphuong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/pn.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/greenviet.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/onesky.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/pannature.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/bcn.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/joy.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/asvho.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/childrenofvietnam.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/change.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/vitamingaugau.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/thaodan.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/handson.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/sac.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/thinkplaygrounds.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/thienchi.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/vulcan.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/maison.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/vimoitruongvacongdong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/ecue.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/anhduong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/doancoquantrunguong.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/thapsangniemtin.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/libdream.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/phad.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/nhiptimvietnam.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/sanggroup.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={6} xs={12} className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/savevietnamwildlife.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col>
                                        {/* <Col className="mt-3">
                                            <PartnerCard
                                                partnerImg="doitac/.jpeg"
                                                partnerName="Saigon Children's Charity"
                                                partnerDescription="Hỗ trợ trẻ em"
                                            />
                                        </Col> */}
                                    </Row>
                                    
                                </ReadMoreReadLess>
                            </div>
                        </Col>

                        <Col className="vertical-line">
                            <h5 className="mb-4 flex items-center text-xl font-bold text-momo">Hoàn cảnh quyên góp mới nhất</h5>
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
                                <button
                                    type="button"
                                    className="btn"
                                    id="btn-outline-custom"
                                >
                                    Xem tất cả
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PartnerList;
