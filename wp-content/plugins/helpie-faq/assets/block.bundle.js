/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./includes/widgets/blocks/block.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./includes/widgets/blocks/block.jsx":
/*!*******************************************!*\
  !*** ./includes/widgets/blocks/block.jsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit.jsx */ "./includes/widgets/blocks/components/edit.jsx");
/**
 * Helpie FAQ Block
 */

var __ = wp.i18n.__; // Register block controls

var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register block
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          Block itself, if registered successfully,
 *                             otherwise "undefined".
 */

registerBlockType('helpie-faq/helpie-faq', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
{
  title: __('Helpie FAQ Block'),
  // Block title. __() function allows for internationalization.
  icon: 'list-view',
  // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  edit: _components_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  // Render via PHP
  save: function save() {
    // return <div>Hello</div>;
    return null;
  }
});

/***/ }),

/***/ "./includes/widgets/blocks/components/edit.jsx":
/*!*****************************************************!*\
  !*** ./includes/widgets/blocks/components/edit.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _elements_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.jsx */ "./includes/widgets/blocks/components/elements.jsx");
/* harmony import */ var _elementsList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsList.jsx */ "./includes/widgets/blocks/components/elementsList.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody;
var InspectorControls = wp.editor.InspectorControls;

var FAQBlockEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(FAQBlockEdit, _Component);

  function FAQBlockEdit() {
    _classCallCheck(this, FAQBlockEdit);

    return _possibleConstructorReturn(this, _getPrototypeOf(FAQBlockEdit).apply(this, arguments));
  }

  _createClass(FAQBlockEdit, [{
    key: "onChange",
    value: function onChange(fieldName, newValue) {
      this.props.setAttributes(_defineProperty({}, fieldName, newValue));
    }
  }, {
    key: "getQuerySettings",
    value: function getQuerySettings() {
      var ControlsArray = [];

      for (var key in BlockFields) {
        if (BlockFields.hasOwnProperty(key)) {
          var singleField = BlockFields[key];
          var element = Object(_elements_jsx__WEBPACK_IMPORTED_MODULE_1__["getElement"])(singleField, this.props);
          ControlsArray.push(element);
        }
      }

      return ControlsArray;
    }
  }, {
    key: "onChangeStyle",
    value: function onChangeStyle(fieldName, newValue, element) {
      var styleOld = {};

      if (this.props.attributes.style) {
        styleOld = this.props.attributes.style;
      }

      var style = Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(styleOld, function (draftStyle) {
        if (!draftStyle[element]) {
          draftStyle[element] = {};
        }

        draftStyle[element][fieldName] = newValue;
      }); // style[fieldName] = newValue;

      this.props.setAttributes({
        'style': style
      });
    }
  }, {
    key: "getStyleSettings",
    value: function getStyleSettings() {
      var MainArray = [];
      var Elements = BlockFields.style;

      for (var elementKey in Elements) {
        var StylesArray = [];
        var StylesFields = Elements[elementKey]['styleProps'];

        for (var key in StylesFields) {
          if (StylesFields.hasOwnProperty(key)) {
            var singleField = StylesFields[key];
            var value = '';

            if (this.props.attributes.style && this.props.attributes.style[elementKey] && this.props.attributes.style[elementKey][key]) {
              value = this.props.attributes.style[elementKey][key];
            }

            var element = React.createElement(_elementsList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: value,
              field: singleField,
              elementKey: elementKey,
              onChangeStyle: this.onChangeStyle.bind(this)
            });
            StylesArray.push(element);
          }
        }

        var SingleStylePanel = React.createElement(PanelBody, {
          initialOpen: false,
          title: Elements[elementKey]['label'] + " Settings"
        }, StylesArray);
        MainArray.push(SingleStylePanel);
      }

      return MainArray;
    }
  }, {
    key: "render",
    value: function render() {
      // ensure the block attributes matches this plugin's name
      var inspectorControls = React.createElement(InspectorControls, null, React.createElement(PanelBody, {
        title: "Query Settings"
      }, this.getQuerySettings()), this.getStyleSettings());
      return React.createElement(Fragment, null, inspectorControls, React.createElement(ServerSideRender, {
        block: "helpie-faq/helpie-faq",
        attributes: this.props.attributes
      }));
    }
  }]);

  return FAQBlockEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (FAQBlockEdit);

