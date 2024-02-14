import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FirstArea from '../../../Components/Auth/Join/FirstArea';
import SecondArea from '../../../Components/Auth/Join/SecondArea';
import ThirdArea from '../../../Components/Auth/Join/ThirdArea';
import JoinHeader from '../../../Components/Auth/Join/JoinHeader';

const JoinPage = () => {
  const params = useParams();
  const stage = params.stage;

  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(Number(stage));
  }, [params]);

  return (
    <div className="px-20">
      <JoinHeader step={step} />
      {step === 1 && <FirstArea />}
      {step === 2 && <SecondArea />}
      {step === 3 && <ThirdArea />}
    </div>
  );
};

export default JoinPage;
