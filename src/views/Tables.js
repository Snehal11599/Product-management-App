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


import React, { useState } from "react";
import View from "views/View.js";
import { TableCell, TableRow, Table, TableHead, Input, Button } from "@material-ui/core"
import { Row, Col } from "reactstrap";


// const  useStyles = makeStyles({
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



const getDataFormLS = () => {
  const data = localStorage.getItem('products')
  if (data) {
    return JSON.parse(data);
  }
  else {
    return [];
  }
}

const Tables = () => {
  const [products, setProducts] = useState(getDataFormLS());
  //input field states
  // const [productNo, setProductNo] = useState('');
  // const [productName, setProductName] = useState('');
  // const [productBrand, setProductBrand] = useState('');
  // const [quantity, setQuantity] = useState('');
  // const [price, setPrice] = useState('');



  //delete the data from local storage
  const handleDelete = (productNo) => {

    const filterProducts = products.filter((element, index) => {
      return element.productNo !== productNo;
    })
    setProducts(filterProducts);
        //localStorage.removeItem('product');

     //method 1
    //  setProducts(products.filter((item)=>item.productNo !== productNo));
    //  localStorage.setProducts('products',JSON.stringify(products));
    //  localStorage.removeItem('item');



  // method 2
    // let items = JSON.parse(localStorage.getItem('products'));
    // items.filter(function(products,index){
    //   if(productNo == products.productNo){
    //     items.splice(index,1);
    //   }
    // });
    // localStorage.setProducts('items',JSON.stringify(items));
  }







  //edit the data
  const editProduct = (productNo) => {
    console.log(productNo)
    let newEditItem = products.find((element) => {
      return element.productNo === productNo;
    }
    )
    console.log(newEditItem);
  }
  return (
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
                <TableCell>Actions</TableCell>
                <TableCell>EDIT</TableCell>
              </TableRow>
              {/* <TableRow>
              <TableCell> <Input type='text'  value={productNo} onChange={(e)=>{updateValue(e,'productNo')}}></Input> </TableCell>
              <TableCell>   <Input type='text' value={productName} onChange={(e)=>{updateValue(e,'productName')}}></Input> </TableCell>
              <TableCell>  <Input type='text' value={productBrand} onChange={(e)=>{updateValue(e,'productBrand')}}></Input></TableCell>
              <TableCell>  <Input type='text' value={quantity} onChange={(e)=>{updateValue(e,'quantity')}}></Input></TableCell>
              <TableCell> <Input type='text' value={price} onChange={(e)=>{updateValue(e,'price')}}></Input></TableCell>
              <TableCell>
             < Button variant='contained' color="primary" >Edit Products</Button>
              </TableCell>
              </TableRow> */}
            </TableHead>
            <View products={products} handleDelete={handleDelete} editProduct={editProduct} />
          </Table>
        </Col>
      </Row>
    </div>
  );
}
export default Tables;