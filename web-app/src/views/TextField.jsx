import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
     width: "100%",
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input:{
      width: "100% !important"
  }
}));

export default function BasicTextFields({label, value, handleChange, ...props}) {
  const classes = useStyles();

  return (
    <form className="main-text-field" style={{marginBottom: 0}} noValidate autoComplete="off">
      <TextField className="main-input" id="outlined-basic" label={label} value={value} onChange={handleChange} variant="outlined" {...props}/>
    </form>
  );
}