webpackJsonp([11],{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeArticle_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77b80fb1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeArticle_vue__ = __webpack_require__(52);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeArticle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77b80fb1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeArticle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcHomeArticle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcHomeArticle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77b80fb1", Component.options)
  } else {
    hotAPI.reload("data-v-77b80fb1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 51:
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

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {
    // console.log("vcHomeArticlePreview.vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "home panel"
  }, [_vm._m(0), _vm._v(" "), _c('article', {
    staticClass: "row panel_body"
  }, [_c('section', {
    staticClass: "col-xs-12 col-sm-4 news_preview"
  }, [_c('div', {
    staticClass: "col-xs-12 col-sm-12 news_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/news1.jpg",
      "alt": "latest news"
    }
  }), _vm._v(" "), _c('date', [_vm._v("August 16")]), _vm._v(" "), _c('h4', [_vm._v("Article title1")]), _vm._v(" "), _vm._m(1)], 1)]), _vm._v(" "), _c('section', {
    staticClass: "col-xs-12 col-sm-4 news_preview"
  }, [_c('div', {
    staticClass: "col-xs-12 col-sm-12 news_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/news1.jpg",
      "alt": "latest news"
    }
  }), _vm._v(" "), _c('date', [_vm._v("August 16")]), _vm._v(" "), _c('h4', [_vm._v("Article title2")]), _vm._v(" "), _vm._m(2)], 1)]), _vm._v(" "), _c('section', {
    staticClass: "col-xs-12 col-sm-4 news_preview"
  }, [_c('div', {
    staticClass: "col-xs-12 col-sm-12 news_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/news1.jpg",
      "alt": "latest news"
    }
  }), _vm._v(" "), _c('date', [_vm._v("August 16")]), _vm._v(" "), _c('h4', [_vm._v("Article title3")]), _vm._v(" "), _vm._m(3)], 1)])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "panel_heading"
  }, [_c('h2', {
    staticClass: "title--centered"
  }, [_vm._v("The Ancient Art of Bonsai")]), _vm._v(" "), _c('h3', {
    staticClass: "title--centered"
  }, [_vm._v("\r\n      A series of articles by the Featured Article\r\n      ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('summary', [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('summary', [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('summary', [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur accusamus iste magnam consectetur esse, quia suscipit veniam enim minima labore, qui")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77b80fb1", esExports)
  }
}

/***/ })

});