import React, {Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import TeamList from './TeamList';
import PlayerList from './PlayerList';
import PlayerName from './PlayerName';
import Button from '@material-ui/core/Button';



import './App.css';


const divStyle = {
  color:'black',
  textDecoration: 'none'
};



const Links = () => (
  <nav>
       <NavLink style={divStyle} to="/"><Button variant="contained" color="primary" >List of Teams</Button></NavLink>
  </nav>
)

class App extends Component { 


  render(){
  return (

    <div className='App'>
   <Router>
        
        <Links />
        <Route exact path="/" component={TeamList} />
        <Route path="/team/:id" component={PlayerList}  />
        <Route path="/player/:id" component={PlayerName}  />

    </Router>
    </div>
  )
}
}

export default App;
