import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import { ReadNewsPage } from '../pages/ReadNews(User)';
import { UserProfile } from '../pages/UserProfile';
import { UpdateUserProfile } from '../pages/UpdateUserProfile';
import { AuthorNews, CreateAuthorAccountForm, CreateNewsForm } from '../pages/UserDashboardNews';
import { SideNavBar } from '../layout/SideNavBar';
import Footer from '../layout/Footer';
import { TopNavLayoutLoggedIn } from '../layout/TopNavigationLoggedIn';
import { TopNavLayout } from '../layout/TopNavigation';
// import { SubTopicTopNav } from '../layout/SubTopicTopNav';
import { TopicHome } from '../pages/TopicHome';
import { SubTopic } from '../pages/SubTopicHome';
// import { UserDashboardCreateAuthorReceivingAccount, UserDashboardAuthorReceivingAccount } from '../pages/UserDashboardAuthorReceivingAccount';
// import { AuthorHasWriteNews } from '../layout/AuthorHasWriteNews';
import { History } from '../pages/AdminDashboardHistory';
import { NavLinks } from './NavLinks';
export function MainComp() {
    return (
        <>
            <NavLinks />
            <Routes>
                <Route path='/' element={<><Home /><Footer /></>} />
                <Route path='/:topic_slug' element={<><TopicHome /><Footer /></>} />
                <Route path='/:topic_slug/:sub_topic_slug/' element={<SubTopic />} />
                <Route path='/signup' element={<><SignUp /><Footer /></>} />
                <Route path='/signin' element={<><SignIn /><Footer /></>} />
                <Route path='/forgetpassword' element={<ForgotPassword />} />
                <Route path='/changepassword' element={<ChangePassword />} />
                {/* <Route path='/readnews' element={<><TopNavLayoutLoggedIn /><SubTopicTopNav /><ReadNewsPage /><Footer /></>} />
                <Route path='/userdashboard/userprofile' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserProfile /></>} />
                <Route path='/userdashboard/userprofile/update' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UpdateUserProfile /></>} />
                <Route path='/userdashboard/news' element={<><TopNavLayoutLoggedIn /><SideNavBar /><AuthorHasWriteNews /></>} />
                <Route path='/userdashboard/news/createauthoraccount' element={<><TopNavLayoutLoggedIn /><SideNavBar /><CreateAuthorAccountForm /></>} />
                <Route path='/userdashboard/news/createnews' element={<><TopNavLayoutLoggedIn /><SideNavBar /><CreateNewsForm /></>} />
                <Route path='/userdashboard/history' element={<><TopNavLayoutLoggedIn /><SideNavBar /><History /></>} />
                <Route path='/userdashboard/authoraccountbalance/createaccountbalance' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserDashboardCreateAuthorReceivingAccount /></>} />
                <Route path='/userdashboard/authoraccountbalance/' element={<><TopNavLayoutLoggedIn /><SideNavBar /><UserDashboardAuthorReceivingAccount /></>} /> */}
            </Routes>
        </>
    )
}