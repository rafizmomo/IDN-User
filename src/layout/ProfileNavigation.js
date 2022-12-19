import { Link } from "react-router-dom";
export function ProfileNavigation() {
    return (
        <>
            <div className="top-nav-subscribe">
                <button className="btn btn-secondary">Subscribe</button>
                <div className='d-flex' style={{ cursor: "pointer" }}>
                    <img className='rounded-circle' width={30} height={30} src='https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png' />
                    <h5 className='text-light'>Joshua</h5>
                </div>
            </div>
            <div className="profile-nav-modal">
                <ul>
                    <li>
                        <Link to="/userdashboard/userprofile">User Profile</Link>
                    </li>
                    <li>
                        {/* <NavLink to="">Sign Out</NavLink> */}
                    </li>
                </ul>
            </div>
        </>
    )
}