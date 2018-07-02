webpackJsonp([9],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeGallery_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7251a7e6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeGallery_vue__ = __webpack_require__(55);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcHomeGallery_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7251a7e6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcHomeGallery_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcHomeGallery.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcHomeGallery.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7251a7e6", Component.options)
  } else {
    hotAPI.reload("data-v-7251a7e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 54:
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
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "home panel"
  }, [_c('header', {
    staticClass: "panel_heading"
  }, [_c('h2', {
    staticClass: "title--centered"
  }, [_vm._v("Galleries")]), _vm._v(" "), _c('h3', {
    staticClass: "title--centered"
  }, [_vm._v("\r\n      Enjoy masterpieces lorem ipsum dolor sit amet...\r\n      ")])]), _vm._v(" "), _c('article', {
    staticClass: "row panel_body"
  }, [_c('div', {
    staticClass: "row gallery_preview"
  }, [_c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai1.jpg",
      "alt": "bonsai1"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/chokkan"
    }
  }, [_vm._v("Chokkan")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai2.jpg",
      "alt": "bonsai2"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/fukinagashi"
    }
  }, [_vm._v("Fukinagashi")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai3.jpg",
      "alt": "bonsai3"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/hokidachi"
    }
  }, [_vm._v("Hokidachi")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai4.jpg",
      "alt": "bonsai4"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/kabudachi"
    }
  }, [_vm._v("Kabudachi")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row gallery_preview"
  }, [_c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai5.jpg",
      "alt": "bonsai5"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/moyogi"
    }
  }, [_vm._v("Moyogi")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai6.jpg",
      "alt": "bonsai6"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/sokan"
    }
  }, [_vm._v("Sokan")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai7.jpg",
      "alt": "bonsai7"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/yose-ue"
    }
  }, [_vm._v("Yose-ue")])])]), _vm._v(" "), _c('section', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "gallery_preview_box"
  }, [_c('img', {
    staticClass: "img--responsive",
    attrs: {
      "src": "src/img/bonsai8.jpg",
      "alt": "bonsai8"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "gallery_preview_links",
    attrs: {
      "href": "#/gallery/han-kengai"
    }
  }, [_vm._v("Han-kengai")])])])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7251a7e6", esExports)
  }
}

/***/ })

});