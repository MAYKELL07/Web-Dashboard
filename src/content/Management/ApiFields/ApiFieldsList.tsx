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
                  {header === 'requestMethod' || header === 'status' ? (
                    <Box
                      component="span"
                      bgcolor={
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
                          : 'inherit'
                      }
                      color="white" // Set text color to white for better visibility
                      p={1} // Adjust padding for different screen sizes
                      borderRadius={3} // Set border radius for curvy appearance
                      display="inline-block" // Ensure inline-block display for accurate border-radius
                    >
                      {row[header]}
                    </Box>
                  ) : (
                    row[header]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <Tooltip title="Disable API">
                  <IconButton color="secondary">
                    {/* Your disable icon */}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Enable API">
                  <IconButton color="primary">
                    {/* Your enable icon */}
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
