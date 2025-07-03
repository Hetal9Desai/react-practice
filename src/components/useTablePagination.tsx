// Implement a custom React hook called useTablePagination that manages pagination state for a table component. The hook should:

// - Accept an optional initial page size.
// - Track the current page, start index, and end index for the current page.
// - Provide functions to set the current page (accepting both numbers and strings), reset to the first page, and      update the page size (which should also reset to the first page).
// - Recalculate start and end indices whenever the page or page size changes.
// - Return all relevant state and functions for use in a table component.

import { useCallback, useMemo, useState } from "react";

interface TablePagination {
  currentPage: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
  setPage: (page: number | string) => void;
  resetPage: () => void;
  updatePageSize: (newSize: number | string) => void;
}

function useTablePagination(initialPageSize: number = 10): TablePagination {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);

  const { startIndex, endIndex } = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return { startIndex: start, endIndex: end };
  }, [currentPage, pageSize]);

  const setPage = useCallback((page: number | string) => {
    const parsed = typeof page === "string" ? parseInt(page, 10) : page;
    if (!isNaN(parsed) && parsed > 0) {
      setCurrentPage(parsed);
    }
  }, []);

  const resetPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const updatePageSize = useCallback((newSize: number | string) => {
    const parsed =
      typeof newSize === "string" ? parseInt(newSize, 10) : newSize;
    if (!isNaN(parsed) && parsed > 0) {
      setPageSize(parsed);
      setCurrentPage(1);
    }
  }, []);

  return {
    currentPage,
    pageSize,
    startIndex,
    endIndex,
    setPage,
    resetPage,
    updatePageSize,
  };
}

export default useTablePagination;
