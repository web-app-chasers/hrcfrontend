import React,{useState} from "react";
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import axios from 'axios';

const useStyles=makeStyles({
    container:{
        background:'#2A3E4C',
        width:"70vh",
        padding:15
    },
    heading:{
        color:"#fff",
        fontSize:20,
        
    },
    subHeading:{
        color:"#fff"
    },
    button:{
        width:'47%',
        margin:'30px 5px 0 5px',
        color:"#fff",
        border:"1px solid #fff"
    }
})

const DeleteButton = ({openDelete,setOpenDelete,sr_id}) => {
    const classes=useStyles()
    const closeDialog=()=>{
        setOpenDelete(false)
    }

    function handleDelete(e) {
    
        axios.post('http://localhost:8081/crud/deletecustomer?id='+sr_id)
            .then(function (response) {
                console.log(response);
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





    return (
        <Dialog open={openDelete} onClose={()=>closeDialog()}>
            <DialogContent className={classes.container}>
                <Typography className={classes.heading} style={{margin:"5px 0 20px 0",fontSize:20}}>Delete Records ?</Typography>
                <Typography className={classes.subHeading}>Are you sure you want to delete these record[s] ?</Typography>
                    <Button className="button3"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'20px 5px 5px 5px'}}>Cancel</Button>
                    <Button onClick={handleDelete} className="button3"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'20px 5px 5px 5px'}}>Delete</Button>
            </DialogContent>  
        </Dialog>
    )
}

export default DeleteButton
