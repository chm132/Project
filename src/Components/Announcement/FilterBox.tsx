import axios from 'axios';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetFreeLessonsQuery } from '../../redux/apis/lessonApi';
import { LessonList } from '../../types/Response/Category/CategoryLessonsType';

interface FilterBoxProps {
  fix: boolean;
  categoryId: number;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setFreeData: React.Dispatch<React.SetStateAction<LessonList[]>>;
  selectedOrderCriteria: string;
  setSelectedOrderCriteria: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBox = ({
  fix,
  categoryId,
  setKeyword,
  setFreeData,
  selectedOrderCriteria,
  setSelectedOrderCriteria,
}: FilterBoxProps) => {
  let pageNo = new URLSearchParams(useLocation().search).get('pageNo');

  if (!pageNo) {
    pageNo = '1';
  }

  const { data } = useGetFreeLessonsQuery({ categoryId, pageNo });
  console.log(data);

  // 아래 주석부분 현재 인증관련 오류로 잠시 해놓은것이니 지우지 마세요

  const token = sessionStorage.getItem('accessToken');

  const fetchData = async () => {
    const response = await axios.get(`/lessons/${categoryId}/surveys`, {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
      },
    });
    console.log(response);
  };

  // isClicked는 드롭다운 왔다갔다
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const searchHandler = () => {
    if (token) {
      fetchData();
    }
    navigate('survey');
  };

  const createdAtHandler = () => {
    setSelectedOrderCriteria('createdAt');
    setIsClicked(false);
  };

  const gatherEndDateHandler = () => {
    setSelectedOrderCriteria('gatherEndDate');
    setIsClicked(false);
  };

  const joinHandler = () => {
    setSelectedOrderCriteria('join');
    setIsClicked(false);
  };

  const searchFree = () => {
    if (data) {
      setFreeData(data.result.lessonPreviewDTOList);
    }
  };

  return (
    <section
      className={`
      ${fix && 'fixed top-0 left-0 right-0 z-40 bg-white'}
      flex items-center justify-between w-full h-20 text-center px-36 `}
    >
      <ul className="grid grid-cols-3 font-medium">
        <div className="relative font-medium">
          <section
            className="flex items-center justify-center w-40 gap-1 text-gray-500 cursor-pointer"
            onClick={() => setIsClicked(!isClicked)}
          >
            <p className="text-lg">
              {selectedOrderCriteria === 'createdAt'
                ? '최신순'
                : selectedOrderCriteria === 'gatherEndDate'
                  ? '마감순'
                  : '신청자순'}
            </p>
            {isClicked ? (
              <MdKeyboardArrowDown size={24} />
            ) : (
              <MdKeyboardArrowRight size={24} />
            )}
          </section>
          <section
            className={`z-20 absolute flex flex-col w-full gap-4 py-4 bg-white right-3 top-10 rounded-b-[16px] ${
              !isClicked && 'hidden'
            }`}
          >
            <p
              className="cursor-pointer hover:font-semibold hover:text-primary01"
              onClick={createdAtHandler}
            >
              최신순
            </p>
            <p
              className="z-20 cursor-pointer hover:font-semibold hover:text-primary01"
              onClick={gatherEndDateHandler}
            >
              마감순
            </p>
            <p
              className="z-20 cursor-pointer hover:font-semibold hover:text-primary01"
              onClick={joinHandler}
            >
              신청자순
            </p>
          </section>
        </div>
        <li
          className="w-40 border py-[26px] text-primary01 border-primary01 cursor-pointer"
          onClick={() => searchFree()}
        >
          무료 교육만 보기
        </li>
        <li
          className="w-40 border py-[26px] text-primary01 border-primary01 cursor-pointer"
          onClick={searchHandler}
        >
          딱 맞는 교육 찾기
        </li>
      </ul>
      <div className="relative w-2/5">
        <input
          className="w-full p-4 rounded-[16px] bg-[#F2F2F2] placeholder-[#B3B3B3] text-sm outline-none border
        focus:border-primary01 focus:bg-transparent"
          placeholder="배우고 싶은 분야가 있나요? 여기에 검색해 보세요!"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <GoSearch
          size={24}
          className="absolute right-4 top-[15px] text-[#B3B3B3]"
        />
      </div>
    </section>
  );
};

export default FilterBox;
