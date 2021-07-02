//Template Literals
// Hello Jeremy.WElcome!
function hello() {
    console.log("Hello " + name + ". Welcome!");
}



function hello2(name) {
    console.log(`Hello ${name}. Welcome!`); //빽틱 back tick
}

console.log(hello2("Jeremy"));



function hello3(name, name2) {
    console.log(`Hello ${name}. Welcome ${name2}!`); //빽틱 back tick
}

console.log(hello3("Jeremy", "daeho"));