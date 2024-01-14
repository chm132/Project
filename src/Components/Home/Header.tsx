import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  partName: string;
  pathName?: string;
}

const Header = ({ partName, pathName }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-between">
      <p className="text-2xl font-bold">{partName}</p>
      <span
        className="flex items-center gap-[1px] cursor-pointer hover:opacity-50"
        onClick={() => navigate(`/${pathName}`)}
      >
        <p>더보기</p>
        <IoIosArrowForward size={20} />
      </span>
    </section>
  );
};

export default Header;
