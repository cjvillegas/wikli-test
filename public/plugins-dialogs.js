(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-dialogs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2


var options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control'
  }
}; // Register Vue SweetAlert2 with custom options

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"], options);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    swalSimple: function swalSimple() {
      this.$swal('Hi, this is just a simple message!');
    },
    swalSuccess: function swalSuccess() {
      this.$swal('Success', 'Everything was updated perfectly!', 'success');
    },
    swalInfo: function swalInfo() {
      this.$swal('Info', 'Just an informational message!', 'info');
    },
    swalWarning: function swalWarning() {
      this.$swal('Warning', 'Something needs your attention!', 'warning');
    },
    swalError: function swalError() {
      this.$swal('Oops...', 'Something went wrong!', 'error');
    },
    swalQuestion: function swalQuestion() {
      this.$swal('Question', 'Are you sure about that?', 'question');
    },
    swalConfirm: function swalConfirm() {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-danger m-1',
          cancelButton: 'btn btn-secondary m-1'
        },
        confirmButtonText: 'Yes, delete it!',
        html: false,
        preConfirm: function preConfirm() {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, 50);
          });
        }
      }).then(function (result) {
        if (result.value) {
          _this.$swal('Deleted!', 'Your imaginary file has been deleted.', 'success'); // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'

        } else if (result.dismiss === 'cancel') {
          _this.$swal('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
    },
    swalCustomPosition: function swalCustomPosition() {
      this.$swal({
        position: 'top-end',
        title: 'Perfect!',
        text: 'Nice Position!',
        icon: 'success'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sweetalert2/dist/sweetalert2.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426& ***!
  \*************************************************************************************************************************************************************************************************************/
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
          title: "Dialogs",
          subtitle:
            "Customizable and accesible popup boxes powered by SweetAlert2 plugin."
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
                      [_vm._v("Plugins")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Dialogs")
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
            { attrs: { rounded: "", title: "SweetAlert2" } },
            [
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Simple")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a simple message\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalSimple }
                        },
                        [_vm._v("\n            Launch Dialog\n          ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Success")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a message after a successful operation\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalSuccess }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-check-circle text-success mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Info")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing an informational message\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalInfo }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-info-circle text-info mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Warning")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a warning message\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalWarning }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "fa fa-exclamation-triangle text-warning mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Error")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a message after a failed operation\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalError }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-times-circle text-danger mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Question")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a question message\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalQuestion }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-question-circle text-muted mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Confirmation")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing a confirmation message\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalConfirm }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-check-square text-muted mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("h4", { staticClass: "border-bottom pb-2" }, [
                        _vm._v("Custom Position")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-size-sm text-muted mb-2" }, [
                        _vm._v(
                          "\n            A dialog showing at the top right of the screen\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "light" },
                          on: { click: _vm.swalCustomPosition }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-bolt text-muted mr-1"
                          }),
                          _vm._v(" Launch Dialog\n          ")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/plugins/Dialogs.vue":
/*!************************************************!*\
  !*** ./resources/js/views/plugins/Dialogs.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialogs.vue?vue&type=template&id=b6206426& */ "./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426&");
/* harmony import */ var _Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialogs.vue?vue&type=script&lang=js& */ "./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialogs.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/plugins/Dialogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=template&id=b6206426& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Dialogs.vue?vue&type=template&id=b6206426&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_b6206426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);