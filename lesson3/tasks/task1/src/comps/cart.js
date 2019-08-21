import React, { Component } from 'react';
import { MyContext } from "../data/context";


class Cart extends Component {
    static contextType = MyContext;

    state ={
        products: this.context.data.products
    }

    changeQuantity = (_newQty,item) =>{
        let products = this.state.products;
        products.forEach(item1 => {
            if(item1.name === item.name){
                item.qty = _newQty;
            }
        });

        this.setState({products: products});
    }

    render() {
        return (
            <div>
                {this.state.products.map(product =>
                    <Product key={product.name} product={product} changeQty={this.changeQuantity}  />
                )}
            </div>
        )
    }
}

class Product extends Component {

    handleChange = (event) =>{
       this.props.changeQty(event.target.value,this.props.product);
    }
    render() {
        let product = this.props.product;
        return (

            <div className="row align-items-center ">
                <div>
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={`/_images/${product.image}`} alt="blabla" />
                </div>
                <div className="ml-3">
                    <div className="row">
                        <div>Name: {product.name}</div>
                        <div className="ml-2"> Price: {product.price}</div>
                    </div>
                    <div className="row">
                        <div className="mr-2">Quantity:</div>
                        <input style={{ maxWidth: "100px" }} type="number" value={product.qty} onChange={this.handleChange}></input>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cart;