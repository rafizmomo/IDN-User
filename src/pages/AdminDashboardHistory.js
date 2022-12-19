import { useEffect } from "react";
import { News } from "../services/json_dummy";
export function History() {
    useEffect(() => {
        const w3css = document.createElement("link");
        w3css.setAttribute("rel", "stylesheet");
        w3css.setAttribute("href", "https://www.w3schools.com/w3css/4/w3.css");
        document.head.append(w3css);
    });
    return (
        <>
            <div className="userdashboard-main">
                <div className="w-75 mt-4" style={{ marginLeft: "7.5%" }}>
                    <button type="button">Clear history</button>
                    <br />
                    <br />
                    {
                        News.map((data, key) => {
                            return (
                                <div key={key}>
                                    <div className="d-sm-flex justify-content-start flex-row">
                                        <img style={{ height: "7.5%", width: "15%", marginRight: "2%", marginTop: "2%" }} src={data.url_gambar} />
                                        <div>
                                            <h2>News Tittle</h2>
                                            <p className="w3-justify w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}