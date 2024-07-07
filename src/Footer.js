import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import "./Footer.css"

function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.paper', textAlign: 'center', mt: 4 }} className="footer-section">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography>Email: admissions@accredian.com</Typography>
          <Typography>Phone: +91 99999 99999</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Follow Us</Typography>
          <Link href="#" sx={{ mx: 1 }}>Facebook</Link>
          <Link href="#" sx={{ mx: 1 }}>Twitter</Link>
          <Link href="#" sx={{ mx: 1 }}>LinkedIn</Link>
          <Link href="#" sx={{ mx: 1 }}>Instagram</Link>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mt: 2 }}>© 2024 Accredian. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
