import React,{Component} from 'react';

class ProdList extends Component{
    render(){
        let prods_ar = this.props.prods_ar;
        return(
            <div>
               {prods_ar.map((item,i) => {
                   return (
                       <div className="col-12 border overflow-hidden">
                           <img className="w-25 float-left mr-2" src={"_images/"+item.image} />
                           <h2>{item.name}</h2>
                           <div>Price:{item.price}</div>
                       </div>
                   )
               })}
            </div>
        )
    }
}


export default ProdList;