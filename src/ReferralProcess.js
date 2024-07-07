import React, {useState} from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ReferModal from './ReferModal';

import './ReferralProcess.css'; 

function ReferralProcess() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const steps = [
    { icon: '🔗', text: 'Submit referrals easily via our website’s referral section.' },
    { icon: '🏆', text: 'Earn rewards once your referral joins an Accredian program.' },
    { icon: '💼', text: 'Both parties receive a bonus 30 days after the program enrollment.' }
  ];

  return (
    <Box className="referral-process">
      <Typography variant="h4" className="referral-title">How Do I Refer?</Typography><br></br>
      <Grid container spacing={3} className="referral-steps">
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index} className="referral-step">
            <Typography variant="h6" className="referral-icon">{step.icon}</Typography>
            <Typography className="referral-text">{step.text}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" className="refer-now-button"  onClick={handleOpen}>Refer Now</Button>
      <ReferModal open={open} handleClose={handleClose} />
    </Box>
  );
}

export default ReferralProcess;
