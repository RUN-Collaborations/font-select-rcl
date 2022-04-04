"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectFontMUI;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

var _graphiteEnabledFonts = _interopRequireDefault(require("../../fonts/graphite-enabled-fonts.json"));

var _fonts = _interopRequireDefault(require("../../fonts/fonts.json"));

var _webFonts = _interopRequireDefault(require("../../fonts/web-fonts.json"));

var _graphiteEnabledWebFonts = _interopRequireDefault(require("../../fonts/graphite-enabled-web-fonts.json"));

var _useDetectFonts = _interopRequireDefault(require("../../hooks/useDetectFonts/useDetectFonts"));

var _useGraphite = _interopRequireDefault(require("../../hooks/useGraphite/useGraphite"));

var _material = require("@mui/material");

var _detectRTL = require("./detectRTL");

require("../../fonts/WebFonts.css");

require("../../fonts/GraphiteEnabledWebFonts.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SelectFontMUI() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedFont = _React$useState2[0],
      setSelectedFont = _React$useState2[1];

  var _React$useState3 = _react["default"].useState('1em'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedFontSize = _React$useState4[0],
      setSelectedFontSize = _React$useState4[1];

  var _React$useState5 = _react["default"].useState('normal'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedLineHeight = _React$useState6[0],
      setSelectedLineHeight = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dir = _React$useState8[0],
      setDir = _React$useState8[1];

  var handleChange = function handleChange(event) {
    setSelectedFont(event.target.value);
  };

  var handleChangeSize = function handleChangeSize(event) {
    setSelectedFontSize(event.target.value);
  };

  var handleChangeLineHeight = function handleChangeLineHeight(event) {
    setSelectedLineHeight(event.target.value);
  }; // Should Graphite-enabled fonts be detected?


  var useGraphiteProps = {
    testClient: 'firefox',
    alwaysUse: false
  };
  var isGraphiteAssumed = (0, _useGraphite["default"])(useGraphiteProps); // Utilizing Graphite-enabled web fonts

  var gWebFonts = isGraphiteAssumed && _graphiteEnabledWebFonts["default"].map(function (i, k) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: k,
      value: i.id
    }, i.name, " ", i.version);
  }); // Detecting Graphite-enabled fonts


  var fonts = _graphiteEnabledFonts["default"];
  var gdetectedFonts = isGraphiteAssumed && (0, _useDetectFonts["default"])({
    fonts: fonts
  }).map(function (i, k) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: k,
      value: i.name
    }, i.name);
  });
  var noneDetectedGMsg = 'none detected'; // Utilizing web fonts

  var rWebFonts = _webFonts["default"].map(function (i, k) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: k,
      value: i.name + ' ' + i.version
    }, i.name, " ", i.version);
  }); //Detecting fonts:


  fonts = _fonts["default"];
  var detectedFonts = (0, _useDetectFonts["default"])({
    fonts: fonts
  }).map(function (i, k) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: k,
      value: i.id
    }, i.name);
  });
  var noneDetectedMsg = 'none detected';
  var example = '';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4,
    style: {
      padding: '1.25em'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }, "Font"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: selectedFont,
    label: "Font",
    onChange: handleChange
  }, isGraphiteAssumed && /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("b", null, isGraphiteAssumed && "Graphite-Enabled Web Fonts:"), gWebFonts, isGraphiteAssumed && /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("b", null, isGraphiteAssumed && "Graphite-Enabled (local):", gdetectedFonts.length === 0 && isGraphiteAssumed && noneDetectedGMsg), gdetectedFonts, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("b", null, "Web Fonts:"), rWebFonts, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("b", null, "Detected Fonts: ", detectedFonts.length === 0 && noneDetectedMsg), detectedFonts)))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 3,
    style: {
      padding: '1.25em'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }, "FontSize"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: selectedFontSize,
    label: "FontSize",
    onChange: handleChangeSize
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 1,
    value: '0.75em'
  }, "75%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 2,
    value: '1.25em'
  }, "125%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 3,
    value: '1.5em'
  }, "150%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 4,
    value: '1em'
  }, "default"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 2,
    style: {
      padding: '1.25em'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }, "LineHeight"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: selectedLineHeight,
    label: "LineHeight",
    onChange: handleChangeLineHeight
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 1,
    value: '150%'
  }, "150%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 2,
    value: '200%'
  }, "200%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 3,
    value: '250%'
  }, "250%"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    key: 4,
    value: 'normal'
  }, "default"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/_react["default"].createElement(_material.TextareaAutosize, {
    id: "example",
    onChange: function onChange(event) {
      example = event.target.value;
      if ((0, _detectRTL.isRtl)(example)) setDir('rtl');
      if (!(0, _detectRTL.isRtl)(example)) setDir('ltr');
    },
    style: {
      fontFamily: selectedFont,
      fontSize: selectedFontSize,
      lineHeight: selectedLineHeight,
      width: '100%',
      direction: dir
    },
    defaultValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }))));
}