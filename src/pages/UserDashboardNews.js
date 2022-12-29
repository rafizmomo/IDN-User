import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";
import { News } from '../services/json_dummy';

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


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

export function AuthorHasWrittenNews() {
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

export function AuthorNews() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function getUser() {
            const userdata = localStorage.getItem("user");
            const userobject = JSON.parse(userdata);
            const user = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userobject["user"]);
            setUser(user.data);
        }
        getUser();
    }, []);
    return (
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    {
                        user.map(data => {
                            if (data.role == null) {
                                return UserHaveNotAuthor()
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export function CreateAuthorAccountForm() {
    const [selectimage, setSelectImage] = useState();
    const [isimageselected, setIsImageSelected] = useState(false);
    const handleUploadImage = event => {
        setSelectImage(event.target.files[0]);
        setIsImageSelected(true);
    }
    useEffect(() => {
        if (isimageselected === true) {
            document.querySelector("#image-preview-parent").style.display = "none";
            const image_preview_result = document.querySelector("#image-preview-result");
            image_preview_result.style.display = "inline";
            const fileReader = new FileReader();
            fileReader.onload = ev => {
                image_preview_result.src = ev.target.result;
            }
            fileReader.readAsDataURL(selectimage);
        }
    })
    return (
        <div className="userdashboard-main">
            <div className="container-fluid">
                <div className="text-center container mt-5 mb-5 w-50 rounded" style={{ border: "2px solid black" }}>
                    <h4>Indonesia Open News Create Author Account</h4>
                </div>
                <form className="form-group" style={{ positition: "relative", left: "60px" }}>
                    <div className="mb-3 mt-3 d-flex justify-content-start">
                        <label className="col-form-label">Author Photo Profile</label>
                        <div className="border" id="image-preview-parent" style={{ width: "240px", height: "120px", padding: "50px 10px", marginRight: "20px", marginLeft: "45px" }}>
                            <label id="image-preview">You don't have photo profile</label>
                        </div>
                        <img className="border" id="image-preview-result" width={240} height={120} style={{ display: "none", marginRight: "20px", marginLeft: "45px" }} />
                        <div className="mt-5">
                            <input type="file" className="btn btn-dark" accept="image/*" onChange={handleUploadImage} />
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='description' className="col-sm-2 mt-5 col-form-label">Author Description</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control w-50" id="description" rows="5" cols="1"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                    </div>
                    <div className="d-flex justify-content-center">
                        <ul className="w-25">
                            <li className="nav-item">
                                <NavLink to={"/userdashboard/userprofile"} className="btn btn-primary">Author Create Account Guidline</NavLink>
                            </li>
                        </ul>
                        <ul className="w-25 mr-5">
                            <li className="nav-item">
                                <button className="btn btn-success">Submit</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}

export function CreateNewsForm() {
    const [selectimage, setSelectImage] = useState();
    const [isimageselected, setIsImageSelected] = useState(false);
    const handleUploadImage = event => {
        setSelectImage(event.target.files[0]);
        setIsImageSelected(true);
    }
    useEffect(() => {
        if (isimageselected === true) {
            document.querySelector("#image-preview-parent").style.display = "none";
            const image_preview_result = document.querySelector("#image-preview-result");
            image_preview_result.style.display = "inline";
            const fileReader = new FileReader();
            fileReader.onload = ev => {
                image_preview_result.src = ev.target.result;
            }
            fileReader.readAsDataURL(selectimage);
        }
    })
    return (
        <div className="userdashboard-main">
            <div className="container-fluid">
                <form className="form-group" >
                    <div className="mt-5 d-flex justify-content-start">
                        <div className="border" id="image-preview-parent" style={{ width: "240px", height: "120px", padding: "50px 10px", marginRight: "20px", marginLeft: "45px" }}>
                            <label id="image-preview">News image preview</label>
                        </div>
                        <img className="border" id="image-preview-result" width={240} height={120} style={{ display: "none", marginRight: "20px", marginLeft: "45px" }} />
                        <div className="mt-4">
                            <input type="file" className="btn btn-dark" accept="image/*" onChange={handleUploadImage} />
                        </div>
                    </div>
                    <div className="mb-3 mt-1 row">
                        <label className="col-sm-2 mt-5 col-form-label">News Title</label>
                        <div className="col-sm-10">
                            <input type={"text"} className="form-control mt-5 w-50" />
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='description' className="col-sm-2 mt-5 col-form-label">Author Description</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control w-50" id="description" rows="5" cols="1"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label className="col-sm-2 mt-2 col-form-label">News Topic</label>
                        <div className="">
                            <select
                                id="select-jenis-tanaman-by-id-add" className="w-50 mt-2 col-sm-10">
                                <option value="selected">Choose News Topic</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ul className="w-25">
                            <li className="nav-item">
                                <NavLink to={"/userdashboard/userprofile"} className="btn btn-primary"> Create Account Account Guidline</NavLink>
                            </li>
                        </ul>
                        <ul className="w-25 mr-5">
                            <li className="nav-item">
                                <button className="btn btn-success">Submit</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}