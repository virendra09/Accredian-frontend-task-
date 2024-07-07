import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import "./ReferModal.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function ReferModal({ open, handleClose }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">Refer a Friend</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="referrerName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Referrer's Name" fullWidth margin="normal" required />
            )}
          />
          <Controller
            name="referrerEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Referrer's Email" fullWidth margin="normal" type="email" required />
            )}
          />
          <Controller
            name="refereeName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Referee's Name" fullWidth margin="normal" required />
            )}
          />
          <Controller
            name="refereeEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Referee's Email" fullWidth margin="normal" type="email" required />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Message" fullWidth margin="normal" multiline rows={4} />
            )}
          />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
}

export default ReferModal;
