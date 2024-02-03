import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getCookie } from '../../utils/cookies';
import Banner from '../../Components/Home/Banner';
import ToolTip from '../../Components/ToolTip';
import Category from '../../Components/Home/Category';
// import Search from '../../Components/Home/SearchInput';
import Row from '../../Components/Home/Row';
import Community from '../../Components/Home/Community';
import News from '../../Components/Home/News';
import Teacher from '../../Components/Home/Teacher';
import { useEffect, useRef } from 'react';

function HomePage() {
  const step = useSelector((state: RootState) => state.step.count);
  const isNotFirstEntered = getCookie('isEntered');
  const tooltipRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // 온보딩 진행 시 화면 전환
  useEffect(() => {
    const scrollToTooltip = () => {
      const tooltip = tooltipRefs[step - 1]?.current;

      if (tooltip) {
        (tooltip as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToTooltip();
  }, [step]);

  return (
    <div className="w-full overflow-hidden">
      <Banner />

      {step === 1 && !isNotFirstEntered ? (
        <>
          <ToolTip
            position="bottom"
            content="아이콘과 검색기능을 통해 원하는 학습 신청이 가능해요!"
          >
            <section ref={tooltipRefs[0]} />
            <Category />
            {/* <Search /> */}
          </ToolTip>
        </>
      ) : (
        <>
          <Category />
          {/* <Search /> */}
        </>
      )}

      {step === 2 && !isNotFirstEntered ? (
        <>
          <ToolTip
            position="bottom"
            content="뭘 배울지 모르겠다면, 올래에서 가장 인기 많은 교육을 배워보는 건 어때요?"
          >
            <Row title="올래 인기교육" data="popular" />
            <Row title="지금 막 뜬 교육" data="recent" />
          </ToolTip>
          <section ref={tooltipRefs[1]} />
        </>
      ) : (
        <>
          <Row title="올래 인기교육" data="popular" />
          <Row title="지금 막 뜬 교육" data="recent" />
        </>
      )}
      {step === 3 && !isNotFirstEntered ? (
        <>
          <ToolTip position="bottom" content="커뮤니티와 뉴스도 있어요!">
            <div className="grid grid-cols-2 gap-5 my-10 px-28">
              <Community />
              <News />
            </div>
          </ToolTip>
          <section ref={tooltipRefs[2]} />
        </>
      ) : (
        <div className="grid grid-cols-2 gap-5 my-10 px-28">
          <Community />
          <News />
        </div>
      )}
      {step === 4 && !isNotFirstEntered ? (
        <section ref={tooltipRefs[3]}>
          <ToolTip
            position="top"
            content="전문적으로 배워보고 싶은 게 있다면, 우리 동네 인기 선생님들에게 배울 수도 있어요!"
          >
            <Teacher />
          </ToolTip>
        </section>
      ) : (
        <Teacher />
      )}
    </div>
  );
}

export default HomePage;