/***/ }),

/***/ "./includes/widgets/blocks/components/elements.jsx":
/*!*********************************************************!*\
  !*** ./includes/widgets/blocks/components/elements.jsx ***!
  \*********************************************************/
/*! exports provided: getElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var __ = wp.i18n.__; // export function getStyleElement(type, props){
//     if(type == 'color'){
//         return ( 
//             <ColorPalette
// 				value={color}
// 				colors={ colors }
// 				onChange={ElementBGColor}
// 			/>
//         );
//     }
// }

function getElement(field, props) {
  var fieldName = field['name'];

  if (field['type'] == 'toggle') {
    return React.createElement(ToggleControl, {
      label: __(field['label']) // checked={ displayPostImage }
      ,
      onChange: function onChange(newValue) {
        return props.setAttributes(_defineProperty({}, fieldName, newValue));
      }
    });
  }

  if (field['type'] == 'text' || field['type'] == 'number') {
    return React.createElement(TextControl, {
      label: __(field['label']),
      value: props.attributes[field['name']],
      onChange: function onChange(newValue) {
        return props.setAttributes(_defineProperty({}, fieldName, newValue));
      }
    });
  }

  var options = [];

  if (field['type'] == 'select' || field['type'] == 'multi-select') {
    var FieldOptions = field['options'];

    for (var key in FieldOptions) {
      var singleOption = {
        value: key,
        label: FieldOptions[key]
      };
      options.push(singleOption);
    }
  }

  if (field['type'] == 'select') {
    return React.createElement(SelectControl, {
      label: __(field['label']),
      value: props.attributes[field['name']],
      onChange: function onChange(newValue) {
        return props.setAttributes(_defineProperty({}, fieldName, newValue));
      },
      options: options
    });
  }

  if (field['type'] == 'multi-select') {
    return React.createElement(SelectControl, {
      multiple: true,
      label: __(field['label']),
      value: props.attributes[field['name']],
      onChange: function onChange(newValue) {
        return props.setAttributes(_defineProperty({}, fieldName, newValue));
      },
      options: options
    });
  }
}

/***/ }),

/***/ "./includes/widgets/blocks/components/elementsList.jsx":
/*!*************************************************************!*\
  !*** ./includes/widgets/blocks/components/elementsList.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    DropdownMenu = _wp$components.DropdownMenu;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    FontSizePicker = _wp$editor.FontSizePicker,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var __ = wp.i18n.__;

var ElementsList =
/*#__PURE__*/
function (_Component) {
  _inherits(ElementsList, _Component);

  function ElementsList() {
    _classCallCheck(this, ElementsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ElementsList).apply(this, arguments));
  }

  _createClass(ElementsList, [{
    key: "capitalizeFirstLetter",
    value: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(field, element) {
      var _this = this;

      var label = this.capitalizeFirstLetter(field);

      if (field == 'border') {
        field = 'border-color';
      }

      if (field == 'color' || field == 'background' || field == 'border-color') {
        var colors = [{
          name: 'red',
          color: '#e44f51'
        }, {
          name: 'white',
          color: '#fff'
        }, {
          name: 'blue',
          color: '#1a98ce'
        }];
        return React.createElement(BaseControl, {
          label: __(label)
        }, React.createElement(ColorPalette, {
          colors: colors,
          value: this.props.value,
          label: field,
          onChange: function onChange(value) {
            return _this.props.onChangeStyle(field, value, element);
          }
        }));
      }

      if (field == 'text-align') {
        return React.createElement(BaseControl, {
          label: __(label)
        }, React.createElement(DropdownMenu, {
          icon: "align-left",
          label: "Select a direction",
          controls: [{
            title: 'Left',
            icon: 'align-left',
            onClick: function onClick() {
              return _this.props.onChangeStyle(field, 'left', element);
            }
          }, {
            title: 'Center',
            icon: 'align-center',
            onClick: function onClick() {
              return _this.props.onChangeStyle(field, 'center', element);
            }
          }, {
            title: 'Right',
            icon: 'align-right',
            onClick: function onClick() {
              return _this.props.onChangeStyle(field, 'right', element);
            }
          }]
        }));
      } // if(field['type'] == 'fontSize'){
      // 	let fontSize = 16;
      // 	return (
      // 		<FontSizePicker
      // 			// fontSizes={ fontSizes }
      // 			value={ fontSize }
      // 			fallbackFontSize={ fontSize }
      // 			onChange={value => this.props.onChangeStyle( field['name'], value + 'px' , element  )}
      // 		/>
      // 	);
      // }

    }
  }, {
    key: "render",
    value: function render() {
      var element = this.getStyleElement(this.props.field, this.props.elementKey);
      return React.createElement("div", null, element);
    }
  }]);

  return ElementsList;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (ElementsList);

