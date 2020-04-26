import React from "react";

const pi = 3.14;

function doublePi() {
    return pi * 2;
}

function triplePi() {
    return pi * 3;
}

function add(n1, n2) {
    return n1 + n2;
}

export default pi;
export { doublePi, triplePi, add };