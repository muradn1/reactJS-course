class CryptoClass {
    constructor(_name, _id, _price) {
        this.name = _name;
        this.id = _id;
        this.price = _price;
    }

    addToHtml() {
        let newDiv = document.createElement("div");
        newDiv.className = "col-6 border";
        id_row.appendChild(newDiv);

        newDiv.innerHTML += `
        <h2>${this.name}</h2>
        <div>${this.price}</div>
        `

    }
}