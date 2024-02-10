import { useLocation } from 'react-router-dom';

import { useGetNewsQuery } from '../../redux/apis/newsApi';
import { useScroll } from '../../utils/useScroll';

import { useState } from 'react';
import FilterBox from '../../Components/News/FilterBox';

import NewsCards from '../../Components/News/NewsCard';
import Pagination from '../../Components/Pagination';
const NewsCard = () => {
  const location = useLocation(); // detailPage에서 다시 뒤로 돌아 올때를 위해
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState(
    location ? location.state?.category : '분류',
  );

  const { y: scrollHeight } = useScroll();
  const fixStandard = scrollHeight > 500; // display: fixed 이정표 역할

  let pageNo = new URLSearchParams(useLocation().search).get('pageNo');

  if (!pageNo) {
    pageNo = '1';
  }
  const { data, error } = useGetNewsQuery(
    { pageNo, category },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  let content;

  if (error) {
    content = <p>Netword Error...</p>;
  }

  if (data) {
    const newsData = data.result.newsList;

    content = (
      <div className="bg-[#F2F2F2] px-20 pt-10 pb-28 flex flex-col gap-5">
        {newsData.map((data) => (
          <NewsCards
            key={data.id}
            id={data.id}
            part={data.category}
            title={data.title}
            content={data.content}
            author={data.author}
            createdAt={data.createdAt}
          />
        ))}
        <Pagination
          page={Number(pageNo)}
          totalItems={data.result.totalElements}
          perPage={10}
        />
      </div>
    );
  }

  return (
    <div>
      <FilterBox
        fix={fixStandard}
        setKeyword={setKeyword}
        category={category}
        setCategory={setCategory}
      />
      {content}
    </div>
  );
};

export default NewsCard;
