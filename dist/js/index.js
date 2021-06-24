/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/BoardCollapse.ts":
/*!**********************************!*\
  !*** ./src/lib/BoardCollapse.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardCollapse": () => (/* binding */ BoardCollapse)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var LOCALSTORAGE_KEY = "collapsedBoards";
var BoardCollapse = /** @class */ (function () {
    function BoardCollapse(board) {
        this.board = board;
        var id = this.board.dataset.id;
        if (!id)
            throw new Error("Can`t find board ID");
        this.id = id;
        var menu = this.board.querySelector("details-menu");
        if (!menu)
            throw new Error("Menu was not found");
        this.menu = menu;
        this.collapsed = this.storedData[this.id] || false;
        this.adjustHeader();
        this.toggleElements();
        this.addMenuItem();
    }
    Object.defineProperty(BoardCollapse.prototype, "storedData", {
        get: function () {
            return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
        },
        enumerable: false,
        configurable: true
    });
    BoardCollapse.prototype.addMenuItem = function () {
        var _this = this;
        var item = document.createElement("span");
        item.addEventListener("click", function () { return _this.toggle(); });
        item.className = "dropdown-item btn-link btn-block text-left";
        item.innerText = "Toggle";
        this.menu.insertBefore(item, this.menu.firstChild);
    };
    BoardCollapse.prototype.toggle = function () {
        var _a;
        this.collapsed = !this.collapsed;
        var value = JSON.stringify(__assign(__assign({}, (this.storedData)), (_a = {}, _a[this.id] = this.collapsed, _a)));
        localStorage.setItem(LOCALSTORAGE_KEY, value);
        this.toggleElements();
    };
    BoardCollapse.prototype.toggleElements = function () {
        this.board.classList.toggle("collapsed", this.collapsed);
        this.menu.classList.toggle("dropdown-menu-e", this.collapsed);
        this.menu.classList.toggle("dropdown-menu-sw", !this.collapsed);
    };
    BoardCollapse.prototype.adjustHeader = function () {
        var counter = this.board.querySelector(".Counter");
        var header = this.board.querySelector("h3");
        if (!counter || !header)
            return;
        header.prepend(counter);
        header.style.width = header.offsetWidth + "px";
    };
    return BoardCollapse;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_BoardCollapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/BoardCollapse */ "./src/lib/BoardCollapse.ts");

document.querySelectorAll(".project-column")
    .forEach(function (board) { return new lib_BoardCollapse__WEBPACK_IMPORTED_MODULE_0__.BoardCollapse(board); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV8uY29tLy4vVXNlcnMvbW5iL3d3dy9naXRodWItYm9hcmQtY29sbGFwc2Uvc3JjL2xpYi9Cb2FyZENvbGxhcHNlLnRzIiwid2VicGFjazovL3NlXy5jb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VfLmNvbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2VfLmNvbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NlXy5jb20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZV8uY29tLy4vVXNlcnMvbW5iL3d3dy9naXRodWItYm9hcmQtY29sbGFwc2Uvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDO0FBRTNDO0lBTUUsdUJBQVksS0FBa0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFtQixDQUFDO1FBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVB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S0FDekMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLFdBQUksNERBQWEsQ0FBQyxLQUFvQixDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExPQ0FMU1RPUkFHRV9LRVkgPSBcImNvbGxhcHNlZEJvYXJkc1wiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRDb2xsYXBzZSB7XG4gIHByaXZhdGUgYm9hcmQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1lbnU6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHByaXZhdGUgY29sbGFwc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGJvYXJkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcblxuICAgIGNvbnN0IGlkID0gdGhpcy5ib2FyZC5kYXRhc2V0LmlkO1xuICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIkNhbmB0IGZpbmQgYm9hcmQgSURcIik7XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgY29uc3QgbWVudSA9IHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcihcImRldGFpbHMtbWVudVwiKTtcbiAgICBpZiAoIW1lbnUpIHRocm93IG5ldyBFcnJvcihcIk1lbnUgd2FzIG5vdCBmb3VuZFwiKTtcbiAgICB0aGlzLm1lbnUgPSBtZW51IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5jb2xsYXBzZWQgPSB0aGlzLnN0b3JlZERhdGFbdGhpcy5pZF0gfHwgZmFsc2U7XG5cbiAgICB0aGlzLmFkanVzdEhlYWRlcigpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudHMoKTtcbiAgICB0aGlzLmFkZE1lbnVJdGVtKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBzdG9yZWREYXRhKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9LRVkpIHx8IFwie31cIik7XG4gIH1cblxuICBwcml2YXRlIGFkZE1lbnVJdGVtKCk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24taXRlbSBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0XCI7XG4gICAgaXRlbS5pbm5lclRleHQgPSBcIlRvZ2dsZVwiO1xuICAgIHRoaXMubWVudS5pbnNlcnRCZWZvcmUoaXRlbSwgdGhpcy5tZW51LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7Li4uKHRoaXMuc3RvcmVkRGF0YSksIFt0aGlzLmlkXTogdGhpcy5jb2xsYXBzZWR9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTFNUT1JBR0VfS0VZLCB2YWx1ZSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVFbGVtZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLmJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIiwgdGhpcy5jb2xsYXBzZWQpO1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tbWVudS1lXCIsIHRoaXMuY29sbGFwc2VkKTtcbiAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLW1lbnUtc3dcIiwgIXRoaXMuY29sbGFwc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRqdXN0SGVhZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuQ291bnRlclwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICBpZiAoIWNvdW50ZXIgfHwgIWhlYWRlcikgcmV0dXJuO1xuXG4gICAgaGVhZGVyLnByZXBlbmQoY291bnRlcik7XG4gICAgaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7aGVhZGVyLm9mZnNldFdpZHRofXB4YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0JvYXJkQ29sbGFwc2V9IGZyb20gXCJsaWIvQm9hcmRDb2xsYXBzZVwiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY29sdW1uXCIpXG4gIC5mb3JFYWNoKChib2FyZCkgPT4gbmV3IEJvYXJkQ29sbGFwc2UoYm9hcmQgYXMgSFRNTEVsZW1lbnQpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=