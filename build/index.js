"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useAssumeGraphite", {
  enumerable: true,
  get: function get() {
    return _useAssumeGraphite["default"];
  }
});
Object.defineProperty(exports, "useDetectDir", {
  enumerable: true,
  get: function get() {
    return _useDetectDir["default"];
  }
});
Object.defineProperty(exports, "useDetectFonts", {
  enumerable: true,
  get: function get() {
    return _useDetectFonts["default"];
  }
});
Object.defineProperty(exports, "useFonts", {
  enumerable: true,
  get: function get() {
    return _useFonts["default"];
  }
});
Object.defineProperty(exports, "useGraphiteEnabledFonts", {
  enumerable: true,
  get: function get() {
    return _useGraphiteEnabledFonts["default"];
  }
});

var _useDetectFonts = _interopRequireDefault(require("./hooks/useDetectFonts/useDetectFonts.js"));

var _useAssumeGraphite = _interopRequireDefault(require("./hooks/useAssumeGraphite/useAssumeGraphite.js"));

var _useDetectDir = _interopRequireDefault(require("./hooks/useDetectDir/useDetectDir.js"));

var _useFonts = _interopRequireDefault(require("./fonts/useFonts.json"));

var _useGraphiteEnabledFonts = _interopRequireDefault(require("./fonts/useGraphiteEnabledFonts.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }