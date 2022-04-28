"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fontList", {
  enumerable: true,
  get: function get() {
    return _fontList["default"];
  }
});
Object.defineProperty(exports, "graphiteEnabledFontList", {
  enumerable: true,
  get: function get() {
    return _graphiteEnabledFontList["default"];
  }
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

var _useDetectFonts = _interopRequireDefault(require("./hooks/useDetectFonts/useDetectFonts.js"));

var _useAssumeGraphite = _interopRequireDefault(require("./hooks/useAssumeGraphite/useAssumeGraphite.js"));

var _useDetectDir = _interopRequireDefault(require("./hooks/useDetectDir/useDetectDir.js"));

var _fontList = _interopRequireDefault(require("./fonts/fontList.json"));

var _graphiteEnabledFontList = _interopRequireDefault(require("./fonts/graphiteEnabledFontList.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }