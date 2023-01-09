import { SideNavBar } from "../layout/SideNavBar";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Data } from "../components/NavLinks";
import axios from "axios";
import { data } from "jquery";
export function UserProfile(props) {
    const [input, setInput] = useState();
    const [user, setUser] = useState([]);
    const [photoProfile, setPhotoProfile] = useState("");
    // const 
    const handdleChange = event => {
        setInput(event.target.value);
    }
    //Use effect ngasih effect ke page User Profile pas pertama kali di-load/reload
    useEffect(() => {
        getUserProfile();//Pas page ini di-load/reload maka data user akan diload juga
    }, []);
    useEffect(() => {
        user.map(data => {
            if (data.photo_profile_link != null) {
                setPhotoProfile(data.photo_profile_link);
            } else {
                setPhotoProfile("https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png");
            }
        });
    });
    // Data fetching dari http://127.0.0.1:8000/api/user/profile/
    const getUserProfile = async () => {
        const userdata = localStorage.getItem("user");
        const userobject = JSON.parse(userdata);
        const user = await axios.get("http://127.0.0.1:8000/api/userprofile/" + userobject["user"]);
        setUser(user.data.author);
    }
    return (
        <>
            <div className="userdashboard-main" style={{ paddingLeft: "5%" }}>
                <div className="form-group">
                    {
                        user.map((data, index) => {
                            return (
                                <div key={index}>
                                    <img className='rounded-circle' style={{ display: "block", marginTop: "75px", marginLeft: "25px" }} width={50} height={50} src={photoProfile} />
                                    <label style={{ border: "2px solid black", padding: "4px", margin: "5px 20px" }}>{data.role === "author" ? "Author" : ""}</label>
                                    <div className="mb-3 mt-3 row">
                                        <label htmlFor='username' className="col-sm-2 col-form-label">User Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control w-75" value={data.name} disabled id="username" />
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-3 row">
                                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control w-75" disabled value={data.email} id="email" onChange={handdleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-3 row">
                                        <label htmlFor='staticEmail' className="col-sm-2 col-form-label">Join At</label>
                                        <label className="col-sm-2 col-form-label">{new Date(data.created_at).toLocaleDateString()}</label>
                                    </div>
                                    <div className="mb-3 mt-3 row">
                                        <label htmlFor='staticEmail' className="col-sm-2 col-form-label">Update Account At</label>
                                        <label className="col-sm-2 col-form-label">{new Date(data.updated_at).toLocaleDateString()}</label>
                                    </div>
                                    <div className="text-center">
                                        <NavLink className="btn btn-secondary" to={"/userdashboard/userprofile/update"}>Update</NavLink>
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