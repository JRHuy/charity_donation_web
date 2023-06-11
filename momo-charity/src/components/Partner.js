import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Partner() {
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

  useEffect(() => {
    fetchOrg();
  });

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
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    {/* make card as a button using stretched-link */}
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
                            {org[0]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[0]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[2]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[2]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[3]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[3]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[4]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[4]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[5]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[5]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[6]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[6]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[7]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[7]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[8]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[8]?.description}
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

            {/* Slide thứ 2 */}
            <div className="carousel-item" id="row-doitac">
              <div className="row">
                {/* <div class="overflow-auto row flex-row flex-nowrap mt-4 pb-4 pt-2"> */}
                <div className="col-sm-6 col-md-4">
                  <div className="card" id="card-doitac">
                    {/* make card as a button using stretched-link */}
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
                            {org[9]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[9]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[10]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[10]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
                    {/* make card as a button using stretched-link */}
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
                            {org[1]?.organizationName}
                            <br />
                            <p className="card-text" id="card-description">
                              {org[1]?.description}
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
