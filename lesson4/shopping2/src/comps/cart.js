import React,{Component} from 'react';

class Cart extends Component{
    render(){
        let cart_ar = this.props.cart_ar;
        let total = 0;
        return(
            <div>
                {cart_ar.map((item,i) => {
                    total += item.price * item.qty
                    return (
                        <div className="col-12">
                            <h3>{item.name} - {item.qty} qty</h3>
                            <div>Price: {item.price * item.qty} nis</div>
                        </div>
                    )
                })}
                <div className="col-12">
                    <h3>Total price: {total} nis</h3>
                </div>
            </div>
        )
    }
}


export default Cart;