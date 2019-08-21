import React, { Component } from 'react';
import { shopProduct_ar } from "../data/super_json"

function ProdSingle(props) {
    let item = props.prodItem

    let showName = () => {
        alert(item.name)
    }

    return (
        <div className="col-lg-6 p-2">
            <div className="border p-2 overflow-hidden">
                <img className="float-left mr-2" src={"_images/" + item.image} width="100" />
                <h2>{item.name}</h2>
                <div>New Price: {item.price}</div>
                <button onClick={showName} className="btn btn-success">show name</button>
            </div>
        </div>
    )
}


class ProdList extends Component {
    showName = (e) => {
        console.log(e.target.dataset.id);
        let index = e.target.dataset.id;
        alert(shopProduct_ar[index].name);
    }

    render() {
        //console.log(shopProduct_ar);
        return (
            <div className="row">
                {shopProduct_ar.map((item, i) => {
                    return (
                       <ProdSingle key={i} prodItem={item}/>
                    )
                })}
            </div>
        )
    }
}


export default ProdList;