import { Landing, Home, Detail, Activities, NotFound } from './views';
import { Route, useLocation, Switch } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar /> }
      <Switch>
        <Route exact path='/' render={() => <Landing />} />
        <Route path='/home' render={() => <Home />} />
        <Route path='/detail/:detailId' render={() => <Detail />} />
        <Route path='/activities' render={() => <Activities />} />
        <Route path="/*" component={NotFound} /> 
      </Switch>
    </div>
  );
}

export default App;
