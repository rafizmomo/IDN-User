import Footer from "../layout/Footer";
// import { TopNavLayoutLoggedIn } from "../layout/TopNavigationLoggedIn";
import { News } from "../services/json_dummy";
import { useEffect } from "react";
export function ReadNewsPage() {
    return (
        <>
            <div className="container-fluid mt-2">
                <div className="d-flex">
                    <div className="main-read-news">
                        <div className="container-fluid">
                            {News.slice(0, 1).map((data, key) => {
                                return (
                                    <div key={key} className="container card">
                                        <div className="mt-2">
                                            <div style={{
                                                backgroundImage: `url(${data.url_gambar})`,
                                                backgroundRepeat: "no-repeat",
                                                position: "relative",
                                                left: "20px",
                                                backgroundSize: "cover",
                                                border: "1px solid black",
                                                backgroundPosition: "right",
                                                maxWidth: "500px",
                                                height: "200px"
                                            }}> </div>
                                        </div>
                                        <div className="text-title mt-2" style={{ marginLeft: "18px" }}>
                                            <h4>{data.title_news}</h4>
                                            <div className="d-flex">
                                                <img className='rounded-circle' width={50} height={50} src='https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png' />
                                                <p style={{ marginTop: "10px" }}>Test Name</p>
                                            </div>
                                            <p>Added at: 10/10/2010</p>
                                        </div>
                                        <div className='card-body'>
                                            <div className="card-text" style={{ textAlign: "justify" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit et sapien ut hendrerit. Suspendisse sodales dui ut sem finibus, eget malesuada enim ultricies. Sed volutpat ante ut nisi faucibus, sed sagittis sem pharetra. Quisque maximus interdum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et condimentum tellus, id ornare risus. Vestibulum tempor mauris scelerisque, feugiat nulla a, imperdiet risus. Etiam et ex non lacus egestas porttitor et sit amet velit. Nam imperdiet sapien ac elit pretium eleifend sed quis massa. Donec libero orci, ultricies a laoreet sed, ultricies id purus. Phasellus nulla lacus, placerat at venenatis in, imperdiet eget sapien. Nullam a ipsum non dui iaculis pretium. Nulla sollicitudin dapibus lacus, nec vulputate arcu malesuada non. Vestibulum pharetra ac dui id varius. Aenean lacinia ligula quis posuere eleifend. Ut lacus libero, lobortis sed blandit at, ultrices ut est.

                                                Nulla sagittis lorem in volutpat porttitor. Etiam blandit mi sit amet nulla tincidunt, id tincidunt sem varius. Vestibulum ut nibh convallis, auctor mauris ac, mollis eros. Morbi cursus tristique bibendum. Proin sed convallis dui. Donec a mauris arcu. Ut ornare ligula vitae erat tincidunt accumsan. Fusce mollis lectus ultricies, congue turpis at, eleifend urna. Aenean lectus nunc, congue at malesuada at, volutpat a nibh. Suspendisse potenti. Aenean vel tortor vehicula sem luctus vehicula sed congue enim. Morbi lobortis et dui ut eleifend.

                                                Nam non est sit amet nunc luctus convallis. Donec tincidunt bibendum aliquam. Mauris maximus arcu quis erat laoreet eleifend. Donec sit amet eros quis dolor lacinia venenatis. Suspendisse diam orci, ultrices vehicula augue eget, accumsan lobortis dolor. In in nulla sit amet lacus porta tristique quis vitae turpis. Morbi feugiat urna rhoncus scelerisque ornare. Ut tincidunt ultrices interdum. Suspendisse gravida tincidunt ornare. Donec accumsan felis mi, et sodales velit tempus a. Aenean cursus non urna non blandit.

                                                Nulla facilisi. In fermentum convallis orci sagittis iaculis. Pellentesque pellentesque massa vitae lacus luctus, vel mollis ligula aliquet. Suspendisse blandit ligula elit, et tincidunt nibh ornare quis. Praesent tempor quis sapien ut porta. Quisque hendrerit sapien nisl, non tristique enim luctus nec. Donec egestas, diam lobortis semper fermentum, libero ante porttitor lorem, quis tristique sem ante at arcu. Praesent sapien mi, placerat a sem at, egestas volutpat eros. Sed eget ipsum vulputate, consectetur sem ut, rhoncus tellus. Vestibulum varius non ante vitae congue.

                                                Donec faucibus, lorem eget lobortis dictum, magna sapien mollis magna, et finibus ex magna finibus eros. Aliquam iaculis quam diam, id scelerisque mauris placerat eu. Vestibulum id molestie enim. Aliquam hendrerit justo a velit cursus, vel dignissim ipsum faucibus. Vestibulum pellentesque ante turpis. Etiam eu tortor urna. Pellentesque egestas ornare ligula id semper. Duis vitae auctor magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ultrices arcu a erat tempor aliquet. Phasellus facilisis nibh quis nulla accumsan eleifend. Nunc posuere dapibus est, ac auctor odio molestie at. Vivamus aliquet id arcu a fermentum.
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="related-news-right-side" style={{ height: "fit-content", position: "sticky", top: "20%", right: "0" }}>
                        <div className="container bg-light" style={{ height: "500px", "overflowY": "auto" }}>
                            <h5 className="text-center">Related News</h5>
                            <hr style={{ "border": "2px solid black" }} />
                            {News.map((data, key) => {
                                const limit_words = data.content_news.substring(3, 100)
                                return (
                                    <div key={key} className="container p-3">
                                        <div style={{
                                            backgroundImage: `url(${data.url_gambar})`,
                                            position: "relative",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            border: "2px solid black",
                                            padding: "10px",
                                            backgroundPosition: "center",
                                            maxWidth: "200px",
                                            height: "100px",
                                        }}> </div>
                                        <div className=''>
                                            <h5>{data.title_news}</h5>
                                            <div className="">
                                                {limit_words}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}