import { SideNavBar } from "../layout/SideNavBar"
import Footer from "../layout/Footer";
export function UpdateUserProfile() {
    return (
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    <div className="container" style={{
                        marginTop: "30px"
                    }}>
                        <img className='rounded-circle' width={50} height={50} src='https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png' />
                        <button className="btn btn-secondary" style={{ maxWidth: "fit-content", position: "absolute", left: "80px" }}>Upload User Profile</button>
                    </div>
                    <form className="form-group">
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='username' className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" defaultValue="Joshua" id="username" />
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