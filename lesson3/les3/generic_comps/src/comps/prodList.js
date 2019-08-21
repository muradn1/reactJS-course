import React,{Component} from 'react';



class ProdList extends Component{
    render(){
        let prods_ar = this.props.prods;
        let customComp = this.props.compData || (() => "")
        return(
            <div>
                {prods_ar.map((item) => (
                    <div className="col-12 border">
                        <h2>{item.name}</h2>
                        <div>Price: {item.price}</div>
                        {customComp(item)}
                    </div>
                )) }
            </div>
        )
    }
}


export default ProdList;