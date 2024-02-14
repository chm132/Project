import { useSelector } from 'react-redux';

import { getCookie } from '../../utils/cookies';
import Banner from '../../Components/Home/Banner';

import Category from '../../Components/Home/Category';
import Row from '../../Components/Home/Row';
import Community from '../../Components/Home/Community';
import News from '../../Components/Home/News';
import Teacher from '../../Components/Home/Teacher';
import { useEffect, useRef } from 'react';
import FloatingButton from '../../Components/Home/FloatingButton';
import LoginModal from '../../Components/AlertModal/LoginModal';
import ToolTip from '../../Components/ToolTip';
import { RootState } from '../../redux/store';

function HomePage() {
  const step = useSelector((state: RootState) => state.step.count);
  const isNotFirstEntered = getCookie('isEntered');
  const tooltipRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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
      {step === 6 && !isNotFirstEntered ? (
        <>
          <section ref={tooltipRefs[5]} />
          <Banner />
          <LoginModal home />
        </>
      ) : (
        <Banner />
      )}

      {step === 1 && !isNotFirstEntered ? (
        <>
          <ToolTip step="first">
            <section ref={tooltipRefs[0]} />
            <Category />
          </ToolTip>
        </>
      ) : (
        <>
          <Category />
        </>
      )}

      {step === 2 && !isNotFirstEntered ? (
        <>
          <ToolTip step="second">
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
      {step === 3 && !isNotFirstEntered && (
        <>
          <div className="grid grid-cols-2 gap-5 my-10 px-28">
            <section ref={tooltipRefs[2]}>
              <ToolTip step="third">
                <Community />
              </ToolTip>
            </section>
            <News />
          </div>
        </>
      )}
      {step === 4 && !isNotFirstEntered ? (
        <>
          <div className="grid grid-cols-2 gap-5 my-10 px-28">
            <Community />
            <ToolTip step="fourth">
              <section ref={tooltipRefs[3]} />
              <News />
            </ToolTip>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-5 my-10 px-28">
          <Community />
          <News />
        </div>
      )}
      {step === 5 && !isNotFirstEntered ? (
        <>
          <div className="h-10" />
          <ToolTip step="fifth">
            <section ref={tooltipRefs[4]} />
            <Teacher />
          </ToolTip>
        </>
      ) : (
        <Teacher />
      )}
      <FloatingButton />
    </div>
  );
}

export default HomePage;
