import './app.css';
import Loding from './components/loding/loding';

function App({ auth }) {
  return (
    <div className="App">
      <Loding auth={auth}/>
    </div>
  );
}

export default App;
