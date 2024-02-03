import { useState } from 'react';
import { plusStep } from '../redux/slices/stepSlice';
import { useDispatch } from 'react-redux';

interface ToolTipProps {
  position: string;
  content: string;
  children: React.ReactNode;
}

const ToolTip = ({ position, content, children }: ToolTipProps) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const checkedHandler = () => {
    setIsChecked(true);
    dispatch(plusStep());
  };

  if (!isChecked) {
    return (
      <div id="tooltip" className="relative cursor-pointer">
        <div className="z-40 py-4 mx-2 rounded-md bg-slate-200">{children}</div>
        <div className="fixed inset-0 z-10 bg-black/15" />
        <div className="">
          <span
            className={`
            flex flex-col items-end gap-5 z-50 px-8 py-10 mb-2 w-80
            absolute  bg-slate-100 text-black text-sm p-2 rounded-md
            ${
              position === 'top'
                ? 'left-1/3 -translate-x-1/2 bottom-[calc(80%+5px)]'
                : ''
            }
            ${
              position === 'bottom'
                ? 'left-1/3 -translate-x-1/2 top-[calc(90%+5px)]'
                : ''
            }
            ${
              position === 'left'
                ? 'top-1/3 -translate-y-1/2 right-[calc(100%+30px)]'
                : ''
            }
            ${
              position === 'right'
                ? 'top-1/3 -translate-y-1/2 left-[calc(100%+30px)]'
                : ''
            }
          `}
          >
            <p className="font-bold">{content}</p>

            <button
              onClick={() => checkedHandler()}
              className="w-20 font-bold text-white rounded-md bg-amber-800 "
            >
              확인했어요
            </button>
          </span>
        </div>
        <span
          className={`
          absolute block border-[25px] z-50
          ${
            position === 'top'
              ? 'left-[30%] -translate-x-1/2 bottom-[80%] border-l-transparent border-r-transparent border-b-0 border-t-slate-100'
              : ''
          }
          ${
            position === 'bottom'
              ? 'left-[30%] -translate-x-1/2 top-[88%] border-l-transparent border-r-transparent border-t-0 border-b-slate-100'
              : ''
          }
          ${
            position === 'left'
              ? 'top-1/2 -translate-y-1/2 right-[110%] border-t-transparent border-b-transparent border-r-0 border-l-slate-100'
              : ''
          }
          ${
            position === 'right'
              ? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-slate-100'
              : ''
          }
        `}
        ></span>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default ToolTip;
