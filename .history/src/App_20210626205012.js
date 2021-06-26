import './App.css';
import { Button,Input,FormLabel ,Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <p> TODO </p>
      </header>
        <Container> 
          <FormLabel>Add new task </FormLabel> <Input placeholder="type any task"></Input>
          <Button>remove</Button>
        </Container>
    </div>
  );
}

export default App;
