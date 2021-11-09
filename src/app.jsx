import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import Wrap from './components/wrap/wrap';
import Loding from './components/loding/loding';
import {light, dark, font} from './styles/theme';
import { useState } from 'react';

function App({ auth }) {
  
  const [theme, setTheme] = useState(light);


  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/' exact>
              <Loding auth={auth} />
            </Route>
            <Route path='/calendar'>
              <Wrap />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
