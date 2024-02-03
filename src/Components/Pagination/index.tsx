import usePagination from '@lucasmogari/react-pagination';
import PaginationLink from './PaginationLink';

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  const { getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 5,
  });

  const firstPage = 1;

  const nextPage = Math.min(page + 1, totalPages);

  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2); // 왼쪽, 오른쪽 아이콘 포함

  return (
    <div className="flex items-center justify-center gap-2 pb-2 mt-4">
      {[...arr].map((_, index) => {
        const { page, disabled, current } = getPageItem(index);
        if (page === 'previous') {
          return (
            <PaginationLink disabled={disabled} page={prevPage} key={index}>
              {'<'}
            </PaginationLink>
          );
        }

        if (page === 'next') {
          return (
            <PaginationLink disabled={disabled} page={nextPage} key={index}>
              {'>'}
            </PaginationLink>
          );
        }

        if (page === 'gap') {
          return <span key={index}>...</span>;
        }
        return (
          <PaginationLink active={current} page={page} key={index}>
            {page}
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default Pagination;
