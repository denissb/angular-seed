(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/common", "@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["angular-library-starter"] = factory(require("@angular/common"), require("@angular/core"));
	else
		root["angular-library-starter"] = factory(root["@angular/common"], root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var SampleComponent = (function () {
    function SampleComponent() {
    }
    SampleComponent = __decorate([
        core_1.Component({
            selector: 'sample-component',
            template: "<h1>Sample component</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], SampleComponent);
    return SampleComponent;
}());
exports.SampleComponent = SampleComponent;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var SampleDirective = (function () {
    function SampleDirective(el) {
        this.el = el;
    }
    SampleDirective = __decorate([
        core_1.Directive({
            selector: '[sampleDirective]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], SampleDirective);
    return SampleDirective;
    var _a;
}());
exports.SampleDirective = SampleDirective;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    SamplePipe = __decorate([
        core_1.Pipe({
            name: 'samplePipe'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SamplePipe);
    return SamplePipe;
}());
exports.SamplePipe = SamplePipe;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var SampleService = (function () {
    function SampleService() {
    }
    SampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SampleService);
    return SampleService;
}());
exports.SampleService = SampleService;


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var sample_component_1 = __webpack_require__(1);
var sample_directive_1 = __webpack_require__(2);
var sample_pipe_1 = __webpack_require__(3);
var sample_service_1 = __webpack_require__(4);
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
var SampleModule = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [sample_service_1.SampleService]
        };
    };
    SampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ],
            exports: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleModule);
    return SampleModule;
}());
exports.SampleModule = SampleModule;


/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzODA1YmZlMDNiYjkzYmViZGJhZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbXBsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbXBsZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbXBsZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9zYW1wbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBd0IsQ0FBZSxDQUFDO0FBTXhDO0lBRUU7SUFDQSxDQUFDO0lBUEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDLENBQUM7O3VCQUFBO0lBTUYsc0JBQUM7QUFBRCxDQUFDO0FBTFksdUJBQWUsa0JBSzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRCxpQ0FBb0MsQ0FBZSxDQUFDO0FBS3BEO0lBRUUseUJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ2xDLENBQUM7SUFOSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1NBQzlCLENBQUM7O3VCQUFBO0lBTUYsc0JBQUM7O0FBQUQsQ0FBQztBQUxZLHVCQUFlLGtCQUszQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQsaUNBQThDLENBQWUsQ0FBQztBQUU5RDs7R0FFRztBQUtIO0lBQUE7SUFJQSxDQUFDO0lBSEMsOEJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFrQjtRQUFsQixvQkFBa0IsR0FBbEIsV0FBa0I7UUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFQSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUM7UUFDRCxpQkFBVSxFQUFFOztrQkFBQTtJQUtiLGlCQUFDO0FBQUQsQ0FBQztBQUpZLGtCQUFVLGFBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRCxpQ0FBeUIsQ0FBZSxDQUFDO0FBR3pDO0lBRUU7SUFFQSxDQUFDO0lBTEg7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQU1iLG9CQUFDO0FBQUQsQ0FBQztBQUxZLHFCQUFhLGdCQUt6Qjs7Ozs7OztBQ1JELCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlDQUE0QyxDQUFlLENBQUM7QUFDNUQsbUNBQTJCLENBQWlCLENBQUM7QUFDN0MsNkNBQThCLENBQXdCLENBQUM7QUFDdkQsNkNBQThCLENBQXdCLENBQUM7QUFDdkQsd0NBQXlCLENBQW1CLENBQUM7QUFDN0MsMkNBQTRCLENBQXNCLENBQUM7QUFFbkQsNkJBQWMsQ0FBd0IsQ0FBQztBQUN2Qyw2QkFBYyxDQUF3QixDQUFDO0FBQ3ZDLDZCQUFjLENBQW1CLENBQUM7QUFDbEMsNkJBQWMsQ0FBc0IsQ0FBQztBQWlCckM7SUFBQTtJQU9BLENBQUM7SUFOUSxvQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUMzQixDQUFDO0lBQ0osQ0FBQztJQXJCSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHdCQUFVO2FBQ1g7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2Ysd0JBQVU7YUFDWDtTQUNGLENBQUM7O29CQUFBO0lBUUYsbUJBQUM7QUFBRCxDQUFDO0FBUFksb0JBQVksZUFPeEIiLCJmaWxlIjoiYW5ndWxhci1saWJyYXJ5LXN0YXJ0ZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb21tb25cIiwgXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFuZ3VsYXItbGlicmFyeS1zdGFydGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYW5ndWxhci1saWJyYXJ5LXN0YXJ0ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0sIHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM4MDViZmUwM2JiOTNiZWJkYmFkIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhbXBsZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxoMT5TYW1wbGUgY29tcG9uZW50PC9oMT5gXG59KVxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NhbXBsZS5jb21wb25lbnQudHMiLCJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzYW1wbGVEaXJlY3RpdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2FtcGxlLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZSwgUGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhbnkgaW5wdXQgdmFsdWVcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnc2FtcGxlUGlwZSdcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2FtcGxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zYW1wbGUucGlwZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYW1wbGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2FtcGxlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1NhbXBsZUNvbXBvbmVudH0gZnJvbSBcIi4vc3JjL3NhbXBsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7U2FtcGxlRGlyZWN0aXZlfSBmcm9tIFwiLi9zcmMvc2FtcGxlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtTYW1wbGVQaXBlfSBmcm9tIFwiLi9zcmMvc2FtcGxlLnBpcGVcIjtcbmltcG9ydCB7U2FtcGxlU2VydmljZX0gZnJvbSBcIi4vc3JjL3NhbXBsZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NhbXBsZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2FtcGxlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9zYW1wbGUucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9zYW1wbGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2FtcGxlQ29tcG9uZW50LFxuICAgIFNhbXBsZURpcmVjdGl2ZSxcbiAgICBTYW1wbGVQaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTYW1wbGVDb21wb25lbnQsXG4gICAgU2FtcGxlRGlyZWN0aXZlLFxuICAgIFNhbXBsZVBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNhbXBsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1NhbXBsZVNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9