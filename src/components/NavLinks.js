import axios from 'axios';
import { useState, useEffect } from 'react';
// import { SubTopicTopNav } from '../layout/SubTopicTopNav';
import { TopNavLayoutLoggedIn } from '../layout/TopNavigationLoggedIn';
import { TopNavLayout } from '../layout/TopNavigation';


export function NavLinks() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsLoggedIn(true);
        }
    })
    if (isLoggedIn == true) {
        return (
            <TopNavLayoutLoggedIn />
        )
    } else {
        return (
            <TopNavLayout />
        )
    }

}