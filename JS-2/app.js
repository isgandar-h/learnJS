// Scope

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope


// Global Scope - her yerden elcatanliq var
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c);

// Function Scope - yalnizca funksiyadan elcatanliq var
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
test();

// Block Scope - yalnizca blockdan elcatanliq var
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Block Scope: ', a, b, c);
}