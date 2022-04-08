import React, { ChangeEvent, FC } from 'react'
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

interface Props {
  pagesCount: number
  currentPage: number
  onPageChange: (event: ChangeEvent, value: number) => void
}

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  height: 100px;
`;

export const ExhibitionsPagination: FC<Props> = ({ pagesCount, currentPage, onPageChange }) => (
  <Container>
    <StyledPagination
      count={pagesCount}
      page={currentPage}
      onChange={onPageChange}
    />
  </Container>
);
