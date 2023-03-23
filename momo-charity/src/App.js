import "./App.css";
import BottomCredit from "./BottomCredit";
import chevronRight from "./chevron-right.svg";
import Partner from "./Partner";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <section id="1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src="momo.png" width="35" height="35" alt="logo" />
            </a>
            <a className="navbar-brand mb-0 h1" href="#">
              Ví Nhân Ái
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Trái Tim Momo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Heo Đất Momo
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hoàn Cảnh Quyên Góp
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Vì Trẻ Em
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Người Già, Người Khuyết Tật
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bệnh Hiểm Nghèo
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hoàn Cảnh Khó Khăn
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hỗ Trợ Giáo Dục
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Đầu Tư Cơ Sở Vật Chất
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cứu Trợ Động Vật
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bảo Vệ Môi Trường
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Đối Tác Đồng Hành
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tin Tức Cộng Đồng
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog Cuộc Sống
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sống Tốt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sống Khỏe
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sống Thông Minh
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sống Vui
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <hr />

      <section>
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
                      style={{ color: "darkviolet", width: "2px" }}
                    ></div>
                    <h5 className="">874</h5>
                  </div>
                  <p>dự án đã được gây quỹ thành công</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{ color: "darkviolet", width: "2px" }}
                    ></div>
                    <h5>56+ tỷ</h5>
                  </div>
                  <p>đồng được quyên góp</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{ color: "darkviolet", width: "2px" }}
                    ></div>
                    <h5>777+ triệu</h5>
                  </div>
                  <p>heo vàng được quyên góp</p>
                </div>
                <div className="col-sm-3">
                  <div className="hstack gap-2">
                    <div
                      className="vr"
                      style={{ color: "darkviolet", width: "2px" }}
                    ></div>
                    <h5>128+ triệu</h5>
                  </div>
                  <p>lượt quyên góp</p>
                </div>
              </div>
              <div className="hstack gap-2 pb-3">
                <button type="button" className="btn btn-info">
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

      {/* Ví Nhân Ái - Thiện nguyện mỗi ngày */}
      <section id="block-3">
        <div id="text-header-2" className="text-center p-5">
          <h2>Ví Nhân Ái - Thiện nguyện mỗi ngày</h2>
        </div>
        <div  className="container">
          <div className="row">
            <div id="col-1" className="col">
              <img id="img-1" src="1.png" className="rounded-4 shadow-4 float-xl-start"
                alt="ad" style={{width: "100px", height: "90px"}} />
                <h3 className="title-block-3">Quyên góp nhanh chóng, dễ dàng</h3>
                <div>
                <p></p>
                <p id="text-col" >Chỉ với vài chạm, bạn đã góp phần giúp đỡ 1 hoàn cảnh khó khăn có cuộc sống tốt đẹp hơn.</p>
                </div>
                
                <div> <br/> </div>

                <img id="img-2" src="2.png" className="rounded-4 shadow-4 float-xl-start"
                  alt="ad" style={{width: "100px", height: "90px"}} />
                  <h3 className="title-block-3">1000đ cũng là đáng quý</h3>
                  <div>
                  <p></p>
                  <p id="text-col" >Với mức ủng hộ tối thiểu 1.000 đồng, bạn đã cùng hàng triệu nhà hảo tâm khác của “Trái tim MoMo” giúp đỡ những mảnh đời khó khăn.</p>
                  </div>
            </div>

            <div id="col-2" className="col-4">

              <div id="container-image" className="container">
              <img src="vinhanai.jpeg"
                   className="rounded mx-auto d-block img-fluid"
                   alt="vi-nhan-ai"     
              />
              <div class="reason-cta absolute bottom-4 w-full text-center">
                <div class="qrtype-22 w-full md:flex md:items-center md:justify-center">
                <button type="button" className="btn-primary">QUYÊN GÓP NGAY</button>
                </div>
              </div> 

              </div>
            </div>

            <div id="col-3" className="col">   
              <img id="img-3" src="3.png" className="rounded-4 shadow-4 float-end"
                  alt="ad" style={{width: "100px", height: "90px"}} />
                  <h3 className="title-block-3 text-end">Minh bạch, công khai mọi khoản đóng góp</h3>
                <div>
                  <p></p>
                  <p id="text-col" className="text-end" >Mọi thông tin về hoạt động đóng góp, tài trợ đều được công khai và cập nhật liên tục.</p>
                </div>

                <div> <br/> </div>

              <img id="img-4" src="4.png" className="rounded-4 shadow-4 float-end" alt="ad" style={{width: "100px", height: "90px"}}/>
              <h3 className="title-block-3 text-end">Đối tác của các cơ quan, tổ chức hảo tâm uy tín</h3>
              <div>
                <p></p>
                <p id="text-col" className="text-end">“Trái tim MoMo” đã và đang kết nối được với rất nhiều đơn vị bảo trợ, báo chí, đơn vị hảo tâm uy tín trên cả nước.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Các đối tác đồng hành  */}
      <section id="block-4">
        <div id="text-header-2" className="text-center p-5">
          <h2><b>Các đối tác đồng hành</b></h2>
          <h5 id="text-header-5" className="text-center">Các tổ chức nhân đạo Phi Lợi Nhuận đồng hành cùng Ví MoMo giúp đỡ các hoàn cảnh khó khăn<br /> trên khắp cả nước.</h5>
        </div>
      </section>
      <Partner />


      {/* Phần thông tin ở cuối trang */}
      <BottomCredit/>
    </div >
  );
}

export default App;
