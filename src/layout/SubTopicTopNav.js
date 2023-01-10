import { NavLink, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { SubTopic } from "../pages/TopicHome";
export function SubTopicTopNav() {
    const [subTopics, setSubTopics] = useState([]);
    const { topic_slug_url } = useParams();
    // const { topic_slug } = useParams();
    // const location = useLocation();
    // const path = location.pathname;
    useEffect(() => {
        getSubTopic();
    }, []);

    const getSubTopic = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/sub_topics/topic/" + topic_slug_url);
        setSubTopics(response.data);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark remove">
                <ul className="top-nav-subtopic-links">
                    <li className="top-nav-home nav-link"><a href={topic_slug_url} className="">Home</a></li>
                    <li className="navbar-nav-subtopic">
                        {
                            subTopics.map((subtopic, key) => {
                                return (
                                    <div className="nav-item-subtopic">
                                        <a href={`/${subtopic.topic_slug}/${subtopic.sub_topic_slug}`}>{subtopic.sub_topic_title}</a>
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