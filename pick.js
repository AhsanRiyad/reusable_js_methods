"use strict";
function process(param, obj) {
    const newObj = Object.assign({}, obj);
    let reducedValue = "";
    if (typeof param == 'string') {
        reducedValue = param.split('.').reduce((acc, curr) => {
            return acc ? acc[curr] : null;
        }, newObj);
    }
    return reducedValue;
}
function checkType(param, obj) {
    let newObj = {};
    const initValue = Object.assign({}, obj);
    if (typeof param == 'object') {
        let key = Object.keys(param)[0];
        let value = Object.values(param)[0];
        const reducedValue = value.split('.').reduce((acc, cur) => {
            return acc ? acc[cur] : null;
        }, initValue);
        if (reducedValue) {
            newObj[key] = reducedValue;
        }
        return newObj;
    }
    else if (typeof param == 'string') {
        const reducedValue = param.split('.').reduce((acc, cur) => {
            return acc ? acc[cur] : null;
        }, initValue);
        if (reducedValue) {
            newObj[param] = reducedValue;
        }
        return newObj;
    }
    else {
        return newObj;
    }
}
let obj = {
    "age": "20",
    "riyad": {
        "name": "riyad"
    }
};
let arr = ['age', { name: 'riyad.name' }, 'else'];
arr.forEach(n => {
    console.log(checkType(n, obj));
});
// console.log( checkType( arr[0] , obj )   )
// console.log( Object.values(obj)[0] )
