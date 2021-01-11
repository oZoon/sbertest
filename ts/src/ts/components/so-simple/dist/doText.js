"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("span", { style: { cursor: 'pointer' }, className: "content__show-todo__subtext", onClick: function () { return props.onClick({ data: { id: props.itemId } }); } }, props.content));
});
