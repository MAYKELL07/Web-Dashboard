import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';

const ApiFieldsList = ({ apiFields }) => {
  if (!apiFields || apiFields.length === 0) {
    return <div>No data available</div>;
  }

  const headers = Object.keys(apiFields[0]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                <strong>{header}</strong>
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiFields.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header) => (
                <TableCell key={header}>
                  {header === 'requestMethod' || header === 'status' || header === 'category' ? (
                    <Box
                      component="span"
                      sx={{
                        bgcolor:
                          header === 'requestMethod'
                            ? row[header] === 'GET'
                              ? '#4679fa'
                              : row[header] === 'POST'
                              ? '#04cf29'
                              : 'inherit'
                            : header === 'status'
                            ? row[header] === 'active'
                              ? '#5df078'
                              : 'red'
                            : header === 'category'
                            ? '#2f2c42' // Use a light gray color for the category column
                            : 'inherit',
                        color: 'white',
                        p: 1,
                        borderRadius: 3,
                        display: 'inline-block',
                        position: 'relative',
                        '&:hover': {
                          bgcolor: header === 'category' ? '#8c7cf0' : 'inherit', // Purple hover effect for the category column
                        },
                      }}
                    >
                      {row[header]}
                    </Box>
                  ) : (
                    row[header]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <Tooltip title={row['status'] === 'active' ? 'Disable API' : 'Enable API'}>
                  <IconButton color="primary">
                    <img
                      src={row['status'] === 'active' ? '/arrow-2.png' : '/arrow.png'}
                      alt={row['status'] === 'active' ? 'Enable API' : 'Disable API'}
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApiFieldsList;