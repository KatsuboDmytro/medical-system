import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Header from '../component/Header';
import human from '../assets/human.png'

export const SoldierInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [infections, setInfections] = useState('');
  const [allergies, setAllergies] = useState('');
  const [transfusion, setTransfusion] = useState('');
  const [battleRoster, setBattleRoster] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [army, setArmy] = useState('');
  const [armyType, setArmyType] = useState('');

  const [evac, setEvac] = React.useState([]);
  const [sex, setSex] = React.useState([]);
  const [injuries, setInjuries] = React.useState([]);

  const [textField, setTextField] = React.useState('');
  const [feedbackField, setfeedbackField] = React.useState('');
  
  const [img, setImg] = React.useState('');
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState('#000000');
  const [drawing, setDrawing] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
    canvas.width = 360;
    canvas.height = 410;
  }, []);
  
  useEffect(() => {
    const loadImage = () => {
      const image = new Image();
      image.src = human;
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
    };
    
    if (ctx) {
      loadImage();
    }
  }, [ctx]);
  
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  
  const handleMouseDown = (e) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };
  
  const handleMouseUp = () => {
    setDrawing(false);
    ctx.closePath(); // Close the current path
  };
  
  const handleMouseMove = (e) => {
    if (!drawing) return;
    
    const { offsetX, offsetY } = e.nativeEvent;
    
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const submitMainInformations = [{
    name,
    age,
    bloodType,
    infections,
    allergies,
    transfusion,
    battleRoster,
  }];

  const submitSecInformations = [{
    date,
    time,
    army,
    armyType,
    evac,
    sex,
    injuries,
    img,
  }];

  const submitTextField = [{
    textField,
  }];

  const submitFeedbackField = [{
    feedbackField,
  }];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const injuriesArr = [
    'Артилерія',
    'Тупим предметом',
    'Міни',
    'Опіки',
    'Перелам',
    'ДТП',
    'GSW',
    'RPG',
    'IED',
    'Уламки',
  ];
  const notatki = [
    { id: 1, from: 'tactical_doctor', text: 'notatkinotatkinotatkinotatkinotatkinotatkinotatkinotatki' },
    { id: 2, from: 'medical_doctor', text: 'notatkinotatkinotatkinotatkinotatkinotatkinotatkinotatki' },
  ];
  const feedback = [
    { id: 1, from: 'tactical_doctor', text: 'feedbackfeedbackfeedbackfeedbackfeedbackfeedbackfeedback' },
    { id: 2, from: 'medical_doctor', text: 'feedbackfeedbackfeedbackfeedbackfeedbackfeedbackfeedback' },
  ];

  const handleSubmit = event => {
    event.preventDefault();
    console.log(submitMainInformations);
    console.log(submitSecInformations);
    console.log(submitTextField);
    console.log(submitFeedbackField);
  };

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const imageDataURL = canvas.toDataURL();
    setImg(imageDataURL);
    console.log(img);
  };

  const handleChangeMult = event => {
    const { value } = event.target;
    setInjuries(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeSex = event => {
    event.preventDefault();
    setSex(event.target.value);
  };

  const handleChangeEvac = event => {
    event.preventDefault();
    setEvac(event.target.value);
  };

  const handleChangeTextField = event => {
    event.preventDefault();
    setTextField(event.target.value);
  };

  const handleChangeFeedbackField = event => {
    event.preventDefault();
    setfeedbackField(event.target.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} style={{ margin: '25px' }}>
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

          <Grid item xs={12} sm={4}  style={{ marginTop: '100px' }}>
            <TextField
              label="Дата"
              variant="outlined"
              fullWidth
              value={date}
              onChange={event => setDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}  style={{ marginTop: '100px' }}>
            <TextField
              label="Час"
              variant="outlined"
              fullWidth
              value={time}
              onChange={event => setTime(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}  style={{ marginTop: '-72px' }}>
            <TextField
              label="Війська"
              variant="outlined"
              fullWidth
              value={army}
              onChange={event => setArmy(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Тип військ"
              variant="outlined"
              fullWidth
              value={armyType}
              onChange={event => setArmyType(event.target.value)}
            />
          </Grid>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl sx={{ margin: '10px', width: '200px' }}>
              <InputLabel>Тип евакуації:</InputLabel>
              <Select value={evac} onChange={handleChangeEvac}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Терміново</MenuItem>
                <MenuItem value="option2">Пріоритетно</MenuItem>
                <MenuItem value="option3">Звичайно</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl sx={{ margin: '10px', width: '200px' }}>
              <InputLabel>Стать:</InputLabel>
              <Select value={sex} onChange={handleChangeSex}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Чоловіча</MenuItem>
                <MenuItem value="option2">Жіноча</MenuItem>
                <MenuItem value="option3">Інша</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div  style={{ marginTop: '-72px', marginLeft:'7px' }}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Тип ураження</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={injuries}
                onChange={handleChangeMult}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}>
                {
                injuriesArr.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))
                }
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Box style={{ margin: '20px' }}>
          <Typography variant="h5">Нотатки</Typography>
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            {
            notatki.map(item => (
              <Box
                sx={{
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
            ))
            }
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
            {
            feedback.map(item => (
              <Box
                sx={{
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
            ))
            }
            <TextField
              style={{ marginTop: '10px', width: '600px' }}
              label="Enter your text"
              value={feedbackField}
              onChange={handleChangeFeedbackField}
            />
          </Box>
        </Box>

        <div style={{display:"flex", justifyContent:"center"}}>
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          />
          <div>
            <h5>Обери Колір</h5>
            <input type="color" value={color} onChange={handleColorChange} />
          </div>
        </div>

        <Button type="submit" onClick={handleSaveCanvas} variant="contained" color="primary" style={{ margin: '20px' }}>
          Заповнити бланк
        </Button>
      </form>
      
    </>
  );
};