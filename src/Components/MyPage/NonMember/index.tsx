import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Header from './Header';
import CheckPhone from './CheckPhone';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LessonApply from './HasNumber/LessonApply';
import LessonTake from './HasNumber/LessonTake';

const NonMember = () => {
  // 비회원의 전화번호 - default는 빈값 ''
  const nonUserPhoneNum = useSelector(
    (state: RootState) => state.nonUser.phoneNum,
  );

  const params = useParams();
  const stage = params.stage ? params.stage : 1;

  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(Number(stage));
  }, [params]);

  let content;

  if (nonUserPhoneNum) {
    content = (
      <>
        <Header step={step} />
        {step === 1 && <LessonApply />}
        {step === 2 && <LessonTake />}
      </>
    );
  } else {
    content = <CheckPhone />;
  }

  return (
    <div className={`bg-[#F2F2F2] ${nonUserPhoneNum ? '' : 'pt-20'} pb-36`}>
      {content}
    </div>
  );
};

export default NonMember;
