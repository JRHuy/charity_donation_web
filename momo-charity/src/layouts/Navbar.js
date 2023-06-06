import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const logout = () => {
  AuthService.logout();
};

const NavBar = ({ user }) => {
  return (
    <section id="1" className="sticky-top">
      <div
        className="container-fluid px-0 d-flex justify-content-center"
        style={{ backgroundColor: "white" }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="/">
            <img src="/momo.png" width="35" height="35" alt="logo" />
          </a>
          <a className="navbar-brand mb-0 h1" href="/">
            Ví Nhân Ái
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerContent"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerContent">
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
                <a className="nav-link" href="/partners">
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
            {user ? (
              <NavDropdown title={user} id="basic-nav-dropdown">
                <NavDropdown.Item href="">Xem trang cá nhân</NavDropdown.Item>
                <NavDropdown.Item href="/details/program/deposit">
                  Nạp tiền vào tài khoản
                </NavDropdown.Item>
                <NavDropdown.Item href="/user/transaction_history">Lịch sử giao dịch</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" onClick={logout}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button variant="warning" id="login">
                <Link
                  to={"/login"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
