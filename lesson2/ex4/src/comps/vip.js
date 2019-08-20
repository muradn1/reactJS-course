import React, { Component } from 'react';
import {vip_ar} from "../data/vip_list"

class Vip extends Component {
    render() {
        return (
            <div className="row"> 
                {vip_ar.map((item,i)=>{
                   return(
                       <VipSingle key={i} vipItem={item} />
                   )
                })}
            </div>
        )
    }
}

class VipSingle extends Component{
    render(){
       let item = this.props.vipItem;

        return(
            <div className="col-6 border">
                <img src={item.image} alt={"image of "+item.name} className="float-left mr-2" />
                <h2>{item.name}</h2>
                <div>Money:{item.worth}</div>
            </div>
        )

    }
}

export default Vip;