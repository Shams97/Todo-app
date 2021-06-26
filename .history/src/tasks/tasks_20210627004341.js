import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input,Grid,Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Tasks() {
    const classes = useStyles();
    const [task, setTask] = useState('')
    const [newtask, setNewTask] = useState([])
    
    const addTask=()=>{
        setNewTask((prev)=>{
			return [...prev, task]
		});
        setTask('');
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Input placeholder="type any task" onChange={(e) => setTask(e.target.value)} value={task}></Input>
                    <Button type="submit" color="primary" variant="contained" onClick={addTask}>
                       Add
                    </Button>
                        <ul>
                            { newtask.map((val)=>{
                                    return <li>{val}</li>    
                            })
                            }
                            </ul>
                    <div>
                
                    { newtask ?
                    <Button variant="contained" color="secondary" onClick={ () => {setNewTask([])}}>
                        Remove
                    </Button>
                    : null} 
                    </div>
                </Paper>
            </Grid>
        </Grid>
  );
}