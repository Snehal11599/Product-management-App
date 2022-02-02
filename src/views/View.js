import React from 'react';
import { TableRow } from "@material-ui/core"

//for displaying table and user componenet
const View = ({ products }) => {
  return products.map(product => (
    <tbody>
      <TableRow>
      </TableRow>
    </tbody>
  ))
}
export default View;