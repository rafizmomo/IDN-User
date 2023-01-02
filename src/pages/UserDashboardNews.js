import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { NavLink, useNavigate } from "react-router-dom";
import { News } from '../services/json_dummy';

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";



function UserHaveNotAuthor() {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "max-content"
            }} className="userdashboardcenter-main"><h5>You Haven't Signed Up As an Author</h5>
            </div>
            <a className="btn btn-danger userdashboard-center-main" href="/userdashboard/news/createauthoraccount" style={{
                position: "absolute",
                top: "40%",
                left: "49%",
                width: "max-content"
            }}>Create Your Author Account</a>
        </>
    )
}
function AuthorHaveNotReceivingAccount() {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "max-content"
            }} className="userdashboardcenter-main"><h5>You Don't Have Money Receiving Account Number</h5>
            </div>
            <a className="btn btn-danger userdashboard-center-main" href="/userdashboard/authoraccountbalance/createaccountbalance" style={{
                position: "absolute",
                top: "40%",
                left: "49%",
                width: "max-content"
            }}>Create Money Receiving Account Number</a>
        </>
    )
}
function AuthorHasNotCreateNews() {
    return (
        <>
            <NavLink className="btn btn-danger" to="/userdashboard/news/createnews" style={{
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

function AuthorHasWrittenNews() {
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

function RenderNewsComponents() {
    const [user, setUser] = useState([]);
    const [news, setNews] = useState([]);
    const [errorMessages, setErroMessage] = useState("");

    useEffect(() => {
        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);
        async function getUser() {
            const userdata = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userdataobject["user"]);
            setUser(userdata.data);
        }
        async function test() {
            await axios.get("http://127.0.0.1:8000/api/rendercomponents/" + userdataobject["user"]).then(response => {
                setNews(response.data.news);
            })
        }
        getUser();
        test();
    }, []);

    useEffect(() => {
        if (user)
    })
}

export function AuthorNews() {
    const [user, setUser] = useState([]);
    const [newsNotFoundMessage, setNewsNotFoundMessage] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        async function getUser() {
            const userdata = localStorage.getItem("user");
            const userobject = JSON.parse(userdata);
            const user = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userobject["user"]);
            setUser(user.data);
        }
        async function getNotExistNews() {
            const userdata = localStorage.getItem("user");
            const userobject = JSON.parse(userdata);
            await axios.get("http://127.0.0.1:8000/api/rendercomponents/" + userobject["user"]).then(response => { }).catch(error => {
                if (error.response.status === 404) {
                    setNewsNotFoundMessage(JSON.parse(error.response.data));
                }
            });
        }
        getUser();
        getNotExistNews();
    }, []);

    useEffect(() => {
        const userdata = window.localStorage.getItem("user");
        if (!userdata) {
            navigate("/");
        }
    });

    return (
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    <RenderNewsComponents />
                    {/* {
                        newsNotFoundMessage["message"] ? <AuthorHasNotCreateNews /> : ""
                    } */}

                </div>
            </div>
        </>
    )
}

