"use strict";
exports.__esModule = true;
var react_1 = require("react");
var edit_png_1 = require("../../../images/edit.png");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("span", { style: { cursor: 'pointer' }, onClick: function () { return props.onClick({ data: { id: props.itemId } }); } },
        react_1["default"].createElement("img", { src: edit_png_1["default"], className: "content__show-todo__symbols" })));
});
// ✍
