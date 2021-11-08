import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import Wrap from './components/wrap/wrap';
import Loding from './components/loding/loding';

function App({ auth }) {
  return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Loding auth={auth} />
            </Route>
            <Route path="/calendar">
              <Wrap />
            </Route>
          </Switch>
        </Router>
      </div>

  );
}

export default App;
