// /*!

// =========================================================
// * Paper Dashboard React - v1.3.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-dashboard-react
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */

// import React from "react";
// import { DataGrid } from '@mui/x-data-grid';
// import UserPage from "views/User.js";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'productName', headerName: 'Product name' },
//   { field: 'brand', headerName: 'Brand', width: 130 },
//   { field: 'ram', headerName: 'Ram', width: 130 },
//   { field: 'price', headerName: 'Price', width: 130 },
  
// ];



// export default function  Tables(products) {

//   return(
//     <div className="userList">
//       <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>

//     </div>
//   )
// }


import React,{  useState } from "react";
 //import UserPage from "views/User.js";
import View from "views/View.js";
import { TableCell, TableRow, Table,TableHead } from "@material-ui/core"
import {
  
  Row,Col
  
} from "reactstrap";


// const useStyles = makeStyles({
//   table: {
//     width: '90%'
//   },
//   thead: {
//     '& > *': {
//       background: '#000000',
//       color: '#FFFFFF',
//       fontsize: '20'
//     }
//   }
// })

const getDataFormLS=()=>{
  const data = localStorage.getItem('products')
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const Tables = () => {
  const [ products,setProducts]=useState(getDataFormLS());

  return (
    <div>
      <div class="content">
        <Row>
          <Col md="12">
      <h1>PRODUCT LIST</h1>
      <Table  >
        <TableHead >
          <TableRow>
            <TableCell>PRODUCT ID</TableCell>
            <TableCell>PRODUCT NAME</TableCell>
            <TableCell>PRODUCT BRAND</TableCell>
            <TableCell>QUANTITY</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>DELETE</TableCell>
            <TableCell>EDIT</TableCell>
          </TableRow>
        </TableHead>
        <View products={products}/>
         </Table>
         </Col>
         </Row>
         </div>

    </div>
  );
}
export default Tables;