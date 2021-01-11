"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("input", { style: { marginLeft: props.marginLeft }, name: props.id, id: props.id, className: "input", type: "text", onChange: function (e) { return props.onPartialSave({ data: { text: e.currentTarget.value } }); }, value: props.partialData, autoComplete: "off", onKeyDown: function (e) { return e.key == 'Enter' ? props.onSave() : null; } }));
});
