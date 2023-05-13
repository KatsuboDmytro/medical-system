import React, { useRef, useEffect, useState } from 'react';
import {Button} from '@mui/material';
import human from '../assets/human.png'

export const Canvas = () => {
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

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const imageDataURL = canvas.toDataURL();
    console.log(imageDataURL);
  };
  
  return (
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
      <Button onClick={handleSaveCanvas}>Save Canvas</Button>
    </div>
  );
};
