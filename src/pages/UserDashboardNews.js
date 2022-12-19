import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserHaveNotAuthor } from "../layout/UserHaveNotAuthor";
import { AuthorHasNotCreateNews } from "../layout/AuthorHasNotCrateNews";
export function AuthorNews() {
    const [input, setInput] = useState();
    const handdleChange = event => {
        setInput(event.target.value);
    }
    return (
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    <AuthorHasNotCreateNews />
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