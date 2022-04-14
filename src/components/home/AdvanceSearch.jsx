import React,{useState} from "react";
import axios from 'axios';
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
    container:{
        background:'#2A3E4C',
        padding:15,
        width:"90vh",
        height:'42vh'
    },
    heading:{
        color:"#fff"
    },
    textFieldContainer:{
        display:'flex',
        flexFlow:'row wrap',
        margin:'20px auto',
        '&>*':{
            width:'50%',
        }
    },
    button:{
        width:'48%',
    }
})


const AdvanceSearch = ({openAdvance,setOpenAdvance,setInvoice,invoice}) => {
    const classes=useStyles()
    const closeDialog=()=>{
        setOpenAdvance(false)
    }

    const [searchData, setSearchData] = useState(null);



    function handleChange(e) {

        const newdata = { ...searchData };
        console.log(newdata);
        newdata[e.target.name] = e.target.value
        setSearchData(newdata);

    }

    function handleSearch(e) {
       
       // let new_data = new URLSearchParams(Object.entries(searchData)).toString();
        axios.get('http://localhost:8081/crud/searchcustomer',{params:searchData})
        .then(function (response) {
            setInvoice(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
      
          console.log(error);
        })

    }


    return (
        <Dialog open={openAdvance} onClose={()=>closeDialog()}>
        <DialogContent className={classes.container}>
            <Typography className={classes.heading}>Advance Search</Typography>
            <Box className={classes.textFieldContainer}>
            <TextField onChange={handleChange} name="doc_id" InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Document Id'></TextField>
            <TextField onChange={handleChange} name="invoice_id"  InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Invoice Id'></TextField>
            <TextField onChange={handleChange} name="cust_number"  InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Customer Number'></TextField>
            <TextField onChange={handleChange} name="buisness_year"  InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Business Year'></TextField>
            </Box>
            <Button onClick={handleSearch} className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Search</Button>
            <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}} >Cancel</Button>
        </DialogContent>  
    </Dialog>
    )
}

export default AdvanceSearch
