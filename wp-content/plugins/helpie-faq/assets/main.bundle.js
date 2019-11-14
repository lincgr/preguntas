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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/main.scss":
/*!******************************!*\
  !*** ./assets/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/insights/tracker.js":
/*!**************************************************!*\
  !*** ./assets/js/components/insights/tracker.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Triggered by FAQ events, integrates with Insights */
var Tracker = {
  init: function init(nonce) {// console.log("nonce: " + nonce);
    // this.eventHandler();
  },

  /* EVENTS API */

  /* Auto-ordering methods */
  clickCounter: function clickCounter(id) {
    this.ajaxRequest(id);
  },

  /* INTERNAL METHODS */
  ajaxRequest: function ajaxRequest(id) {
    var thisModule = this;
    var data = {
      action: "helpie_faq_click_counter",
      nonce: thisModule.nonce,
      id: id
    };
    jQuery.post(my_faq_ajax_object.ajax_url, data, function (response) {// console.log(response);
    });
  }
};
module.exports = Tracker;

/***/ }),

/***/ "./assets/js/components/submission/submission.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/submission/submission.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SubmissionAjax = __webpack_require__(/*! ./submission_ajax.js */ "./assets/js/components/submission/submission_ajax.js");

var Submission = {
  init: function init() {
    this.eventHandler();
  },
  eventHandler: function eventHandler() {
    this.toggleForm();
    this.submitForm();
    SubmissionAjax.getLoggedEmail();
  },
  submitForm: function submitForm() {
    var thisModule = this; // jQuery(".form__submit").click(function(e) {

    jQuery("body").on("click", ".form__submit", function (e) {
      var formSection = jQuery(this).closest(".form__section"),
          question = formSection.find(".form__text").val(),
          email = formSection.find(".form__email").val(),
          answer = formSection.find(".form__textarea").val(),
          wooProduct = formSection.data("woo-product"),
          kbCategory = formSection.data("kb-category"),
          data = {
        action: "helpie_faq_submission",
        nonce: thisModule.nonce,
        question: question
      };
      if (email) data.email = email;
      if (answer) data.answer = answer;
      if (wooProduct) data.woo_product = wooProduct;
      if (kbCategory) data.kb_category = kbCategory;

      if (question && thisModule._isEmail(email) || question && email == undefined) {
        e.preventDefault();
        SubmissionAjax.postForm(data, formSection);
      }
    });
  },
  toggleForm: function toggleForm() {
    // jQuery(".form__toggle").on("click", function() {
    jQuery("body").on("click", ".form__toggle", function (e) {
      var formSection = jQuery(this).parent().next(".form__section");
      formSection.next().hide();

      if (this.value === faqStrings.addFAQ) {
        this.value = faqStrings.hide;
        formSection.show();
      } else {
        this.value = faqStrings.addFAQ;
        formSection.hide();
      }
    });
  },
  _isEmail: function _isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return !regex.test(email) ? false : true;
  }
};
module.exports = Submission;

/***/ }),

/***/ "./assets/js/components/submission/submission_ajax.js":
/*!************************************************************!*\
  !*** ./assets/js/components/submission/submission_ajax.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SubmissionAjax = {
  postForm: function postForm(data, formSection) {
    thisModule = this;
    jQuery.post(my_faq_ajax_object.ajax_url, data, function (response) {
      var ajaxResponse = JSON.parse(response); // console.log(ajaxResponse);

      if (ajaxResponse.postStatus == "publish") {
        thisModule._successMessage(formSection);

        thisModule._appendItem(data, formSection); // console.log("Success Post Message");

      } else if (ajaxResponse.postStatus == "pending") {
        thisModule._successMessage(formSection); // console.log("Success Pending Message");

      }
    }); // Empty input fields on submit

    formSection.find(".form__text").val("");
    formSection.find(".form__email").val("");
    formSection.find(".form__textarea").val("");
    thisModule.getLoggedEmail();
  },
  getLoggedEmail: function getLoggedEmail() {
    thisModule = this;
    var data = {
      action: "helpie_faq_submission_get_logged_email",
      nonce: thisModule.nonce
    };
    var email = jQuery(".form__section .form__email");

    if (email) {
      jQuery.get(my_faq_ajax_object.ajax_url, data, function (response) {
        var ajaxResponse = JSON.parse(response);

        if (ajaxResponse.loggedEmail) {
          email.val(ajaxResponse.loggedEmail);
        }
      });
    }
  },
  _appendItem: function _appendItem(data, formSection) {
    var accordion = formSection.parent().find(".accordion");
    var reqData = {
      action: "helpie_faq_submission_get_item",
      nonce: thisModule.nonce,
      title: data.question
    };
    reqData.content = data.answer ? data.answer : "Empty Content";
    jQuery.post(my_faq_ajax_object.ajax_url, reqData, function (response) {
      var ajaxResponse = JSON.parse(response);
      accordion.append(ajaxResponse.singleItem); // console.log(ajaxResponse);
    });
  },
  _successMessage: function _successMessage(el) {
    el.hide();
    el.next().show();
  }
};
module.exports = SubmissionAjax;

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/main.scss */ "./assets/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
var Stylus = __webpack_require__(/*! ./../../lib/stylus/js/search.js */ "./lib/stylus/js/search.js");

