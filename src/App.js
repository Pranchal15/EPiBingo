import './App.css';
import Home from './home';
import Congrats from './congrats';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App" >
    <Switch>
      <Route path = "/" >
    <Home/>
      </Route>
      <Route path ="/con">
      <Congrats/>

      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
