import { Container, Row, Col } from "react-bootstrap";
import chevronRight from "../chevron-right.svg";
import PartnerCard from "../components/PartnerCard";
import ReadMoreReadLess from "../components/ReadMoreReadLess";
import CardItem from "../components/CardItem";
import { useEffect } from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";

function PartnerList() {
  useEffect(() => {
    fetchOrg();
    window.scrollTo(0, 0);
  }, []);

  const [org, setOrg] = useState(null);
  const fetchOrg = () => {
    axios
      .get("http://localhost:8080/organizations")
      .then((res) => {
        console.log(res.data);
        setOrg(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Các tổ chức quỹ từ thiện giúp đỡ cộng đồng đồng hành cùng MoMo
        </title>
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
              <h4 className="text-momo opacity-100 mb-3 text-2xl font-bold">
                Các đối tác đồng hành
              </h4>
              <Row>
                {org?.map((org) => {
                  return (
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg={org?.pfpLink}
                        partnerName={org?.organizationName}
                        partnerDescription={org?.description}
                        link={`doi-tac/${org?.organizationID}`}
                      />
                    </Col>
                  );
                })}
                <Col sm={6} xs={12} className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/MSD.jpeg"
                    partnerName="Viện Nghiên cứu Quản lý Phát triển bền vững (MSD)"
                    partnerDescription="Bảo vệ các đối tượng có hoàn cảnh khó khăn"
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
                    partnerName="Quỹ từ thiện Hoa Chia Sẻ"
                    partnerDescription="Hỗ trợ các hoàn cảnh khó khăn"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={12} className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/vinacapital.jpeg"
                    partnerName="VinaCapital Foundation"
                    partnerDescription="Thay đổi cuộc sống cho phụ nữ và trẻ em Việt Nam"
                  />
                </Col>
                <Col className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/vitamvocviet.jpeg"
                    partnerName="Quỹ Vì Tầm Vóc Việt"
                    partnerDescription="Vì tầm vóc Việt"
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
                    partnerName="SCDI – Mỗi ngày Một quả trứng"
                    partnerDescription="Trung tâm Hỗ trợ Sáng kiến Phát triển Cộng đồng"
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={6} xs={12} className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/thiennhan.jpeg"
                    partnerName="Thien Nhan & Friends"
                    partnerDescription="Phẫu thuật BPSD cho trẻ em"
                  />
                </Col>
                <Col className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/tuonglaicentre.jpeg"
                    partnerName="Tương Lai Centre"
                    partnerDescription="Phòng chống xâm hại tình dục trẻ em"
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={6} xs={12} className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/quytrangkhuyet.jpeg"
                    partnerName="Quỹ Trăng Khuyết"
                    partnerDescription="Hỗ trợ người già & trẻ em"
                  />
                </Col>
                <Col className="mt-3">
                  <PartnerCard
                    partnerImg="doitac/operationsmile.jpeg"
                    partnerName="Operation Smile"
                    partnerDescription="Phẫu thuật nụ cười"
                  />
                </Col>
              </Row>

              <div className="">
                <ReadMoreReadLess>
                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/isee.jpeg"
                        partnerName="iSEE"
                        partnerDescription="Vì một xã hội bình đẳng"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/duannuoiem.jpeg"
                        partnerName="Dự án Nuôi Em - Ánh Sáng Núi Rừng"
                        partnerDescription="Bữa cơm trẻ em vùng cao"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/quyphananh.jpeg"
                        partnerName="Quỹ Phan Anh"
                        partnerDescription="Phát triển văn hóa giáo dục"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/vc.jpeg"
                        partnerName="Trung tâm Tình nguyện Quốc gia"
                        partnerDescription="Thúc đẩy đam mê tình nguyện"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/baolaodong.jpeg"
                        partnerName="Báo Lao Động"
                        partnerDescription="Cơ quan của Tổng Liên đoàn Lao động Việt Nam"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/giaohoiphatgiao.jpeg"
                        partnerName="Giáo Hội Phật Giáo Việt Nam"
                        partnerDescription="Giáo Hội Phật Giáo Việt Nam"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/baodantri.jpeg"
                        partnerName="Báo Điện Tử Dân Trí"
                        partnerDescription="Đóng góp tích cực vào sự phát triển Kinh tế - Xã Hội của đất nước"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/baonguoilaodong.jpeg"
                        partnerName="Báo Người Lao Động"
                        partnerDescription="Đồng hành với người lao động"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/baotuoitre.jpeg"
                        partnerName="Báo Tuổi Trẻ"
                        partnerDescription="Cơ quan ngôn luận của Đoàn Thanh niên Cộng sản Thành phố Hồ Chí Minh"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/mattrantoquocvn.jpeg"
                        partnerName="Mặt trận Tổ quốc Việt Nam"
                        partnerDescription="Uỷ ban Trung ương Mặt trận Tổ quốc Việt Nam"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/nangbuoctuoitho.jpeg"
                        partnerName="Quỹ Nâng Bước Tuổi Thơ"
                        partnerDescription="Cung cấp y tế đa khoa theo tiêu chuẩn quốc tế cho trẻ em khó khăn "
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/red.jpeg"
                        partnerName="Viện Nghiên Cứu Truyền Thông Phát Triển (RED)"
                        partnerDescription=" Thúc đẩy hoạt động truyền thông và tối ưu hóa các chương trình phát triển"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/bebetter.jpeg"
                        partnerName="Be Better Foundation"
                        partnerDescription="Giúp đỡ người già và trẻ em có hoàn cảnh khó khăn tại Việt Nam"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/sachvahanhdong.jpeg"
                        partnerName="Sách và Hành Động"
                        partnerDescription="Xây dựng thói quen đọc sách và tinh thần hành động trong cộng đồng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/ruybangtim.jpeg"
                        partnerName="Ruy Băng Tím"
                        partnerDescription="Phòng chống ung thư tại Việt Nam"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/quynamphuong.jpeg"
                        partnerName="Quỹ Nam Phương"
                        partnerDescription="Xây cầu cho trẻ em"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/pn.jpeg"
                        partnerName="Passerelles Numeriques Vietnam"
                        partnerDescription="Cung cấp học bổng toàn phần chất lượng cao về công nghệ"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/greenviet.jpeg"
                        partnerName="Trung tâm Bảo tồn Đa dạng Sinh học Nước Việt Xanh (GreenViet)"
                        partnerDescription="Bảo tồn hệ sinh thái và các loài động thực vật nguy cấp tại Việt Nam"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/onesky.jpeg"
                        partnerName="Trung tâm CSGDMN OneSky"
                        partnerDescription="Tạo sự phát triển cho trẻ và mang lại sự an tâm cho công nhân lao động"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/pannature.jpeg"
                        partnerName="Trung tâm Con người và Thiên nhiên (PanNature)"
                        partnerDescription="Bảo vệ môi trường, bảo tồn sự đa dạng và phong phú của thiên nhiên, nâng cao chất lượng cuộc sống của cộng đồng địa phương "
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/bcn.jpeg"
                        partnerName="Mạng Lưới Ung Thư Vú Việt Nam"
                        partnerDescription="Tăng cường phát hiện sớm ung thư vú và nâng cao chất lượng sống cho phụ nữ trong cộng đồng"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/joy.jpeg"
                        partnerName="Joy Foundation"
                        partnerDescription="Giải quyết vấn đề xã hội, môi trường vì lợi ích cộng đồng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/asvho.jpeg"
                        partnerName="Hội bảo trợ người tàn tật & trẻ mồ côi huyện Quỳnh Nhai"
                        partnerDescription="Giúp đỡ NTT & trẻ mồ côi"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/childrenofvietnam.jpeg"
                        partnerName="Children of Vietnam"
                        partnerDescription="Giúp đỡ trẻ em nghèo và vô gia cư của khu vực Đà Nẵng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/change.jpeg"
                        partnerName="Trung Tâm Hành Động Và Liên Kết Vì Mội Trường Và Phát Triển"
                        partnerDescription="Nâng cao nhận thức, xây dựng năng lực cộng đồng "
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/vitamingaugau.jpeg"
                        partnerName="Quỹ Bảo trợ thú cưng"
                        partnerDescription=" Tiếp nhận và chăm sóc, đảm bảo các phúc lợi động vật thú cưng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/thaodan.jpeg"
                        partnerName="Cơ sở bảo trợ xã hội Thảo Đàn"
                        partnerDescription="Chăm sóc, hỗ trợ và bảo vệ trẻ em đường phố"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/handson.jpeg"
                        partnerName="Quỹ giáo dục Hands-On"
                        partnerDescription="Hỗ trợ tài chính, kiến thức và kỹ năng cho HS"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/sac.jpeg"
                        partnerName="Trung tâm Hỗ trợ học sinh, sinh viên TP. Hồ Chí Minh"
                        partnerDescription="Hoạt động chăm lo, hỗ trợ cho HSSV"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/thinkplaygrounds.jpeg"
                        partnerName="Think Playgrounds"
                        partnerDescription="Sân chơi công cộng và vườn cộng đồng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/thienchi.jpeg"
                        partnerName="Thiện Chí"
                        partnerDescription="Phát triển cộng đồng"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/vulcan.jpeg"
                        partnerName="Vulcan Augmetics"
                        partnerDescription="Lắp cánh tay robot cho NKT"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/maison.jpeg"
                        partnerName="Maison Chance"
                        partnerDescription=" Nhà May Mắn cho NKT, trẻ em mồ côi"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/vimoitruongvacongdong.jpeg"
                        partnerName="Trung tâm Sống và Học tập vì Môi trường và Cộng đồng (Live & Learn)"
                        partnerDescription="Vì Môi trường & Cộng đồng"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/ecue.jpeg"
                        partnerName="ECUE"
                        partnerDescription="Thúc đẩy bình đẳng giới, đa dạng và hòa nhập, môi trường bền vững"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/anhduong.jpeg"
                        partnerName="Trung tâm Ánh Dương"
                        partnerDescription=" Xóa đói giảm nghèo và phát triển cộng đồng tại các vùng nghèo, vùng sâu, vùng xa của tỉnh Hậu Giang"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/doancoquantrunguong.jpeg"
                        partnerName="Đoàn Cơ Quan Trung Ương"
                        partnerDescription=" Giúp đỡ bà con nhân dân và các emHSSV có hoàn cảnh khó khăn."
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/thapsangniemtin.jpeg"
                        partnerName="Quỹ Học Bổng Thắp Sáng Niềm Tin"
                        partnerDescription="Giúp đỡ các em HSSV hiếu học có hoàn cảnh đặc biệt khó khănm"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/libdream.jpeg"
                        partnerName="Thư Viện Ước Mơ"
                        partnerDescription="Giúp các em tiếp cận với các nguồn tri thức khắp nơi trên thế giới"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/phad.jpeg"
                        partnerName="Viện PHAD"
                        partnerDescription="Nâng cao sức khỏe cho người dân"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/nhiptimvietnam.jpeg"
                        partnerName="DNXH Nhịp Tim Việt Nam"
                        partnerDescription="Chương trình hỗ trợ chi phí phẫu thuật tim cho trẻ em nghèo dưới 18 tuổi ở Việt Nam"
                      />
                    </Col>
                    <Col className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/sanggroup.jpeg"
                        partnerName="Sáng Group"
                        partnerDescription="Tiệm Giặt là Người Điếc"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6} xs={12} className="mt-3">
                      <PartnerCard
                        partnerImg="doitac/savevietnamwildlife.jpeg"
                        partnerName="Save Vietnam's Wildlife"
                        partnerDescription="Cứu những cá thể động vật hoang dã nguy cấp khỏi nguy cơ tuyệt chủng"
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
              <h5 className="mb-4 flex items-center text-xl font-bold text-momo">
                Hoàn cảnh quyên góp mới nhất
              </h5>
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
                <button type="button" className="btn" id="btn-outline-custom">
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
