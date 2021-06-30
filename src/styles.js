import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'10%',
      borderBlockColor:'#cfe8fc',
      borderBlock:'solid',
      borderBlockWidth:'0.5px;',
    },
    paper: {
      padding:'10%',
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow:'none',

    },
    lists: {
      listStyle: "none",
      textAlign: "left",
    },
    buttons: {
      margin: "10px",
    },
    paper1: {
      padding: theme.spacing(8),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor:'#cfe8fc',
      boxShadow:'none',
      alignSelf:'center',
    },
    task_paper:{
      boxShadow:'none',
      padding:'10% 0%',
      margin:'0% 10%',
      border:'solid #cfe8fc 0.5px '
    }
  }));
  
