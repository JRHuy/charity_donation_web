import NavBar from "../layouts/Navbar";
import BottomCredit from "../layouts/BottomCredit";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet/>
            <BottomCredit />
        </div>
    );
}

export default Layout;