import React, { useEffect } from "react";
import { withRouter } from "./with-router";

const parseJwt = (token) => {
  try {
    return JSON.parse(window.atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = props.router.location;

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("token"));
    const data = localStorage.getItem("token") || null;

    if (data) {
      const decodedJwt = parseJwt(data);
      const expirationDate = decodedJwt.exp * 1000;

      if (expirationDate <= Date.now()) {
        props.logout();
      }
    }
  }, [location]);

  return <div></div>;
};

export default withRouter(AuthVerify);