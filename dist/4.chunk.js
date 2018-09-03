(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue-components\\Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_0b7e7bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row stage" },
        [_c("vcStage", { attrs: { "pr-carousel-index": _vm.carouselIndex } })],
        1
      ),
      _vm._v(" "),
      _c("main", { staticClass: "row" }, [
        _vm.isModalReady
          ? _c(
              "div",
              {
                class: {
                  "bs4modal vcmodal_hide": !_vm.modalVisible,
                  "bs4modal vcmodal_show": _vm.modalVisible
                },
                attrs: {
                  id: "bs4modal_bg",
                  "data-backdrop": "static",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "bs4modal_title",
                  "aria-hidden": "true"
                },
                on: {
                  click: function($event) {
                    _vm.closeMainModal($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "bs4modal-dialog bs4modal-md",
                    attrs: { role: "document" }
                  },
                  [
                    _c(
                      "div",
                      {
                        class: {
                          "bs4modal-content": !_vm.vcModal1_animateEntry,
                          "bs4modal-content animated bounceIn":
                            _vm.vcModal1_animateEntry
                        }
                      },
                      [
                        _c("div", { staticClass: "bs4modal-header" }, [
                          _vm.currentItems[_vm.currentIndex].id !== undefined
                            ? _c("h2", { staticClass: "bs4modal-title" }, [
                                _vm._v(
                                  "\r\n            " +
                                    _vm._s(
                                      _vm.currentItems[_vm.currentIndex].id
                                    ) +
                                    "\r\n            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_modal_close",
                              attrs: {
                                type: "button",
                                "data-dismiss": "bs4modal",
                                "aria-label": "Close"
                              },
                              on: {
                                click: function($event) {
                                  _vm.toggleModal(false)
                                }
                              }
                            },
                            [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 48 48"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                                      }
                                    })
                                  ]
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "bs4modal-body" }, [
                          !_vm.isModalImgReady
                            ? _c("span", [_vm._v("spinner")])
                            : _c("img", {
                                attrs: {
                                  src:
                                    "src/img/categories/" +
                                    _vm.currentCategory +
                                    "/" +
                                    _vm.currentItems[_vm.currentIndex].img +
                                    ".jpg",
                                  alt:
                                    _vm.currentItems[_vm.currentIndex]
                                      .description,
                                  title:
                                    _vm.currentItems[_vm.currentIndex]
                                      .description
                                }
                              })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "bs4modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_modal_prevnext",
                              attrs: {
                                type: "button",
                                "data-dismiss": "bs4modal"
                              },
                              on: {
                                click: function($event) {
                                  _vm.flipModalIndex("prev")
                                }
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                    }
                                  })
                                ]
                              ),
                              _vm._v("\r\n            Prev")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_modal_prevnext",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.flipModalIndex("next")
                                }
                              }
                            },
                            [
                              _vm._v("\r\n            Next\r\n            "),
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12 gallery panel_container" }, [
          _c("div", { staticClass: "row" }, [
            _c("span", { staticClass: "breadcrumb" }, [
              _c("a", { attrs: { href: "#/" } }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "#/" } }, [_vm._v("Home")]),
              _vm._v("\r\n          > Gallery\r\n        ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "panel_body" }, [
              _c("div", { staticClass: "row bonsai_gallery" }, [
                _c(
                  "nav",
                  { staticClass: "col-sm-3 bonsai_filter" },
                  [
                    _c("h4", [_vm._v("Species")]),
                    _vm._v(" "),
                    _vm._l(_vm.navCategories, function(i) {
                      return _c("ul", { staticClass: "bonsai_species" }, [
                        _c("li", [
                          _c(
                            "a",
                            {
                              attrs: { tabindex: "0" },
                              on: {
                                click: function($event) {
                                  _vm.filterSpecies(i)
                                },
                                keyup: function($event) {
                                  if (
                                    !("button" in $event) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key
                                    )
                                  ) {
                                    return null
                                  }
                                  _vm.filterSpecies(i)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.capitalize(i)))]
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Value:")]),
                    _vm._v(" "),
                    _vm._m(1)
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row col-sm-9 gallery" }, [
                  _c("div", { staticClass: "jspager1_holder" }, [
                    _c("nav", { staticClass: "jspager1" }, [
                      _c(
                        "aside",
                        { staticClass: "jspager1_totalpagesholder" },
                        [
                          _c("label", { attrs: { for: "jspager1_select" } }, [
                            _vm._v("Page:")
                          ]),
                          _vm._v(" "),
                          _c("p", { attrs: { id: "jspager1_currentpage" } }),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentPage,
                                  expression: "currentPage"
                                }
                              ],
                              staticClass: "jspager1_select",
                              attrs: {
                                id: "jspager1_select",
                                name: "jspager1_select",
                                tabindex: "0"
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.currentPage = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  function($event) {
                                    _vm.pageJump($event.target.value)
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.totalPages, function(i) {
                              return _c("option", { domProps: { value: i } }, [
                                _vm._v(_vm._s(i))
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("p", { attrs: { id: "jspager1_totalpages" } }, [
                            _vm._v("of " + _vm._s(_vm.totalPages))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("aside", { staticClass: "jspager1_prevnextholder" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_first",
                            attrs: { id: "jspager1_first", tabindex: "0" },
                            on: {
                              click: function($event) {
                                _vm.showItems(1)
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("First")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_prev",
                            attrs: { id: "jspager1_prev", tabindex: "0" },
                            on: {
                              click: function($event) {
                                _vm.flip()
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Prev")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_next",
                            attrs: { id: "jspager1_next", tabindex: "0" },
                            on: {
                              click: function($event) {
                                _vm.flip("next")
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Next")]),
                            _vm._v(" "),
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_last",
                            attrs: { id: "jspager1_last", tabindex: "0" },
                            on: {
                              click: function($event) {
                                _vm.showItems(_vm.totalPages)
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Last")]),
                            _vm._v(" "),
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "aside",
                        {
                          staticClass: "jspager1_pagebtnholder",
                          attrs: {
                            id: "jspager1_pagebtnholder",
                            "aria-atomic": "true",
                            "aria-live": "polite",
                            "aria-relevant": "additions"
                          }
                        },
                        [
                          _vm._l(_vm.buttonSet, function(i, index) {
                            return [
                              i === _vm.currentPage
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "jspager1_pagebtn jspager1_pagebtn--active",
                                      attrs: {
                                        tabindex: "0",
                                        "aria-posinset": _vm.currentPage,
                                        "aria-setsize": _vm.buttonSet.length,
                                        "aria-selected": "true"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.showItems(i)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(i))]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "jspager1_pagebtn",
                                      attrs: {
                                        tabindex: "0",
                                        "aria-posinset": index + 1
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.showItems(i)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                      " +
                                          _vm._s(i) +
                                          "\r\n                    "
                                      )
                                    ]
                                  )
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "aside",
                        { staticClass: "jspager1_jumptopageholder" },
                        [
                          _c("label", { attrs: { for: "jspager1_jump" } }, [
                            _vm._v("jump to page: ")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.toPage,
                                expression: "toPage"
                              }
                            ],
                            staticClass: "jspager1_jump",
                            attrs: {
                              type: "tel",
                              name: "jspager1_jump",
                              id: "jspager1_jump",
                              placeholder: "",
                              tabindex: "0"
                            },
                            domProps: { value: _vm.toPage, value: _vm.toPage },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.pageJump(_vm.toPage)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.toPage = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn",
                              attrs: { id: "jspager1_jumpbtn", tabindex: "0" },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !("button" in $event) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key
                                    )
                                  ) {
                                    return null
                                  }
                                  _vm.pageJump(_vm.toPage)
                                },
                                click: function($event) {
                                  _vm.pageJump(_vm.toPage)
                                }
                              }
                            },
                            [_vm._v("Go")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("aside", { staticClass: "jspager1_perpageholder" }, [
                        _c("label", { attrs: { for: "jspager1_perpage" } }, [
                          _vm._v("perPage: ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.perPage,
                                expression: "perPage"
                              }
                            ],
                            staticClass: "jspager1_perpage",
                            attrs: {
                              id: "jspager1_perpage",
                              name: "jspager1_perpage",
                              tabindex: "0"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.perPage = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  _vm.changePerPage($event.target.value)
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.perPageItems, function(i) {
                            return _c("option", { domProps: { value: i } }, [
                              _vm._v(_vm._s(i))
                            ])
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "galleryContainer" },
                      _vm._l(_vm.itemList, function(i, index) {
                        return _c(
                          "ul",
                          {
                            staticClass: "col-xs-12 col-sm-4 col-lg-3 gridder"
                          },
                          [
                            _c(
                              "li",
                              {
                                staticClass: "ajaxbox",
                                attrs: {
                                  "aria-posinset": index + 1,
                                  "aria-setsize": _vm.itemList.length
                                }
                              },
                              [
                                !_vm.isThumbsReady
                                  ? _c("span", [_vm._v("spinner")])
                                  : _c("img", {
                                      attrs: {
                                        src:
                                          "src/img/categories/" +
                                          _vm.currentCategory +
                                          "/" +
                                          i.img +
                                          "_thumb.jpg",
                                        alt: i.id,
                                        title: i.id
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.launchModal(i.id)
                                        }
                                      }
                                    }),
                                _c("br"),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    _vm._s(i.id) + " Value" + _vm._s(i.value)
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "panel_heading" }, [
      _c("h2", { staticClass: "title--centered" }, [_vm._v("Galleries")]),
      _vm._v(" "),
      _c("summary", [
        _c("h3", { staticClass: "title--centered" }, [
          _vm._v(
            "\r\n          Enjoy masterpieces lorem ipsum dolor sit amet...\r\n          "
          )
        ])
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "hr--primary" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "bonsai_value" }, [
      _c("li", { attrs: { tabindex: "0" } }, [_c("a", [_vm._v("5")])]),
      _vm._v(" "),
      _c("li", { attrs: { tabindex: "0" } }, [_c("a", [_vm._v("4")])]),
      _vm._v(" "),
      _c("li", { attrs: { tabindex: "0" } }, [_c("a", [_vm._v("3")])]),
      _vm._v(" "),
      _c("li", { attrs: { tabindex: "0" } }, [_c("a", [_vm._v("2")])]),
      _vm._v(" "),
      _c("li", { attrs: { tabindex: "0" } }, [_c("a", [_vm._v("1")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "row col-sm-12" }, [
      _c("div", { staticClass: "gallery-listing-paginator" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jsondir_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _js_bonsaicategories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _js_itemexists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _js_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _js_axios_get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _js_pager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _js_pagebtns_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* harmony import */ var _js_indexfinder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63);
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

var vcStage = function vcStage() {
  return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 74));
};










/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      navCategories: "",
      isThumbsReady: null,

      currentCategory: null,
      allItems: "",
      currentItems: "",
      itemList: "", // paginated items

      pg: "",
      perPage: 12,
      perPageItems: [4, 8, 12],
      totalPages: "",
      currentPage: "",
      temp: "", // temp page buttons
      buttonSet: "",

      // for modal
      currentIndex: 0,
      modalVisible: false,
      vcModal1_animateEntry: false,
      isModalReady: false, // prevent undefined modal contents
      isModalImgReady: false, // remove last viewed modal image

      // for carousel currentIndex
      carouselIndex: 3
    };
  },

  components: {
    vcStage: vcStage
  },
  mounted: function mounted() {
    this.navCategories = _js_bonsaicategories_js__WEBPACK_IMPORTED_MODULE_1__["bonsaiCategories"];
    this.checkCategory();
  },
  watch: {
    $route: function $route() {
      this.checkCategory();
    }
  },
  methods: {
    capitalize: function capitalize(value) {
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    checkCategory: function checkCategory() {
      // check if category exists before loading json
      var category = this.$route.params.species.toLowerCase();

      if (!Object(_js_itemexists_js__WEBPACK_IMPORTED_MODULE_2__["itemExists"])(category, _js_bonsaicategories_js__WEBPACK_IMPORTED_MODULE_1__["bonsaiCategories"])) {
        // console.log("404/revert to gallery/defaultItem");
        _js_router_js__WEBPACK_IMPORTED_MODULE_3__["router"].push({
          path: "/gallery/chokkan"
        });
      } else {
        this.currentCategory = category;
        this.loadItems(this.currentCategory);
      }
    },
    filterSpecies: function filterSpecies(species) {
      _js_router_js__WEBPACK_IMPORTED_MODULE_3__["router"].push({
        path: "/gallery/" + species
      });
    },
    loadItems: function loadItems(category) {
      var _this = this;

      this.isThumbsReady = false;
      var jsonUrl = _js_jsondir_js__WEBPACK_IMPORTED_MODULE_0__["jsonDir"] + category + ".json";

      Object(_js_axios_get_js__WEBPACK_IMPORTED_MODULE_4__["axios_get"])(jsonUrl).then(function (response) {
        _this.currentItems = response.data[_this.currentCategory];
      }).then(function () {
        _this.isThumbsReady = true;
        _this.activatePager();
      });
    },
    activatePager: function activatePager() {
      this.pg = null;
      this.pg = new _js_pager_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        perPage: this.perPage,
        data: this.currentItems
      });
      this.totalPages = this.pg.getTotalPages();

      this.setPageBtns();
      this.showItems(1);
    },
    showItems: function showItems(num) {
      this.itemList = this.pg.page(num);
      this.currentPage = this.pg.currentPage;

      this.changePageBtns();
    },
    changePerPage: function changePerPage(perPage) {
      this.perPage = perPage;
      this.activatePager();
    },
    flip: function flip(direction) {
      if (direction === "next") {
        this.showItems(this.pg.next());
      } else {
        this.showItems(this.pg.prev());
      }
    },
    flipModalIndex: function flipModalIndex(direction) {
      console.log("flipModalIndex");
      if (direction === "next") {
        this.currentIndex = this.currentIndex + 1;
        this.currentIndex = this.currentIndex % this.currentItems.length;
      } else {
        if (this.currentIndex === 0) {
          this.currentIndex = this.currentItems.length; // go to last
        }
        this.currentIndex = this.currentIndex - 1;
      }
    },
    setPageBtns: function setPageBtns() {
      this.temp = [];
      for (var i = 0, l = this.pg.getTotalPages(); i < l; i++) {
        this.temp.push(Object(_js_pagebtns_js__WEBPACK_IMPORTED_MODULE_6__["pageBtns"])(i, l));
      }
    },
    changePageBtns: function changePageBtns() {
      this.buttonSet = this.temp[this.pg.currentPage - 1];
    },
    pageJump: function pageJump(page) {
      this.showItems(Number(page));
    },
    launchModal: function launchModal(id) {
      this.currentIndex = Object(_js_indexfinder_js__WEBPACK_IMPORTED_MODULE_7__["indexFinder"])("id", id, this.currentItems);
      this.toggleModal(true);
    },
    toggleModal: function toggleModal(isActive) {
      this.modalVisible = isActive;
      this.isModalImgReady = isActive;
      this.isModalReady = isActive;
    },
    closeMainModal: function closeMainModal(event) {
      if (event.target.id === "bs4modal_bg") {
        this.toggleModal(false);
      }
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonsaiCategories", function() { return bonsaiCategories; });
var bonsaiCategories = ["chokkan", "fukinagashi", "hokidachi", "kabudachi", "moyogi", "sokan", "yose-ue", "han-kengai"];



/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemExists", function() { return itemExists; });
// for single arrays
var itemExists = function itemExists(item, array) {
  return array.indexOf(item) > -1;
};



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



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pager; });
// pagination helper
// ======================================================/

function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function getTotalPages() {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function getCurrentOffset() {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function page(num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      var start = this.getCurrentOffset();
      // let end = start + this.perPage;
      var end = start + Number(this.perPage);

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function hasNext() {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function hasPrev() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function prev() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function next() {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function isValidPage(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageBtns", function() { return pageBtns; });
/**
 *  Generates paginator page buttons
 *
 *  Credits:
 *  https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 *  
 *  ...returns an array of [1] if there is only 1 page. 
 *  - anotherstarburst
 *  
 */

var pageBtns = function pageBtns(currentPage, nrOfPages) {
  var delta = 2,
      range = [],
      rangeWithDots = [],
      l;

  range.push(1);

  if (nrOfPages <= 1) {
    return range;
  }

  for (var i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < nrOfPages && i > 1) {
      range.push(i);
    }
  }
  range.push(nrOfPages);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = range[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _i = _step.value;

      if (l) {
        if (_i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (_i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(_i);
      l = _i;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return rangeWithDots;
  // return range;
};



/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexFinder", function() { return indexFinder; });
// ret index; else undefined
var indexFinder = function indexFinder(prop, value, arr) {
  for (var key = 0; key < arr.length; key++) {
    if (arr[key][prop] == value) {
      return key;
    }
  }
};



/***/ })

}]);