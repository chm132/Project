interface FloatingProgressBarProps {
  step: number;
}

const FloatingProgressBar = ({ step }: FloatingProgressBarProps) => {
  const totalSteps = 8;
  const progressWidth = Math.max(((step - 1) / (totalSteps - 1)) * 100, 0);

  return (
    <div className=" w-[1070px] h-2 rounded-[4px] bg-[#CCCCCC] relative m-auto top-5 overflow-hidden">
      <div
        className="h-2 p-0 rounded-[4px] bg-primary01"
        style={{
          width: `${progressWidth}%`,
          transition: 'width 0.5s ease',
        }}
      ></div>
    </div>
  );
};

export default FloatingProgressBar;
