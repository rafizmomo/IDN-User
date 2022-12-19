import { NavLink } from 'react-router-dom';
export default function SignIn() {
    const signup_value = "Signin";
    return (
        <>
            <div className="container-sm mt-middle-custom border border-dark pb-2" style={{ "maxWidth": "1000px" }}>
                <div className="text-center border border-dark rounded mt-3">Indonesia Open News
                    <br />User Signin
                </div>
                <form className="form-group">
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='staticEmail' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="button" className="btn btn-success" value={signup_value} />
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