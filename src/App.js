import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav';
import { Route, Switch } from 'react-router';
import About from './components/about';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