var Tracker = __webpack_require__(/*! ./components/insights/tracker.js */ "./assets/js/components/insights/tracker.js");

var HelpieFaq = {
  nonce: helpie_faq_nonce,
  init: function init() {
    console.log("FAQ init");
    this.openFirstAccordion();
    this.eventHandlers(); // Components

    Tracker.init(this.nonce); // Library Components

    Stylus.init();
    
/* Premium Code Stripped by Freemius */

  },
  eventHandlers: function eventHandlers() {
    var thisModule = this;
    jQuery("body").on("click", ".accordion__header", function (e) {
      // console.log(' title: ' + jQuery(this).children('.accordion__title').html());
      e.preventDefault();
      thisModule.onHeaderClick(this);
    });
  },
  openFirstAccordion: function openFirstAccordion() {
    jQuery(".helpie-faq.accordions.open-first > .accordion:first").each(function () {
      var FirstItemHeaderSelector = ".accordion__item:first > .accordion__header";
      jQuery(this).find(FirstItemHeaderSelector).addClass("active");
      jQuery(this).find(FirstItemHeaderSelector).next(".accordion__body").stop().slideDown(300);
    });
  },
  onHeaderClick: function onHeaderClick(that) {
    var thisModule = this;

    if (jQuery(that).hasClass("active")) {
      thisModule.closeAccordion(that);
    } else {
      if (jQuery(that).closest(".helpie-faq.accordions").hasClass("toggle")) {
        jQuery(that).closest(".accordion").find(".accordion__header").removeClass("active");
        jQuery(that).closest(".accordion").find(".accordion__body").slideUp();
      }

      thisModule.openAccordion(that);
    }
  },
  openAccordion: function openAccordion(that) {
    jQuery(that).addClass("active");
    jQuery(that).next(".accordion__body").stop().slideDown(300);
    /* Auto-ordering Event Tracker */

    var id = jQuery(that).attr("data-id");
    Tracker.clickCounter(id);
  },
  closeAccordion: function closeAccordion(that) {
    jQuery(that).removeClass("active");
    jQuery(that).next(".accordion__body").stop().slideUp(300);
  }
};
jQuery(document).ready(function () {
  HelpieFaq.init();
  console.log("jquery");
});


/***/ }),

