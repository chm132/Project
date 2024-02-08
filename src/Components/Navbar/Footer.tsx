const Footer = () => {
  return (
    <footer className="">
      <section className="flex items-center justify-between py-4 border px-28">
        <ul className="flex items-center gap-8 font-medium text-[#666666] cursor-pointer">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>자주하는 질문</li>
          <li>부패/공익신고센터</li>
          <li>기관/선생님 신청</li>
        </ul>
        <p className="cursor-pointer text-primary01">
          올래 사용이 어려우신가요?
        </p>
      </section>

      <section className="bg-[#F2F2F2] pt-10">
        <div className="px-28">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="object-cover w-20 h-8 mb-8 cursor-pointer"
          />
          <div className="flex flex-col gap-3 pb-20">
            <p className="text-sm text-[#4D4D4D]">
              Email | olaecontact@gmail.com
            </p>
            <p className="text-gray-400">
              본 콘텐츠의 저작권은 제공처 또는 올래에 있으며, 무단 이용하는 경우
              저작권법 등에 따라 법적책임을 질 수 있습니다.
            </p>
            <p className="font-semibold">
              Copyright © Olae Corp. All Rights Reserved.{' '}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
