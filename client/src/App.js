import { Landing, Home, Detail, Activities } from './views';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar /> }
      <Route exact path='/' render={() => <Landing />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/detail/:detailId' render={() => <Detail />} />
      <Route path='/activities' render={() => <Activities />} />
    </div>
  );
}

export default App;
