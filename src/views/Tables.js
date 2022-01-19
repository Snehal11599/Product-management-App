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
import { TableCell, TableRow, Table, TableHead } from "@material-ui/core"
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

  //delete the data from local storage
  const deleteProduct = (productNo) => {
    const filteredProducts = products.filter((element, index) => {
      return element.productNo !== productNo;
    })
    setProducts(filteredProducts);
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
                <TableCell>DELETE</TableCell>
                <TableCell>EDIT</TableCell>
              </TableRow>
            </TableHead>
            <View products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
          </Table>
        </Col>
      </Row>
    </div>
  );
}
export default Tables;