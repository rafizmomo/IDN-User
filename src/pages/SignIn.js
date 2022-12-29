import { NavLink, useNavigate, useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        // setRole("author");
        getCsrfToken();
        if (localStorage.getItem("user")) {
            window.location.replace("/");
        }
    }, []);

    const getCsrfToken = async () => {
        axios.get("http://127.0.0.1:8000/api/token").then(response => {
            setToken(response.data);
        })
    }
    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        await axios.post("http://127.0.0.1:8000/api/login/user", formData).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            // href.to("/")
            window.location.replace("/");

        }).catch((error) => {
            if (error.response) {
                console.log(error.response.message);
            }
        });
    }
    return (
        <>
            <div className="container-sm mt-middle-custom border border-dark pb-2" style={{ "maxWidth": "1000px" }}>
                <div className="text-center border border-dark rounded mt-3">Indonesia Open News
                    <br />User Signin
                </div>
                <form className="form-group" onSubmit={loginHandler}>
                    <input type={'hidden'} value={token} />
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='staticEmail' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-success" value={"Signin"} />
                    </div>
                </form>
                <div className="d-flex justify-content-sm-center row text-center ">
                    <div className="mt-2 mr-5 col-sm-3">
                        <NavLink className="btn btn-secondary" to={"/signup"}>Signup</NavLink><br />
                        <span>Haven't an Account Yet?</span>
                    </div>
                    <div className="mt-3 col-sm-3"> Or </div>
                    <div className="mt-2 col-sm-3">
                        <NavLink className="btn btn-dark" to="/signup">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width={20} height={20} /> Signup With Google
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}