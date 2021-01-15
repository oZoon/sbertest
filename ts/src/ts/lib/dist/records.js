"use strict";
exports.__esModule = true;
var Records = /** @class */ (function () {
    function Records() {
    }
    Records.prototype.setRecord = function (key, record) {
        localStorage.setItem(key, JSON.stringify(record));
    };
    Records.prototype.getRecord = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    return Records;
}());
var records = new Records();
exports["default"] = records;
