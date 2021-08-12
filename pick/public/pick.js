"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = function () {
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
        let reducedValue = '';
        if (typeof param == 'string') {
            reducedValue = process(param, obj);
            return reducedValue;
        }
        else {
            return reducedValue;
        }
    }
    const pick1 = function (arr, obj) {
        let newObj = {};
        arr.forEach(n => {
            if (typeof n == 'object') {
                let value = Object.values(n)[0];
                const newValue = checkType(value, obj);
                if (newValue)
                    newObj[Object.keys(n)[0]] = newValue;
            }
            else if (typeof n == 'string') {
                const newValue = checkType(n, obj);
                if (newValue)
                    newObj[n] = newValue;
            }
        });
        return newObj;
    };
    return pick1;
}();
// let arr1: any[] = ['age', { name: 'riyad.name' }, 'else'];
// pick(arr1, {
//     age: 14
// } );
