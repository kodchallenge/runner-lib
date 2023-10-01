/**
 * Copyright (c) KodChallenge.
 */


// INPUT

const getArg = (index) => {
    return process.argv[index + 2];
}

const getArgAsNumber = (index) => {
    return Number(getArg(index));
}

const getArgAsString = (index) => {
    return String(getArg(index));
}

const getArgAsBoolean = (index) => {
    const arg = getArg(index);
    return arg !== "false" && arg != '0' && Boolean(getArg(index));
}

const getArgAsArray = (index) => {
    return getArg(index).split(',');
}

const getArgAsNumberArray = (index) => {
    return getArg(index).split(',').map(Number);
}

const getArgAsObject = (index) => {
    return JSON.parse(getArg(index));
}

const getArgAsDate = (index) => {
    return new Date(getArg(index));
}


// OUTPUT


const print = (value) => {
    console.log(value);
}

const printAsBoolean = (value) => {
    console.log(value !== "false" && value != '0' && Boolean(value));
}

const printAsArray = (array) => {
    console.log(JSON.stringify(array));
}