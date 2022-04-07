"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FontOption;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["font", "onSelect"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FontOption(_ref) {
  var _ref$font = _ref.font,
      name = _ref$font.name,
      id = _ref$font.id,
      detected = _ref$font.detected,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, _excluded);

  var enabled = detected === undefined || detected;

  var handleClick = function handleClick() {
    // eslint-disable-next-line no-unused-expressions
    enabled && onSelect(id);
  };

  var style = enabled ? {} : {
    color: 'red'
  }; // eslint-disable-next-line test-selectors/onClick

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: style
  }, props, {
    onClick: handleClick
  }), name);
}

;
FontOption.propTypes = {
  /** Font object passed in */
  font: _propTypes["default"].shape({
    /** name of font to display */
    name: _propTypes["default"].string.isRequired,

    /** id of font */
    id: _propTypes["default"].string.isRequired,

    /** font detected (not required) */
    detected: _propTypes["default"].bool
  }),

  /** callback for selection */
  onSelect: _propTypes["default"].func.isRequired
};
FontOption.propDefaults = {};