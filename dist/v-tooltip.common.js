module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* unused harmony export defaultTetherOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });




var positions = ['top-left', 'left-top', 'left-middle', 'left-bottom', 'bottom-left', 'bottom-center', 'bottom-right', 'right-bottom', 'right-middle', 'right-top', 'top-right', 'top-center'];

var defaultTetherOptions = {
  constraints: [{
    to: 'window',
    attachment: 'together',
    pin: true
  }]
};

var defaultOptions = {
  tetherOptions: defaultTetherOptions,
  defaultClass: 'vue-tooltip-theme'
};

function createTooltip(el, value, modifiers) {
  var position = 'top-center';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pos = _step.value;

      if (modifiers[pos]) {
        position = pos;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  position = position.replace('-', ' ');

  var content = value.content || value;

  var classes = directive.options.defaultClass;
  if (value.classes) {
    classes = value.classes;
  }

  el._tooltip = new __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default.a({
    target: el,
    position: position,
    content: content,
    classes: classes,
    tetherOptions: directive.options.tetherOptions
  });
}

function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.destroy();
    delete el._tooltip;
  }
}

var directive = {
  options: defaultOptions,
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;

    var content = value && value.content || value;
    destroyTooltip(el);
    if (content) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;

    var content = value && value.content || value;
    if (!content) {
      destroyTooltip(el);
    } else if (el._tooltip) {
      var drop = el._tooltip.drop;

      // Content
      drop.content.innerHTML = content;

      // CSS classes
      var oldClasses = oldValue && oldValue.classes;
      if (value && value.classes) {
        if (oldClasses) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* replaceClasses */])(drop.drop, value.classes, oldClasses);
        } else {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* addClasses */])(drop.drop, value.classes);
        }
      } else if (oldClasses) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* removeClasses */])(drop.drop, oldClasses);
      }
    } else {
      createTooltip(el, value, modifiers);
    }
  },
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

/* harmony default export */ __webpack_exports__["b"] = (directive);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });


function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["a" /* defaultOptions */], options || {});
  __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */].options = options;
  Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */]);
}

var VTooltip = __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */];

var plugin = {
  install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addClasses;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClasses;
/* harmony export (immutable) */ __webpack_exports__["a"] = replaceClasses;
/* unused harmony export mirrorAttachment */
/* unused harmony export sortAttach */
/* unused harmony export getTetherAttachments */

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }
  return value;
}

function addClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.add(c);
  });
}

function removeClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.remove(c);
  });
}

function replaceClasses(el, newClasses, oldClasses) {
  removeClasses(el, oldClasses);
  addClasses(el, newClasses);
}

var MIRROR_ATTACH = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
  middle: 'middle',
  center: 'center'
};

function mirrorAttachment(attachment) {
  var dropAttach = attachment.split(' ');
  dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
  dropAttach = dropAttach.join(' ');
  return dropAttach;
}

function sortAttach(str) {
  var list = str.split(' ');

  var first = list[0];
  var second = list[1];

  if (['left', 'right'].indexOf(first) >= 0) {
    var _ref = [second, first];
    first = _ref[0];
    second = _ref[1];
  }
  return [first, second].join(' ');
}

