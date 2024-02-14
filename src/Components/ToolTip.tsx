import { useState } from 'react';
import { plusStep } from '../redux/slices/stepSlice';
import { useDispatch } from 'react-redux';

interface ToolTipProps {
  step: string;
  children: React.ReactNode;
}

const ToolTip = ({ step, children }: ToolTipProps) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const checkedHandler = () => {
    setIsChecked(true);
    dispatch(plusStep());
  };

  if (!isChecked) {
    return (
      <div className="relative cursor-pointer">
        <div className="z-40 py-4 mx-2 rounded-md bg-slate-200">{children}</div>
        <div className="fixed inset-0 z-10 bg-black/50" />
        <section
          className={`
            ${
              step === 'first' &&
              'absolute z-40 flex items-end gap-3 left-96 -bottom-6'
            }
            ${
              step === 'second' &&
              'absolute z-40 flex items-end gap-3 left-[500px] -bottom-20'
            }
            ${
              step === 'third' &&
              'absolute z-40 flex items-start gap-3 left-12 -top-20 w-[700px]'
            }
            ${
              step === 'fourth' &&
              'absolute z-40 flex items-end gap-3 right-20 -bottom-16 w-[750px]'
            }
            ${
              step === 'fifth' &&
              'absolute z-40 flex items-start gap-3 left-32 -top-20 w-[700px]'
            }
            `}
        >
          <button
            onClick={() => checkedHandler()}
            className={`${
              step !== 'fourth' && 'hidden'
            } px-4 py-[14px] font-semibold text-white rounded-2xl bg-primary01 w-full`}
          >
            확인했어요
          </button>
          <img src={`/assets/OnBoarding/${step}.svg`} alt="step" />
          <button
            onClick={() => checkedHandler()}
            className={`${
              step === 'fourth' && 'hidden'
            } px-4 py-[14px] font-semibold text-white rounded-2xl bg-primary01 w-full`}
          >
            확인했어요
          </button>
        </section>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default ToolTip;
