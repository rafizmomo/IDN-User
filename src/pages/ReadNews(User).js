import Footer from "../layout/Footer";
// import { TopNavLayoutLoggedIn } from "../layout/TopNavigationLoggedIn";
import { News } from "../services/json_dummy";
import { useEffect, userState, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export function ReadNewsPage() {
    const { news_slug } = useParams();
    const [news, setNews] = useState({});
    const [manyNewsBySubTopic, setManyNewsBySubTopic] = useState([]);
    const [imageNews, setImageNews] = useState(null);
    useEffect(() => {
        getNews();
        getManyNews();
    }, []);
    const getNews = async () => {
        await axios.get("http://127.0.0.1:8000/api/news/open_news/" + news_slug).then(async (response) => {
            setNews(response.data.news);
        });
    }
    const getManyNews = async () => {
        const { sub_topic_slug } = news;
        console.log(sub_topic_slug)
        await axios.get("http://127.0.0.1:8000/api/news/topics/sub_topics/" + sub_topic_slug).then(response => {
            setManyNewsBySubTopic(response.data.news);
        });
    }

    return (
        <>
            <div className="container-fluid mt-2">
                <div className="d-flex">
                    <div className="main-read-news">
                        <div className="container-fluid">
                            {/* {news.map((data, key) => { */}
                            {/* return ( */}
                            <div className="container card">
                                <div className="mt-2">
                                    <img style={{
                                        // backgroundImage: `url(${data.url_gambar})`,
                                        position: "relative",
                                        left: "20px",
                                        border: "1px solid black",
                                        maxWidth: "500px",
                                        height: "200px"
                                    }} src={news.news_picture_link} />
                                </div>
                                <div className="text-title mt-2" style={{ marginLeft: "18px" }}>
                                    <h4>{news.news_title}</h4>
                                    <div className="d-flex">
                                        <img className='rounded-circle' width={50} height={50} src='https://w7.pngwing.com/pngs/73/580/png-transparent-arturia-business-logo-musical-instruments-individual-retirement-account-logo-business-sound.png' />
                                        <p style={{ marginTop: "10px" }}>{news.name}</p>
                                    </div>
                                    <p>Added at: {new Date(news.added_at).toLocaleDateString()}</p>
                                </div>
                                <div className='card-body'>
                                    <div className="card-text" style={{ textAlign: "justify" }}>
                                        {news.news_content}
                                    </div>
                                </div>
                            </div>
                            {/* ) */}
                            {/* })} */}
                        </div>
                    </div>
                    <div className="related-news-right-side" style={{ height: "fit-content", position: "sticky", top: "20%", right: "0" }}>
                        <div className="container bg-light" style={{ height: "500px", "overflowY": "auto" }}>
                            <h5 className="text-center">Related News</h5>
                            <hr style={{ "border": "2px solid black" }} />
                            {
                                manyNewsBySubTopic.map((data, key) => {
                                    // const limit_words = data.news_cot.substring(3, 100)
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
                                                <h5>{data.news_title}</h5>
                                                <div className="">
                                                    {data.news_content}
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