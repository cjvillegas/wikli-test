(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "Error Pages", subtitle: "All pages in one spot!" },
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
                      [_vm._v("Error Pages")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("All")
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
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/400" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-default font-w600 mb-0"
                                },
                                [_vm._v("400")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/401" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-amethyst font-w600 mb-0"
                                },
                                [_vm._v("401")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/403" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-flat font-w600 mb-0"
                                },
                                [_vm._v("403")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/404" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-city font-w600 mb-0"
                                },
                                [_vm._v("404")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/500" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-modern font-w600 mb-0"
                                },
                                [_vm._v("500")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("router-link", {
                attrs: { to: "/errors/503" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href
                            },
                            on: { click: navigate }
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-size-h1 text-smooth font-w600 mb-0"
                                },
                                [_vm._v("503")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Error Page")
                              ])
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/errors/All.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/pages/errors/All.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=5da555f2& */ "./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/errors/All.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./All.vue?vue&type=template&id=5da555f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/errors/All.vue?vue&type=template&id=5da555f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_5da555f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);