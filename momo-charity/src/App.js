import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Program from "./details/Program";
import PartnerList from "./pages/PartnerList";
import UserList from "./pages/UserList";
import Register from "./pages/Register"
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import AuthLayout from "./components/AuthLayout";
import { setAuthToken } from "./components/setAuthToken";

function App() {
  // check jwt
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <RouteGuard exact path="/" component={Home}></RouteGuard> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/program" element={<Program />} />
            <Route path="partners" element={<PartnerList />} />
          </Route>
          <Route path="/admin" element={<AuthLayout />}>
            <Route path="users" element={<UserList />} />
            <Route path="register" element={<Register />} />
            <Route path="user/edit/:id" element={<EditUser />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
