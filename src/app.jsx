import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import Wrap from './components/wrap/wrap';
import Loding from './components/loding/loding';
import {light, dark} from './styles/theme';
import { useState } from 'react';

function App({ auth, fireData, imgStorage }) {
  
  const [theme, setTheme] = useState(light);


  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/' exact>
              <Loding auth={auth} fireData={fireData}  />
            </Route>
            <Route path='/calendar'>
              <Wrap auth={auth} fireData={fireData} imgStorage={imgStorage}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
