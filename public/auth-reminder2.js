(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reminder2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  data: function data() {
    return {
      form: {
        reminder: null
      }
    };
  },
  validations: {
    form: {
      reminder: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                      _c("h1", { staticClass: "h4 mb-1" }, [
                        _vm._v(
                          "\n                Password Reminder\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "h6 font-w400 text-muted mb-3" },
                        [
                          _vm._v(
                            "\n                Please provide your account’s email and we will send you your password.\n              "
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
                        _c(
                          "div",
                          { staticClass: "form-group py-3" },
                          [
                            _c("b-form-input", {
                              staticClass: "form-control-alt",
                              attrs: {
                                size: "lg",
                                id: "reminder",
                                name: "reminder",
                                placeholder: "Username or Email",
                                state: !_vm.$v.form.reminder.$error && null,
                                "aria-describedby": "reminder-feedback"
                              },
                              model: {
                                value: _vm.$v.form.reminder.$model,
                                callback: function($$v) {
                                  _vm.$set(_vm.$v.form.reminder, "$model", $$v)
                                },
                                expression: "$v.form.reminder.$model"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          { staticClass: "form-group justify-content-center" },
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
                                      variant: "primary",
                                      block: ""
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-envelope mr-1"
                                    }),
                                    _vm._v(" Send Mail\n                  ")
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
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "font-size-sm font-w500",
                            attrs: { to: "/auth/signin2" }
                          },
                          [_vm._v("Login?")]
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

/***/ "./resources/js/views/pages/auth/Reminder2.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder2.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reminder2.vue?vue&type=template&id=539aeb63& */ "./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63&");
/* harmony import */ var _Reminder2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reminder2.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reminder2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/auth/Reminder2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reminder2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reminder2.vue?vue&type=template&id=539aeb63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder2.vue?vue&type=template&id=539aeb63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder2_vue_vue_type_template_id_539aeb63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);