/***/ }),

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: produce, applyPatches, nothing, setAutoFreeze, setUseProxies, original, isDraft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isProxy; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

function generatePatches(state, basepath, patches, inversePatches, baseValue, resultValue) {
    if (patches) if (Array.isArray(baseValue)) generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue);else generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue);
}

function generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {
    var shared = Math.min(baseValue.length, resultValue.length);
    for (var i = 0; i < shared; i++) {
        if (state.assigned[i] && baseValue[i] !== resultValue[i]) {
            var path = basepath.concat(i);
            patches.push({ op: "replace", path: path, value: resultValue[i] });
            inversePatches.push({ op: "replace", path: path, value: baseValue[i] });
        }
    }
    if (shared < resultValue.length) {
        // stuff was added
        for (var _i = shared; _i < resultValue.length; _i++) {
            var _path = basepath.concat(_i);
            patches.push({ op: "add", path: _path, value: resultValue[_i] });
        }
        inversePatches.push({
            op: "replace",
            path: basepath.concat("length"),
            value: baseValue.length
        });
    } else if (shared < baseValue.length) {
        // stuff was removed
        patches.push({
            op: "replace",
            path: basepath.concat("length"),
            value: resultValue.length
        });
        for (var _i2 = shared; _i2 < baseValue.length; _i2++) {
            var _path2 = basepath.concat(_i2);
            inversePatches.push({ op: "add", path: _path2, value: baseValue[_i2] });
        }
    }
}

function generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {
    each(state.assigned, function (key, assignedValue) {
        var origValue = baseValue[key];
        var value = resultValue[key];
        var op = !assignedValue ? "remove" : key in baseValue ? "replace" : "add";
        if (origValue === baseValue && op === "replace") return;
        var path = basepath.concat(key);
        patches.push(op === "remove" ? { op: op, path: path } : { op: op, path: path, value: value });
        inversePatches.push(op === "add" ? { op: "remove", path: path } : op === "remove" ? { op: "add", path: path, value: origValue } : { op: "replace", path: path, value: origValue });
    });
}

