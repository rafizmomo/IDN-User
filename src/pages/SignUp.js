import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [message, setMessages] = useState("");
    const navigate = useNavigate();
    const signup = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        await axios.post("http://127.0.0.1:8000/api/user/register", formData).then(response => {
            if (response.status === 200) {
                setMessages(response.data.message);
                if (response.data.message) {
                    navigate("/");
                    setTimeout(() => {
                        console.log(response.data);
                        window.localStorage.setItem("user", JSON.stringify(response.data));
                    }, 2000);
                }
            }
        }).catch(error => {
            if (error.response.status === 400) {
                setErrorName(JSON.parse(error.response.data)["name"]);
                setErrorEmail(JSON.parse(error.response.data)["email"]);
                setErrorPassword(JSON.parse(error.response.data)["password"]);
            }
        });
    }
    useEffect(() => {

    })
    const signup_value = "Signup";
    return (
        <>
            <div className="container-sm mt-middle-custom border border-dark pb-2" style={{ maxWidth: "1000px" }}>
                <div className="text-center border border-dark rounded mt-3">Indonesia Open News
                    <br />User Signup
                </div>
                <form className="form-group" onSubmit={signup}>
                    <div className="row mt-3 mb-3">
                        <label htmlFor="username" className="col-sm-2 col-form-label ">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" value={name} onChange={(e) => setName(e.target.value)} />
                            {errorName && <span>{errorName[0]}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="staticEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errorEmail && <span>{errorEmail[0]}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errorPassword && <span>{errorPassword[0]}</span>}
                        </div>
                    </div>
                    <div className="text-center">
                        {<p>{message}</p>}
                        <input type="submit" className="btn btn-success" value={signup_value} />
                    </div>
                </form>
                <div className="d-flex justify-content-sm-center row text-center ">
                    <div className="d-flex flex-column align-items-baseline w-25">
                        <a className="btn btn-dark" href="/signin">Signin Here</a><br />
                        <span>Have an Account?</span>
                    </div>
                    <div className="mt-3 col-sm-3"> Or </div>
                    <div className="mt-2 col-sm-3">
                        <buton className="btn btn-secondary d-flex flex-row align-items-center">
                            <img alt="user profile avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width={40} height={40} /> <span>Signin With Google</span>
                        </buton>
                    </div>
                </div>
            </div>
        </>
    );
}