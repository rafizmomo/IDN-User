import { NavLink } from "react-router-dom";

export function AuthorHasNotCreateNews() {
    return (
        <>
            <NavLink className="btn-cust btn-red" to="/userdashboard/news/createnews" style={{
                position: "relative",
                top: "7%",
                left: "1%",
                width: "max-content"
            }}>Add News</NavLink>
            <div style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "max-content"
            }}><h5>You Havent' Write News</h5>
            </div>

        </>
    )
}