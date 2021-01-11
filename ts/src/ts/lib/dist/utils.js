"use strict";
exports.__esModule = true;
exports.generatorNumber = exports.randomString = void 0;
exports.randomString = function (length) {
    var str = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    return Array(length).fill('').map(function () { return str[Math.floor(Math.random() * str.length)]; }).join('');
};
exports.generatorNumber = function (count) { return Math.floor(count[0]) + Math.floor(Math.random() * (count[1] - count[0])); };
