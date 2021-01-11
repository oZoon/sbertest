"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports["default"] = (function (props) {
    var onPartialSave = props.onPartialSave, partialData = props.partialData, id = props.id, type = props.type, className = props.className, label = props.label, error = props.error, marginLeft = props.marginLeft, required = props.required;
    var classes = classnames_1["default"]('input', className, { error: error });
    var style = {
        marginLeft: marginLeft
    };
    return (react_1["default"].createElement("div", { className: "inputWrapper" },
        react_1["default"].createElement("div", { className: "labelsWrapper" },
            label
                && react_1["default"].createElement("label", { className: "inputLabel", htmlFor: id }, label),
            required
                && react_1["default"].createElement("span", { className: "inputRequired" }, "Required")),
        react_1["default"].createElement("input", { style: style, name: id, id: id, className: classes, type: type, onChange: function (e) { return onPartialSave !== undefined ? onPartialSave(e.target.value) : null; }, value: partialData, autoComplete: "off" }),
        error
            && react_1["default"].createElement("span", { className: "inputError" }, error)));
});
