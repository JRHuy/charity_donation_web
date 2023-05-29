import NavBar from "../layouts/Navbar";
import BottomCredit from "../layouts/BottomCredit";

import { Outlet } from "react-router-dom";

function Layout() {
    let user, name = null;
    if (localStorage.length > 0) {
        user = JSON.parse(localStorage.getItem("user"));
        name = user.name;
    }
    return (
        <div>
            <NavBar user={name}/>
            <Outlet/>
            <BottomCredit />
        </div>
    );
}

export default Layout;