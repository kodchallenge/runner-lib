/**
 * Copyright (c) KodChallenge.
 * 
 * This file is used to kodchallenge/problems repository as a submodule.
 */


// INPUT

/**
 * Return the argument at the given index.
 * @param {number} index
 * @returns {string}
 */
const getArg = (index) => {
    return process.argv[index + 2];
}

/**
 * Return the argument at the given index as a number.
 * @param {number} index
 * @returns {number}
 */
const getArgAsNumber = (index) => {
    return Number(getArg(index));
}

/**
 * Return the argument at the given index as a boolean.
 * @param {number} index
 * @returns {boolean}
 */
const getArgAsBoolean = (index) => {
    const arg = getArg(index);
    return arg !== "false" && arg != '0' && Boolean(getArg(index));
}

/**
 * Return the argument at the given index as a object.
 * @param {number} index
 * @returns {Object}
 */
const getArgAsObject = (index) => {
    return JSON.parse(getArg(index));
}

/**
 * Return the argument at the given index as a array.
 * @param {number} index
 * @returns {Array}
 */
const getArgAsArray = (index) => {
    return getArgAsObject(index);
}

/**
 * Return the argument at the given index as a date.
 * @param {number} index
 * @returns {Date}
 */
const getArgAsDate = (index) => {
    return new Date(getArg(index));
}


// OUTPUT

/**
 * Print the given value.
 * @param {any} value
 */
const print = (value) => {
    console.log(value);
}

/**
 * Print the given value as a boolean.
 * @param {any} value
 */
const printAsBoolean = (value) => {
    console.log(value !== "false" && value != '0' && Boolean(value));
}

/**
 * Print the given value as a array.
 * @param {any} value
 * @example printAsArray([[1,2],[3]]) // Output => [[1,2],[3]]
 */
const printAsArray = (array) => {
    console.log(JSON.stringify(array));
}



module.exports = {
    getArg,
    getArgAsNumber,
    getArgAsString,
    getArgAsBoolean,
    getArgAsArray,
    getArgAsObject,
    getArgAsDate,
    
    ///
    print,
    printAsBoolean,
    printAsArray
}