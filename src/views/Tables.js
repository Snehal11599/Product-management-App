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
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from "@material-ui/core"
import { Row, Col } from "reactstrap";


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
  const [isEdit, setEdit] = useState(false);

  //delete the data from local storage
  const handleDelete = (productNo) => {
    const filterProducts = products.filter((element, index) => {
      return element.productNo !== productNo;
    })
    setProducts(filterProducts);
    localStorage.setItem('products', JSON.stringify(filterProducts));
  }

  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // on change event
  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...products];
    list[i][name] = value;
    setProducts(list);
    localStorage.setItem('products', JSON.stringify(list));
  };

  //edit the data
  const editProduct = (productNo) => {
    let editProduct = products.find((item) => item.productNo === productNo);
    setEdit(!isEdit);
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
                <TableCell>UPDATE</TableCell>
                <TableCell>DELETE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, i) => {
                return (
                  <TableRow key={i}>
                    {isEdit ? (
                      <React.Fragment>
                        <TableCell>
                          <input
                            value={product.productNo}
                            name="productNo"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            value={product.productName}
                            name="productName"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            value={product.productBrand}
                            name="productBrand"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            value={product.quantity}
                            name="quantity"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            value={product.price}
                            name="price"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => editProduct(product.productNo)}>
                            Save
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDelete(product.productNo)}>
                            Delete
                          </Button>
                        </TableCell>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <TableCell>{product.productNo}</TableCell>
                        <TableCell>{product.productName}</TableCell>
                        <TableCell>{product.productBrand}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEdit}
                          >
                            Update
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDelete(product.productNo)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </React.Fragment>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
            <View products={products} handleDelete={handleDelete} editProduct={editProduct} />
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Tables;