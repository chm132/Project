import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailNewsQuery } from '../../redux/apis/newsApi';
import { IoIosArrowBack } from 'react-icons/io';
import Profile from '../../Components/News/DetailPage/Profile';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useState } from 'react';

import { truncate } from '../../utils/truncate';
import { NewsDataProps } from '../../types/NewsDataProps';

const NewsData = [
  {
    id: 1,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '1',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 2,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '2',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 3,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '3',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 4,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: 'K강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 5,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '5',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 6,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '6',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 7,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '7',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 8,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '-8',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 9,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '9-',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
  {
    id: 10,
    img: '/assets/Education/edu1.png',
    category: '건강 상식',
    title: '10',
    profileImg: '/assets/Education/edu1.png',
    author: '친절한',
    time: '1시간 전',
  },
];
const DetailPage = () => {
  const newsId = Number(useParams().newsId) || 0;
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetDetailNewsQuery(newsId);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (error) {
    content = <div>Network Error...</div>;
  }

  if (data) {
    const detailData = data.result;
    content = (
      <>
        <nav className="flex items-center h-20">
          <div
            className="flex items-center justify-center w-40 gap-1 cursor-pointer"
            onClick={() =>
              navigate('/news', {
                state: {
                  category: detailData.category,
                },
              })
            }
          >
            <IoIosArrowBack size={24} />
            <p className="font-medium text-[#333333] text-lg">
              {detailData.category === 'BOARD'
                ? '공지사항'
                : detailData.category === 'HEALTH'
                  ? '건강정보'
                  : detailData.category === 'LIFE'
                    ? '생활정보'
                    : '분류'}
            </p>
          </div>
        </nav>
        <div>
          <div className="bg-[#F2F2F2] px-80 pt-10 pb-28">
            <div
              style={{ padding: '64px' }}
              className="py-8 px-12 border rounded-[18px] shadow-lg transition-all bg-white"
            >
              <Profile name={detailData.author} date={detailData.createdAt} />
              <div className="content">
                <p
                  style={{
                    height: '29px',
                    marginBottom: '16px',
                    fontSize: '24px',
                    color: '#000000',
                    fontWeight: 'bold',
                  }}
                >
                  {detailData.title}
                </p>
                <p
                  style={{
                    marginBottom: '32px',
                    fontSize: '18px',
                    width: '752px',
                    lineHeight: '28.8px',
                    color: '#666666',
                  }}
                >
                  {detailData.content}
                </p>
                <img
                  style={{ marginBottom: '24px' }}
                  src="/assets/News/post1.svg"
                  alt="post"
                />
                <img
                  style={{ marginBottom: '32px' }}
                  src="/assets/News/post2.svg"
                  alt="post"
                />
                <p style={{ textAlign: 'right', color: '#888888' }}>
                  <img
                    src="/assets/News/view.svg"
                    alt="view"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      marginRight: '8px',
                    }}
                  />
                  <span style={{ fontSize: '18px', verticalAlign: 'middle' }}>
                    {detailData.views.toLocaleString()}명이 봤어요
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '666px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  textAlign: 'left',
                  width: '1141px',
                  fontSize: '24px',
                  color: '#1A1A1A',
                  lineHeight: '28.64px',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  margin: '56px auto 0px',
                }}
              >
                많이 보는 뉴스
              </p>
              <div
                className="swipecontainer"
                style={{
                  width: '1141px',
                  height: '404px',
                  backgroundColor: 'white',
                  margin: '24px auto ',
                }}
              >
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  spaceBetween={2}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  speed={1000}
                >
                  {NewsData.map((news) => (
                    <SwiperSlide key={news.id}>
                      <div
                        className="cursor-pointer hover:scale-105 hover:ease-in-out transition-all"
                        style={{
                          width: '258px',
                          height: '388px',
                          borderRadius: '22.6px',
                          backgroundColor: '#D9D9D9',
                          margin: '8px',
                          paddingTop: '258px',
                          boxShadow: '0 6px 10px rgba(80, 55, 18, 0.15)',
                        }}
                      >
                        <div
                          className="footer"
                          style={{
                            width: '258px',
                            height: '130px',
                            borderBottomRightRadius: '20px',
                            borderBottomLeftRadius: '20px',
                            backgroundColor: '#FFFFFF',
                          }}
                        >
                          <div
                            style={{
                              paddingTop: '12px ',
                              paddingLeft: '16px',
                            }}
                          >
                            <p
                              style={{
                                height: '17px',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#EC9D26',
                                lineHeight: '16.71px',
                                marginBottom: '8px',
                              }}
                            >
                              {news.category}
                            </p>
                            <p
                              style={{
                                width: '226px',
                                height: '48px',
                                color: '#1A1A1A',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '500',

                                marginBottom: '8px',
                                cursor: 'pointer',
                              }}
                              className="hover:underline hover:decoration-4 w-fit"
                            >
                              {news.title}
                            </p>

                            <section
                              className="author"
                              style={{
                                width: 'auto',
                                height: '24px',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <img
                                // src={news.writerProfile}
                                // alt={news.writerProfile}
                                src={`/assets/Teacher/teacher1.svg`}
                                alt="authorImg"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  marginRight: '8px',
                                }}
                              />
                              <p
                                style={{
                                  marginRight: '8px',
                                  color: '#808080',
                                  lineHeight: '14.32px',
                                }}
                              >
                                {news.author}
                              </p>
                              <p
                                style={{
                                  color: '#B3B3B3',
                                  lineHeight: '14.32px',
                                }}
                              >
                                {news.time}
                              </p>
                            </section>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div>{content}</div>;
};

export default DetailPage;