function getTetherAttachments(position) {
  var dropAttach = mirrorAttachment(position);
  return {
    attachment: sortAttach(dropAttach),
    targetAttachment: sortAttach(position)
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tether-tooltip");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWIzZDQwMzY2NTc3NDA3MTc3NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRldGhlci10b29sdGlwXCIiXSwibmFtZXMiOlsicG9zaXRpb25zIiwiZGVmYXVsdFRldGhlck9wdGlvbnMiLCJjb25zdHJhaW50cyIsInRvIiwiYXR0YWNobWVudCIsInBpbiIsImRlZmF1bHRPcHRpb25zIiwidGV0aGVyT3B0aW9ucyIsImRlZmF1bHRDbGFzcyIsImNyZWF0ZVRvb2x0aXAiLCJlbCIsInZhbHVlIiwibW9kaWZpZXJzIiwicG9zaXRpb24iLCJwb3MiLCJyZXBsYWNlIiwiY29udGVudCIsImNsYXNzZXMiLCJkaXJlY3RpdmUiLCJvcHRpb25zIiwiX3Rvb2x0aXAiLCJ0YXJnZXQiLCJkZXN0cm95VG9vbHRpcCIsImRlc3Ryb3kiLCJiaW5kIiwidXBkYXRlIiwib2xkVmFsdWUiLCJkcm9wIiwiaW5uZXJIVE1MIiwib2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJ1bmJpbmQiLCJpbnN0YWxsIiwiVnVlIiwiaW5zdGFsbGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidnRvb2x0aXAiLCJWVG9vbHRpcCIsInBsdWdpbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSIsImNvbnZlcnRUb0FycmF5Iiwic3BsaXQiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsInJlbW92ZSIsIm5ld0NsYXNzZXMiLCJNSVJST1JfQVRUQUNIIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwibWlkZGxlIiwiY2VudGVyIiwibWlycm9yQXR0YWNobWVudCIsImRyb3BBdHRhY2giLCJqb2luIiwic29ydEF0dGFjaCIsInN0ciIsImxpc3QiLCJmaXJzdCIsInNlY29uZCIsImluZGV4T2YiLCJfcmVmIiwiZ2V0VGV0aGVyQXR0YWNobWVudHMiLCJ0YXJnZXRBdHRhY2htZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxDQUNoQixVQURnQixFQUVoQixVQUZnQixFQUdoQixhQUhnQixFQUloQixhQUpnQixFQUtoQixhQUxnQixFQU1oQixlQU5nQixFQU9oQixjQVBnQixFQVFoQixjQVJnQixFQVNoQixjQVRnQixFQVVoQixXQVZnQixFQVdoQixXQVhnQixFQVloQixZQVpnQixDQUFsQjs7QUFlTyxJQUFNQyx1QkFBdUI7QUFDbENDLGVBQWEsQ0FDWDtBQUNFQyxRQUFJLFFBRE47QUFFRUMsZ0JBQVksVUFGZDtBQUdFQyxTQUFLO0FBSFAsR0FEVztBQURxQixDQUE3Qjs7QUFVQSxJQUFNQyxpQkFBaUI7QUFDNUJDLGlCQUFlTixvQkFEYTtBQUU1Qk8sZ0JBQWM7QUFGYyxDQUF2Qjs7QUFLUCxTQUFTQyxhQUFULENBQXdCQyxFQUF4QixFQUE0QkMsS0FBNUIsRUFBbUNDLFNBQW5DLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsWUFBZjtBQUQ0QztBQUFB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QSxZQUFRRyxLQUFLLENBQUwsQ0FBUjtBQUNBRixhQUFTRSxLQUFLLENBQUwsQ0FBVDtBQUNEO0FBQ0QsU0FBTyxDQUFDSCxLQUFELEVBQVFDLE1BQVIsRUFBZ0JMLElBQWhCLENBQXFCLEdBQXJCLENBQVA7QUFDRDs7QUFFTSxTQUFTUSxvQkFBVCxDQUErQjFELFFBQS9CLEVBQXlDO0FBQzlDLE1BQU1pRCxhQUFhRCxpQkFBaUJoRCxRQUFqQixDQUFuQjtBQUNBLFNBQU87QUFDTFQsZ0JBQVk0RCxXQUFXRixVQUFYLENBRFA7QUFFTFUsc0JBQWtCUixXQUFXbkQsUUFBWDtBQUZiLEdBQVA7QUFJRCxDOzs7Ozs7QUMvREQsMkMiLCJmaWxlIjoidi10b29sdGlwLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDViM2Q0MDM2NjU3NzQwNzE3NzQ4IiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndGV0aGVyLXRvb2x0aXAnXG5cbmltcG9ydCB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMsIHJlcGxhY2VDbGFzc2VzIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICAndG9wLWxlZnQnLFxuICAnbGVmdC10b3AnLFxuICAnbGVmdC1taWRkbGUnLFxuICAnbGVmdC1ib3R0b20nLFxuICAnYm90dG9tLWxlZnQnLFxuICAnYm90dG9tLWNlbnRlcicsXG4gICdib3R0b20tcmlnaHQnLFxuICAncmlnaHQtYm90dG9tJyxcbiAgJ3JpZ2h0LW1pZGRsZScsXG4gICdyaWdodC10b3AnLFxuICAndG9wLXJpZ2h0JyxcbiAgJ3RvcC1jZW50ZXInLFxuXVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRldGhlck9wdGlvbnMgPSB7XG4gIGNvbnN0cmFpbnRzOiBbXG4gICAge1xuICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgIHBpbjogdHJ1ZSxcbiAgICB9LFxuICBdLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHRldGhlck9wdGlvbnM6IGRlZmF1bHRUZXRoZXJPcHRpb25zLFxuICBkZWZhdWx0Q2xhc3M6ICd2dWUtdG9vbHRpcC10aGVtZScsXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXAgKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBwb3NpdGlvbiA9ICd0b3AtY2VudGVyJ1xuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcbiAgICBpZiAobW9kaWZpZXJzW3Bvc10pIHtcbiAgICAgIHBvc2l0aW9uID0gcG9zXG4gICAgfVxuICB9XG4gIHBvc2l0aW9uID0gcG9zaXRpb24ucmVwbGFjZSgnLScsICcgJylcblxuICBjb25zdCBjb250ZW50ID0gdmFsdWUuY29udGVudCB8fCB2YWx1ZVxuXG4gIGxldCBjbGFzc2VzID0gZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdENsYXNzXG4gIGlmICh2YWx1ZS5jbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IHZhbHVlLmNsYXNzZXNcbiAgfVxuXG4gIGVsLl90b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgIHRhcmdldDogZWwsXG4gICAgcG9zaXRpb24sXG4gICAgY29udGVudCxcbiAgICBjbGFzc2VzLFxuICAgIHRldGhlck9wdGlvbnM6IGRpcmVjdGl2ZS5vcHRpb25zLnRldGhlck9wdGlvbnMsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUb29sdGlwIChlbCkge1xuICBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICBlbC5fdG9vbHRpcC5kZXN0cm95KClcbiAgICBkZWxldGUgZWwuX3Rvb2x0aXBcbiAgfVxufVxuXG5jb25zdCBkaXJlY3RpdmUgPSB7XG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxuICBiaW5kIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICBjb25zdCBjb250ZW50ID0gdmFsdWUgJiYgdmFsdWUuY29udGVudCB8fCB2YWx1ZVxuICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjcmVhdGVUb29sdGlwKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKVxuICAgIH1cbiAgfSxcbiAgdXBkYXRlIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHZhbHVlICYmIHZhbHVlLmNvbnRlbnQgfHwgdmFsdWVcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGRlc3Ryb3lUb29sdGlwKGVsKVxuICAgIH0gZWxzZSBpZiAoZWwuX3Rvb2x0aXApIHtcbiAgICAgIGNvbnN0IGRyb3AgPSBlbC5fdG9vbHRpcC5kcm9wXG5cbiAgICAgIC8vIENvbnRlbnRcbiAgICAgIGRyb3AuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUuY2xhc3Nlc1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHtcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgICByZXBsYWNlQ2xhc3Nlcyhkcm9wLmRyb3AsIHZhbHVlLmNsYXNzZXMsIG9sZENsYXNzZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3Nlcyhkcm9wLmRyb3AsIHZhbHVlLmNsYXNzZXMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkQ2xhc3Nlcykge1xuICAgICAgICByZW1vdmVDbGFzc2VzKGRyb3AuZHJvcCwgb2xkQ2xhc3NlcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVuYmluZCAoZWwpIHtcbiAgICBkZXN0cm95VG9vbHRpcChlbClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdi10b29sdGlwLmpzIiwiaW1wb3J0IHZ0b29sdGlwLCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi92LXRvb2x0aXAnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSByZXR1cm5cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KVxuICB2dG9vbHRpcC5vcHRpb25zID0gb3B0aW9uc1xuICBWdWUuZGlyZWN0aXZlKCd0b29sdGlwJywgdnRvb2x0aXApXG59XG5cbmV4cG9ydCBjb25zdCBWVG9vbHRpcCA9IHZ0b29sdGlwXG5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgaW5zdGFsbCxcbn1cblxuLy8gQXV0by1pbnN0YWxsXG5sZXQgR2xvYmFsVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxufVxuaWYgKEdsb2JhbFZ1ZSkge1xuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5ICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NlcyAoZWwsIGNsYXNzZXMpIHtcbiAgY2xhc3NlcyA9IGNvbnZlcnRUb0FycmF5KGNsYXNzZXMpXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDbGFzc2VzIChlbCwgbmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcykge1xuICByZW1vdmVDbGFzc2VzKGVsLCBvbGRDbGFzc2VzKVxuICBhZGRDbGFzc2VzKGVsLCBuZXdDbGFzc2VzKVxufVxuXG5jb25zdCBNSVJST1JfQVRUQUNIID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICB0b3A6ICdib3R0b20nLFxuICBib3R0b206ICd0b3AnLFxuICBtaWRkbGU6ICdtaWRkbGUnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlycm9yQXR0YWNobWVudCAoYXR0YWNobWVudCkge1xuICB2YXIgZHJvcEF0dGFjaCA9IGF0dGFjaG1lbnQuc3BsaXQoJyAnKVxuICBkcm9wQXR0YWNoWzBdID0gTUlSUk9SX0FUVEFDSFtkcm9wQXR0YWNoWzBdXVxuICBkcm9wQXR0YWNoID0gZHJvcEF0dGFjaC5qb2luKCcgJylcbiAgcmV0dXJuIGRyb3BBdHRhY2hcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBdHRhY2ggKHN0cikge1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnICcpXG5cbiAgdmFyIGZpcnN0ID0gbGlzdFswXVxuICB2YXIgc2Vjb25kID0gbGlzdFsxXVxuXG4gIGlmIChbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGZpcnN0KSA+PSAwKSB7XG4gICAgdmFyIF9yZWYgPSBbc2Vjb25kLCBmaXJzdF1cbiAgICBmaXJzdCA9IF9yZWZbMF1cbiAgICBzZWNvbmQgPSBfcmVmWzFdXG4gIH1cbiAgcmV0dXJuIFtmaXJzdCwgc2Vjb25kXS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRldGhlckF0dGFjaG1lbnRzIChwb3NpdGlvbikge1xuICBjb25zdCBkcm9wQXR0YWNoID0gbWlycm9yQXR0YWNobWVudChwb3NpdGlvbilcbiAgcmV0dXJuIHtcbiAgICBhdHRhY2htZW50OiBzb3J0QXR0YWNoKGRyb3BBdHRhY2gpLFxuICAgIHRhcmdldEF0dGFjaG1lbnQ6IHNvcnRBdHRhY2gocG9zaXRpb24pLFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXRoZXItdG9vbHRpcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRldGhlci10b29sdGlwXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==