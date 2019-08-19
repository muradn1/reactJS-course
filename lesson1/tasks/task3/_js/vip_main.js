window.onload = function () {
    createAllVip();
}

function createAllVip() {
    vip_ar.forEach(person => {
        let person1 = new Person(person.name, person.worth, person.birth_year, person.source, person.country, person.image);
    });
}
