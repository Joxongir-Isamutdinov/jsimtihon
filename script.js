let name = prompt("What is your name?");
let age = prompt("How old are you?");

age = Number(age);

alert("Hello, " + name + "!");
console.log(name);

if (age >= 50) {
    console.log("You are too old");
    alert("You are too old");
} else if (age >= 18) {
    console.log("You are adult");
    alert("You are adult");
} else if (age == 18) {
    console.log("You are little");
    alert("You are little");
} else {
    console.log("You are little");
    alert("You are little");
}

console.log("Your age: " + age);
alert("Your age: " + age);