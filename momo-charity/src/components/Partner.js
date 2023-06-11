import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Partner() {
  useEffect(() => {
    fetchOrg1();
  }, []);

  const [org1, setOrg1] = useState(null);

  const fetchOrg1 = () => {
    axios
      .get("http://localhost:8080/organizations")
      .then((res) => {
        console.log(res.data);
        setOrg1(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Làm deck slider cho đối tác đồng hành  */}
      <section
        className="carousel slide"
        data-bs-ride="carousel"
        id="postsCarousel"
      >
        <div className="container">
          <div className="carousel-inner">
            {/* Slide đầu tiên */}
            <div className="carousel-item active">
              <div className="row">
                {org1?.map((org) => {
                  return (
                    <div className="col-sm-6 col-md-4">
                      <div className="card" id="card-doitac">
                        <a
                          href="http://localhost:3000/sucmanh2000"
                          className="card-block stretched-link text-decoration-none"
                        >
                          <div className="row card-body">
                            <img
                              className="col-sm-6"
                              src="doitac/saigonchildren.jpeg"
                              style={{ width: 80, height: 60 }}
                            />
                            <div className="col-sm-auto">
                              <h6 className="card-title" id="doitac">
                                {org?.organizationName}
                                <br />
                                <p className="card-text" id="card-description">
                                  {org?.description}
                                </p>
                              </h6>
                              <p id="xemchitiet">
                                Xem chi tiết{" "}
                                <i className="fa-solid fa-chevron-right"></i>
                                <i className="fa-solid fa-chevron-right"></i>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="http://localhost:3000/sucmanh2000"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            {org1?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org1?.description}
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                {/*<div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/sucmanh2000.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Sức mạnh 2000
                            <br />
                            <p className="card-text" id="card-description">
                              Xây ngay nghìn trường mới
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/quytuthienhoachiase.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Quỹ từ thiện Hoa Chia Sẻ
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ các hoàn cảnh khó khăn
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>*/}
              </div>

              {/* <div className="row top-buffer">
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/quyhyvong.jpg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Quỹ Hy vọng
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ các hoàn cảnh khó khăn
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/vcf.jpeg"
                          style={{ width: 60, height: 50 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            VinaCapital Foundation
                            <br />
                            <p className="card-text" id="card-description">
                              Thay đổi cuộc sống cho phụ nữ và trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/scdi.jpg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            SCDI - Mỗi ngày Một quả trứng
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ Sáng kiến Phát triển Cộng đồng
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row top-buffer">
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/MSD.jpeg"
                          style={{ width: 60, height: 50 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            MSD
                            <br />
                            <p className="card-text" id="card-description">
                              Bảo vệ đối tượng có hoàn cảnh khó khăn
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/quyvitamvocviet.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Quỹ Vì Tầm Vóc Việt
                            <br />
                            <p className="card-text" id="card-description">
                              Vì tầm vóc Việt
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/thiennhan.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Thien Nhan & Friends
                            <br />
                            <p className="card-text" id="card-description">
                              Phẫu thuật BPSD cho trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Slide thứ 2 */}
            <div className="carousel-item" id="row-doitac">
              <div className="row">
                {/* <div class="overflow-auto row flex-row flex-nowrap mt-4 pb-4 pt-2"> */}
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>

              <div className="row top-buffer">
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row top-buffer">
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Saigon Children's Charity
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    <a
                      href="#"
                      className="card-block stretched-link text-decoration-none"
                    >
                      <div className="row card-body">
                        <img
                          className="col-sm-6"
                          src="doitac/saigonchildren.jpeg"
                          style={{ width: 80, height: 60 }}
                        />
                        <div className="col-sm-auto">
                          <h6 className="card-title" id="doitac">
                            Hello
                            <br />
                            <p className="card-text" id="card-description">
                              Hỗ trợ trẻ em
                            </p>
                          </h6>
                          <p id="xemchitiet">
                            Xem chi tiết{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tạo nút để chuyển slide đối tác */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#postsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#postsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="text-center p-5">
          <button type="button" className="btn" id="btn-outline-custom">
            <Link
              to="/partners"
              style={{ textDecoration: "none", color: "rgb(165, 0, 100)" }}
            >
              Xem tất cả
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Partner;