function applyPatches(draft, patches) {
    for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var path = patch.path;

        if (path.length === 0 && patch.op === "replace") {
            draft = patch.value;
        } else {
            var base = draft;
            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {
                base = base[path[_i3]];
                if (!base || (typeof base === "undefined" ? "undefined" : _typeof(base)) !== "object") throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/"));
            }
            var key = path[path.length - 1];
            switch (patch.op) {
                case "replace":
                case "add":
                    // TODO: add support is not extensive, it does not support insertion or `-` atm!
                    base[key] = patch.value;
                    break;
                case "remove":
                    if (Array.isArray(base)) {
                        if (key === base.length - 1) base.length -= 1;else throw new Error("Remove can only remove the last key of an array, index: " + key + ", length: " + base.length);
                    } else delete base[key];
                    break;
                default:
                    throw new Error("Unsupported patch operation: " + patch.op);
            }
        }
    }
    return draft;
}

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : defineProperty({}, "immer-nothing", true);

var PROXY_STATE = typeof Symbol !== "undefined" ? Symbol("immer-proxy-state") : "__$immer_state";

var RETURNED_AND_MODIFIED_ERROR = "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.";

function verifyMinified() {}

var inProduction = typeof process !== "undefined" && 'development' === "production" || verifyMinified.name !== "verifyMinified";

var autoFreeze = !inProduction;
var useProxies = typeof Proxy !== "undefined" && typeof Reflect !== "undefined";

/**
 * Automatically freezes any state trees generated by immer.
 * This protects against accidental modifications of the state tree outside of an immer function.
 * This comes with a performance impact, so it is recommended to disable this option in production.
 * It is by default enabled.
 *
 * @returns {void}
 */
function setAutoFreeze(enableAutoFreeze) {
    autoFreeze = enableAutoFreeze;
}

function setUseProxies(value) {
    useProxies = value;
}

function getUseProxies() {
    return useProxies;
}

function isProxy(value) {
    return !!value && !!value[PROXY_STATE];
}

function isProxyable(value) {
    if (!value) return false;
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

function freeze(value) {
    if (autoFreeze) {
        Object.freeze(value);
    }
    return value;
}

function original(value) {
    if (value && value[PROXY_STATE]) {
        return value[PROXY_STATE].base;
    }
    // otherwise return undefined
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

function shallowCopy(value) {
    if (Array.isArray(value)) return value.slice();
    var target = value.__proto__ === undefined ? Object.create(null) : {};
    return assign(target, value);
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i]);
        }
    } else {
        for (var key in value) {
            cb(key, value[key]);
        }
    }
}

