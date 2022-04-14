import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {makeStyles} from '@material-ui/styles'
import {Box} from '@material-ui/core'

const useStyles=makeStyles({
  datepicker:{
    borderRadius:4,
    margin:'20px 5px',
    "&>*":{
      width:'100%',
      borderRadius:4,
      background:"#ffffff",

    }
  }
})

const DateComponent = ({onChange , name, heading}) => {
  const classes=useStyles();
  console.log(name);

  return (
    <Box className={classes.datepicker}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        name={name}
        label={heading}
        onChange={(e) => {
          onChange(e);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Box>
  );
}

export default DateComponent
