import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Link } from 'react-router-dom'; 
import Projects from './views/Projects'; 
import About from './views/About'; 
import Sidebar from './views/Sidebar'
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#76d275',
      main: '#43a047',
      dark: '#00701a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b2fef7',
      main: '#80cbc4',
      dark: '#4f9a94',
      contrastText: '#000',
    },
  },
});
 
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Sidebar>
    <HashRouter basename="/">
      <div className="App">
  
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <div className="navigation-sub">
                                          
            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </HashRouter>
    </Sidebar>
    </ThemeProvider>
  );
}
 
export default App;