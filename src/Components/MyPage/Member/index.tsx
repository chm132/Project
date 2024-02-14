import { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import MyInfo from './MyInfo';
import LessonApply from './LessonApply';
import LessonTake from './LessonTake';
import HeartLesson from './HeartLesson';

const Member = () => {
  const params = useParams();
  const stage = params.stage ? params.stage : 1;

  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(Number(stage));
  }, [params]);

  return (
    <div className="bg-[#F2F2F2] pb-28">
      <Header step={step} />
      {step === 1 && <MyInfo />}
      {step === 2 && <LessonApply />}
      {step === 3 && <LessonTake />}
      {step === 4 && <HeartLesson />}
    </div>
  );
};
export default Member;
