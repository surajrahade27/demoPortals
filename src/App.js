import React from 'react';

import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import  LMSRoutes   from './routes';


function App() {
  return (
  
    <div className='app'>
      <LMSRoutes />
    </div>
    
  );
}

export default App;
