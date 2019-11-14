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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/admin.scss":
/*!*******************************!*\
  !*** ./assets/css/admin.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/admin.scss */ "./assets/css/admin.scss");
/* harmony import */ var _css_admin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_admin_scss__WEBPACK_IMPORTED_MODULE_0__);
// Admin Styles


var Insights = __webpack_require__(/*! ./components/insights/insights.js */ "./assets/js/components/insights/insights.js");

var Admin = {
  init: function init() {
    this.nonce = helpie_faq_nonce;
    this.eventhandlers();
    Insights.init();
  },
  eventhandlers: function eventhandlers() {
    var thisModule = this;
    var publish = document.getElementById("helpie_faq_delete");
    if (publish !== null) publish.onclick = function () {
      // return confirm();
      var question = "Are you sure you want to reset all Insights?";
      if (confirm(question)) thisModule.resetInsights();
    };
  },
  resetInsights: function resetInsights() {
    var data = {
      action: "helpie_faq_reset_insights",
      nonce: this.nonce
    };
    jQuery.post(my_faq_ajax_object.ajax_url, data, function (response) {
      location.reload();
    });
  }
};
jQuery(document).ready(function () {
  Admin.init();
});

/***/ }),

/***/ "./assets/js/components/insights/insights.js":
/*!***************************************************!*\
  !*** ./assets/js/components/insights/insights.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Triggered by FAQ events, integrates with Insights */
var Insights = {
  init: function init() {
    var thisModule = this; // console.log(HelpieFaqInsights);
    // Return and Don't load in other pages except insights page

    if (jQuery('.ct-chart').length < 1) {
      return;
    } // console.log('HelpieFaqInsights: ');
    // console.log(HelpieFaqInsights);


    this.week();
    this.month();
    this.year();
    jQuery('.helpie-faq.dashboard input[type=radio] + label').on('click', function (event) {
      var index = jQuery(this).prev('input').attr('id').match(/\d+/)[0];
      var content = jQuery('#content' + index);
      content.find('.ct-chart').each(function (i, e) {
        if (index == 2) {
          thisModule.month();
        }

        if (index == 3) {
          thisModule.year();
        }
      });
    });
  },
  week: function week() {
    // var labels = ['Jan 30', 'Jan 31', 'Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5'];
    // var values = [5, 9, 7, 8, 5, 3, 5];
    var array_length = HelpieFaqInsights.click.last_30days.labels.length;
    var num_of_values = 7;
    var labels = HelpieFaqInsights.click.last_30days.labels.slice(Math.max(array_length - num_of_values, 1));
    var clickValues = HelpieFaqInsights.click.last_30days.values.slice(Math.max(array_length - num_of_values, 1));
    var searchValues = HelpieFaqInsights.search.last_30days.values.slice(Math.max(array_length - num_of_values, 1));
    this.weekChart = new Chartist.Line('.ct-chart-7day', {
      labels: labels,
      series: [clickValues, searchValues]
    }, {
      axisY: {
        onlyInteger: true
      },
      showArea: true
    });
  },
  month: function month() {
    // console.log("Month Chart ");
    var labels = HelpieFaqInsights.click.last_30days.labels;
    var clickValues = HelpieFaqInsights.click.last_30days.values;
    var searchValues = HelpieFaqInsights.search.last_30days.values;
    this.monthChart = new Chartist.Line('.ct-chart-30day', {
      labels: labels,
      series: [clickValues, searchValues]
    }, {
      axisX: {
        labelInterpolationFnc: function skipLabels(value, index) {
          return index % 5 === 0 ? value : null;
        }
      },
      axisY: {
        onlyInteger: true
      },
      showArea: true
    });
  },
  year: function year() {
    // console.log("Year Chart ");
    var labels = HelpieFaqInsights.click.last_year.labels;
    var clickValues = HelpieFaqInsights.click.last_year.values;
    var searchValues = HelpieFaqInsights.search.last_year.values;
    this.yearChart = new Chartist.Line('.ct-chart-year', {
      labels: labels,
      series: [clickValues, searchValues]
    }, {
      axisY: {
        onlyInteger: true
      },
      showArea: true
    });
  }
};
module.exports = Insights;

/***/ })

/******/ });
//# sourceMappingURL=admin.bundle.js.map