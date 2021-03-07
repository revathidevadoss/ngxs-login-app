function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- As a link -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" (click)=\"home()\">Home <span class=\"sr-only\"></span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"product()\">Product</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"sales()\">Sales</a>\n        </li>\n      </ul>\n      <span class=\"navbar-text\" (click)=\"logout()\">\n        Logout\n      </span>\n    </div>\n  </nav>\n  \n<div class=\" mt-3 \">\n    <div class=\"txt-center\">\n       \n        <div >MOVE TO MOBILITY</div>\n\n        <div >Welcome to Mobility Product & Sale</div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container-fluid \">\n  <div class=\"card formstyle\" >\n    <div class=\"card-body\">\n    <img src=\"./assets/logo.png\" style=\"height:100px;width:100px;\">\n    <div class=\"txt-color\">MOVE TO MOBILITY</div>\n\n   \n       <div class=\"card-body\">\n              <div class=\" \">\n                <i class=\"bi bi-lock-fill\"></i>\n                <input type=\"text\"  placeholder=\"User Name\" class=\"form-control input-align\" #username/>\n               \n                      <input type=\"password\"  placeholder=\"Password\" class=\"form-control input-align\" #password/>\n                      \n                  <div class=\"row px-3 mb-4\">\n                      <div class=\"custom-control\">\n                        <a (click)=\"onClickSubmit(username.value,password.value)\" class=\"txt-red-color mr-1\">Login</a> </div> <a  class=\"ml-auto mb-0 txt-color\">Forgot Password?</a>\n                  </div>\n                  <div *ngIf=\"invalid\" class=\"row mb-4 px-3\"> <a class=\"text-danger \" >Invalid username and password</a> </div>\n              </div>\n          </div>\n        </div>\n     \n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/form.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/form.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- As a link -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" (click)=\"home()\"  >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"product()\">Product</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"sales()\">Sales</a>\n        </li>\n      </ul>\n      <span class=\"navbar-text\" (click)=\"logout()\">\n        Logout\n      </span>\n    </div>\n  </nav>\n<div class=\"card mt-3 text-backgrnd\">\n    <div class=\"card-body\">\n        <img src=\"./assets/logo.png\"/>\n        <div class=\"txt-color\">MOVE TO MOBILITY</div>\n\n        <div class=\"txt-color\">Product</div>\n\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"submitForm()\" >\n            <div class=\"form-group\" >\n                \n                <input type=\"number\" [readonly]=\"editFlag\"  placeholder=\"Product Id\" class=\"form-control input-align\" formControlName=\"productid\" #productid/>\n                <div *ngIf=\"productForm.controls['productid'].invalid && (productForm.controls['productid'].dirty || productForm.controls['productid'].touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"productForm.controls['productid'].errors.required\">\n                        Product Id is required.\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\"  placeholder=\"product Name\" class=\"form-control input-align\" formControlName=\"productname\" #productname/>\n                \n                <div *ngIf=\"productForm.controls['productname'].invalid && (productForm.controls['productname'].dirty || productForm.controls['productname'].touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"productForm.controls['productname'].errors.required\">\n                        Product Name is required.\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"number\" placeholder=\"amount\" class=\"form-control input-align\" formControlName=\"amount\" #amount/>\n                \n                <div *ngIf=\"productForm.controls['amount'].invalid && (productForm.controls['amount'].dirty || productForm.controls['amount'].touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"productForm.controls['amount'].errors.required\">\n                        Amount is required.\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"form-group\">\n                <button type=\"submit\"\n                        class=\"btn btn-primary mr-1\"\n                        [disabled]=\"productForm.pristine || productForm.invalid\">{{Submit}}\n                </button>\n\n                <button class=\"btn btn-primary mr-1\" (click)=\"clearForm()\">Clear</button>\n\n            </div>\n\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/list.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sale/list.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSaleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" (click)=\"home()\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"product()\">Product</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"sales()\">Sales</a>\n        </li>\n      </ul>\n      <span class=\"navbar-text\" (click)=\"logout()\">\n        Logout\n      </span>\n    </div>\n  </nav>\n  \n<div class=\"container\">\n    <div *ngIf=\"salelist\">\n        <div class=\"txt-color \" >Sales Table</div>\n\n        <table class=\"table table-bordered table-striped table-hover\">\n            <thead>\n            <tr>\n                <th>Product Id</th>\n                <th>Product Name</th>\n                <th>Amount Q1</th>\n                <th>Amount Q2</th>\n                <th>Amount Q3</th>\n                <th>Total Amount</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n             \n            \n            <tr *ngFor=\"let list of salelist | async\">\n                \n                <th scope=\"row\" *ngIf =\"list.productid !=null\">{{ list.productid }}</th>\n                <td *ngIf =\"list.productid !=null\">{{ list.productname }}</td>\n                <td *ngIf =\"list.productid !=null\">{{ list.amount / 3}}</td>\n                <td *ngIf =\"list.productid !=null\"> {{ list.amount / 3}}</td>\n                <td *ngIf =\"list.productid !=null\">{{ list.amount / 3}}</td>\n                <td *ngIf =\"list.productid !=null\">{{ list.amount}}</td>\n               \n                <td *ngIf =\"list.productid !=null\">\n                    <button class=\"btn btn-primary mr-1\" (click)=\"edit(list)\">Edit</button>\n                    <button class=\"btn btn-primary\" (click)=\"delete(list.productid)\">Delete</button>\n                </td>\n           \n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/actions/product.action.ts":
  /*!*******************************************!*\
    !*** ./src/app/actions/product.action.ts ***!
    \*******************************************/

  /*! exports provided: RemoveList, AddList, UpdateList, GetList, SetSelectedList, DeleteList */

  /***/
  function srcAppActionsProductActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveList", function () {
      return RemoveList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddList", function () {
      return AddList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateList", function () {
      return UpdateList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetList", function () {
      return GetList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetSelectedList", function () {
      return SetSelectedList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteList", function () {
      return DeleteList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RemoveList = function RemoveList(productid) {
      _classCallCheck(this, RemoveList);

      this.productid = productid;
    };

    RemoveList.type = '[State] Remove';

    var AddList = function AddList(payload) {
      _classCallCheck(this, AddList);

      this.payload = payload;
    };

    AddList.type = '[State] Add';

    var UpdateList = function UpdateList(payload, productid) {
      _classCallCheck(this, UpdateList);

      this.payload = payload;
      this.productid = productid;
    };

    UpdateList.type = '[State] Update';

    var GetList = function GetList() {
      _classCallCheck(this, GetList);
    };

    GetList.type = '[State] Get';

    var SetSelectedList = function SetSelectedList(payload) {
      _classCallCheck(this, SetSelectedList);

      this.payload = payload;
    };

    SetSelectedList.type = '[State] Set';

    var DeleteList = function DeleteList(productid) {
      _classCallCheck(this, DeleteList);

      this.productid = productid;
    };

    DeleteList.type = '[State] Delete';
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product/form.component */
    "./src/app/product/form.component.ts");
    /* harmony import */


    var _sale_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sale/list.component */
    "./src/app/sale/list.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'product',
      component: _product_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]
    }, {
      path: 'sales',
      component: _sale_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bckgrnd {\n  color: #fff;\n  background: #F07C6D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXZhZC9Eb2N1bWVudHMvUHJvamVjdC9HSVQvbmd4L25neHN0ZXN0L25neHMtbG9naW4tYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iY2tncm5kIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjRjA3QzZEO1xufSIsIi5iY2tncm5kIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNGMDdDNkQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ngxs-login-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/devtools-plugin */
    "./node_modules/@ngxs/devtools-plugin/fesm2015/ngxs-devtools-plugin.js");
    /* harmony import */


    var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/logger-plugin */
    "./node_modules/@ngxs/logger-plugin/fesm2015/ngxs-logger-plugin.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _product_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product/form.component */
    "./src/app/product/form.component.ts");
    /* harmony import */


    var _sale_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sale/list.component */
    "./src/app/sale/list.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _states_product_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./states/product.state */
    "./src/app/states/product.state.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _product_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"], _sale_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot([_states_product_state__WEBPACK_IMPORTED_MODULE_14__["ProductState"]]), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot(), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form__input {\n  width: 100%;\n  border: 0px solid transparent;\n  border-radius: 0;\n  border-bottom: 1px solid #aaa;\n  padding: 1em 0.5em 0.5em;\n  padding-left: 2em;\n  outline: none;\n  margin: 1.5em auto;\n  transition: all 0.5s ease;\n}\n\n.form__input:focus {\n  border-bottom-color: #008080;\n  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);\n  border-radius: 4px;\n}\n\n.txt-color {\n  color: #A6B1AF !important;\n}\n\n.input-align {\n  border: 0px solid transparent !important;\n  border-radius: 0 !important;\n  border-bottom: 1px solid #aaa !important;\n}\n\n.text-backgrnd {\n  width: 350px;\n  height: 550px;\n  margin: 30px 300px;\n  text-align: center !important;\n  border-radius: 5%;\n  display: inline-block;\n}\n\n.txt-center {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXZhZC9Eb2N1bWVudHMvUHJvamVjdC9HSVQvbmd4L25neHN0ZXN0L25neHMtbG9naW4tYXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyw0QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNFRDs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSx3Q0FBQTtFQUNZLDJCQUFBO0VBQ0Esd0NBQUE7QUNJaEI7O0FERkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNDLHFCQUFBO0FDS0Y7O0FESEE7RUFDQyw2QkFBQTtBQ01EIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1fX2lucHV0e1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyOjBweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG5cdHBhZGRpbmc6IDFlbSAuNWVtIC41ZW07XG5cdHBhZGRpbmctbGVmdDogMmVtO1xuXHRvdXRsaW5lOm5vbmU7XG5cdG1hcmdpbjoxLjVlbSBhdXRvO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG59XG4uZm9ybV9faW5wdXQ6Zm9jdXN7XG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDgwODA7XG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDgwLDgwLC40KTsgXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi50eHQtY29sb3J7XG4gICAgY29sb3I6I0E2QjFBRiAgIWltcG9ydGFudFxufVxuLmlucHV0LWFsaWdue1xuICAgIGJvcmRlcjowcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWEgIWltcG9ydGFudDtcbn1cbi50ZXh0LWJhY2tncm5ke1xuXHR3aWR0aDogMzUwcHg7XG5cdGhlaWdodDo1NTBweDtcblx0bWFyZ2luOiAzMHB4IDMwMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgXG5cdGJvcmRlci1yYWRpdXM6IDUlO1xuXHQgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnR4dC1jZW50ZXJ7XG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcbn0iLCIuZm9ybV9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICBwYWRkaW5nOiAxZW0gMC41ZW0gMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDEuNWVtIGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5mb3JtX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDgwODA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCA4MCwgODAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnR4dC1jb2xvciB7XG4gIGNvbG9yOiAjQTZCMUFGICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1hbGlnbiB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWEgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYmFja2dybmQge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogMzBweCAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50eHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(route, router) {
        _classCallCheck(this, HomeComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "product",
        value: function product() {
          this.router.navigate(['/product']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "sales",
        value: function sales() {
          this.router.navigate(['/sales']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    color: #000;\n    overflow-x: hidden;\n    height: 100%;\n    background-color: #B0BEC5;\n    background-repeat: no-repeat\n}\n\n.card0 {\n    box-shadow: 0px 4px 8px 0px #757575;\n    border-radius: 0px\n}\n\n.card2 {\n    margin: 0px 40px\n}\n\n.txt-color{\n    color:#A6B1AF  !important\n}\n\n.txt-red-color{\n    color:#DC9896  !important\n}\n\n.input-align{\n    border:0px solid transparent !important;\n                border-radius: 0 !important;\n                border-bottom: 1px solid #aaa !important;\n}\n\n.logo {\n    width: 200px;\n    height: 100px;\n    margin-top: 20px;\n    margin-left: 35px\n}\n\n.image {\n    width: 360px;\n    height: 280px\n}\n\n.border-line {\n    border-right: 1px solid #EEEEEE\n}\n\n.facebook {\n    background-color: #3b5998;\n    color: #fff;\n    font-size: 18px;\n    padding-top: 5px;\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    cursor: pointer\n}\n\n.twitter {\n    background-color: #1DA1F2;\n    color: #fff;\n    font-size: 18px;\n    padding-top: 5px;\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    cursor: pointer\n}\n\n.linkedin {\n    background-color: #2867B2;\n    color: #fff;\n    font-size: 18px;\n    padding-top: 5px;\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    cursor: pointer\n}\n\n.line {\n    height: 1px;\n    width: 45%;\n    background-color: #E0E0E0;\n    margin-top: 10px\n}\n\n.or {\n    width: 10%;\n    font-weight: bold\n}\n\n.text-sm {\n    font-size: 14px !important\n}\n\n::-webkit-input-placeholder {\n    color: #BDBDBD;\n    opacity: 1;\n    font-weight: 300\n}\n\n::-moz-placeholder {\n    color: #BDBDBD;\n    opacity: 1;\n    font-weight: 300\n}\n\n::-ms-input-placeholder {\n    color: #BDBDBD;\n    opacity: 1;\n    font-weight: 300\n}\n\n::placeholder {\n    color: #BDBDBD;\n    opacity: 1;\n    font-weight: 300\n}\n\n:-ms-input-placeholder {\n    color: #BDBDBD;\n    font-weight: 300\n}\n\n::-ms-input-placeholder {\n    color: #BDBDBD;\n    font-weight: 300\n}\n\ninput,\ntextarea {\n    padding: 10px 12px 10px 12px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    margin-bottom: 5px;\n    margin-top: 2px;\n    width: 100%;\n    box-sizing: border-box;\n    color: #2C3E50;\n    font-size: 14px;\n    letter-spacing: 1px\n}\n\ninput:focus,\ntextarea:focus {\n    box-shadow: none !important;\n    border: 1px solid #304FFE;\n    outline-width: 0\n}\n\nbutton:focus {\n    box-shadow: none !important;\n    outline-width: 0\n}\n\na {\n    color: inherit;\n    cursor: pointer\n}\n\n.btn-blue {\n    background-color: #1A237E;\n    width: 150px;\n    color: #fff;\n    border-radius: 2px\n}\n\n.btn-blue:hover {\n    background-color: #000;\n    cursor: pointer\n}\n\n.bg-blue {\n    color: #fff;\n    background-color: #1A237E\n}\n\n@media screen and (max-width: 991px) {\n    .logo {\n        margin-left: 0px\n    }\n\n    .image {\n        width: 300px;\n        height: 220px\n    }\n\n    .border-line {\n        border-right: none\n    }\n\n    .card2 {\n        border-top: 1px solid #EEEEEE !important;\n        margin: 0px 15px\n    }\n}\n\n.formstyle{\n    width: 350px;\n\theight:550px;\n    margin: 30px 300px;\n    text-align: center !important; \n    border-radius: 5%; display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSx1Q0FBdUM7Z0JBQzNCLDJCQUEyQjtnQkFDM0Isd0NBQXdDO0FBQ3hEOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWO0FBQ0o7O0FBSkE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWO0FBQ0o7O0FBSkE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWO0FBQ0o7O0FBSkE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7O0lBSUksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBR0ksMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDO0lBQ0o7QUFDSjs7QUFDQTtJQUNJLFlBQVk7Q0FDZixZQUFZO0lBQ1Qsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixpQkFBaUIsRUFBRSxxQkFBcUI7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBCRUM1O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbn1cblxuLmNhcmQwIHtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggIzc1NzU3NTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHhcbn1cblxuLmNhcmQyIHtcbiAgICBtYXJnaW46IDBweCA0MHB4XG59XG4udHh0LWNvbG9ye1xuICAgIGNvbG9yOiNBNkIxQUYgICFpbXBvcnRhbnRcbn1cbi50eHQtcmVkLWNvbG9ye1xuICAgIGNvbG9yOiNEQzk4OTYgICFpbXBvcnRhbnRcbn1cbi5pbnB1dC1hbGlnbntcbiAgICBib3JkZXI6MHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhICFpbXBvcnRhbnQ7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweFxufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4XG59XG5cbi5ib3JkZXItbGluZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VFRUVFRVxufVxuXG4uZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLnR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmxpbmtlZGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2N0IyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5saW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgbWFyZ2luLXRvcDogMTBweFxufVxuXG4ub3Ige1xuICAgIHdpZHRoOiAxMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuLnRleHQtc20ge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQkRCREJEO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDMwMFxufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0JEQkRCRDtcbiAgICBmb250LXdlaWdodDogMzAwXG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0JEQkRCRDtcbiAgICBmb250LXdlaWdodDogMzAwXG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMyQzNFNTA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDRGRkU7XG4gICAgb3V0bGluZS13aWR0aDogMFxufVxuXG5idXR0b246Zm9jdXMge1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLXdpZHRoOiAwXG59XG5cbmEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlclxufVxuXG4uYnRuLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIzN0U7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweFxufVxuXG4uYnRuLWJsdWU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5iZy1ibHVlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEyMzdFXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4XG4gICAgfVxuXG4gICAgLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIyMHB4XG4gICAgfVxuXG4gICAgLmJvcmRlci1saW5lIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuXG4gICAgLmNhcmQyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUVFRUUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweFxuICAgIH1cbn1cbi5mb3Jtc3R5bGV7XG4gICAgd2lkdGg6IDM1MHB4O1xuXHRoZWlnaHQ6NTUwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcbiAgICBib3JkZXItcmFkaXVzOiA1JTsgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _states_product_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../states/product.state */
    "./src/app/states/product.state.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(store, router) {
        _classCallCheck(this, LoginComponent);

        this.store = store;
        this.router = router;
        this.todo$ = this.store.select(function (state) {
          return state.todos.todos;
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit(username, password) {
          if (username == "admin" && password == "test123") {
            this.router.navigate(['/product']);
          } else {
            this.invalid = true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_states_product_state__WEBPACK_IMPORTED_MODULE_5__["ProductState"].getList), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], LoginComponent.prototype, "todos", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'login-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pojo.service.ts":
  /*!*********************************!*\
    !*** ./src/app/pojo.service.ts ***!
    \*********************************/

  /*! exports provided: PojoService */

  /***/
  function srcAppPojoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PojoService", function () {
      return PojoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PojoService = /*#__PURE__*/function () {
      function PojoService(http) {
        _classCallCheck(this, PojoService);

        this.http = http;
      }

      _createClass(PojoService, [{
        key: "setFlag",
        value: function setFlag(flag) {
          this.listFlag = flag;
        }
      }, {
        key: "getFlag",
        value: function getFlag() {
          return this.listFlag;
        }
      }]);

      return PojoService;
    }();

    PojoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PojoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PojoService);
    /***/
  },

  /***/
  "./src/app/product/form.component.scss":
  /*!*********************************************!*\
    !*** ./src/app/product/form.component.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form__input {\n  width: 100%;\n  border: 0px solid transparent;\n  border-radius: 0;\n  border-bottom: 1px solid #aaa;\n  padding: 1em 0.5em 0.5em;\n  padding-left: 2em;\n  outline: none;\n  margin: 1.5em auto;\n  transition: all 0.5s ease;\n}\n\n.form__input:focus {\n  border-bottom-color: #008080;\n  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);\n  border-radius: 4px;\n}\n\n.txt-color {\n  color: #A6B1AF !important;\n}\n\n.input-align {\n  border: 0px solid transparent !important;\n  border-radius: 0 !important;\n  border-bottom: 1px solid #aaa !important;\n}\n\n.text-backgrnd {\n  width: 350px;\n  height: 550px;\n  margin: 30px 300px;\n  text-align: center !important;\n  border-radius: 5%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXZhZC9Eb2N1bWVudHMvUHJvamVjdC9HSVQvbmd4L25neHN0ZXN0L25neHMtbG9naW4tYXBwL3NyYy9hcHAvcHJvZHVjdC9mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyw0QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNFRDs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSx3Q0FBQTtFQUNZLDJCQUFBO0VBQ0Esd0NBQUE7QUNJaEI7O0FERkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNDLHFCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9faW5wdXR7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcblx0cGFkZGluZzogMWVtIC41ZW0gLjVlbTtcblx0cGFkZGluZy1sZWZ0OiAyZW07XG5cdG91dGxpbmU6bm9uZTtcblx0bWFyZ2luOjEuNWVtIGF1dG87XG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbn1cbi5mb3JtX19pbnB1dDpmb2N1c3tcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzAwODA4MDtcblx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsODAsODAsLjQpOyBcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xufVxuLnR4dC1jb2xvcntcbiAgICBjb2xvcjojQTZCMUFGICAhaW1wb3J0YW50XG59XG4uaW5wdXQtYWxpZ257XG4gICAgYm9yZGVyOjBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuLnRleHQtYmFja2dybmR7XG5cdHdpZHRoOiAzNTBweDtcblx0aGVpZ2h0OjU1MHB4O1xuXHRtYXJnaW46IDMwcHggMzAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyBcblx0Ym9yZGVyLXJhZGl1czogNSU7XG5cdCBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iLCIuZm9ybV9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICBwYWRkaW5nOiAxZW0gMC41ZW0gMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDEuNWVtIGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5mb3JtX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDgwODA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCA4MCwgODAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnR4dC1jb2xvciB7XG4gIGNvbG9yOiAjQTZCMUFGICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1hbGlnbiB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWEgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYmFja2dybmQge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogMzBweCAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/product/form.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/product/form.component.ts ***!
    \*******************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _states_product_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../states/product.state */
    "./src/app/states/product.state.ts");
    /* harmony import */


    var _actions_product_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/product.action */
    "./src/app/actions/product.action.ts");
    /* harmony import */


    var _pojo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pojo.service */
    "./src/app/pojo.service.ts");

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(pojoService, fb, store, route, router) {
        _classCallCheck(this, FormComponent);

        this.pojoService = pojoService;
        this.fb = fb;
        this.store = store;
        this.route = route;
        this.router = router;
        this.editFlag = false;
        this.formSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.createForm();
      }

      _createClass(FormComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var _this = this;

          this.pojoFlag = this.pojoService.getFlag();

          if (this.editFlag && this.pojoFlag) {
            this.formSubscription.add(this.store.dispatch(new _actions_product_action__WEBPACK_IMPORTED_MODULE_7__["UpdateList"](this.productForm.value, this.productForm.value.productid)).subscribe(function () {
              _this.clearForm();

              _this.router.navigate(['/sales']);
            }));
          } else {
            this.formSubscription.add(this.formSubscription = this.store.dispatch(new _actions_product_action__WEBPACK_IMPORTED_MODULE_7__["AddList"](this.productForm.value)).subscribe(function () {
              _this.clearForm();
            }));
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.pojoFlag = this.pojoService.getFlag();
          this.formSubscription.add(this.selectedList.subscribe(function (list) {
            if (list && _this2.pojoFlag) {
              _this2.productForm.patchValue({
                productid: list.productid,
                productname: list.productname,
                amount: list.amount
              });

              _this2.editFlag = true;
              _this2.Submit = "Update";
            } else {
              _this2.clearForm();

              _this2.editFlag = false;
              _this2.Submit = "Submit";
            }
          }));
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.productForm.reset(); //this.store.dispatch(new SetSelectedList(null));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.store.dispatch(new AddList(this.productForm.value));
          this.formSubscription.unsubscribe();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.productForm = this.fb.group({
            productid: [''],
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "sales",
        value: function sales() {
          this.router.navigate(['/sales']);
        }
      }, {
        key: "product",
        value: function product() {
          this.router.navigate(['/product']);
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _pojo_service__WEBPACK_IMPORTED_MODULE_8__["PojoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_states_product_state__WEBPACK_IMPORTED_MODULE_6__["ProductState"].getSelected), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], FormComponent.prototype, "selectedList", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/product/form.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pojo_service__WEBPACK_IMPORTED_MODULE_8__["PojoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], FormComponent);
    /***/
  },

  /***/
  "./src/app/sale/list.component.scss":
  /*!******************************************!*\
    !*** ./src/app/sale/list.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSaleListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".txt-color {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZXZhZC9Eb2N1bWVudHMvUHJvamVjdC9HSVQvbmd4L25neHN0ZXN0L25neHMtbG9naW4tYXBwL3NyYy9hcHAvc2FsZS9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxlL2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2FsZS9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dC1jb2xvcntcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxufSIsIi50eHQtY29sb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sale/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sale/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppSaleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _states_product_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../states/product.state */
    "./src/app/states/product.state.ts");
    /* harmony import */


    var _actions_product_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/product.action */
    "./src/app/actions/product.action.ts");
    /* harmony import */


    var _pojo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pojo.service */
    "./src/app/pojo.service.ts");

    var ListComponent = /*#__PURE__*/function () {
      // todoForm: FormGroup;
      // todo$: Observable<StateModel>
      // private formSubscription: Subscription = new Subscription();
      function ListComponent(pojoService, store, router) {
        _classCallCheck(this, ListComponent);

        this.pojoService = pojoService;
        this.store = store;
        this.router = router;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(new _actions_product_action__WEBPACK_IMPORTED_MODULE_6__["GetList"]()); // console.log(this.salelist);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.store.dispatch(new _actions_product_action__WEBPACK_IMPORTED_MODULE_6__["RemoveList"](id));
        }
      }, {
        key: "edit",
        value: function edit(payload) {
          this.pojoService.setFlag(true);
          this.store.dispatch(new _actions_product_action__WEBPACK_IMPORTED_MODULE_6__["SetSelectedList"](payload));
          this.router.navigate(['/product']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "product",
        value: function product() {
          this.pojoService.setFlag(false); //this.editTodo=false;

          this.router.navigate(['/product']);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _pojo_service__WEBPACK_IMPORTED_MODULE_7__["PojoService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_product_state__WEBPACK_IMPORTED_MODULE_5__["ProductState"].getList), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], ListComponent.prototype, "salelist", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/sale/list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pojo_service__WEBPACK_IMPORTED_MODULE_7__["PojoService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ListComponent);
    /***/
  },

  /***/
  "./src/app/states/product.state.ts":
  /*!*****************************************!*\
    !*** ./src/app/states/product.state.ts ***!
    \*****************************************/

  /*! exports provided: ListStateModel, ProductState */

  /***/
  function srcAppStatesProductStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListStateModel", function () {
      return ListStateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductState", function () {
      return ProductState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/product.action */
    "./src/app/actions/product.action.ts");

    var ListStateModel = function ListStateModel() {
      _classCallCheck(this, ListStateModel);
    };

    var ProductState = /*#__PURE__*/function () {
      function ProductState() {
        _classCallCheck(this, ProductState);
      }

      _createClass(ProductState, [{
        key: "AddList",
        value: function AddList(_ref, _ref2) {
          var getState = _ref.getState,
              patchState = _ref.patchState;
          var payload = _ref2.payload;
          var state = getState();
          console.log(state);
          patchState({
            list: [].concat(_toConsumableArray(state.list), [payload])
          });
        }
      }, {
        key: "UpdateList",
        value: function UpdateList(_ref3, _ref4) {
          var getState = _ref3.getState,
              setState = _ref3.setState;
          var payload = _ref4.payload,
              productid = _ref4.productid;
          var state = getState();

          var updatedList = _toConsumableArray(state.list);

          var updatedIndex = updatedList.findIndex(function (item) {
            return item.productid === productid;
          });
          updatedList[updatedIndex] = payload;
          setState(Object.assign({}, state, {
            list: updatedList
          })); //  }));
        }
      }, {
        key: "RemoveList",
        value: function RemoveList(_ref5, _ref6) {
          var getState = _ref5.getState,
              setState = _ref5.setState;
          var productid = _ref6.productid;
          var state = getState();
          var filteredArray = state.list.filter(function (item) {
            return item.productid !== productid;
          });
          setState(Object.assign({}, state, {
            list: filteredArray
          }));
        }
      }, {
        key: "SetSelectedListId",
        value: function SetSelectedListId(_ref7, _ref8) {
          var getState = _ref7.getState,
              setState = _ref7.setState;
          var payload = _ref8.payload;
          var state = getState();
          setState(Object.assign({}, state, {
            selectedList: payload
          }));
        }
      }], [{
        key: "getList",
        value: function getList(state) {
          return state.list;
        }
      }, {
        key: "getSelected",
        value: function getSelected(state) {
          return state.selectedList;
        }
      }]);

      return ProductState;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_2__["AddList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_product_action__WEBPACK_IMPORTED_MODULE_2__["AddList"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState.prototype, "AddList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_2__["UpdateList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_product_action__WEBPACK_IMPORTED_MODULE_2__["UpdateList"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState.prototype, "UpdateList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_2__["RemoveList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_product_action__WEBPACK_IMPORTED_MODULE_2__["RemoveList"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState.prototype, "RemoveList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_2__["SetSelectedList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_product_action__WEBPACK_IMPORTED_MODULE_2__["SetSelectedList"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState.prototype, "SetSelectedListId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ListStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState, "getList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ListStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProductState, "getSelected", null);
    ProductState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'lists',
      defaults: {
        list: [],
        selectedList: null
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductState);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/revad/Documents/Project/GIT/ngx/ngxstest/ngxs-login-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map