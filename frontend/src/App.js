import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './Pages/Home';
import Awareness from './Pages/Awareness';
import Shelters from './Pages/Shelters';
import FoodBanks from './Pages/FoodBanks';
import OtherResources from './Pages/OtherResources';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import { Typography } from '@material-ui/core';



function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
