import { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { ProfileNavigation } from './ProfileNavigation';

import axios from 'axios';
const TopNavLayoutLoggedIn = () => {
    const [topics, setTopics] = useState([]);
    const { topic_slug } = useParams();
    const [active, setActive] = useState(null);
    useEffect(() => {
        getTopics();
    }, []);
    const getTopics = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/topics");
        setTopics(response.data.topics);
    }
    const activeLink = ({ isActive }) => {

    }

    const activeTopics = () => {
        return (topic_slug ? "active-topics" : "")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <ul className="top-nav-links">
                <li className="top-nav-logo"><Link to="/"><img src="http://localhost:3000/res/logo.png" /></Link></li>
                <li className="top-nav-home"><NavLink to="/" className={activeLink} >Home</NavLink></li>
                <li className="top-nav-members-container">
                    {
                        console.log(topic_slug)

                    }
                    {topics.map((data, index) => {
                        return (
                            <div key={data.id} className="top-nav-members ">
                                <Link key={index} to={`${data.topic_slug}`}>{data.topic_title}</Link>
                            </div>
                        )
                    })}
                </li>
            </ul>
            <div className="top-nav-specific-keywords-area">
                <div className="top-nav-search-area">
                    <input type="search" placeholder='Search news...' />
                    <button>Search</button>
                </div>
                <label htmlFor="news_content_radio" className="auto-specific">
                    <input type="radio" id="news_content_radio" name="search_specific_news" /> Search By News Content
                </label>
                <button className="btn btn-danger w-50" onClick={() => {
                    const search_specific_news_radio = document.getElementsByName("search_specific_news");
                    search_specific_news_radio.forEach(test1 => test1.checked = false)
                }}>Clear Search 'By'</button>
            </div>
            <ProfileNavigation />
        </nav >
    )
}
export { TopNavLayoutLoggedIn }