import React, { FC } from 'react'
import Paper from '@mui/material/Paper'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { styled } from '@mui/material/styles';

import { Exhibition } from '../../models/Exhibition'
import { truncateString } from '../../utils/truncateString'
import { Loader } from '../Loader'

interface Props {
  loading: boolean
  exhibitions: Exhibition[]
}

interface StyledRowProps {
  isFeatured: boolean
}

const StyledRow = styled(TableRow)<StyledRowProps>`
  background-color: ${props => props.isFeatured ? '#cdeac4' : '#f4d5d5' };
`

const StyledTableHead = styled(TableHead)`
  background-color: #ccc;
`

export const ExhibitionsTable: FC<Props> = ({ loading, exhibitions }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Is Featured</TableCell>
            <TableCell align="center">Gallery Title</TableCell>
            <TableCell align="center">Type of Exhibition</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {exhibitions.map((row) => (
            <StyledRow key={row.id} isFeatured={row.is_featured} >
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{truncateString(row.description || '')}</TableCell>
              <TableCell align="center">{row.is_featured ? 'Yes' : 'No'}</TableCell>
              <TableCell align="center">{row.gallery_title}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