/***/ "./lib/stylus/js/search.js":
/*!*********************************!*\
  !*** ./lib/stylus/js/search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Stylus = {
  //setup before functions
  searchTerm: "",
  typingTimer: 0,
  // timer identifier
  doneTypingInterval: 2000,
  // time in ms, 2 second for example
  showNoFAQsLabel: false,
  accordionHeader: ".accordion .accordion__item .accordion__header",
  setSearchAttr: function setSearchAttr() {
    /* Add 'search_attr' to accordion headers */
    jQuery(this.accordionHeader).each(function () {
      var search_attr = jQuery(this).text().toLowerCase();

      if (jQuery(this).closest(".accordion").closest(".accordion__body").closest(".accordion__item").length > 0) {
        search_attr += " " + jQuery(this).closest(".accordion").closest(".accordion__body").closest(".accordion__item").find(".accordion__header").first().text().toLowerCase();
      }

      jQuery(this).attr("data-search-term", search_attr);
    });
    /* Add 'search_attr' to accordion section title ( category name ) */

    jQuery(".accordions .accordion__section h3").each(function () {
      var search_attr = jQuery(this).text().toLowerCase();
      jQuery(this).attr("data-search-term", search_attr);
    });
  },
  isContentMatch: function isContentMatch(element, searchTerm) {
    var content = jQuery(element).closest(".accordion__item").find(".accordion__body").text().toLowerCase(); // $is_match = content.match(searchTerm);

    if (content.indexOf(searchTerm) >= 0) return true;
    return false; // return $is_match;
  },
  isTitleMatch: function isTitleMatch(element, searchTerm) {
    var filterMatch = jQuery(element).filter("[data-search-term *= " + searchTerm + "]").length > 0;
    var TitleMatch = filterMatch || searchTerm.length < 1 ? true : false;
    return TitleMatch;
  },
  onSearchKeyup: function onSearchKeyup(that) {
    var thisModule = this;
    var matches = 0;
    var searchTerm = jQuery(that).val().toLowerCase();
    thisModule.searchTerm = jQuery(that).val().toLowerCase();
    /* Loop through each accordion item header */

    jQuery(that).closest(".accordions").find(thisModule.accordionHeader).each(function () {
      var TitleMatch = thisModule.isTitleMatch(this, searchTerm);
      var ContentMatch = thisModule.isContentMatch(this, searchTerm);
      var show = TitleMatch || ContentMatch;

      if (show == true) {
        jQuery(this).closest(".accordion__item").show();
        var accordionItem = jQuery(this).closest(".accordion__item").closest(".accordion__body").closest(".accordion__item");

        if (accordionItem.length > 0) {
          accordionItem.show();
        }

        matches++;
      } else {
        jQuery(this).closest(".accordion__item").hide();
      }
    });
    /* Feature Starts -- Show NO FAQs when search is empty */

    if (thisModule.showNoFAQsLabel == false) {
      jQuery(that).closest(".accordions").append("<span class='no-faqs'>No FAQs found.</span>");
      thisModule.showNoFAQsLabel = true;
    }

    if (matches != 0) {
      jQuery(".no-faqs").hide();
    }

    if (matches == 0) {
      jQuery(".no-faqs").show();
    }
    /* -- Feature Ends */

    /* Hide Category Title ( h3 ) */


    if (searchTerm.length < 1) {
      jQuery(that).closest(".helpie-faq.accordions").find(".accordion__section").show();
      return;
    }

    console.log("matches: " + matches);
    console.log("showNoFAQsLabel: " + thisModule.showNoFAQsLabel);

    if (jQuery(that).closest(".accordions").has(".accordion__section")) {
      jQuery(that).closest(".accordions").find(".accordion").each(function () {
        var showOne = false;
        jQuery(this).find(".accordion__item").each(function () {
          var TitleMatch = thisModule.isTitleMatch(this, searchTerm);
          var ContentMatch = thisModule.isContentMatch(this, searchTerm);
          var show = TitleMatch || ContentMatch;
          showOne = showOne || show;
        });

        if (showOne == false) {
          jQuery(this).closest(".accordion__section").hide();
        } else {
          jQuery(this).closest(".accordion__section").show();
        }
        /* Show entire Matched category */


        var filterMatch = jQuery(this).closest(".accordion__section").find("h3").filter('[data-search-term *= "' + searchTerm + '"]').length > 0;
        var showCategory = filterMatch || searchTerm.length < 1 ? true : false;

        if (showCategory == true) {
          jQuery(this).closest(".accordion__section").show();
          jQuery(this).closest(".accordion__section").find(".accordion .accordion__item").show();
        }
      });
      return searchTerm;
    }
  },
  onSearchKeydown: function onSearchKeydown(that) {
    // console.log('KEYDOWN: ');
    var ENTER = 13;

    if (e.keyCode == ENTER) {
      e.preventDefault();
      e.stopPropagation();
      var toAdd = jQuery("input[class=live-search-box]").val();

      if (toAdd) {
        jQuery("<li/>", {
          text: toAdd,
          "data-search-term": toAdd.toLowerCase()
        }).appendTo(jQuery("ul"));
        jQuery("input[class=live-search-box]").val("");
      }
    }
  },
  init: function init() {
    var thisModule = this;
    console.log("Search init");
    thisModule.setSearchAttr();
    jQuery("body").on("keyup", ".live-search-box", function () {
      var searchTerm = thisModule.onSearchKeyup(this);
      console.log("searchTerm: " + searchTerm); // For ajaxCall, start the countdown

      clearTimeout(thisModule.typingTimer);
      thisModule.typingTimer = setTimeout(function () {
        // donetyping() method
        // TODO: Move to Tracker.js or create a child

        /* <fs_premium_only> */
        var data = {
          action: "helpie_faq_search_counter",
          nonce: thisModule.nonce,
          searchTerm: searchTerm
        };
        jQuery.post(my_faq_ajax_object.ajax_url, data, function (response) {// console.log(response);
        });
      }, thisModule.doneTypingInterval);
    });
    jQuery("input[class=live-search-box]").keydown(function (e) {
      thisModule.onSearchKeydown(this); // For ajaxCall, clear the countdown

      clearTimeout(thisModule.typingTimer);
    });
  }
};
module.exports = Stylus;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map