function has(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

// given a base object, returns it if unmodified, or return the changed cloned if modified
function finalize(base, path, patches, inversePatches) {
    if (isProxy(base)) {
        var state = base[PROXY_STATE];
        if (state.modified === true) {
            if (state.finalized === true) return state.copy;
            state.finalized = true;
            var result = finalizeObject(useProxies ? state.copy : state.copy = shallowCopy(base), state, path, patches, inversePatches);
            generatePatches(state, path, patches, inversePatches, state.base, result);
            return result;
        } else {
            return state.base;
        }
    }
    finalizeNonProxiedObject(base);
    return base;
}

function finalizeObject(copy, state, path, patches, inversePatches) {
    var base = state.base;
    each(copy, function (prop, value) {
        if (value !== base[prop]) {
            // if there was an assignment on this property, we don't need to generate
            // patches for the subtree
            var _generatePatches = patches && !has(state.assigned, prop);
            copy[prop] = finalize(value, _generatePatches && path.concat(prop), _generatePatches && patches, inversePatches);
        }
    });
    return freeze(copy);
}

function finalizeNonProxiedObject(parent) {
    // If finalize is called on an object that was not a proxy, it means that it is an object that was not there in the original
    // tree and it could contain proxies at arbitrarily places. Let's find and finalize them as well
    if (!isProxyable(parent)) return;
    if (Object.isFrozen(parent)) return;
    each(parent, function (i, child) {
        if (isProxy(child)) {
            parent[i] = finalize(child);
        } else finalizeNonProxiedObject(child);
    });
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

// @ts-check

var proxies = null;

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source(target);
    },
    ownKeys: function ownKeys(target) {
        return Reflect.ownKeys(source(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: defineProperty$1,
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Immer does not support `setPrototypeOf()`.");
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function (state, prop) {
    if (isNaN(parseInt(prop))) throw new Error("Immer does not support deleting properties from arrays: " + prop);
    return objectTraps.deleteProperty.call(this, state[0], prop);
};
arrayTraps.set = function (state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) throw new Error("Immer does not support setting non-numeric properties on arrays: " + prop);
    return objectTraps.set.call(this, state[0], prop, value);
};

function createState(parent, base) {
    return {
        modified: false, // this tree is modified (either this object or one of it's children)
        assigned: {}, // true: value was assigned to these props, false: was removed
        finalized: false,
        parent: parent,
        base: base,
        copy: undefined,
        proxies: {}
    };
}

function source(state) {
    return state.modified === true ? state.copy : state.base;
}

function get$1(state, prop) {
    if (prop === PROXY_STATE) return state;
    if (state.modified) {
        var value = state.copy[prop];
        if (value === state.base[prop] && isProxyable(value))
            // only create proxy if it is not yet a proxy, and not a new object
            // (new objects don't need proxying, they will be processed in finalize anyway)
            return state.copy[prop] = createProxy(state, value);
        return value;
    } else {
        if (has(state.proxies, prop)) return state.proxies[prop];
        var _value = state.base[prop];
        if (!isProxy(_value) && isProxyable(_value)) return state.proxies[prop] = createProxy(state, _value);
        return _value;
    }
}

function set$1(state, prop, value) {
    // TODO: optimize
    state.assigned[prop] = true;
    if (!state.modified) {
        if (prop in state.base && is(state.base[prop], value) || has(state.proxies, prop) && state.proxies[prop] === value) return true;
        markChanged(state);
    }
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    state.assigned[prop] = false;
    markChanged(state);
    delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = state.modified ? state.copy : has(state.proxies, prop) ? state.proxies : state.base;
    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (descriptor && !(Array.isArray(owner) && prop === "length")) descriptor.configurable = true;
    return descriptor;
}

function defineProperty$1() {
    throw new Error("Immer does not support defining properties on draft objects.");
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = shallowCopy(state.base);
        // copy the proxies over the base-copy
        Object.assign(state.copy, state.proxies); // yup that works for arrays as well
        if (state.parent) markChanged(state.parent);
    }
}

// creates a proxy for plain objects / arrays
function createProxy(parentState, base) {
    if (isProxy(base)) throw new Error("Immer bug. Plz report.");
    var state = createState(parentState, base);
    var proxy = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);
    proxies.push(proxy);
    return proxy.proxy;
}

function produceProxy(baseState, producer, patchListener) {
    if (isProxy(baseState)) {
        // See #100, don't nest producers
        var returnValue = producer.call(baseState, baseState);
        return returnValue === undefined ? baseState : returnValue;
    }
    var previousProxies = proxies;
    proxies = [];
    var patches = patchListener && [];
    var inversePatches = patchListener && [];
    try {
        // create proxy for root
        var rootProxy = createProxy(undefined, baseState);
        // execute the thunk
        var _returnValue = producer.call(rootProxy, rootProxy);
        // and finalize the modified proxy
        var result = void 0;
        // check whether the draft was modified and/or a value was returned
        if (_returnValue !== undefined && _returnValue !== rootProxy) {
            // something was returned, and it wasn't the proxy itself
            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);

            // See #117
            // Should we just throw when returning a proxy which is not the root, but a subset of the original state?
            // Looks like a wrongly modeled reducer
            result = finalize(_returnValue);
            if (patches) {
                patches.push({ op: "replace", path: [], value: result });
                inversePatches.push({ op: "replace", path: [], value: baseState });
            }
        } else {
            result = finalize(rootProxy, [], patches, inversePatches);
        }
        // revoke all proxies
        each(proxies, function (_, p) {
            return p.revoke();
        });
        patchListener && patchListener(patches, inversePatches);
        return result;
    } finally {
        proxies = previousProxies;
    }
}

