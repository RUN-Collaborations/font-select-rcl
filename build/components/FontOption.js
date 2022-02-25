"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FontOption;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FontOption(_ref) {
  var name = _ref.name,
      id = _ref.id,
      onSelect = _ref.onSelect;

  var handleClick = function handleClick() {
    onSelect(id);
  };

  var props = {
    onClick: handleClick
  };
  return /*#__PURE__*/_react["default"].createElement("div", props, name);
}

;
FontOption.propTypes = {
  /** name of font to display */
  name: _propTypes["default"].string.isRequired,

  /** id of font */
  id: _propTypes["default"].string.isRequired,

  /** callback for selection */
  onSelect: _propTypes["default"].func.isRequired
};
FontOption.propDefaults = {};