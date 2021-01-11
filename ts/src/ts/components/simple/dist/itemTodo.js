"use strict";
exports.__esModule = true;
var react_1 = require("react");
var arrow_1 = require("../so-simple/arrow");
var doText_1 = require("../so-simple/doText");
var doDetails_1 = require("../so-simple/doDetails");
var doDelete_1 = require("../so-simple/doDelete");
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(arrow_1["default"], { isExpanded: props.isExpanded }),
        react_1["default"].createElement(doText_1["default"], { itemId: props.itemId, content: props.content, onClick: props.onTaskVisible }),
        react_1["default"].createElement(doDetails_1["default"], { itemId: props.itemId, onClick: props.onOpenTodoDetails }),
        react_1["default"].createElement(doDelete_1["default"], { itemId: props.itemId, onClick: props.onDeleteTodo })));
});
