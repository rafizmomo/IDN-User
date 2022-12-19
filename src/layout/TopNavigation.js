import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getJSONDummy } from '../services/json_dummy'
const TopNavLayout = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getJSONDummy().then(data => setTopics(data))
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="top-nav-logo">
                    <Link to="#"><img src="http://localhost:3000/res/logo.png" /></Link>
                </div>
                <ul className="top-nav-links">
                    <li className="top-nav-home"><Link to="#">Home</Link></li>
                    <li className="top-nav-members-container">
                        {topics.map((data, key) => {
                            return (
                                <div key={key} className="top-nav-members ">
                                    <Link to={`/${data.slug}`}>{data.topic}</Link>
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
                    <label htmlFor="news_content_radio" className="display-block auto-specific"><input type="radio" id="news_content_radio" name="search_specific_news" /> Search By News Content</label>
                    <button className="auto-specific" onClick={() => {
                        const search_specific_news_radio = document.getElementsByName("search_specific_news");
                        search_specific_news_radio.forEach(test1 => test1.checked = false)
                    }}>Clear Search 'By'</button>
                </div>
                <div className="top-nav-subscribe">
                    <NavLink className="btn btn-secondary" to="signup">Sign Up</NavLink>
                </div>
                <div className="menu-toggle">
                    <input type="checkbox"></input>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav >
        </>
    )
}
export { TopNavLayout }