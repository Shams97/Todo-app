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
  
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                {/* <form action="submit" method="post"> */}
                    <Input placeholder="type any task" onChange={(e,v) => setTask(task = e.target.v)}></Input>
                    <Input type="submit" color="primary" value="Add">
                    </Input>
                    <p> {task} </p>
                    <div>
                {   task ?
                    <Button variant="contained" color="secondary">
                        Remove
                    </Button>
                  : null   } 
                    </div>
               {/* </form> */}
                </Paper>
            </Grid>
        </Grid>
  );
}
