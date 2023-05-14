import React from 'react'
import { TextField, Grid, Button} from '@mui/material';

export const MainInfo = ({
    name,
    age,
    bloodType,
    infections,
    allergies,
    transfusion,
    battleRoster,
    setName,
    setAge,
    setBloodType,
    setInfections,
    setAllergies,
    setTransfusion,
    setBattleRoster,
    handleMainInfoSubmit,
    }) => {

  return (
    <form onSubmit={handleMainInfoSubmit} style={{ margin: '25px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="ПІБ"
          variant="outlined"
          fullWidth
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Вік"
          variant="outlined"
          fullWidth
          value={age}
          onChange={event => setAge(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Група крові"
          variant="outlined"
          fullWidth
          value={bloodType}
          onChange={event => setBloodType(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Інфекції"
          variant="outlined"
          fullWidth
          value={infections}
          onChange={event => setInfections(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Алергії"
          variant="outlined"
          fullWidth
          value={allergies}
          onChange={event => setAllergies(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Переливання крові"
          variant="outlined"
          fullWidth
          value={transfusion}
          onChange={event => setTransfusion(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Бригада"
          variant="outlined"
          fullWidth
          value={battleRoster}
          onChange={event => setBattleRoster(event.target.value)}
        />
      </Grid>
      </Grid>
      <Button type="submit" onClick={handleMainInfoSubmit} variant="contained" color="primary" style={{ margin: '20px' }}>
          Надіслати
      </Button>      
      </form>
)
}
