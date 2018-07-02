webpackJsonp([5],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcStage_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_623a4998_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcStage_vue__ = __webpack_require__(49);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcStage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_623a4998_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcStage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcStage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcStage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-623a4998", Component.options)
  } else {
    hotAPI.reload("data-v-623a4998", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_carouselitems_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_carousel1_04_js__ = __webpack_require__(48);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {},
  props: ["prCarouselIndex"],
  components: {},
  mounted: function mounted() {
    this.activateCarousel();
  },
  methods: {
    activateCarousel: function activateCarousel() {
      var C4 = new __WEBPACK_IMPORTED_MODULE_1__js_carousel1_04_js__["a" /* default */]({
        dataSrc: __WEBPACK_IMPORTED_MODULE_0__js_carouselitems_js__["a" /* carouselItems */],
        cIndex: this.prCarouselIndex,
        mainItemContainer: "carousel1-04_content",
        navPrevious: "carousel1_04_previous",
        navNext: "carousel1_04_next",
        itemHolderClass: "carousel1_04_items",
        item_active: " carousel1_04_items--active",
        item_inActive: "carousel1_04_items",
        pageBtnClass: "carousel1_04_pagebuttons",
        pageBtn_active: " carousel1_04_pagebuttons--active",
        pageBtn_inActive: "carousel1_04_pagebuttons"
      });
      C4.init();
    }
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carouselItems; });
var carouselItems = [{
  itemName: "item1",
  description: "Home Welcome text",
  imgSrc: "home"
}, {
  itemName: "item2",
  description: "Articles description",
  imgSrc: "articles"
}, {
  itemName: "item3",
  description: "Artists description",
  imgSrc: "artists"
}, {
  itemName: "item4",
  description: "Gallery Description",
  imgSrc: "gallery"
}];



/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel1_04 = function () {
  function Carousel1_04(opts) {
    _classCallCheck(this, Carousel1_04);

    this.items = opts.dataSrc;
    this.cIndex = opts.cIndex;
    this.mainItemContainer = opts.mainItemContainer;
    this.itemContainer = [];
    this.itemHolderClass = opts.itemHolderClass;

    this.navPrevious = opts.navPrevious;
    this.navNext = opts.navNext;
    this.item_active = opts.item_active;
    this.item_inActive = opts.item_inActive;

    // for pageButtons
    this.pageBtnClass = opts.pageBtnClass;
    this.pageButtons = [];
    this.activePageButton = 0;
    this.pageBtn_active = opts.pageBtn_active;
    this.pageBtn_inActive = opts.pageBtn_inActive;
  }

  // prototypes


  _createClass(Carousel1_04, [{
    key: "init",
    value: function init() {
      this.addEvents();
      this.showItems();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      document.getElementById(this.navPrevious).addEventListener("click", function () {
        _this.prevItem();
      });

      document.getElementById(this.navNext).addEventListener("click", function () {
        _this.nextItem();
      });
    }
  }, {
    key: "showItems",
    value: function showItems() {
      var _this2 = this;

      var items = this.items;

      var _loop = function _loop(i) {
        // main items
        var itemHolder = document.createElement("div");
        itemHolder.className = _this2.itemHolderClass;
        itemHolder.innerHTML = "<div class=\"row\">\n      <img src='src/img/carousel/" + items[i].imgSrc + ".jpg'>\n      </div>\n      <div class=\"row carousel1-04_description\">\n      <p>" + items[i].description + "</p>\n      </div>";
        _this2.itemContainer.push(itemHolder);

        // page buttons
        var pageButtonItems = document.createElement("div");
        pageButtonItems.className = _this2.pageBtnClass;
        pageButtonItems.addEventListener("click", function () {
          return _this2.customPage(i);
        });
        document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
        _this2.pageButtons.push(pageButtonItems);
      };

      for (var i = 0; i < items.length; i++) {
        _loop(i);
      }

      // default
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "setActiveItems",
    value: function setActiveItems(index) {
      var activeItem = index;
      var itemContainer = this.itemContainer;
      var pageButtons = this.pageButtons;
      var activePageButton = this.activePageButton;

      itemContainer[activeItem].className += this.item_active;

      pageButtons[activeItem].className += this.pageBtn_active;
      pageButtons[activeItem].setAttribute("aria-selected", true);

      if (activePageButton !== activeItem) {
        itemContainer[activePageButton].className = this.item_inActive;

        pageButtons[activePageButton].className = this.pageBtn_inActive;
        pageButtons[activePageButton].setAttribute("aria-selected", false);

        // set current activePageButton
        this.activePageButton = activeItem;
      }
      this.refresh();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "customPage",
    value: function customPage(num) {
      this.cIndex = num;
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      document.getElementById(this.mainItemContainer).appendChild(this.itemContainer[this.cIndex]);
    }
  }]);

  return Carousel1_04;
}();

/* harmony default export */ __webpack_exports__["a"] = (Carousel1_04);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "carousel_holder"
  }, [_c('div', {
    staticClass: "carousel1-04"
  }, [_c('div', {
    staticClass: "carousel1-04_content",
    attrs: {
      "id": "carousel1-04_content"
    }
  }), _vm._v(" "), _c('nav', {
    staticClass: "carousel1-04_pagination",
    attrs: {
      "id": "carousel1-04_pagination"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row carousel1-04_prevnext"
  }, [_c('span', {
    staticClass: "carousel1_04_previous",
    attrs: {
      "id": "carousel1_04_previous"
    }
  }, [_c('svg', {
    staticClass: "carousel1_04_chevron",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "carousel1_04_next",
    attrs: {
      "id": "carousel1_04_next"
    }
  }, [_c('svg', {
    staticClass: "carousel1_04_chevron",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-sm-4 bonsai_stage--bg"
  }, [_c('img', {
    attrs: {
      "src": "src/img/bonsai.png",
      "alt": "bonsai logo"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row bonsai_stage--right"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai3.png",
      "alt": "bonsai"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-623a4998", esExports)
  }
}

/***/ })

});