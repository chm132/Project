import { Route, Routes as ReactRouters, useLocation } from 'react-router-dom';

import HomePage from '../pages/Homepage/page';
import Navbar from '../Components/Navbar';

import DetailPage from '../pages/CommunicationPage/DetailPage';
import CommunityPage from '../pages/CommunicationPage/page';
import TimeLine from '../Components/TimeLine';
import { useEffect } from 'react';

import JoinPage from '../pages/Auth/JoinPage/page';
import SequencePage from '../pages/Auth/JoinPage/SequencePage';
import LoginPage from '../pages/Auth/LoginPage/page';
import CategoryPage from '../pages/CategoryPage/page';
import SurveyPage from '../pages/SurveyPage/page';
import SurveyPage2 from '../pages/SurveyPage/SurveyPage2';
import NotFound from '../pages/NotFound/page';
import NewsPage from '../pages/NewsPage/page';
import NewsDetailPage from '../pages/NewsPage/DetailPage';
const Routes = () => {
  const location = useLocation();

  // 페이지 전환 시 path 변화 감지 -> 시점 (0, 0) 시작
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 제작과정에 있는 페이지의 명시 -> url path 앞단 설정
  // 산하 페이지 나열

  return (
    <ReactRouters>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path=":category/:categoryId" element={<CategoryPage />} />
        <Route path=":category/:categoryId/survey" element={<SurveyPage />} />
        <Route
          path=":category/:categoryId/survey/2"
          element={<SurveyPage2 />}
        />

        {/* 인증과정 (로그인, 회원가입) 라우팅입니다. */}
        <Route path="auth">
          <Route path="join" element={<JoinPage />} />
          <Route path="join/:stage" element={<SequencePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* 소통하러 올래 라우팅입니다 */}
        <Route
          path="community"
          element={
            <TimeLine
              title="소통하러 올래"
              imgSrc="/assets/TimeLine/community.png"
            />
          }
        >
          <Route index element={<CommunityPage />} />
          <Route path=":communityId" element={<DetailPage />} />
        </Route>
        {/* 뉴스 페이지 라우팅 */}
        <Route
          path="news"
          element={
            <TimeLine
              imgSrc={`/assets/News/news.png`}
              title={`올래 생활뉴스`}
            />
          }
        >
          <Route index element={<NewsPage />} />
          <Route path=":newsId" element={<NewsDetailPage />} />
        </Route>
      </Route>

      {/* 잘못된 경로로 들어왔을 경우 */}
      <Route path="/*" element={<NotFound />} />
    </ReactRouters>
  );
};

export default Routes;
