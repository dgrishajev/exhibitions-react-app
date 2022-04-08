import React, { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import debounce from 'lodash.debounce';

import { ExhibitionsTable, ExhibitionsPagination, Search } from './components';
import { findAll, findByQuery } from './services/exhibitions';
import { Exhibition } from './models/Exhibition';

export function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [exhibitions, setExhibitions] = useState<Array<Exhibition>>([]);

  const handlePageChange = async (event, value) => {
    setLoading(true);
    setPage(value);
    const results: any = await (searchQuery ? findByQuery({ q: searchQuery, page: value }) : findAll(page));
    setExhibitions(results.data.data);
    setLoading(false);
    setPagesCount(results.pagination.total_pages);
  };

  const debouncedResults = useMemo(() => {
    return debounce(async (q) => {
      const results = await findByQuery({ q })
      setExhibitions(results.data.data);
      setLoading(false);
      setSearchQuery(q);
      setPagesCount(results.data.pagination.total_pages);
    }, 300);
  }, []);

  return (
    <Container>
      <Search onSearch={debouncedResults} />
      <ExhibitionsTable loading={loading} exhibitions={exhibitions} />
      <ExhibitionsPagination currentPage={page} pagesCount={pagesCount} onPageChange={handlePageChange} />
    </Container>
  );
}
