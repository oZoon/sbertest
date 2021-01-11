"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("./button");
exports["default"] = (function (_a) {
    var onClick = _a.onClick;
    return (react_1["default"].createElement("div", { className: "content__create-todo" },
        react_1["default"].createElement(button_1["default"], { className: "content__create-todo__button", onClick: onClick }, "\u043D\u043E\u0432\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430")));
});
