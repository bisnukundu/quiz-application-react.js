import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/signup" >
            <Signup />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
