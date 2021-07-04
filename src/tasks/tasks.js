/** 
 *  This component will create a list of task 
 *  Add new item to the list 
 *  Remove the last item of the list
 * 
 */
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Input, Grid, Paper, Checkbox } from "@material-ui/core";
import {useStyles} from '../styles'


export default function Tasks() {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [newtask, setNewTask] = useState([]);

  const addTask = () => {
    if (task === "") return alert("Please full the task bar first");
    else
      setNewTask((prev) => {
        return [...prev, task];
      });
    setTask("");
  };

  return (<>
    <header className="App-header">
      <p> TODO APP</p>
    </header>
    <Grid container spacing={1}>
      <Grid item sm={12}>
        <Paper className={classes.task_paper}>
          <Input
            placeholder="Type any task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          ></Input>

          <Button
            color="primary"
            variant="contained"
            onClick={addTask}
            className={classes.buttons}
          >
          <AddIcon />
        </Button>
          <ul className={classes.lists}>
            {newtask.map((val, key) => {
              return (
                <li key={key} borders={2}>
                  <Checkbox /> {val}
                </li>
              );
            })}
          </ul>
          <div>
            {newtask ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setNewTask(newtask.slice(0, newtask.length - 1));
                }}
              >
                <DeleteIcon />
              </Button>
            ) : null}
          </div>
        </Paper>
      </Grid>
    </Grid>
  </>
  );
}
