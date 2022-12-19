export function CreateNewsForm() {
    return (
        <>
            <div className="userdashboard-main">
                <div className="container-fluid" style={{ height: "700px", overflowY: "auto" }}>
                    <div className="container" style={{
                        marginTop: "30px"
                    }}>
                        <img className='rounded-circle' width={50} height={50} src='https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png' />
                    </div>

                    <label style={{ border: "2px solid black", padding: "4px", margin: "5px 5px" }}>Author</label>
                    <form className="form-group">
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='username' className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" onChange={handdleChange} />
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='email' className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" disabled defaultValue="joshua@gmail.com" id="email" onChange={handdleChange} />
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='staticEmail' className="col-sm-2 col-form-label">User Name</label>
                            <label className="col-sm-2 col-form-label">11/16/2022</label>
                        </div>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor='staticEmail' className="col-sm-2 col-form-label">User Name</label>
                            <label className="col-sm-2 col-form-label">11/16/2022</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}