import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
const TopNavLayout = () => {
    const [topics, setTopics] = useState([]);
    const [active, setActive] = useState(null);
    useEffect(() => {
        getTopics();
    }, []);
    const getTopics = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/topics");
        setTopics(response.data.topics);
    }
    return (
        <>
            <nav className="top-navbar">
                <ul className="top-navigation-bar">
                    <li className="top-nav-logo"><Link to="/"><img src="http://localhost:3000/res/logo.png" /></Link></li>
                    <li className="top-nav-members-container">
                        <div className="top-nav-home"><NavLink to="/" >Home</NavLink></div>
                        <div className="top-nav-members">
                            {topics.map((data) => {
                                return (
                                    <a className="top-nav-links" href={`${data.topic_slug}`} > {data.topic_title}</a>
                                )
                            })}
                        </div>
                    </li>
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
                    <Link to={"/signup"} className="btn-custom btn-slate">Sign Up</Link>
                </ul>
            </nav >
        </>
    )
}
export { TopNavLayout }