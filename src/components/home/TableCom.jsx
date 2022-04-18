import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core'
import { Typography,Box, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import EditButton from "./EditButton";

import Pagination from '@mui/material/Pagination';

const useStyles=makeStyles({
})

const TableCom = ({openEdit,setOpenEdit,setInvoice,invoice,setEnableBtn,setSr_id}) => {

const columnItem=["S NO","Bussiness Code","Customer Code","Clear code","Bussiness Year","Document Id","Posting Date","Document Create Date","Due Date","Invoice Currency","Document Type","Posting Id","Total Open Amount","Baseline Create Date"]
const data=["1","U001","200769623","2020-02-11","2020-01-01","1930438491","2020-01-26","2020-01-25","2020-02-10","USD","RV","1","54273.28","2020-01-26"]
  

const [val,setVal]=useState(null)
const [editedVal,setEditedVal]=useState("USD")



useEffect(()=>{
  
  axios.get('http://localhost:8081/crud/allcustomer')
  .then(function (response) {
    console.log(response.data);
    setInvoice(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

  },[])




  return (
    <>
      <TableContainer >
      <Table >
       <TableHead style={{marginRight:40}}>
      <TableRow >
        <TableCell style={{color:"#ffffff"}}>
          
        </TableCell>
        {
          columnItem.map(item=>(
            <TableCell align="right" style={{color:"#ffffff"}}>
                {item}
            </TableCell>
          ))
        }
           
      </TableRow>
{

invoice != null ? 
     invoice.map((item,index)=>(
    
        
      <TableRow>
        <TableCell style={{color:"#ffffff"}}>
        <input type="radio" id="select_box" name="selelect_box" onChange={
          ()=>{
            setSr_id(item.sl_no)
            setEnableBtn(false)
          }
        }
        value={item.sl_no}/>
          </TableCell>
          <TableCell align="right" style={{color:"#ffffff"}}>
      {index + 1}
        </TableCell>
        
        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.business_code}
        </TableCell>

        
        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.cust_number}
        </TableCell>

           
        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.clear_date}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.buisness_year}
        </TableCell>
      
      
        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.doc_id}
        </TableCell>
    
        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.posting_date}
        </TableCell>


        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.document_create_date}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.due_in_date}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.invoice_currency}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.document_type}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.posting_id}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}>
      {item.total_open_amount}
        </TableCell>

        <TableCell align="right" style={{color:"#ffffff"}}> 
      {item.baseline_create_date}
        </TableCell>

   

      


            
        </TableRow>
      )):'loading..........'


      
      /* <TableRow>
        <TableCell style={{color:"#ffffff"}}>
            <input  type="checkbox" />
          </TableCell>
          {
            /*
            data.map(item=>
              (
              <TableCell align="right" style={{color:"#ffffff"}}>
                  {item}
              </TableCell>
            )
            )

            <TableCell align="right" style={{color:"#ffffff"}}>
            works
        </TableCell>
            
              }
        </TableRow> */}

        
   
      
    </TableHead>
    <Pagination  count={10} />

    </Table>
    </TableContainer>
    <EditButton openEdit={openEdit} setOpenEdit={setOpenEdit} val={val} setVal={setVal} setEditedVal={setEditedVal} data={data}/>
    </>
    )
}

export default TableCom;











// const columnItem=[
//   {
//     columnName:"S NO"
//   },
//   {
//     columnName:"Bussiness Code"
//   },
//   {
//     columnName:"Customer Number"
//   },
//   {
//     columnName:"Clear Code"
//   },
//   {
//     columnName:"Bussiness Year"
//   },
//   {
//     columnName:"Document Id"
//   },
//   {
//     columnName:"Posting Date"
//   },
//   {
//     columnName:"Document Create Date"
//   },
//   {
//     columnName:"Due Date"
//   },
//   {
//     columnName:"Invoice Currency"
//   },
//   {
//     columnName:"Document Type"
//   },
//   {
//     columnName:"Posting Id"
//   },
//   {
//     columnName:"Total Open Amount"
//   },
//   {
//     columnName:"Baseline Create Date"
//   },
// ]