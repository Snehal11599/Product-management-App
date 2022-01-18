import React from 'react';
import { TableCell, TableRow ,Button} from "@material-ui/core"

 const View =({products ,deleteProduct }) => {
    return products.map(product=>(
        <TableRow>
                 <TableCell>{product.productNo}</TableCell> 
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productBrand}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                    <Button variant='contained' color="primary" onClick={()=>deleteProduct()}>Delete</Button>
                  </TableCell>
                         
                    <TableCell>
                    <Button variant='contained' color="secondary">Edit</Button>
                </TableCell>
                
              </TableRow>
    )) 
}

export default View;