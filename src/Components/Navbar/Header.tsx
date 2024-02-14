import { useNavigate } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="mt-10 mb-6 px-28">
      <span className="flex items-center gap-4">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="object-cover w-20 h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <section style={{ display: 'flex', position: 'relative' }}>
          <input
            className="placeholder-primary01"
            style={{
              padding: '12px 66px 11px 16px',
              border: '1px solid #CCCCCC',
              borderRadius: '20px',
              outline: 'none',
              color: '#EC9D26',
              borderColor: '#EC9D26',
              width: '540px',
              fontSize: '14px',
            }}
            type="text"
            placeholder="배우고 싶은 분야가 있나요? 제목/강사명/수업 내용으로 검색해 보세요!"
          />
          <img
            src="/assets/Utils/search.svg"
            alt="search"
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
            }}
          />
        </section>
      </span>
      <Menu />
    </header>
  );
};

export default Header;
