import './App.css';
import { Button,Input } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <p> TODO </p>
      </header>
        <div className="container"> 
          <label>Add new task </label> <Input className="task_input"/>
          <Button>remove</Button>
        </div>
    </div>
  );
}

export default App;
