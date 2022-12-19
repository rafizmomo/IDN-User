import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { SubTopicTopNav } from '../layout/SubTopicTopNav';
import { TopNavLayoutLoggedIn } from '../layout/TopNavigationLoggedIn';

export function NavLinks() {

    // if (path != '/') {
    //     return (
    //         <>
    //             <TopNavLayoutLoggedIn />
    //             
    //         </>
    //     );
    // }
    // console.log(topic_slug)
    return (
        <>
            <TopNavLayoutLoggedIn />
            <SubTopicTopNav />
        </>
    )
}