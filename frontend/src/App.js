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

const theme = createTheme({

})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Awareness" element={<Awareness />} />
          <Route exact path="/Shelters" element={<Shelters />} />
          <Route exact path="/FoodBanks" element={<FoodBanks />} />
          <Route exact path="/OtherResources" element={<OtherResources />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
