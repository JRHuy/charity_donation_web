import React, { useState } from "react";
import "../../styles/style.css";
import axios from "axios";

export default function ProgramCRUD() {
  const [program, setProgram] = useState({
    programName: "",
    organization: {
      organizationID: 1,
    },
    targetMoney: "",
    currentMoney: "",
    donateTotal: "",
    programDescription: "",
    active: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setProgram({ ...program, [e.target.name]: e.target.value });
    //setProgram({ ...program, organization.organizationID: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(program);
    axios
      .post("http://localhost:8080/program", program)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div id="title-program">
        <h2>
          <b>CHỈNH SỬA CHƯƠNG TRÌNH</b>
        </h2>
      </div>
      <div id="form-enter" className="d-flex justify-content-start">
        <form action="" onSubmit={(e) => handleSubmit(e)} method="POST">
          <div>
            <span>Tên chương trình</span>
            <input
              type="text"
              name="programName"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <span>Mục tiêu (VNĐ)</span>
            <input
              type="text"
              name="targetMoney"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <span>Mã tổ chức</span>
            <input
              type="text"
              name="organizationID"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <span>Mô tả chương trình</span>
            <input
              type="text"
              name="programDescription"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Đang hoạt động</label>
            <input
              type="radio"
              name="active"
              id=""
              value="true"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="radio"
              name="active"
              id=""
              value="false"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Ngày hết hạn</label>
            <input
              type="date"
              name="deadline"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-danger"
              style={{ width: 200 }}
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
