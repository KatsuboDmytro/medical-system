import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export const Communication = ({
  textField,
  feedbackField,
  handleChangeTextField,
  handleChangeFeedbackField,
  submitTextField,
  submitFeedbackField,
}) => {
  const handleCommunicationInfoSubmit = event => {
    event.preventDefault();
    console.log(submitTextField);
    console.log(submitFeedbackField);
  };

  const notatki = [
    { id: 1, from: 'tactical_doctor', text: 'notatkinotatki notatkinota tkinotatk inotatkin otatki no tatki' },
    { id: 2, from: 'medical_doctor', text: 'notatkin ota tkinotat kinotatkin otatkinota tkino tatki notatki' },
  ];
  const feedback = [
    { id: 1, from: 'tactical_doctor', text: 'feedbac kfeedbackfeed backfeedbac kfeed back eedba ckfe e dback' },
    { id: 2, from: 'medical_doctor', text: 'feed backfeed ackfeedba ckfeedb ackfeed backfee backf e edback' },
  ];

  return (
    <form onSubmit={handleCommunicationInfoSubmit} style={{ margin: '25px' }}>
      <Box style={{ margin: '20px' }}>
        <Typography variant="h5">Нотатки</Typography>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {notatki.map(item => (
            <Box
              sx={{
                flexWrap: 'wrap',
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}>
              <Typography style={{ marginLeft: '20px' }}>{item.from}:</Typography>
              <Typography key={item.id} style={{ marginLeft: '40px', whiteSpace: 'pre-wrap' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
          <TextField
            style={{ marginTop: '10px', width: '600px' }}
            label="Enter your text"
            value={textField}
            onChange={handleChangeTextField}
          />
        </Box>
      </Box>

      <Box style={{ margin: '20px' }}>
        <Typography variant="h5">Відгук</Typography>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {feedback.map(item => (
            <Box
              sx={{
                flexWrap: 'wrap',
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}>
              <Typography style={{ marginLeft: '20px' }}>{item.from}:</Typography>
              <Typography key={item.id} style={{ marginLeft: '40px' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
          <TextField
            style={{ marginTop: '10px', width: '600px' }}
            label="Enter your text"
            value={feedbackField}
            onChange={handleChangeFeedbackField}
          />
        </Box>
      </Box>

      <Button
        type="submit"
        onClick={handleCommunicationInfoSubmit}
        variant="contained"
        color="primary"
        style={{ margin: '20px' }}>
        Надіслати
      </Button>
    </form>
  );
};
