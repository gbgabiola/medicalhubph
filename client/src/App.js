import './App.css';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
