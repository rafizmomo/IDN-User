import { Link, NavLink } from "react-router-dom";

export function SideNavBar() {
    return (
        <>
            <input type={"checkbox"} id="menu-toggle" ></input>
            <label className="menu-parent" htmlFor="menu-toggle">
                <span className="menu"></span>
                <span className="menu"></span>
                <span className="menu"></span>
            </label>
            <div className="userdashboard-overlay">
                <ul>
                    <li className="userdashboard-overlay-content">
                        <NavLink to="/userdashboard/userprofile">User Profile</NavLink>
                    </li>
                    <li className="userdashboard-overlay-content">
                        <NavLink to="/userdashboard/news">News</NavLink>
                    </li>
                    <li className="userdashboard-overlay-content">
                        <NavLink to="/userdashboard/history">History</NavLink>
                    </li>
                    <li className="userdashboard-overlay-content">
                        <NavLink to="/userdashboard/authoraccountbalance/createaccountbalance">Money Receiving Account</NavLink>
                    </li>
                    <li className="userdashboard-overlay-content border-0 mt-5 text-center">
                        <button className="btn btn-primary">Signout</button>
                    </li>
                </ul>
            </div>
        </>
    )
}