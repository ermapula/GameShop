import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Box } from '@mui/material';
import data from '../data/Games.js';

export default function Stats() {
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    data.map((game, i) => {
      data[i]['total'] = game.price * game.buys
    })
  }, [])

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = data.sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });
  return (
    <Box bgcolor={"background.default"} minHeight="100%"> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>

            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={() => handleSort('id')}
              >
                ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'title'}
                direction={orderBy === 'title' ? order : 'asc'}
                onClick={() => handleSort('title')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'price'}
                direction={orderBy === 'price' ? order : 'asc'}
                onClick={() => handleSort('price')}
              >
                Price
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'wishlists'}
                direction={orderBy === 'wishlists' ? order : 'asc'}
                onClick={() => handleSort('wishlists')}
              >
                Wishlists
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'buys'}
                direction={orderBy === 'buys' ? order : 'asc'}
                onClick={() => handleSort('buys')}
              >
                Buys
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'total'}
                direction={orderBy === 'total' ? order : 'asc'}
                onClick={() => handleSort('total')}
              >
                Total from buys
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id}>
              <TableCell><Box component="img" src={row.header} width="150px" /></TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price ? `$${row.price}` : "Free"}</TableCell>
              <TableCell>{row.wishlists}</TableCell>
              <TableCell>{row.buys}</TableCell>
              <TableCell>${row.total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
