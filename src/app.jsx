import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import Wrap from './components/wrap/wrap';
import Loding from './components/loding/loding';
import {brown, green, light} from './styles/theme';
import { useState } from 'react';

function App({ auth, fireData, imgStorage }) {
  const [theme, setTheme] = useState(light);

  const colorMode = color => {
    if(color === 'light'){
      setTheme(light);
    } else if(color === 'brown') {
      setTheme(brown);
    } else {
      setTheme(green);
    }
  }

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
              <Wrap auth={auth} fireData={fireData} imgStorage={imgStorage} colorMode={colorMode}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
