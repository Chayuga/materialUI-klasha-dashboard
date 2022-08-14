import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Pagination from '@mui/material/Pagination';
import TableRow from '@mui/material/TableRow';

import { COLUMNS } from './Columns';
import { TRANSACTIONS } from './data';
import { Box, Button, Typography } from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';

const DisplayTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto',
        border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: '5px'
      }}>
      <TableContainer sx={{ maxHeight: '80vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Box
            sx={{ paddingY: '20px', paddingX: '10px', borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
            <Typography>Transaction history</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px'
            }}>
            <Box sx={{ border: '1px solid rgba(0,0,0,0.2)', borderRadius: '5px', padding: '10px' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                Search <Search sx={{ marginLeft: '30px' }} />
              </Typography>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box sx={{}}>
                <Button
                  sx={{
                    margin: '5px',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '5px'
                  }}>
                  Filter <FilterList sx={{ height: '1rem' }} />
                </Button>
                <Button
                  sx={{
                    margin: '5px',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '5px'
                  }}>
                  Export
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ borderTop: '1px solid rgba(0,0,0,0.2)' }}>
          <TableHead sx={{ width: '100%' }}>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}>
                  <Typography variant="h6">{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {TRANSACTIONS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {COLUMNS.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', padding: '20px', justifyContent: 'flex-end' }}>
        <Pagination
          sx={{
            display: 'flex',
            paddingY: '5px',
            border: '1px solid rgba(0,0,0,0.2)',
            borderRadius: '5px'
          }}
          rowsPerPage={7}
          count={20}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default DisplayTable;
