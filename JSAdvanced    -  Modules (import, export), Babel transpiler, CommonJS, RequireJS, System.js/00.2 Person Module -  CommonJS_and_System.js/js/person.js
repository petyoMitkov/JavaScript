class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `I'm ${this.name}`;
    }
}

console.log("It works");

module.exports = Person;