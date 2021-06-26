import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button,Input,Grid,Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    lists: {
        listStyle:'none',
        textAlign: 'left',
        marginRight:'10px',

    },
  }));

export default function Tasks() {
    const classes = useStyles();
    const [task, setTask] = useState('')
    const [newtask, setNewTask] = useState([])
    
    const addTask=()=>{
        if(task === '')
            return  alert('Please full the task bar first')
        else  setNewTask((prev)=>{
		    	return [...prev, task]
		});
        setTask('');
    }

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Input placeholder="type any task" onChange={(e) => setTask(e.target.value)} value={task}></Input>
                    <Button type="submit" color="primary" variant="contained" onClick={addTask}>
                       <AddIcon/>
                    </Button>
                        <ul className={classes.lists}>
                            { newtask.map((val, key)=>{
                                return <li key={key} border={1}>{val}</li> 
                                })
                            }
                            </ul>
                    <div>
                
                    { newtask ?
                    <Button variant="contained" color="secondary" onClick={ () => { setNewTask([].splice(newtask.length, -1 ) )}}>
                        <DeleteIcon/>
                    </Button>
                    : null} 
                    </div>
                </Paper>
            </Grid>
        </Grid>
  );
}
