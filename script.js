"use strict";

/*

function *generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next().done);

*/

// ------------------------------------------------

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) {
    console.log(k);
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// ------------------------------------------------

function some(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

some(7);