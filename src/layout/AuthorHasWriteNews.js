import { useState } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";
import { News } from '../services/json_dummy';
import "react-datepicker/dist/react-datepicker.css";

export function AuthorHasWriteNews() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="userdashboard-main">
                <form className="form-group">
                    <div className="row" style={{ marginTop: "15px", paddingLeft: "150px" }}>
                        <div className="col-sm-6 mt-3 mb-2">
                            <label htmlFor="date" className="col-form-label">Filter By Date</label>
                            <div className="">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                <div>
                                    <label style={{ display: "block" }} htmlFor="created-at"><input type={"radio"} id="created-at" /> Created At</label>
                                    <label style={{ display: "block" }} htmlFor="updated-at"><input type={"radio"} id="updated-at" /> Updated At</label>
                                    <button className="btn btn-danger">Reset Filter Date</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" >
                            <label>Filter By Keywords</label>
                            <input className="form-control" />
                        </div>
                    </div>
                </form>
                <div style={{ height: "2px", background: "black", marginTop: "1%" }}> </div>
                <NavLink to="#" className="btn btn-danger" style={{ marginLeft: "120px", marginTop: "20px", marginBottom: "20px" }}>Test</NavLink>
                <div className="container" style={{ marginLeft: "25%" }}>
                    <div className="row">
                        {
                            News.map((data, key) => {
                                return (
                                    <div className="col-sm-6">
                                        <div style={{
                                            backgroundImage: `url(${data.url_gambar})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            maxWidth: "125px",
                                            height: "75px"
                                        }}> </div>
                                        <div className="test-parent" style={{ padding: "0" }}>
                                            <p className="test">Added at: 3/6/2020</p>
                                            <p className="test">Updated at</p>
                                            <p className="test">{data.title_news}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}