(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reminder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hero-static" }, [
    _c(
      "div",
      { staticClass: "content" },
      [
        _c(
          "b-row",
          { staticClass: "justify-content-center" },
          [
            _c(
              "b-col",
              { attrs: { md: "8", lg: "6", xl: "4" } },
              [
                _c(
                  "base-block",
                  {
                    staticClass: "mb-0",
                    attrs: {
                      rounded: "",
                      themed: "",
                      "header-class": "bg-primary-dark",
                      title: "Password Reminder"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "options",
                        fn: function() {
                          return [
                            _c(
                              "router-link",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover.nofade.left",
                                    value: "Sign In",
                                    expression: "'Sign In'",
                                    modifiers: {
                                      hover: true,
                                      nofade: true,
                                      left: true
                                    }
                                  }
                                ],
                                staticClass: "btn-block-option",
                                attrs: { to: "/auth/signin" }
                              },
                              [_c("i", { staticClass: "fa fa-sign-in-alt" })]
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
                      "div",
                      { staticClass: "p-sm-3 px-lg-4 py-lg-5" },
                      [
                        _c("h1", { staticClass: "h2 mb-1" }, [_vm._v("OneUI")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-muted" }, [
                          _vm._v(
                            "\n              Please provide your account’s email and we will send you your password.\n            "
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
                                      _vm.$set(
                                        _vm.$v.form.reminder,
                                        "$model",
                                        $$v
                                      )
                                    },
                                    expression: "$v.form.reminder.$model"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-invalid-feedback",
                                  { attrs: { id: "reminder-feedback" } },
                                  [
                                    _vm._v(
                                      "\n                  Please enter your username or email\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              { staticClass: "form-group" },
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
                                          variant: "alt-primary",
                                          block: ""
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-fw fa-envelope mr-1"
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
                        )
                      ],
                      1
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
      "div",
      {
        staticClass: "content content-full font-size-sm text-muted text-center"
      },
      [
        _c("strong", [
          _vm._v(
            _vm._s(
              _vm.$store.getters.appName + " " + _vm.$store.getters.appVersion
            )
          )
        ]),
        _vm._v(" © " + _vm._s(_vm.$store.getters.appCopyright) + "\n  ")
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/auth/Reminder.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reminder.vue?vue&type=template&id=2bfbf9df& */ "./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df&");
/* harmony import */ var _Reminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reminder.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/auth/Reminder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reminder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reminder.vue?vue&type=template&id=2bfbf9df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/auth/Reminder.vue?vue&type=template&id=2bfbf9df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reminder_vue_vue_type_template_id_2bfbf9df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);