// @ts-check

var descriptors = {};
var states = null;

function createState$1(parent, proxy, base) {
    return {
        modified: false,
        assigned: {}, // true: value was assigned to these props, false: was removed
        hasCopy: false,
        parent: parent,
        base: base,
        proxy: proxy,
        copy: undefined,
        finished: false,
        finalizing: false,
        finalized: false
    };
}

function source$1(state) {
    return state.hasCopy ? state.copy : state.base;
}

function _get(state, prop) {
    assertUnfinished(state);
    var value = source$1(state)[prop];
    if (!state.finalizing && value === state.base[prop] && isProxyable(value)) {
        // only create a proxy if the value is proxyable, and the value was in the base state
        // if it wasn't in the base state, the object is already modified and we will process it in finalize
        prepareCopy(state);
        return state.copy[prop] = createProxy$1(state, value);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnfinished(state);
    state.assigned[prop] = true; // optimization; skip this if there is no listener
    if (!state.modified) {
        if (is(source$1(state)[prop], value)) return;
        markChanged$1(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged$1(state.parent);
    }
}

function prepareCopy(state) {
    if (state.hasCopy) return;
    state.hasCopy = true;
    state.copy = shallowCopy(state.base);
}

// creates a proxy for plain objects / arrays
function createProxy$1(parent, base) {
    var proxy = shallowCopy(base);
    each(base, function (i) {
        Object.defineProperty(proxy, "" + i, createPropertyProxy("" + i));
    });
    var state = createState$1(parent, proxy, base);
    createHiddenProperty(proxy, PROXY_STATE, state);
    states.push(state);
    return proxy;
}

function createPropertyProxy(prop) {
    return descriptors[prop] || (descriptors[prop] = {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            return _get(this[PROXY_STATE], prop);
        },
        set: function set$$1(value) {
            _set(this[PROXY_STATE], prop, value);
        }
    });
}

function assertUnfinished(state) {
    if (state.finished === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(state.copy || state.base));
}

// this sounds very expensive, but actually it is not that expensive in practice
// as it will only visit proxies, and only do key-based change detection for objects for
// which it is not already know that they are changed (that is, only object for which no known key was changed)
function markChangesSweep() {
    // intentionally we process the proxies in reverse order;
    // ideally we start by processing leafs in the tree, because if a child has changed, we don't have to check the parent anymore
    // reverse order of proxy creation approximates this
    for (var i = states.length - 1; i >= 0; i--) {
        var state = states[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged$1(state);
            } else if (hasObjectChanges(state)) markChanged$1(state);
        }
    }
}

function markChangesRecursively(object) {
    if (!object || (typeof object === "undefined" ? "undefined" : _typeof(object)) !== "object") return;
    var state = object[PROXY_STATE];
    if (!state) return;
    var proxy = state.proxy,
        base = state.base;

    if (Array.isArray(object)) {
        if (hasArrayChanges(state)) {
            markChanged$1(state);
            state.assigned.length = true;
            if (proxy.length < base.length) for (var i = proxy.length; i < base.length; i++) {
                state.assigned[i] = false;
            } else for (var _i = base.length; _i < proxy.length; _i++) {
                state.assigned[_i] = true;
            }each(proxy, function (index, child) {
                if (!state.assigned[index]) markChangesRecursively(child);
            });
        }
    } else {
        var _diffKeys = diffKeys(base, proxy),
            added = _diffKeys.added,
            removed = _diffKeys.removed;

        if (added.length > 0 || removed.length > 0) markChanged$1(state);
        each(added, function (_, key) {
            state.assigned[key] = true;
        });
        each(removed, function (_, key) {
            state.assigned[key] = false;
        });
        each(proxy, function (key, child) {
            if (!state.assigned[key]) markChangesRecursively(child);
        });
    }
}

