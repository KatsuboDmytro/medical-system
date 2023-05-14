import React, { useState, useRef, useEffect } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField, Grid, Button, Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,} from '@mui/material';
import human from '../../assets/human.png'

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

export const SecondaryInfo = ({
  date,
  time,
  army,
  armyType,
  evac,
  sex,
  injuries,
  img,
  setDate,
  setImg,
  setTime,
  setArmy,
  setArmyType,
  handleChangeMult,
  handleChangeSex,
  handleChangeEvac,
  submitSecInformations,
    }) => {

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
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        setCtx(context);
    
        const loadImage = () => {
          const image = new Image();
          image.src = human;
          image.onload = () => {
            context.drawImage(image, 0, 0);
          };
        };
    
        if (context) {
          loadImage();
        }
      }, [])
      
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

      const handleSecondaryInfoSubmit = event => {
        event.preventDefault();
        const canvas = canvasRef.current;
        const imageDataURL = canvas.toDataURL();
        setImg(imageDataURL);
        console.log(submitSecInformations);
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

      const clearCanvas = event => {
        event.preventDefault();
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
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
      };

  return (
    <form onSubmit={handleSecondaryInfoSubmit} style={{ margin: '25px' }}>
      
    <Box style={{marginTop:"20px", width:"100%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Дата"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Час"
            variant="outlined"
            fullWidth
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Війська"
            variant="outlined"
            fullWidth
            value={army}
            onChange={(event) => setArmy(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Тип військ"
            variant="outlined"
            fullWidth
            value={armyType}
            onChange={(event) => setArmyType(event.target.value)}
          />
        </Grid>
      </Grid>

    <Box style={{marginTop:"20px", display:"flex", flexWrap:"wrap"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl sx={{ margin: '10px', width: '200px' }}>
          <InputLabel>Тип евакуації:</InputLabel>
          <Select value={evac} onChange={handleChangeEvac}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Терміново">Терміново</MenuItem>
            <MenuItem value="Пріоритетно">Пріоритетно</MenuItem>
            <MenuItem value="Звичайно">Звичайно</MenuItem>
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
            <MenuItem value="Чоловіча">Чоловіча</MenuItem>
            <MenuItem value="Жіноча">Жіноча</MenuItem>
            <MenuItem value="Інша">Інша</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Тип ураження</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={injuries}
            onChange={handleChangeMult}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {injuriesArr.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      </Box>
    </Box>


      <div style={{display:"flex", justifyContent:"center"}}>
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        />
        <Button type="submit" onClick={clearCanvas} variant="contained" color="primary" style={{ margin: '20px' }}>Очистити</Button>
        <div>
          <h5>Обери Колір</h5>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>

      <Button type="submit" onClick={handleSecondaryInfoSubmit} variant="contained" color="primary" style={{ margin: '20px' }}>
          Надіслати
      </Button>      
      </form>
)
}
