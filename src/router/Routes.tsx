import { Route, Routes as ReactRouters } from 'react-router-dom';

import HomePage from '../pages/Homepage/page';
import Navbar from '../Components/Navbar';

import DetailPage from '../pages/CommunicationPage/DetailPage';
import CommunityPage from '../pages/CommunicationPage/page';
import TimeLine from '../Components/TimeLine';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />

        {/* 소통하러 올래 라우팅입니다 */}
        <Route
          path="community"
          element={
            <TimeLine
              imgSrc="/assets/TimeLine/community.png"
              title="소통하러 올래"
            />
          }
        >
          <Route index element={<CommunityPage />} />
          <Route path=":postId" element={<DetailPage />} />
        </Route>
      </Route>
    </ReactRouters>
  );
};

export default Routes;
