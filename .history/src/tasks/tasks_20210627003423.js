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
    
    const removeTask=()=>{
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
                    <Input type="submit" color="primary" value="Add" variant="contained">
                    </Input>
                    <p> {task} </p>
                    <div>
                
                    { task ?
                    <Button variant="contained" color="secondary" onClick={removeTask}>
                        Remove
                    </Button>
                    : null} 
                    </div>
                </Paper>
            </Grid>
        </Grid>
  );
}
