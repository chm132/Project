const Header = () => {
  return (
    <header className='flex items-center justify-between px-10'>
      <img 
        src="/assets/logo.png" 
        alt="logo" 
        className='object-cover w-48 h-40' 
      />
      <span className='text-sm font-bold'>
        <ul className='flex items-center gap-4 text-slate-500'>
          <li className='cursor-pointer hover:opacity-50'>부패/공익신고센터</li>
          <li className='cursor-pointer hover:opacity-50'>자주하는 질문</li>
          <li className='cursor-pointer hover:opacity-50'>올래 사용이 어렵다면?</li>
        </ul>
        <ul className='flex items-center gap-6 pl-24 mt-10'>
          <li className='text-black cursor-pointer hover:opacity-50'>로그인</li>
          <li className='text-black cursor-pointer hover:opacity-50'>회원가입</li>
          <li className='cursor-pointer hover:opacity-50 text-slate-400'>기관/선생님 신청</li>
        </ul>
      </span>
    </header>
  )
}

export default Header