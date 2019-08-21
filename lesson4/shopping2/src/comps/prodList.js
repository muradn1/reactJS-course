import React,{Component} from 'react';

class ProdList extends Component{
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
                           <input type="number"  defaultValue="1"/>
                       </div>
                   )
               })}
               <button className="btn btn-success mt-2  ">add to cart</button>
            </div>
        )
    }
}


export default ProdList;