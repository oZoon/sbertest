"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className, disabled = _a.disabled, invert = _a.invert;
    function onClickAction(e) {
        if (disabled) {
            e.preventDefault();
        }
        else {
            return onClick();
        }
    }
    var classes = classnames_1["default"](className, { invert: invert });
    return (react_1["default"].createElement("button", { className: classes, disabled: disabled, onClick: onClickAction }, children));
};
exports["default"] = Button;
