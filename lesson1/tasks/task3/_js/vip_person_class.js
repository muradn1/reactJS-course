class Person{
    constructor(_name,_worth,_birth_year,_source,_country,_image){
        this.name = _name;
        this.worth = _worth;
        this.birth_year = _birth_year;
        this.source = _source;
        this.country = _country;
        this.image = _image;

        this.addToHtml();
    }

    addToHtml(){
        let newBox = document.createElement("div");
        newBox.className = "box";
        id_parent.appendChild(newBox);
        
        newBox.innerHTML += `<img src="${this.image}" >`;
        newBox.innerHTML += `<h3>${this.name}</h3>`;
        newBox.innerHTML += `<div>company: ${this.source}</div>`;
        newBox.innerHTML += `<div>money: ${this.worth}</div>`;
        // שעוברים עם העכבר הוא משנה את הסמן
        newBox.style.cursor = "pointer"

        newBox.onclick = function(){
            let age = (new Date().getTime() - new Date(this.birth_year).getTime())/1000/60/60/24/365;
            alert(`birth_year:${this.birth_year}\nage: ${Math.floor(age)}`);
        }.bind(this)
    }
}