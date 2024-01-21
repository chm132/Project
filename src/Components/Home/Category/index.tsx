const CATEGORIES = [
  {
    id: 1,
    img: '/assets/Category/smartPhone.png',
    label: '스마트폰',
  },
  {
    id: 2,
    img: '/assets/Category/computer.png',
    label: '컴퓨터',
  },
  {
    id: 3,
    img: '/assets/Category/kiosk.png',
    label: '키오스크',
  },
  {
    id: 4,
    img: '/assets/Category/foreignLanguage.png',
    label: '외국어',
  },
  {
    id: 5,
    img: '/assets/Category/exercise.png',
    label: '운동',
  },
  {
    id: 6,
    img: '/assets/Category/art.png',
    label: '공예',
  },
  {
    id: 7,
    img: '/assets/Category/estate.png',
    label: '부동산',
  },
  {
    id: 8,
    img: '/assets/Category/mental.png',
    label: '심리',
  },
  {
    id: 9,
    img: '/assets/Category/employ.png',
    label: '취업/창업',
  },
  {
    id: 10,
    img: '/assets/Category/cook.png',
    label: '요리',
  },
  {
    id: 11,
    img: '/assets/Category/instrument.png',
    label: '악기',
  },
  {
    id: 12,
    img: '/assets/Category/asset.png',
    label: '자산',
  },
];

const Category = () => {
  return (
    <div className="grid content-around w-full grid-cols-6 gap-5 px-20 py-2 overflow-y-auto">
      {CATEGORIES.map((c) => (
        <div
          key={c.id}
          className={`
            flex flex-col items-center justify-center w-32 mx-auto bg-transparent border rounded-md py-[2px] cursor-pointer transition-all
          hover:bg-gray-200
            hover:scale-90
            hover:ease-in-out
          `}
        >
          <img src={c.img} alt={c.img} className="object-cover w-24 h-24" />
          <p className="font-bold">{c.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
