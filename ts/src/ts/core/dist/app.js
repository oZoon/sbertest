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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var content_1 = require("../containers/content");
var a = require("./actions");
var separateProps_1 = require("../lib/separateProps");
var App = function (props) {
    var propsContent = separateProps_1["default"](props);
    return (react_1["default"].createElement(content_1["default"], __assign({}, propsContent)));
};
var mapStateToProps = function (state) {
    return {
        state: state
    };
};
var mapDispatchToProps = function (dispatch) {
    var obj = {};
    Object.keys(a).forEach(function (item) {
        var _a;
        return Object.assign(obj, (_a = {}, _a["on" + item.charAt(0).toUpperCase() + item.substring(1)] = function (data) { return dispatch(a[item](data)); }, _a));
    });
    return obj;
};
App = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
exports["default"] = App;
