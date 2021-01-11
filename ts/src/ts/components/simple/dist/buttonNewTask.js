"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("../so-simple/button");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("div", { className: "content__create-task" },
        react_1["default"].createElement(button_1["default"], { className: "content__create-task__button", onClick: function () { return props.onClick({ data: { id: props.id } }); } }, "\u043D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430")));
});
