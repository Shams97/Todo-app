import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tasks from './tasks/tasks';
import Login from './accounts/login';
import Registeration from './accounts/registration';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}



function App() {
  const [token, setToken] = useState(getToken());
// Checking if the user is currnetly loged in or not 
  if(!token) 
  return <Registeration setToken={setToken} />
  
  else return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/tasks" component={Tasks}/> 
          <Route path="/login" component={Login}/> 
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
