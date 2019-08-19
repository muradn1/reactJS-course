window.onload = function(){
    doRestApi();
}

function doRestApi(){
    let myUrl = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
    fetch(myUrl)
    .then(val => val.json())
    .then(json_data =>{
        console.table(json_data);
        createAllCoins(json_data);
    })
}

function createAllCoins(_ar){
    _ar.map(item =>{
        let {name, id, price_usd} = item;
        let coin = new CryptoClass(name, id, price_usd);
        coin.addToHtml();
    })
}