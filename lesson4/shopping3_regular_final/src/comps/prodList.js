import React,{Component} from 'react';

class ProdList extends Component{
    addToCart = () => {
        //todo: collect the all data from all inputs
        let prods_ar = this.props.prods_ar;
        // let prodCart_ar = [...prods_ar];
        let prodCart_ar = []
        for(let i in prods_ar){
            let item = prods_ar[i];
            console.log(item.name,this.refs[item.name].value);
            prodCart_ar.push({...item , qty:this.refs[item.name].value})
            
        }
        this.props.updateCart(prodCart_ar);
    }

    render(){
        let prods_ar = this.props.prods_ar;
        return(
            <div>
               {prods_ar.map((item,i) => {
                   return (
                       <div key={i} className="col-12 border overflow-hidden">
                           <img className="w-25 float-left mr-2" src={"_images/"+item.image} />
                           <h2>{item.name}</h2>
                           <div>Price:{item.price}</div>
                           <label>Amount:</label>
                           <input ref={item.name} type="number"  defaultValue="1"/>
                       </div>
                   )
               })}
               <button onClick={this.addToCart} className="btn btn-success mt-2  ">add to cart</button>
            </div>
        )
    }
}


export default ProdList;