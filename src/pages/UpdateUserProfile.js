import { SideNavBar } from "../layout/SideNavBar"
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export function UpdateUserProfile() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [savedImage, setSavedImage] = useState(null);
    const [isimageselected, setIsImageSelected] = useState(false);
    const [id, setId] = useState(null);
    const [userName, setUserName] = useState("");
    const [defaultUserName, setDefautlUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userDefaultUserDescription, setDefaultUserDescription] = useState("");
    const [email, setEmail] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [updatedAt, setUpdatedAt] = useState();
    const [isCanceled, setIsCanceled] = useState(true);
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
        }, 0.1);
        let mounted = true;
        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);
        async function getPreviousSavedImage() {
            let user = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userdataobject["user"]);
            let imageUrl = await axios({
                url: "http://127.0.0.1:8000/api/userprofile/photo_profile/" + userdataobject["user"],
                method: "GET",
                responseType: "blob",
            });
            let imageData = imageUrl.data;
            let type = imageData.type;
            let uploadedFile = new File([imageData], user.data.author[0]["photo_profile_name"], { type: type });
            if (mounted) {
                const { id, name, email, author_description, created_at, updated_at } = user.data.author[0];
                setId(id);
                setUserDescription(author_description);
                setDefaultUserDescription(author_description);
                setUserName(name);
                setDefautlUserName(name);
                setEmail(email);
                setCreatedAt(created_at);
                setUpdatedAt(updated_at);
                setSavedImage(uploadedFile);
            }
        }
        if (isCanceled == false) {
            return () => {
                mounted = false;
            }
        }
        getPreviousSavedImage();
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
        let uploadedFile = new File([imageData], imagename.data.author[0]["photo_profile_name"], { type: type });
        const photo_profile = document.querySelector("#photo-profile");
        const fileReader = new FileReader();
        fileReader.onload = ev => {
            const savedPreview = ev.target.result;
            const selectedPreview = ev.target.result;
            if (selectedPreview == null) {
                photo_profile.url = savedPreview;
            } else {
                photo_profile.url = ev.target.result;
            }
        }
        fileReader.readAsDataURL(uploadedFile);
    }
    useEffect(() => {
        function ShowImagePreviewAfterSelectImage() {
            const photo_profile = document.querySelector("#photo-profile");
            const fileReader = new FileReader();
            fileReader.onload = ev => {
                const savedPreview = ev.target.result;
                const selectedPreview = ev.target.result;
                if (selectedPreview == null) {
                    photo_profile.src = savedPreview;
                } else {
                    photo_profile.src = ev.target.result;
                }
            }
            fileReader.readAsDataURL(savedImage);
        }
        if (isimageselected == true) ShowImagePreviewAfterSelectImage();
        if (isimageselected == false) PreviousPhotoProfile();
    });
    const userSubmit = async (e) => {
        e.preventDefault();
        const userdata = window.localStorage.getItem("user");
        const userdataobject = JSON.parse(userdata);
        PreviousPhotoProfile();
        let formData = new FormData();
        formData.append("name", userName);
        formData.append("author_desc", userDescription);
        formData.append("image_file", savedImage);
        console.log(formData.get("image_file"));
        await axios.post(`http://127.0.0.1:8000/api/user/profile/${userdataobject["user"]}`, formData).then(response => {
        }).catch(error => {
            if (error.response.status === 422) {

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
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    <div className="d-flex flex-column justify-content-between align-items-baseline" style={{
                        marginTop: "30px",
                    }}>
                        <img className='rounded-circle border' id="photo-profile" width={100} height={100} />
                        <input type={"file"} className="btn btn-secondary w-25" onChange={handleUploadImage} />
                    </div>
                    <form encType="multipart/form" onSubmit={userSubmit}>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='username' className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" defaultValue={defaultUserName} value={userName} onChange={(e) => setUserName(e.target.value)} id="username" />
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='userdescription' className="col-sm-2 col-form-label">User Description</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" defaultValue={userDefaultUserDescription} value={userDescription} onChange={(e) => setUserDescription(e.target.value)} id="userdescription" />
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" disabled defaultValue={email} id="email" />
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label className="col-sm-2 col-form-label">Created At</label>
                            <div className="col-sm-10">
                                {new Date(createdAt).toLocaleDateString()}
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label className="col-sm-2 col-form-label">Updated At</label>
                            <div className="col-sm-10">
                                {new Date(updatedAt).toLocaleDateString()}
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}