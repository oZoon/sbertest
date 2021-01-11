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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports["default"] = (function (_a) {
    var type = _a.type, className = _a.className, itemId = _a.itemId, isDone = _a.isDone, content = _a.content, onClick = _a.onClick, attrs = __rest(_a, ["type", "className", "itemId", "isDone", "content", "onClick"]);
    var classes = classnames_1["default"]("content__show-todo__" + className);
    var symbol = type == 'checkMark' ? isDone ? '☑' : '☐' : type == 'content' ? content : type == 'details' ? '🔍' : type == 'delete' ? '✖' : type == 'edit' ? '✍' : '';
    var style = { cursor: 'pointer' };
    return (react_1["default"].createElement("span", __assign({ style: style, className: classes, onClick: function () { return onClick(itemId); } }, attrs), symbol));
});
