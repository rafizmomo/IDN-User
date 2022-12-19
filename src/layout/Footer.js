import { Link } from "react-router-dom";
import { News } from "../services/json_dummy";
export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-3" style={{
                position: "relative",
                top: "100%"
            }}>
                <footer className='py-5'>
                    <div className="row">
                        <div className="col-sm-4">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link className="nav-link text-light" to="#">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h5>Topic</h5>
                            <div className="scroll-y" style={{
                                height: "150px",
                                overflowY: "scroll",
                                width: "max-content"
                            }}>
                                <ul className="nav flex-column">
                                    {
                                        News.map((data, key) => {
                                            return (
                                                <li className="nav-item mb-2" key={key}>
                                                    <Link className="nav-link text-light fit-content" to="#">{data.topic}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <h5>Sub Topic</h5>
                            <div style={{
                                height: "150px",
                                overflowY: "scroll",
                                width: "max-content"
                            }}>
                                <ul className="nav flex-column">
                                    {
                                        News.map((data, key) => {
                                            return (
                                                <li className="nav-item mb-2" key={key}>
                                                    <Link className="nav-link text-light fit-content" to="#">{data.topic}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}