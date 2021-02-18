(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    // Preview Page Loader for a few seconds
    pageLoaderPreview: function pageLoaderPreview() {
      var _this = this;

      this.$store.commit('pageLoader', {
        mode: 'on'
      });
      setTimeout(function () {
        _this.$store.commit('pageLoader', {
          mode: 'off'
        });
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
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
    [
      _c("base-page-heading", {
        attrs: {
          title: "Loaders",
          subtitle: "Show any page or custom activity."
        },
        scopedSlots: _vm._u([
          {
            key: "extra",
            fn: function() {
              return [
                _c(
                  "b-breadcrumb",
                  { staticClass: "breadcrumb-alt" },
                  [
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Layout")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Loaders")
                    ])
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c(
            "base-block",
            {
              attrs: { rounded: "", title: "Header Loader", "content-full": "" }
            },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can use the layout API to start the header loader and stop it on demand. It is better to be used when the\n        header is also set to fixed, so it is always visible.\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-table-simple",
                {
                  attrs: {
                    responsive: "",
                    striped: "",
                    "table-class": "table-vcenter mb-0"
                  }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Live")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  attrs: {
                                    variant: "alt-success",
                                    action: "headerLoaderOn",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Start Header Loader")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('headerLoader', { mode: 'on' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerLoaderOn">Start Header Loader</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-td",
                            [
                              _c(
                                "base-layout-modifier",
                                {
                                  attrs: {
                                    variant: "alt-danger",
                                    action: "headerLoaderOff",
                                    size: "sm"
                                  }
                                },
                                [_vm._v("Stop Header Loader")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('headerLoader', { mode: 'off' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="headerLoaderOff">Stop Header Loader</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", title: "Page Loader", "content-full": "" }
            },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Page loader can provide a loading/splash screen feature. You can preview the page loader  for 3 seconds by clicking the following button:\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mb-3",
                  attrs: { size: "sm", variant: "alt-primary" },
                  on: { click: _vm.pageLoaderPreview }
                },
                [_vm._v("Preview Page Loader")]
              ),
              _vm._v(" "),
              _c(
                "b-table-simple",
                {
                  attrs: {
                    responsive: "",
                    striped: "",
                    "table-class": "table-vcenter mb-0"
                  }
                },
                [
                  _c(
                    "b-thead",
                    [
                      _c(
                        "b-tr",
                        [
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "300px",
                                width: "300px"
                              }
                            },
                            [_vm._v("Mode")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            {
                              staticStyle: {
                                "min-width": "380px",
                                width: "380px"
                              }
                            },
                            [_vm._v("JS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-th",
                            { staticStyle: { "min-width": "400px" } },
                            [_vm._v("Component")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    [
                      _c(
                        "b-tr",
                        [
                          _c("b-td", [
                            _c(
                              "p",
                              { staticClass: "font-size-sm text-muted mb-0" },
                              [
                                _vm._v(
                                  "\n                Starts Page Loader\n              "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('pageLoader', { mode: 'on' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="pageLoaderOn">Start Page Loader</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tr",
                        [
                          _c("b-td", [
                            _c(
                              "p",
                              { staticClass: "font-size-sm text-muted mb-0" },
                              [
                                _vm._v(
                                  "\n                Stops Page Loader\n              "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                "this.$store.commit('pageLoader', { mode: 'off' })"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _c("code", [
                              _vm._v(
                                '<base-layout-modifier action="pageLoaderOff">Stop Page Loader</base-layout-modifier>'
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/layout/Loaders.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/layout/Loaders.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loaders.vue?vue&type=template&id=2b8ec9fa& */ "./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa&");
/* harmony import */ var _Loaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loaders.vue?vue&type=script&lang=js& */ "./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layout/Loaders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loaders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/Loaders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loaders.vue?vue&type=template&id=2b8ec9fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/Loaders.vue?vue&type=template&id=2b8ec9fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loaders_vue_vue_type_template_id_2b8ec9fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);