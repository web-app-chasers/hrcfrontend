import React,{useState} from "react";
import axios from 'axios';
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import '../../App.css';

const useStyles=makeStyles({
    container:{
        background:'#2A3E4C',
        padding:15,
        width:"90vh",
        height:'30vh'
    },
    heading:{
        color:"#fff"
    },
    textFieldContainer:{
        display:'flex',
        margin:'20px auto',
        '&>*':{
            width:'50%'
        }
    },
    button:{
        width:'48%',
        margin:"0 5px",
        color:"#fff",
        border:"1px solid #fff"
    }
})

const EditButton = ({openEdit,setOpenEdit,sr_id}) => {

    const [editData, seteditData] = useState(null);

    function handleChange(e) {

        const newdata = { ...editData};
        console.log(newdata);
        newdata[e.target.name] = e.target.value
        seteditData(newdata);

    }

    function handleSubmit(e) {
       
        let new_data = new URLSearchParams(Object.entries(editData)).toString();
        console.log(new_data);

        // post application/x-www-form-urlencoded data
        axios.post('http://localhost:8081/crud/updatecustomer?id='+sr_id,new_data)
            .then(function (response) {
               
            response.data.toString();

                if(response.data.success){
                    window.location.reload();
                    alert(response.data.message)
                }

                else{
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }




   const classes=useStyles()

    const closeDialog=()=>{
        setOpenEdit(false)
    }

    return (
        <Dialog open={openEdit} onClose={()=>closeDialog()}>
            <DialogContent className={classes.container}>
                <Typography className={classes.heading}>Edit</Typography>
                <Box className={classes.textFieldContainer}>
               
                <TextField onChange={handleChange} name="invoice_currency" InputProps={{style: {background:"#fff"}}} variant="filled" label='Invoice currency' ></TextField>
                <>
                
                </>
                <TextField onChange={handleChange} name="cust_payment_terms" InputProps={{style: {background:"#fff"}}} variant="filled" label='Customer Payment Terms' ></TextField>
                </Box>
                    <Button onClick={handleSubmit} className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Edit</Button>
                    <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Cancel</Button>
            </DialogContent>  
        </Dialog>
    )
}

export default EditButton
