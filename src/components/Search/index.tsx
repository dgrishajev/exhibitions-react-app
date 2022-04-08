import React, { useState, useEffect, memo, FC } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface Props {
  onSearch: Function
}

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;

export const Search: FC<Props> = memo(({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    onSearch(inputValue);
  }, [inputValue, onSearch]);

  return (
    <StyledTextField
      fullWidth
      placeholder='Search'
      variant='outlined'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
})
