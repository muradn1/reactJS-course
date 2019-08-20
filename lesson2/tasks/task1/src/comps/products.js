import React, { Component } from 'react';
import { shopProduct_ar } from "../data/super_json"

class Products extends Component {
    render() {
        return (
            <div class="blocks">
                {shopProduct_ar.map((product, i) => {
                    return (
                        <Product key={i} productproduct={product} />
                    )
                })}
            </div>
        )
    }
}

class Product extends Component {
    render() {
        let product = this.props.productproduct;
        let productClicked = () => {
            alert(`qty: ${product.qty}`);
        }

        return (
            <div onClick={productClicked} className="box">
                <img src={"/_images/"+product.image} alt={"image of " + product.name} className="float-left mr-2" />
                <h2>{product.name}</h2>
                <div>price: {product.price}</div>
            </div>
        )

    }
}

export default Products;