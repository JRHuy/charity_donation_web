import React, { useState } from "react";
import "../../styles/style.css";
import axios from "axios";
import ConfettiComponent from "./Confetti";

export default function OrganizationCRUD() {
  const [success, setSuccess] = useState(false);
  const [org, setOrg] = useState({
    organizationName: "",
    description: "",
    numOfProjects: "",
    projectSucceeded: "",
    ogDonate: "",
    pfpLink: "",
  });

  const handleChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(org);
    axios
      .post("http://localhost:8080/organization", org)
      .then((response) => {
        console.log(response);
        setSuccess(true);
        document.getElementById("crud-form").reset();
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ConfettiComponent />
      <div className="container">
        {success && (
          <div className="alert alert-success" role="alert">
            Thêm nhà tài trợ thành công!
          </div>
        )}
        <div id="title-program">
          <h2 id="h22">
            <b>THÔNG TIN NHÀ TÀI TRỢ</b>
          </h2>
        </div>
        <div id="form-enter" className="d-flex justify-content-start">
          <form
            id="crud-form"
            action=""
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
          >
            <div>
              <span>Tên nhà tài trợ</span>
              <input
                type="text"
                name="organizationName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <span>Mô tả</span>
              <input
                type="text"
                name="description"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <span>Số lượng chương trình đã tham gia</span>
              <input
                type="text"
                name="numOfProjects"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <span>Số lượng chương trình đã hoàn thành</span>
              <input
                type="text"
                name="projectSucceeded"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <span>Tiền của nhà tài trợ</span>
              <input
                type="text"
                name="ogDonate"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <span>Link ảnh đại diện</span>
              <input
                type="text"
                name="pfpLink"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-outline-danger"
                style={{ width: 200 }}
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
