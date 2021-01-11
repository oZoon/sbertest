"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var reducers_1 = require("./ts/core/reducers");
var records_1 = require("./ts/lib/records");
var app_1 = require("./ts/core/app");
var constants_1 = require("./ts/lib/constants");
require("./styles/main.css");
var store = redux_1.createStore(reducers_1["default"]);
var update = function () {
    var records = new records_1["default"]();
    records.setRecord("sber-" + constants_1.VERSION, store.getState());
};
store.subscribe(update);
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(app_1["default"], null)), document.getElementById('root'));
