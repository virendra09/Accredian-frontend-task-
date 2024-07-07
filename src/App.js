import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ReferModal from './ReferModal';
import ReferralProcess from './ReferralProcess';
import ReferralBenefits from './ReferralBenefits';
import FAQ from './FAQ';
import Footer from './Footer';
import './App.css'; 

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container className="app-container">
      <header className="hero">
        <Typography variant="h2" className="hero-title">Let's Learn & Earn</Typography>
        <Typography variant="h6" className="hero-subtitle">Get a chance to win up to Rs. 15,000</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen} className="refer-button">
          Refer Now
        </Button>
      </header>
      <ReferralProcess />
      <ReferralBenefits />
      <FAQ />
      <Footer />
      <ReferModal open={open} handleClose={handleClose} />
    </Container>
  );
}

export default App;
