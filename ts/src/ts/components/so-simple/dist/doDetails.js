"use strict";
exports.__esModule = true;
var react_1 = require("react");
var details_png_1 = require("../../../images/details.png");
exports["default"] = (function (props) {
    // console.log({data: {id: props.itemId}});
    return (react_1["default"].createElement("span", { style: { cursor: 'pointer' }, onClick: function () { return props.onClick({ data: { id: props.itemId } }); } },
        react_1["default"].createElement("img", { src: details_png_1["default"], className: "content__show-todo__symbols" })));
});
// 🔍
