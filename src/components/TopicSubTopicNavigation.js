import { Route, Routes, Switch } from 'react-router-dom';
import { SubTopicTopNav } from '../layout/SubTopicTopNav';
import { TopicHome } from '../pages/TopicHome';
import { SubTopic } from '../pages/SubTopicHome';
export function TopicSubTopicNavigation() {
    return (
        <>
            <SubTopicTopNav />
            <Routes>
                <Route path='/' element={<TopicHome />} />
                <Route path='/:sub_topic_slug' element={<SubTopic />}>
                </Route>
            </Routes>
        </>
    )

}