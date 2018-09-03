(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _vcArtistsFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vcArtistsFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue-components\\vcArtistsFeatured.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vcArtistsFeatured_vue_vue_type_template_id_7b095a29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.artists, function(i) {
      return _c("div", { staticClass: "artists panel" }, [
        _c("header", { staticClass: "panel_heading" }, [
          _c(
            "h2",
            { staticClass: "title--centered", attrs: { tabindex: "0" } },
            [_vm._v(_vm._s(i.name))]
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "title--centered" }, [
            _vm._v("\r\n      " + _vm._s(i.description) + "\r\n      ")
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "hr--primary" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row panel_body" }, [
          _c("article", { staticClass: "col-sm-12 row article_holder" }, [
            _c("div", { staticClass: "article_photo--left" }, [
              _c("img", {
                staticClass: "img--responsive",
                attrs: {
                  src: i.photo,
                  alt: i.photo_caption,
                  title: i.photo_caption
                }
              }),
              _vm._v(" "),
              _c("h4", { staticClass: "title--centered" }, [
                _vm._v(_vm._s(i.photo_caption))
              ])
            ]),
            _vm._v(" "),
            _c("blockquote", [_vm._v('"' + _vm._s(i.quote) + '"')]),
            _vm._v(" "),
            _c("p", { staticClass: "articles" }, [
              _vm._v("\r\n        " + _vm._s(i.storyP1) + "\r\n        "),
              _c("br"),
              _c("br"),
              _vm._v("\r\n        " + _vm._s(i.storyP2) + "\r\n      ")
            ])
          ])
        ])
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vcArtistsFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vcArtistsFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jsondir_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _js_axios_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      artists: ""
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {
    this.loadArtists();
  },
  methods: {
    loadArtists: function loadArtists() {
      var jsonUrl = _js_jsondir_js__WEBPACK_IMPORTED_MODULE_0__["jsonDir"] + "artistsfeatured.json";

      var self = this;
      Object(_js_axios_get_js__WEBPACK_IMPORTED_MODULE_1__["axios_get"])(jsonUrl).then(function (response) {
        self.artists = response.data.artists;
      }).then(function () {
        // optional
      });
    }
  }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonDir", function() { return jsonDir; });
var jsonDir = "./src/js/ajax/";
// const jsonDir = "https://raw.githubusercontent.com/liquidnuker/rbns_i/master/src/js/ajax/";



/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axios_get", function() { return axios_get; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var axios_get = function axios_get(url) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    url: url
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.headers);
      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
};



/***/ })

}]);