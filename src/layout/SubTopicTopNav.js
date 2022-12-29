import { NavLink, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
export function SubTopicTopNav() {
    const [news, setNews] = useState([]);
    const [topic, setTopics] = useState([]);
    // const { topic_slug } = useParams();
    // const location = useLocation();
    // const path = location.pathname;
    useEffect(() => {
        getSubTopic();
    }, []);

    const getSubTopic = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/sub_topics");
        setNews(response.data.sub_topics);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark remove">
                <ul className="top-nav-subtopic-links">
                    <li className="top-nav-home nav-link"><Link to="#" className="">Home</Link></li>
                    <li className="navbar-nav-subtopic">
                        {
                            news.map((subtopic, key) => {
                                return (
                                    <div className="nav-item-subtopic">
                                        <NavLink key={key} to={`${subtopic.sub_topic_slug}`}>{subtopic.sub_topic_slug}</NavLink>
                                    </div>
                                )
                            })
                        }
                    </li>
                </ul>
            </nav>
        </>
    )
}