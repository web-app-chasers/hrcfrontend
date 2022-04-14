import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Dialog, Box, DialogContent, Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import DateComponent from './DateComponent'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const useStyles = makeStyles({

    container: {
        background: '#2A3E4C',
        width: "100%",
        height: '85vh'
    },
    heading: {
        color: "#fff",
        margin: "20px 10px 10px 20px",
        fontSize: 20
    },
    textFieldContainer: {
        display: 'flex',
        flexFlow: "row wrap",
        margin: '20px auto',
        paddingLeft: 7,
        "&>*": {
            width: '22vw',
        }
    },
    button: {
        width: '48%',
    }
})


const AddButton = ({ openAdd, setOpenAdd }) => {
    const [customerData, setcustomerData] = useState(null);
    const classes = useStyles();



    function handleChange(e) {

        const newdata = { ...customerData };
        console.log(newdata);
        console.log(customerData);
        newdata[e.target.name] = e.target.value
        setcustomerData(newdata);

    }

    function handleSubmit(e) {
       
        console.log(customerData);
        let new_data = new URLSearchParams(Object.entries(customerData)).toString();
        console.log(new_data);

     
        axios.post('http://localhost:8081/crud/addcustomer', new_data)
            .then(function (response) {
                response.data.toString();
                if(response.data.success){
                    alert(response.data.message)
                    window.location.reload();
                }
                else{
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }




    const closeDialog = () => {
        setOpenAdd(false)
    }


    return (
        <Dialog open={openAdd} onClose={() => closeDialog()}
            sx={{
                "& .MuiPaper-root": {
                    maxWidth: 'unset'
                }
            }}

        >
            <DialogContent className={classes.container}>
                <Typography className={classes.heading}>Add</Typography>
                <Box className={classes.textFieldContainer}>
                    <TextField onChange={handleChange} name="business_code" id="filled-basic" label="Business Code" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="cust_number" id="filled-basic" label="Customer Number" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    {/* <DateComponent onChange={handleChange} name="clear_date" heading="Clear Date" /> */}

                    <TextField onChange={handleChange} name="clear_date" id="filled-basic" label="Clear Date" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />


                    <TextField onChange={handleChange} name="buisness_year" id="filled-basic" label="Business Year" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="doc_id" id="filled-basic" label="Document Id" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />

{/* 
                    <DateComponent onChange={handleChange} name="posting_date" heading="Posting Date" />
                    <DateComponent onChange={handleChange} name="document_create_date" heading="Document create Date" />
                    <DateComponent onChange={handleChange} name="due_in_date" heading="Due Date" /> */}
                    
                    <TextField onChange={handleChange} name="posting_date" id="filled-basic" label="Posting Date" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="document_create_date" id="filled-basic" label="Document create Date" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="due_in_date" id="filled-basic" label="Due Date" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />


                    <TextField onChange={handleChange} name="invoice_currency" id="filled-basic" label="Invoice Currency" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="document_type" id="filled-basic" label="Document Type" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="posting_id" id="filled-basic" label="Posting Id" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="total_open_amount" id="filled-basic" label="Total Open Amount" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    {/* <DateComponent onChange={handleChange} name="baseline_create_date" heading="Baseline create Date" /> */}

                    <TextField onChange={handleChange} name="baseline_create_date" id="filled-basic" label="Baseline create Date" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />


                    <TextField onChange={handleChange} name="cust_payment_terms" id="filled-basic" label="Customer Payment Terms" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                    <TextField onChange={handleChange} name="invoice_id" id="filled-basic" label="Invoice Id" variant="filled" style={{ margin: '20px 5px', background: '#ffffff' }} />
                </Box>
                <Button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className={classes.button}
                    style={{ color: '#ffffff', border: '1px solid #ffffff', margin: '0 15px' }}
                    variant="outlined">Add</Button>
                <Button className={classes.button} style={{ color: '#ffffff', border: '1px solid #ffffff' }} variant="outlined" >Cancel</Button>
            </DialogContent>
        </Dialog>

    )
}

export default AddButton
