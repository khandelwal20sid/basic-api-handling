import './App.css';
import LoadAll from './components/LoadAll';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Error from './components/Error';
import Path from './components/Path';
import Url from './components/Url';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoadAll}/>
          <Route exact path="/path" component={Path} />
          <Route path="/path/:id" component={Url} />         
          <Route component={Error} />          
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
