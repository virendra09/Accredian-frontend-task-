import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function ReferralBenefits() {
  const benefits = [
    { program: 'Product Management', referrer: '7,000', referee: '9,000' },
    { program: 'Strategic Product Management', referrer: '9,000', referee: '11,000' },
    { program: 'Data Driven Product Management', referrer: '10,000', referee: '10,000' },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>What Are The Referral Benefits?</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Programs</TableCell>
            <TableCell>Referrer Bonus</TableCell>
            <TableCell>Referee Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {benefits.map((benefit, index) => (
            <TableRow key={index}>
              <TableCell>{benefit.program}</TableCell>
              <TableCell>{benefit.referrer}</TableCell>
              <TableCell>{benefit.referee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ReferralBenefits;
