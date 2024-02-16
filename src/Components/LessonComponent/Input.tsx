interface InfoItemProps {
  iconSrc: string;
  label: string;
  value: string;
}

const LeassonInput = ({ iconSrc, label, value }: InfoItemProps) => (
  <div className="w-full h-[72px] bg-[#FFFFFF] rounded-2xl border-[1px] border-gray-100 p-6 gap-4 shadow-lg flex mb-6">
    <div className="w-[95px] h-[24px] leading-6 text-[15px] font-normal text-[#4D4D4D] gap-2 flex">
      <img src={iconSrc} alt={label} />
      <div className="w-[63px] h-[21px] text-center">{label}</div>
    </div>
    <p className="font-semibold text-[#1A1A1A] text-[15px] leading-6">
      {value}
    </p>
  </div>
);

export default LeassonInput;
