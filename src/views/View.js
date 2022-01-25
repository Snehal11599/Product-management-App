import React from 'react';
import { TableRow } from "@material-ui/core"

const View = ({ products}) => {
  return products.map(product => (
    <tbody>
    
    <TableRow>
      {/* <TableCell>{product.productNo}</TableCell>
      <TableCell>{product.productName}</TableCell>
      <TableCell>{product.productBrand}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.price}</TableCell> */}
      {/* <TableCell>
        <Button variant='contained' color="primary" onClick={() => deleteProduct(product.productNo)}>Delete</Button>
      </TableCell> */}
      {/* <TableCell> */}
        {/* <Button variant='contained' color="primary" onClick={() => handleDelete(product.productNo)}>Delete</Button> */}
      {/* </TableCell> */}
      {/* <TableCell> */}
        {/* <Button variant='contained' color="secondary" onClick={() =>editProduct(product.productNo)}>Edit</Button> */}
      {/* </TableCell> */}
    </TableRow>
  
    </tbody>
    
  ))
}

export default View;