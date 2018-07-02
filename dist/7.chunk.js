webpackJsonp([7],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcFooter_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cc6001e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcFooter_vue__ = __webpack_require__(69);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcFooter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cc6001e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cc6001e", Component.options)
  } else {
    hotAPI.reload("data-v-0cc6001e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 59:
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

var vcFooterSegment1 = function vcFooterSegment1() {
  return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 60));
};
var vcFooterSegment2 = function vcFooterSegment2() {
  return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 63));
};
var vcFooterSegment3 = function vcFooterSegment3() {
  return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 66));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {
    vcFooterSegment1: vcFooterSegment1,
    vcFooterSegment2: vcFooterSegment2,
    vcFooterSegment3: vcFooterSegment3
  },
  mounted: function mounted() {
    // console.log("vcFooter.vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row footer2",
    attrs: {
      "role": "footer"
    }
  }, [_c('section', {
    staticClass: "col-sm-12 col-md-6"
  }, [_c('vcFooterSegment1')], 1), _vm._v(" "), _c('section', {
    staticClass: "col-sm-12 col-md-3"
  }, [_c('vcFooterSegment2')], 1), _vm._v(" "), _c('section', {
    staticClass: "col-sm-12 col-md-3"
  }, [_c('vcFooterSegment3')], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0cc6001e", esExports)
  }
}

/***/ })

});