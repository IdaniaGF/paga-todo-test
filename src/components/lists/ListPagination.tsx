import { type ChangeEvent, useMemo } from "react";
import { Pagination } from "@mui/material";

export interface Props {
  total: number;
  page: number;
  setPage: (a: number) => void;
}

export const ListPagination = ({ total, page, setPage }: Props) => {
  const handleChangePage = (e: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const maxPages = useMemo(() => {
    if (total) {
      return Math.ceil(total / 10);
    }
    return 0;
  }, []);

  return (
    <div className={`pagination py-2 mx-3 flex-row-start-center`}>
      <p className="mr-2">
        {total == 0 ? 0 : page * 10 - 9}-
        {total == 0 ? 0 : page == maxPages ? total : page * 10} de {total}
      </p>
      <Pagination
        count={maxPages}
        page={page}
        onChange={handleChangePage}
        size="small"
      />
    </div>
  );
};
