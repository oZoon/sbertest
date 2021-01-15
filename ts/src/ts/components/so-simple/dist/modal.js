"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("../so-simple/button");
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.isOpen &&
        react_1["default"].createElement("div", { className: "modal__overlay", style: { zIndex: props.zIndex }, key: props.itemId },
            react_1["default"].createElement("div", { className: "modal__overlay-window", style: { width: props.width, minHeight: props.minHeight } },
                react_1["default"].createElement("div", { className: "modal__overlay-header" },
                    react_1["default"].createElement("div", { className: "modal__overlay-header__title" }, props.title),
                    react_1["default"].createElement(button_1["default"], { className: "modal__overlay-header__button-close", onClick: function () { return props.onCancel({ data: { id: props.itemId } }); } }, "\u2716")),
                react_1["default"].createElement("div", { className: "modal__overlay-body" }, props.children),
                react_1["default"].createElement("div", { className: "modal__overlay-footer" },
                    react_1["default"].createElement(button_1["default"], { className: "modal__button", onClick: function () { return props.onCancel({ data: { id: props.itemId } }); }, invert: true }, props.cancelName),
                    props.submit && props.submitName &&
                        react_1["default"].createElement(button_1["default"], { disabled: props.disabled, className: "modal__button", onClick: function () {
                                if (props.onSubmit) {
                                    props.onSubmit({ data: { id: props.itemId } });
                                }
                            } }, props.submitName))))));
});
