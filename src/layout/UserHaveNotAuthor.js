import { NavLink } from "react-router-dom";

export function UserHaveNotAuthor() {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "max-content"
            }} className="userdashboardcenter-main"><h5>You Haven't Signed Up As an Author</h5>
            </div>
            <NavLink className="btn btn-danger userdashboard-center-main" to={"/userdashboard/news/createauthoraccount"} style={{
                position: "absolute",
                top: "40%",
                left: "49%",
                width: "max-content"
            }}>Create Your Author Account</NavLink>
        </>
    )
}