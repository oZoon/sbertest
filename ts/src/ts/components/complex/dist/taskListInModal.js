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
var itemTaskInModal_1 = require("../simple/itemTaskInModal");
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.item.tasks.map(function (subItem) {
        return (react_1["default"].createElement("div", { className: "content__show-todo__item", key: subItem.id },
            react_1["default"].createElement(itemTaskInModal_1["default"], __assign({ subItem: subItem }, props.itemTaskInModal))));
    })));
});
