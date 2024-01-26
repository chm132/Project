const Footer = () => {
  return (
    <footer className="py-8 pl-10 bg-gray-100">
      <section className="flex items-center gap-10 pb-10 font-bold">
        <p>이용약관</p>
        <p>개인정보처리방침</p>
      </section>

      <section className="flex items-center gap-2">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="object-cover w-32 h-24 cursor-pointer"
        />
        <span>
          <p className="mb-4 font-bold">이메일: givememoney@gmail.com</p>
          <p className="font-thin opacity-60">
            Copyright olrae All right reserved.
          </p>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
