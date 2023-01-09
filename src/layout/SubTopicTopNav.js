import { NavLink, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { SubTopic } from "../pages/TopicHome";
export function SubTopicTopNav() {
    const [subTopics, setSubTopics] = useState([]);
    const [topics, setTopics] = useState([]);
    const { topic_slug } = useParams();
    // const { topic_slug } = useParams();
    // const location = useLocation();
    // const path = location.pathname;
    useEffect(() => {
        getSubTopic();
        getTopics();
    }, []);

    const getSubTopic = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/sub_topics/topic/" + topic_slug);
        setSubTopics(response.data);
    }
    const getTopics = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/topics");
        setTopics(response.data.topics);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark remove">
                <ul className="top-nav-subtopic-links">
                    <li className="top-nav-home nav-link"><a href={topic_slug} className="">Home</a></li>
                    <li className="navbar-nav-subtopic">
                        {
                            subTopics.map((subtopic, key) => {
                                return (
                                    <div className="nav-item-subtopic">
                                        <Link key={key} to={{ pathname: `${subtopic.sub_topic_slug}`, query: { subtopic } }}>{subtopic.sub_topic_title}</Link>
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