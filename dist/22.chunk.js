webpackJsonp([22],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var vcStage = function vcStage() {
  return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 21));
};
var vcArtistsFeatured = function vcArtistsFeatured() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 84));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // for carousel currentIndex
      carouselIndex: 2
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {
    vcStage: vcStage,
    vcArtistsFeatured: vcArtistsFeatured
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row stage"
  }, [_c('vcStage', {
    attrs: {
      "pr-carousel-index": _vm.carouselIndex
    }
  })], 1), _vm._v(" "), _c('main', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 panel_container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('span', {
    staticClass: "breadcrumb"
  }, [_c('a', {
    attrs: {
      "href": "#/"
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    }
  })])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#/"
    }
  }, [_vm._v("Home")]), _vm._v("\r\n          > Artists\r\n        ")])]), _vm._v(" "), _c('vcArtistsFeatured')], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5478bdb3", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Artists_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5478bdb3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Artists_vue__ = __webpack_require__(87);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Artists_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5478bdb3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Artists_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Artists.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Artists.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5478bdb3", Component.options)
  } else {
    hotAPI.reload("data-v-5478bdb3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});