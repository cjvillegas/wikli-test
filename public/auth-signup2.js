(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  data: function data() {
    return {
      form: {
        username: null,
        email: null,
        password: null,
        password2: null,
        terms: null
      }
    };
  },
  validations: {
    form: {
      username: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(5)
      },
      password2: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
      },
      terms: {
        sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])(function () {
          return true;
        })
      }
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      } // Form submit logic


      this.$router.push('/backend/pages/auth/all');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hero-static d-flex align-items-center" }, [
    _c("div", { staticClass: "w-100" }, [
      _c("div", { staticClass: "bg-white" }, [
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
                  { staticClass: "py-4", attrs: { md: "8", lg: "6", xl: "4" } },
                  [
                    _c("div", { staticClass: "text-center" }, [
                      _c("p", { staticClass: "mb-2" }, [
                        _c("i", {
                          staticClass: "fa fa-2x fa-circle-notch text-primary"
                        })
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "h4  mb-1" }, [
                        _vm._v(
                          "\n                Create Account\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "h6 font-w400 text-muted mb-3" },
                        [
                          _vm._v(
                            "\n                Get your access today in one easy step\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-form",
                      {
                        on: {
                          submit: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.onSubmit($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "py-3" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  size: "lg",
                                  id: "username",
                                  name: "username",
                                  placeholder: "Username",
                                  state: !_vm.$v.form.username.$error && null,
                                  "aria-describedby": "username-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.username.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$v.form.username,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.form.username.$model"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  type: "email",
                                  size: "lg",
                                  id: "email",
                                  name: "email",
                                  placeholder: "Email",
                                  state: !_vm.$v.form.email.$error && null,
                                  "aria-describedby": "email-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.email.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.email, "$model", $$v)
                                  },
                                  expression: "$v.form.email.$model"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  type: "password",
                                  size: "lg",
                                  id: "password",
                                  name: "password",
                                  placeholder: "Password",
                                  state: !_vm.$v.form.password.$error && null,
                                  "aria-describedby": "password-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.password.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$v.form.password,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.form.password.$model"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-alt",
                                attrs: {
                                  type: "password",
                                  size: "lg",
                                  id: "password2",
                                  name: "password2",
                                  placeholder: "Confirm Password",
                                  state: !_vm.$v.form.password2.$error && null,
                                  "aria-describedby": "password2-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.password2.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$v.form.password2,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.form.password2.$model"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-md-flex align-items-md-center justify-content-md-between"
                              },
                              [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          id: "terms",
                                          name: "terms",
                                          state:
                                            !_vm.$v.form.terms.$error && null,
                                          "aria-describedby": "terms-feedback"
                                        },
                                        model: {
                                          value: _vm.$v.form.terms.$model,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.$v.form.terms,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression: "$v.form.terms.$model"
                                        }
                                      },
                                      [_vm._v("I agree to Terms & Conditions")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "py-2" },
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "b-modal",
                                            rawName:
                                              "v-b-modal.one-signup-terms",
                                            modifiers: {
                                              "one-signup-terms": true
                                            }
                                          }
                                        ],
                                        staticClass:
                                          "font-w500 font-size-sm p-0",
                                        attrs: { variant: "link" }
                                      },
                                      [_vm._v("View Terms")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-modal",
                                      {
                                        attrs: {
                                          id: "one-signup-terms",
                                          size: "lg",
                                          "body-class": "p-0",
                                          "hide-footer": "",
                                          "hide-header": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "block block-rounded block-themed block-transparent mb-0"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "block-header bg-primary-dark"
                                              },
                                              [
                                                _c(
                                                  "h3",
                                                  {
                                                    staticClass: "block-title"
                                                  },
                                                  [_vm._v("Terms & Conditions")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "block-options"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn-block-option",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.$bvModal.hide(
                                                              "one-signup-terms"
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw fa-times"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "block-content" },
                                              [
                                                _c("p", [
                                                  _vm._v(
                                                    "\n                              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "\n                              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "\n                              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "\n                              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "\n                              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n                            "
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "block-content block-content-full text-right border-top"
                                              },
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "mr-1",
                                                    attrs: {
                                                      variant: "alt-primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$bvModal.hide(
                                                          "one-signup-terms"
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Close")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$bvModal.hide(
                                                          "one-signup-terms"
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("I Agree")]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          {
                            staticClass:
                              "form-group row justify-content-center mb-0"
                          },
                          [
                            _c(
                              "b-col",
                              { attrs: { md: "6", xl: "5" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "submit",
                                      variant: "success",
                                      block: ""
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-plus mr-1"
                                    }),
                                    _vm._v(" Sign Up\n                  ")
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
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font-size-sm text-center text-muted py-3" }, [
        _c("strong", [
          _vm._v(
            _vm._s(
              _vm.$store.getters.appName + " " + _vm.$store.getters.appVersion
            )
          )
        ]),
        _vm._v(" © " + _vm._s(_vm.$store.getters.appCopyright) + "\n    ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/auth/SignUp2.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/pages/auth/SignUp2.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp2.vue?vue&type=template&id=3729811d& */ "./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d&");
/* harmony import */ var _SignUp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp2.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/auth/SignUp2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/SignUp2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp2.vue?vue&type=template&id=3729811d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/SignUp2.vue?vue&type=template&id=3729811d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp2_vue_vue_type_template_id_3729811d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);