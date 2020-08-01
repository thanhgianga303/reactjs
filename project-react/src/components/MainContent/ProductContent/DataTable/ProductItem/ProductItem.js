import React, { Component } from 'react';
class ProductItem extends Component {
    render() {
        var { product,key,index } = this.props;
      return (
        <tr>
            <td>{product.ProductCode}</td>
            <td>{product.ProductName}</td>
            <td>{product.Price}</td>
            <td>{product.Quantity}</td>
            <td>
                    <button type="button" className="btn btn-success">Details</button>
                    <button type="button" className="btn btn-secondary">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>           
            </td>
        </tr>
          
    );
  }
}

export default ProductItem;
