(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    // Set example settings
    this.$store.commit('header', {
      mode: 'fixed'
    });
    this.$store.commit('headerStyle', {
      mode: 'dark'
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // Restore original settings
    this.$store.commit('headerStyle', {
      mode: 'light'
    });
    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "Header", subtitle: "Fixed Dark" },
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
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Header")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Fixed - Dark")
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
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v("\n        A fixed, dark themed Header.\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center py-8" }, [_vm._v("...")])
          ]),
          _vm._v(" "),
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center py-8" }, [_vm._v("...")])
          ]),
          _vm._v(" "),
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center py-8" }, [_vm._v("...")])
          ]),
          _vm._v(" "),
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center py-8" }, [_vm._v("...")])
          ])
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

/***/ "./resources/js/views/layout/header/FixedDark.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/layout/header/FixedDark.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixedDark.vue?vue&type=template&id=edcc3004& */ "./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004&");
/* harmony import */ var _FixedDark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedDark.vue?vue&type=script&lang=js& */ "./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FixedDark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layout/header/FixedDark.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedDark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedDark.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/header/FixedDark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedDark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedDark.vue?vue&type=template&id=edcc3004& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layout/header/FixedDark.vue?vue&type=template&id=edcc3004&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedDark_vue_vue_type_template_id_edcc3004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);