(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-validation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/Validation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forms/Validation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      options: [{
        value: null,
        text: 'Please select'
      }, {
        value: 'html',
        text: 'HTML'
      }, {
        value: 'css',
        text: 'CSS'
      }, {
        value: 'javascript',
        text: 'JavaScript'
      }, {
        value: 'angular',
        text: 'Angular'
      }, {
        value: 'react',
        text: 'React'
      }, {
        value: 'vuejs',
        text: 'Vue.js'
      }, {
        value: 'ruby',
        text: 'Ruby'
      }, {
        value: 'php',
        text: 'PHP'
      }, {
        value: 'asp',
        text: 'ASP.NET'
      }, {
        value: 'python',
        text: 'Python'
      }, {
        value: 'mysql',
        text: 'MySQL'
      }],
      form: {
        username: null,
        email: null,
        password: null,
        password2: null,
        suggestions: null,
        skill: null,
        currency: null,
        website: null,
        digits: null,
        number: null,
        range: null,
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
      suggestions: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
      },
      skill: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      currency: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["decimal"]
      },
      website: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["url"]
      },
      digits: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        integer: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["integer"]
      },
      number: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["decimal"]
      },
      range: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["between"])(1, 5)
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

    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10& ***!
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
        attrs: {
          title: "Form Validation",
          subtitle: "It’s never been easier to validate form values."
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
                      [_vm._v("Forms")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Validation")
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
            { attrs: { rounded: "", title: "Validation Form" } },
            [
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
                  _c(
                    "h2",
                    { staticClass: "content-heading border-bottom mb-4 pb-2" },
                    [_vm._v("Regular")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "items-push" },
                    [
                      _c("b-col", { attrs: { lg: "4" } }, [
                        _c("p", { staticClass: "font-size-sm text-muted" }, [
                          _vm._v(
                            "\n              Username, email and password validation made easy for your login/register forms\n            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "8", xl: "5" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "username" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Username "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "username",
                                  name: "username",
                                  placeholder: "Enter a username..",
                                  state: _vm.$v.form.username.$dirty
                                    ? !_vm.$v.form.username.$error
                                    : null,
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
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "username-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Your username must consist of at least 3 characters\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "email" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Email "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  placeholder: "Your valid email..",
                                  state: _vm.$v.form.email.$dirty
                                    ? !_vm.$v.form.email.$error
                                    : null,
                                  "aria-describedby": "email-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.email.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.email, "$model", $$v)
                                  },
                                  expression: "$v.form.email.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "username-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter a valid email address\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "password" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Password "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  type: "password",
                                  id: "password",
                                  name: "password",
                                  placeholder: "Choose a safe one..",
                                  state: _vm.$v.form.password.$dirty
                                    ? !_vm.$v.form.password.$error
                                    : null,
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
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "username-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Your password must be at least 5 characters long\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "password2" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                Confirm Password "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  type: "password",
                                  id: "password2",
                                  name: "password2",
                                  placeholder: "..and confirm it!",
                                  state: _vm.$v.form.password2.$dirty
                                    ? !_vm.$v.form.password2.$error
                                    : null,
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
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "username-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter the same password as above\n              "
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
                    "h2",
                    { staticClass: "content-heading border-bottom mb-4 pb-2" },
                    [_vm._v("Advanced")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "items-push" },
                    [
                      _c("b-col", { attrs: { lg: "4" } }, [
                        _c("p", { staticClass: "font-size-sm text-muted" }, [
                          _vm._v(
                            "\n              You can easily validate any kind of data you like either it is in a normal input, a textarea or a select box\n            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "8", xl: "5" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "suggestions" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Suggestions "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                attrs: {
                                  id: "suggestions",
                                  name: "suggestions",
                                  rows: "5",
                                  placeholder: "What would you like to see?",
                                  state: _vm.$v.form.suggestions.$dirty
                                    ? !_vm.$v.form.suggestions.$error
                                    : null,
                                  "aria-describedby": "suggestions-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.suggestions.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$v.form.suggestions,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.form.suggestions.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "suggestions-feedback" } },
                                [
                                  _vm._v(
                                    "\n                What can we do to become better?\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { label: "Select", "label-for": "skill" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Best Skill "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-select", {
                                attrs: {
                                  id: "skill",
                                  name: "skill",
                                  options: _vm.options,
                                  state: _vm.$v.form.skill.$dirty
                                    ? !_vm.$v.form.skill.$error
                                    : null,
                                  "aria-describedby": "skill-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.skill.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.skill, "$model", $$v)
                                  },
                                  expression: "$v.form.skill.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "skill-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please select a skill!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "currency" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Currency ($) "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "currency",
                                  name: "currency",
                                  placeholder: "21.60",
                                  state: _vm.$v.form.currency.$dirty
                                    ? !_vm.$v.form.currency.$error
                                    : null,
                                  "aria-describedby": "currency-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.currency.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$v.form.currency,
                                      "$model",
                                      $$v
                                    )
                                  },
                                  expression: "$v.form.currency.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "currency-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter a price!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "website" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Website "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "website",
                                  name: "website",
                                  placeholder: "http://example.com",
                                  state: _vm.$v.form.website.$dirty
                                    ? !_vm.$v.form.website.$error
                                    : null,
                                  "aria-describedby": "website-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.website.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.website, "$model", $$v)
                                  },
                                  expression: "$v.form.website.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "website-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter your website!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "digits" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Digits "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "digits",
                                  name: "digits",
                                  placeholder: "5",
                                  state: _vm.$v.form.digits.$dirty
                                    ? !_vm.$v.form.digits.$error
                                    : null,
                                  "aria-describedby": "digits-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.digits.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.digits, "$model", $$v)
                                  },
                                  expression: "$v.form.digits.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "digits-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter only digits!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "number" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Number "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "number",
                                  name: "number",
                                  placeholder: "5.0",
                                  state: _vm.$v.form.number.$dirty
                                    ? !_vm.$v.form.number.$error
                                    : null,
                                  "aria-describedby": "number-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.number.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.number, "$model", $$v)
                                  },
                                  expression: "$v.form.number.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "number-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter a number!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "range" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v("\n                Range [1, 5] "),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  id: "range",
                                  name: "range",
                                  placeholder: "4",
                                  state: _vm.$v.form.range.$dirty
                                    ? !_vm.$v.form.range.$error
                                    : null,
                                  "aria-describedby": "range-feedback"
                                },
                                model: {
                                  value: _vm.$v.form.range.$model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.$v.form.range, "$model", $$v)
                                  },
                                  expression: "$v.form.range.$model"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                { attrs: { id: "range-feedback" } },
                                [
                                  _vm._v(
                                    "\n                Please enter a number between 1 and 5!\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: { "label-for": "range" },
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                Terms & Conditions "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    id: "terms",
                                    name: "terms",
                                    state: _vm.$v.form.terms.$dirty
                                      ? !_vm.$v.form.terms.$error
                                      : null,
                                    "aria-describedby": "terms-feedback"
                                  },
                                  model: {
                                    value: _vm.$v.form.terms.$model,
                                    callback: function($$v) {
                                      _vm.$set(_vm.$v.form.terms, "$model", $$v)
                                    },
                                    expression: "$v.form.terms.$model"
                                  }
                                },
                                [_vm._v("I agree")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-invalid-feedback",
                                {
                                  attrs: {
                                    id: "terms-feedback",
                                    state: _vm.$v.form.terms.$dirty
                                      ? !_vm.$v.form.terms.$error
                                      : null
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                You must agree to the service terms!\n              "
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
                    "b-row",
                    { staticClass: "items-push" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "7", "offset-lg": "4" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { type: "submit", variant: "alt-primary" }
                            },
                            [_vm._v("Submit")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/forms/Validation.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/forms/Validation.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validation.vue?vue&type=template&id=84ce8a10& */ "./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10&");
/* harmony import */ var _Validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Validation.vue?vue&type=script&lang=js& */ "./resources/js/views/forms/Validation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/forms/Validation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/forms/Validation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/forms/Validation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Validation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/Validation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Validation.vue?vue&type=template&id=84ce8a10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/Validation.vue?vue&type=template&id=84ce8a10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Validation_vue_vue_type_template_id_84ce8a10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);