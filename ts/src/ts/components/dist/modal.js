"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("./button");
exports["default"] = (function (_a) {
    var title = _a.title, isOpen = _a.isOpen, onCancel = _a.onCancel, onSubmit = _a.onSubmit, onClose = _a.onClose, cancel = _a.cancel, submit = _a.submit, close = _a.close, children = _a.children, zIndex = _a.zIndex, cancelName = _a.cancelName, closeName = _a.closeName, submitName = _a.submitName, itemId = _a.itemId, disabled = _a.disabled, width = _a.width, minHeight = _a.minHeight;
    cancelName = cancelName || 'ОТМЕНИТЬ';
    closeName = closeName || 'ЗАКРЫТЬ';
    submitName = submitName || 'СОХРАНИТЬ';
    itemId = itemId || 'itemId';
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isOpen &&
        react_1["default"].createElement("div", { className: "modal__overlay", style: { zIndex: zIndex }, key: itemId },
            react_1["default"].createElement("div", { className: "modal__overlay-window", style: { width: width, minHeight: minHeight } },
                react_1["default"].createElement("div", { className: "modal__overlay-header" },
                    react_1["default"].createElement("div", { className: "modal__overlay-header__title" }, title),
                    react_1["default"].createElement(button_1["default"], { className: "modal__overlay-header__button-close", onClick: cancel && onCancel !== undefined ? onCancel : close && onClose !== undefined ? onClose(itemId) : null }, "\u2716")),
                react_1["default"].createElement("div", { className: "modal__overlay-body" }, children),
                react_1["default"].createElement("div", { className: "modal__overlay-footer" },
                    cancel &&
                        react_1["default"].createElement(button_1["default"], { className: "modal__button", onClick: function () { return onCancel !== undefined ? onCancel : null; }, invert: "invert" }, cancelName),
                    submit &&
                        react_1["default"].createElement(button_1["default"], { disabled: disabled, className: "modal__button", onClick: function () { return onSubmit !== undefined ? onSubmit(itemId) : null; } }, submitName),
                    close &&
                        react_1["default"].createElement(button_1["default"], { className: "modal__button", onClick: function () { return onClose !== undefined ? onClose(itemId) : null; } }, closeName))))));
});