function diffKeys(from, to) {
    // TODO: optimize
    var a = Object.keys(from);
    var b = Object.keys(to);
    return {
        added: b.filter(function (key) {
            return a.indexOf(key) === -1;
        }),
        removed: a.filter(function (key) {
            return b.indexOf(key) === -1;
        })
    };
}

function hasObjectChanges(state) {
    var base = state.base,
        proxy = state.proxy;

    // Search for added keys. Start at the back, because non-numeric keys
    // are ordered by time of definition on the object.

    var keys = Object.keys(proxy);
    for (var i = keys.length; i !== 0;) {
        var key = keys[--i];

        // The `undefined` check is a fast path for pre-existing keys.
        if (base[key] === undefined && !has(base, key)) {
            return true;
        }
    }

    // Since no keys have been added, we can compare lengths to know if an
    // object has been deleted.
    return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
    var proxy = state.proxy;

    if (proxy.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(proxy, proxy.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function produceEs5(baseState, producer, patchListener) {
    if (isProxy(baseState)) {
        // See #100, don't nest producers
        var returnValue = producer.call(baseState, baseState);
        return returnValue === undefined ? baseState : returnValue;
    }
    var prevStates = states;
    states = [];
    var patches = patchListener && [];
    var inversePatches = patchListener && [];
    try {
        // create proxy for root
        var rootProxy = createProxy$1(undefined, baseState);
        // execute the thunk
        var _returnValue = producer.call(rootProxy, rootProxy);
        // and finalize the modified proxy
        each(states, function (_, state) {
            state.finalizing = true;
        });
        var result = void 0;
        // check whether the draft was modified and/or a value was returned
        if (_returnValue !== undefined && _returnValue !== rootProxy) {
            // something was returned, and it wasn't the proxy itself
            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);
            result = finalize(_returnValue);
            if (patches) {
                patches.push({ op: "replace", path: [], value: result });
                inversePatches.push({ op: "replace", path: [], value: baseState });
            }
        } else {
            if (patchListener) markChangesRecursively(rootProxy);
            markChangesSweep(); // this one is more efficient if we don't need to know which attributes have changed
            result = finalize(rootProxy, [], patches, inversePatches);
        }
        // make sure all proxies become unusable
        each(states, function (_, state) {
            state.finished = true;
        });
        patchListener && patchListener(patches, inversePatches);
        return result;
    } finally {
        states = prevStates;
    }
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}

/**
 * produce takes a state, and runs a function against it.
 * That function can freely mutate the state, as it will create copies-on-write.
 * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned
 *
 * @export
 * @param {any} baseState - the state to start with
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the base state if nothing was modified
 */
function produce(baseState, producer, patchListener) {
    // prettier-ignore
    if (arguments.length < 1 || arguments.length > 3) throw new Error("produce expects 1 to 3 arguments, got " + arguments.length);

    // curried invocation
    if (typeof baseState === "function" && typeof producer !== "function") {
        var initialState = producer;
        var recipe = baseState;

        return function () {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

            return produce(currentState, function (draft) {
                return recipe.call.apply(recipe, [draft, draft].concat(args));
            });
        };
    }

    // prettier-ignore
    {
        if (typeof producer !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
        if (patchListener !== undefined && typeof patchListener !== "function") throw new Error("the third argument of a producer should not be set or a function");
    }

    // avoid proxying anything except plain objects and arrays
    if (!isProxyable(baseState)) {
        var returnValue = producer(baseState);
        return returnValue === undefined ? baseState : normalizeResult(returnValue);
    }

    return normalizeResult(getUseProxies() ? produceProxy(baseState, producer, patchListener) : produceEs5(baseState, producer, patchListener));
}

function normalizeResult(result) {
    return result === NOTHING ? undefined : result;
}

var applyPatches$1 = produce(applyPatches);

var nothing = NOTHING;


/* harmony default export */ __webpack_exports__["default"] = (produce);
//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=block.bundle.js.map