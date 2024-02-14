import { useNavigate } from 'react-router-dom';

export const CATEGORIES = [
  {
    id: 1,
    img: '/assets/Category/smartPhone.svg',
    label: '스마트폰',
  },
  {
    id: 2,
    img: '/assets/Category/computer.svg',
    label: '컴퓨터',
  },
  {
    id: 3,
    img: '/assets/Category/kiosk.svg',
    label: '키오스크',
  },
  {
    id: 4,
    img: '/assets/Category/foreignLanguage.svg',
    label: '외국어',
  },
  {
    id: 5,
    img: '/assets/Category/exercise.svg',
    label: '운동',
  },
  {
    id: 6,
    img: '/assets/Category/art.svg',
    label: '공예',
  },
  {
    id: 7,
    img: '/assets/Category/estate.svg',
    label: '부동산',
  },
  {
    id: 8,
    img: '/assets/Category/mental.svg',
    label: '심리',
  },
  {
    id: 9,
    img: '/assets/Category/employ.svg',
    label: '취업/창업',
  },
  {
    id: 10,
    img: '/assets/Category/cook.svg',
    label: '요리',
  },
  {
    id: 11,
    img: '/assets/Category/instrument.svg',
    label: '악기',
  },
  {
    id: 12,
    img: '/assets/Category/asset.svg',
    label: '자산',
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="grid content-around w-full grid-cols-6 gap-5 py-10 overflow-y-auto bg-gray-100 px-28">
      {CATEGORIES.map((c) => (
        <div
          key={c.id}
          onClick={() => navigate(`/${c.label}/${c.id}`)}
          className={`
            flex items-center gap-8 w-44 bg-white border rounded-lg p-2 cursor-pointer transition-all font-medium 
            hover:bg-primary01
            hover:font-semibold
            hover:text-[#FFFFFF]
            hover:ease-in-out
          `}
        >
          <img src={c.img} alt={c.img} className="w-12 h-12" />
          <p>{c.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
