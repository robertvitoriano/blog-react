import React,{useEffect, useRef} from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import PageRenderer from './PageRenderer'
function App() {

  const user = {
    firstName:'Robert',
    lastName:'Coder'
  }


 
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation user={user}  />
        <Switch>
          <Route path="/:page" component={PageRenderer}/>
          <Route path="/" render={()=><Redirect to="/home"/>} />
          <Route component = {()=>404}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


