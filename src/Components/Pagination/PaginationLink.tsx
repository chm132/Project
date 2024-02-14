import { Link } from 'react-router-dom';

interface PaginationLinkProps {
  page?: number | string;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const PaginationLink = ({
  page,
  active,
  children,
  disabled,
}: PaginationLinkProps) => {
  return (
    <Link
      to={`?pageNo=${page}`}
      className={`p-2 w-10 h-10 text-center
        ${
          active
            ? 'font-bold text-white rounded-full bg-primary01'
            : 'hover:border-b-4  text-gray-500'
        }
        ${disabled ? 'hidden' : ''}
      }`}
    >
      <div>{children}</div>
    </Link>
  );
};

export default PaginationLink;
