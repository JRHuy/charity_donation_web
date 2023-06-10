import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Program from "./details/Program";
import PartnerList from "./pages/PartnerList";
import UserList from "./pages/UserList";
import Register from "./pages/Register";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import { setAuthToken } from "./components/setAuthToken";
import AuthService from "./services/AuthService";
import AuthVerify from "./common/auth-verify";
import AuthLayout from "./components/AuthLayout";
import NoPage from "./pages/NoPage";
import { Helmet } from "react-helmet";
import Deposit from "./pages/Deposit";
import SucManh2000 from "./pages/donors/SucManh2000";
import ProgramCRUD from "./pages/forms/ProgramCRUD";
import OrganizationCRUD from "./pages/forms/OrganizationCRUD";
import Donate from "./pages/Donate";
import AllTransactions from "./pages/AllTransactions";
import UserTransactionHistory from "./pages/UserTransactionHistory";
import OrganizationCRUD from "./pages/forms/OrganizationCRUD";

function App() {
  // check jwt
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  const logout = () => {
    AuthService.logout();
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/details/program" element={<Program />} />
            <Route path="partners" element={<PartnerList />} />
            <Route path="sucmanh2000" element={<SucManh2000 />} />
            <Route path="/" element={<AuthLayout allowedRole={"CUSTOMER"} />}>
              <Route
                path="transaction_history"
                element={<UserTransactionHistory />}
              />
            </Route>
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="/admin" element={<AuthLayout allowedRole={"ADMIN"} />}>
            <Route path="users" element={<UserList />} />
            {/* <Route path="users" element={admin ? <UserList /> : <Navigate replace to={"/login"} />} /> */}
            <Route path="user/edit/:id" element={<EditUser />} />
            <Route path="transactions/all" element={<AllTransactions />} />
          </Route>
          <Route path="/" element={<AuthLayout allowedRole={"CUSTOMER"} />}>
            <Route path="details/program/deposit" element={<Deposit />} />
            <Route path="details/program/donate" element={<Donate />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="program-edit" element={<ProgramCRUD />} />
          <Route path="organization-edit" element={<OrganizationCRUD />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <AuthVerify logout={logout} />
    </BrowserRouter>
  );
}

export default App;
