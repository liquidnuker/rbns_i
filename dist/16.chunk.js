webpackJsonp([16],{

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcArticleSet3_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30aaa6c1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcArticleSet3_vue__ = __webpack_require__(80);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcArticleSet3_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30aaa6c1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcArticleSet3_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcArticleSet3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcArticleSet3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30aaa6c1", Component.options)
  } else {
    hotAPI.reload("data-v-30aaa6c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 79:
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
    // console.log("vcArticleSet3.vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "articles panel_heading"
  }, [_c('h2', {
    staticClass: "title--centered"
  }, [_vm._v("Article Heading3")]), _vm._v(" "), _c('summary', [_c('h3', {
    staticClass: "title--centered"
  }, [_vm._v("\r\n    Lorem ipsum dolor sit amet\r\n    ")])]), _vm._v(" "), _c('hr', {
    staticClass: "hr--primary"
  })]), _vm._v(" "), _c('section', {
    staticClass: "panel_body"
  }, [_c('div', {
    staticClass: "row article_holder"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "article_photo--left"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/news1.jpg",
      "alt": "article1"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "articles"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae."), _c('br'), _c('br'), _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae."), _c('br'), _c('br'), _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, reprehenderit quam dolore sit mollitia eius velit minus odit nesciunt enim tempora omnis veniam inventore quaerat ab autem rerum eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo laboriosam, accusantium, blanditiis cupiditate voluptas, architecto, aut necessitatibus laborum assumenda explicabo officiis. Aliquam amet quaerat aspernatur itaque perferendis, esse repudiandae.")])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30aaa6c1", esExports)
  }
}

/***/ })

});