import NavBar from "../layouts/Navbar";
import BottomCredit from "../layouts/BottomCredit";

import Program from "../details/Program";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <NavBar />
            {/* <Home /> */}
            {/* <Program /> */}
            <Outlet/>
            <BottomCredit />
        </div>
    );
}

export default Layout;