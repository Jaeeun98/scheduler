import './app.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Calendar from './components/calendar/calendar';
import Loding from './components/loding/loding';

function App({ auth }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Loding auth={auth} />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
