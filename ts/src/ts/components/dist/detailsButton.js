"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports["default"] = (function (_a) {
    var itemId = _a.itemId, onClick = _a.onClick;
    return (react_1["default"].createElement("span", { style: { cursor: 'pointer' }, className: "content__show-todo__details-symbol", onClick: function () { return onClick(itemId); } }, "\uD83D\uDD0D"));
});
