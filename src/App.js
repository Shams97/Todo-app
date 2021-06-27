import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tasks from './tasks/tasks';
import Login from './accounts/login';
function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
