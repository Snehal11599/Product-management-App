/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import React,{ useState ,useEffect} from "react";
import { TableCell, TableRow, TableBody} from "@material-ui/core"
import View from "views/View.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

//getting the values from local storage
const getDataFormLS=()=>{
  const data = localStorage.getItem('products')
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function User() {
  //main array of object state
  const [ products,setProducts]=useState(getDataFormLS());

//input field states
const [productNo, setProductNo]=useState('');
const [productName , setProductName]=useState('');
const [productBrand , setProductBrand]=useState('');
const [quantity , setQuantity]=useState('');
const [price , setPrice]=useState('');

//handle form submit event
const handleAddProduct = (e)=>{
  e.preventDefault();
  //creating a object
  let product = { productName,productBrand,quantity,price}
  setProducts([...products,product]);
  setProductNo('');
  setProductName('');
  setProductBrand('');
  setQuantity('');
  setPrice('');
}

//delete the data from local storage
const deleteProduct=() => {
  const filteredProducts=products.filter((element,index)=>{

  }
  )
}

//saving the data to local storage
useEffect(() => {
localStorage.setItem('products',JSON.stringify(products));
},[products])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            {/* <Card className="card-user"> */}
            <div className="image">
              <img
                alt="..."
                src={require("assets/img/damir-bosnjak.jpg").default}
              />
            </div>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">ADD PRODUCTS</CardTitle>
              </CardHeader>
              <CardBody>

                <Form onSubmit={handleAddProduct}>
                <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product No</label>
                        <Input
                          //defaultValue="Enter Product Name."
                          placeholder="Number...."
                          type="number"
                          onChange={(e)=>setProductNo(e.target.value)} value={productNo}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Name </label>
                        <Input
                          //defaultValue="Enter Product Name."
                          placeholder="Name..."
                          type="text"
                          onChange={(e)=>setProductName(e.target.value)} value={productName}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Brand</label>
                        <Input
                          // defaultValue="Enter a Brand Name"
                          placeholder="brand"
                          type="text"
                          onChange={(e)=>setProductBrand(e.target.value)} value={productBrand}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label> Quantity</label>
                        <Input placeholder="Enter Avilable product" 
                        type="number" 
                        onChange={(e)=>setQuantity(e.target.value)} value={quantity}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Price</label>
                        <Input
                          //defaultValue="Enter Product Prize"
                          placeholder="Enter Product Price"
                          type="text"
                          onChange={(e)=>setPrice(e.target.value)} value={price}/>
                      
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"> Add Product
                        </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
        
          {
            products.map(product => (
              <TableRow>
                <TableCell>{product.productNo}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productBrand}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell> 
              </TableRow>
            )
            )
                 }
    </>
  );
}

export default User;

