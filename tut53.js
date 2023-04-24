console.log("This is tutorial 53");

function greet(name, greetText = "Greetings from javascript") {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy/girl");
}
function sum(a, b, c) {
    let d = a + b + c;
    return d;
}
let name1 = "Anas";
let name2 = "Kshitiz";
let name3 = "Aman";
let name4 = "Sharia";
let greetText1 = "Good Morning";
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4);
let returnval = sum(4, 5, 3);
console.log(returnval);
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good girl");