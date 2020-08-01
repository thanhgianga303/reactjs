import React, { Component } from 'react';
import ProductItem from './ProductItem/ProductItem';
class DataTable extends Component {
    render() {
        var { products } = this.props;
        var elmProducts = products.map((product, index) => {
            return <ProductItem key={product.ProductCode} product={product} index={index} />
        });
      return (
        <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table mr-1"></i>
                        DataTable Example
                    </div>  
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Product code</th>
                                        <th>Product's name</th>
                                        <th>Price(USD)</th>
                                        <th>Quantity</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Product code</th>
                                        <th>Product's name</th>
                                        <th>Price(USD)</th>
                                        <th>Quantity</th>
                                        <th>Operation</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {elmProducts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
          
    );
  }
}

export default DataTable;