export function CreateAuthorAccountForm() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [savedImage, setSavedImage] = useState(null);
    const [isimageselected, setIsImageSelected] = useState(false);
    const [userDescription, setUserDescription] = useState("");
    const [authorValidationErrorMessages, setAuthorValidationErrorMessages] = useState({});
    const [isCanceled, setIsCanceled] = useState(true);
    const [userDataObject, setUserDataObject] = useState(null);
    const handleUploadImage = event => {
        setSavedImage(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
        if (event.target.files[0] == null) {
            setSavedImage(selectedImage);
        }
        setIsImageSelected(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsCanceled(false);
        }, 1);
        let mounted = true;

        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);

        async function getPreviousSavedImage() {
            let imagename = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userdataobject["user"]);
            let imageUrl = await axios({
                url: "http://127.0.0.1:8000/api/userprofile/photo_profile/" + userdataobject["user"],
                method: "GET",
                responseType: "blob",
            });
            let imageData = imageUrl.data;
            let type = imageData.type;
            let uploadedFile = new File([imageData], imagename.data.at(0)["photo_profile_name"], { type: type });
            if (mounted) {
                setSavedImage(uploadedFile);
            }
        }
        if (isCanceled == false) {
            return () => {
                mounted = false;
            }
        }
        getPreviousSavedImage();
        console.log(userDataObject);
    }, [isCanceled, savedImage]);

    async function PreviousPhotoProfile() {
        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);
        let imagename = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userdataobject["user"]);
        let imageUrl = await axios({
            url: "http://127.0.0.1:8000/api/userprofile/photo_profile/" + userdataobject["user"],
            method: "GET",
            responseType: "blob",
        });
        let imageData = imageUrl.data;
        let type = imageData.type;
        let uploadedFile = new File([imageData], imagename.data.at(0)["photo_profile_name"], { type: type });
        document.querySelector("#image-preview-parent").style.display = "none";
        const image_preview_result = document.querySelector("#image-preview-result");
        image_preview_result.style.display = "block";
        const fileReader = new FileReader();
        fileReader.onload = ev => {
            const savedPreview = ev.target.result;
            const selectedPreview = ev.target.result;
            if (selectedPreview == null) {
                image_preview_result.style.backgroundImage = `url(${savedPreview})`;
            } else {
                image_preview_result.style.backgroundImage = `url(${ev.target.result})`;
            }
        }
        fileReader.readAsDataURL(uploadedFile);
    }
    useEffect(() => {
        let mounted = true;
        function ShowImagePreviewAfterSelectImage() {
            document.querySelector("#image-preview-parent").style.display = "none";
            const image_preview_result = document.querySelector("#image-preview-result");
            image_preview_result.style.display = "block";
            const fileReader = new FileReader();
            fileReader.onload = ev => {
                const savedPreview = ev.target.result;
                const selectedPreview = ev.target.result;
                if (selectedPreview == null) {
                    image_preview_result.style.backgroundImage = `url(${savedPreview})`;
                } else {
                    image_preview_result.style.backgroundImage = `url(${ev.target.result})`;
                }
            }
            fileReader.readAsDataURL(savedImage);
        }
        if (isimageselected == true) ShowImagePreviewAfterSelectImage();
        if (isimageselected == false) PreviousPhotoProfile();

        if (mounted) {

        }
    });
    const userSubmit = async (e) => {
        e.preventDefault();
        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);
        PreviousPhotoProfile();
        let formData = new FormData();
        formData.append("image_file", savedImage)
        formData.append("author_description", userDescription);
        await axios.post(`http://127.0.0.1:8000/api/adminapproval/author/${userdataobject["user"]}`, formData).then(response => {

        }).catch(error => {
            if (error.response.status === 422) {
                setAuthorValidationErrorMessages(error.response.data.message);
            }
            if (error.response.status === 500) {
                console.log(error.response.data);
            }
            if (error.response.status === 409) {
                window.location.replace("/userdashboard/news");
            }
        });
    }
    return (
        <div className="userdashboard-main">
            <div className="container-fluid">
                <div className="text-center container mt-5 mb-5 w-50 rounded" style={{ border: "2px solid black" }}>
                    <h4>Indonesia Open News Create Author Account</h4>
                </div>
                <form style={{ positition: "relative", left: "60px" }} onSubmit={userSubmit}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='description' className="col-sm-2 mt-5 col-form-label">Author Photo Profile</label>
                        <div className="col-sm-8">
                            <div className="d-flex justify-content-start flex-column align-items-baseline ">
                                <div className="border" id="image-preview-parent" style={{ width: "300px", padding: "10% 5%", marginRight: "20px" }}>
                                    <p id="image-preview" style={{ display: "inline" }} className="text-danger">You don't have photo profile</p>
                                </div>
                                <div className="border" id="image-preview-result" style={{
                                    display: "none", height: "200px", width: "300px", marginRight: "20px",
                                    backgroundRepeat: "no-repeat", backgroundSize: "contain"
                                }} ></div>
                                <input type="file" className="btn btn-dark form-control w-50 mt-3" accept="image/*" onChange={handleUploadImage} />
                            </div>
                            <ul className="mr-5 mt-2">
                                {authorValidationErrorMessages["image_file"] && <li className="text-danger">{authorValidationErrorMessages["image_file"][0]}</li>}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='description' className="col-sm-2 mt-5 col-form-label">Author Description</label>
                        <div className="col-sm-8 mt-4 d-flex flex-column align-items-start">
                            <textarea type="text" className="form-control" value={userDescription} onChange={(e) => { setUserDescription(e.target.value) }} id="description" rows="5" cols="1"></textarea>
                            <ul className="mr-5 mt-2">
                                {authorValidationErrorMessages["author_description"] && <li className="text-danger">{authorValidationErrorMessages["author_description"][0]}</li>}
                            </ul>
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
    const [userDescription, setUserDescription] = useState("");
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