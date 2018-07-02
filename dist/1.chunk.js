webpackJsonp([1],{

/***/ 43:
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
//
//
//
//
//
//
//

var vcMenubar = function vcMenubar() {
  return __webpack_require__.e/* import() */(6/* duplicate */).then(__webpack_require__.bind(null, 20));
};
var vcStage = function vcStage() {
  return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 21));
};
var vcHomeArticle = function vcHomeArticle() {
  return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 50));
};
var vcHomeGallery = function vcHomeGallery() {
  return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 53));
};
var vcHomeArtists = function vcHomeArtists() {
  return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 56));
};
var vcFooter = function vcFooter() {
  return __webpack_require__.e/* import() */(7/* duplicate */).then(__webpack_require__.bind(null, 22));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // for carousel currentIndex
      carouselIndex: 0
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {
    vcMenubar: vcMenubar,
    vcFooter: vcFooter,
    vcStage: vcStage,
    vcHomeArticle: vcHomeArticle,
    vcHomeGallery: vcHomeGallery,
    vcHomeArtists: vcHomeArtists
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(70);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('nav', [_c('vcMenubar')], 1), _vm._v(" "), _c('div', {
    staticClass: "row stage"
  }, [_c('vcStage', {
    attrs: {
      "pr-carousel-index": _vm.carouselIndex
    }
  })], 1), _vm._v(" "), _c('main', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 panel_container"
  }, [_c('vcHomeArticle'), _vm._v(" "), _c('vcHomeGallery'), _vm._v(" "), _c('vcHomeArtists')], 1)]), _vm._v(" "), _c('footer', [_c('vcFooter')], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", esExports)
  }
}

/***/ })

});