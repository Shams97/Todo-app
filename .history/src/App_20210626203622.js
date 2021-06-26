import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <p> TODO </p>
      </header>
        <div className="container"> 
          <label>Add new task </label> <input className="task_input"/>
          <Button>remove</Button>
        </div>
    </div>
  );
}

export default App;
