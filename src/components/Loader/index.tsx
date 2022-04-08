import React, { FC } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader: FC = () => (
  <StyledContainer>
    <CircularProgress />
  </StyledContainer>
);
