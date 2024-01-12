import React from 'react'

const WideMenu = () => {
  return (
    <>
      <ul className='flex flex-col items-center'>
          <li className='py-5 cursor-pointer hover:bg-amber-800 hover:px-20 hover:text-white'>카테고리</li>
          <li className='py-5 cursor-pointer'>인기교육</li>
          <li className='py-5 cursor-pointer'>지금 막 뜬 교육</li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='py-5 cursor-pointer'>궁금해요</li>
          <li className='py-5 cursor-pointer'>같이해요</li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='py-5 cursor-pointer'>공지사항</li>
          <li className='py-5 cursor-pointer'>건강정보</li>
          <li className='py-5 cursor-pointer'>생활정보</li>
          <li className='py-5 cursor-pointer'>취업정보</li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='py-5 cursor-pointer'>카테고리</li>
          <li className='py-5 cursor-pointer'>우리 동네 인기 선생님</li>
        </ul>
    </>
  )
}

export default WideMenu