"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("button", { className: classnames_1["default"](props.className, { invert: props.invert }), disabled: props.disabled, onClick: function (e) { return props.disabled ? e.preventDefault() : props.onClick(); } }, props.children));
});
