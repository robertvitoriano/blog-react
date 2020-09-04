import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import PageRenderer from './PageRenderer'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={()=><Redirect to="/home"/>} />
          <Route component = {()=>404}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


