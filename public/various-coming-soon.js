(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["various-coming-soon"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Vue Countdown, for more info and examples you can check out https://github.com/fengyuanchen/vue-countdown

/* harmony default export */ __webpack_exports__["default"] = ({
  components: _defineProperty({}, _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default.a.name, _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default.a),
  data: function data() {
    return {
      form: {
        email: '',
        success: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault(); // Alert with form input values
      //window.console.log(JSON.stringify(this.form))

      this.form.success = 'Thank you for subscribing!';
      this.form.email = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "base-background",
    {
      attrs: {
        image: "img/photos/photo6@2x.jpg",
        "inner-class": "bg-primary-dark-op"
      }
    },
    [
      _c("div", { staticClass: "hero bg-black-50" }, [
        _c("div", { staticClass: "hero-inner" }, [
          _c(
            "div",
            { staticClass: "content content-full" },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-3 text-center", attrs: { md: "6" } },
                    [
                      _c(
                        "div",
                        { staticClass: "push" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-fx font-w700 font-size-h1",
                              attrs: { to: "/" }
                            },
                            [
                              _c("span", { staticClass: "text-white" }, [
                                _vm._v("OneUI")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-white-50" }, [
                            _vm._v(
                              "Stay tuned! We are working on it and it is coming soon!"
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("countdown", {
                        attrs: { time: 408 * 24 * 60 * 60 * 955 },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _c(
                                  "b-row",
                                  {
                                    staticClass:
                                      "row items-push py-3 text-center font-w700"
                                  },
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white"
                                          },
                                          [_vm._v(_vm._s(props.days))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("DAYS")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white"
                                          },
                                          [_vm._v(_vm._s(props.hours))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("HOURS")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white"
                                          },
                                          [_vm._v(_vm._s(props.minutes))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("MINUTES")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white"
                                          },
                                          [_vm._v(_vm._s(props.seconds))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("SECONDS")]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        { staticClass: "push", on: { submit: _vm.onSubmit } },
                        [
                          _c(
                            "b-row",
                            {
                              staticClass: "form-group justify-content-center"
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "10", xl: "6" } },
                                [
                                  this.form.success
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-w600 text-success text-center"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.form.success) +
                                              "\n                  "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2" },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "border-0",
                                        attrs: {
                                          type: "email",
                                          placeholder: "Enter your email..",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-input-group-append",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                type: "submit",
                                                variant: "primary"
                                              }
                                            },
                                            [_vm._v("Subscribe")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "font-size-sm text-white-50"
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Don't worry, we hate spam.\n                  "
                                      )
                                    ]
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
                        "b-button",
                        {
                          attrs: {
                            variant: "alt-primary",
                            to: "/backend/pages/generic/blank"
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-left mr-1" }),
                          _vm._v(" Go Back to Dashboard\n            ")
                        ]
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
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=template&id=1e9adb0a& */ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&");
/* harmony import */ var _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/various/ComingSoon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComingSoon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComingSoon.vue?vue&type=template&id=1e9adb0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);