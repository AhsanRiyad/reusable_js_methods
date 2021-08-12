"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.pick = function () {
    function process(param, obj) {
        var newObj = __assign({}, obj);
        var reducedValue = "";
        if (typeof param == 'string') {
            reducedValue = param.split('.').reduce(function (acc, curr) {
                return acc ? acc[curr] : null;
            }, newObj);
        }
        return reducedValue;
    }
    function checkType(param, obj) {
        var reducedValue = '';
        if (typeof param == 'string') {
            reducedValue = process(param, obj);
            return reducedValue;
        }
        else {
            return reducedValue;
        }
    }
    var obj = {
        "age": "20",
        "riyad": {
            "name": "riyad"
        }
    };
    var arr = ['age', { name: 'riyad.name' }, 'else'];
    var pick1 = function (arr, obj) {
        var newObj = {};
        arr.forEach(function (n) {
            if (typeof n == 'object') {
                var value = Object.values(n)[0];
                var newValue = checkType(value, obj);
                if (newValue)
                    newObj[Object.keys(n)[0]] = newValue;
            }
            else if (typeof n == 'string') {
                var newValue = checkType(n, obj);
                if (newValue)
                    newObj[n] = newValue;
            }
        });
        return newObj;
    };
    return pick1;
}();
