import React, { Component } from 'react';

class Coins extends Component {
    state = {
        data_ar: []
    }

    async componentDidMount() {
        let intervalId = setInterval(this.updateCoins,1000);
        this.setState({intervalId: intervalId});

    }

    updateCoins = async () => {
        let myUrl = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
        let response = await fetch(myUrl);
        let data = await response.json();

        this.setState({ data_ar: data });
    }

    componentWillUnmount = () => {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
     }

    render() {
        return (
            <div className="row">
                {this.state.data_ar.map((coin, i) => {
                    return (
                        <Coin key={i} coinItem={coin} />
                    )
                })}
            </div>
        )
    }
}

class Coin extends Component {
    state = {
        coin: this.props.coinItem
    }
    
    followClicked = () => {
        console.log(this.state.coin)
        let {id, price_usd} = this.state.coin;
        window.localStorage.setItem(id,price_usd);
    }

    coinClicked = () =>{
        const {id, price_usd} = this.state.coin;
        const diff = price_usd- window.localStorage.getItem(id);
        alert(`diff: ${diff}`);
    }
    
    render() {
        return (
            <div className="coin col-12 border" onClick={this.coinClicked}>
                <h2>{this.state.coin.name}</h2>
                <div>Value: {this.state.coin.price_usd} USD</div>
                <button onClick={this.followClicked} className="btn btn-info">follow</button>
            </div>
        )

    }
}

export default Coins;