(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-calendar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/bootstrap */ "./node_modules/@fullcalendar/bootstrap/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// FullCalendar, for more info and examples you can check out https://fullcalendar.io/






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      calendarOptions: {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'title',
          right: 'prev,next today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"]],
        weekends: true,
        events: [],
        themeSystem: 'bootstrap',
        editable: true,
        droppable: true,
        firstDay: 1,
        dateClick: this.handleDateClick,
        eventDrop: this.handleEventDrop,
        eventReceive: this.handleExternalDrop
      },
      calendarNewEvent: '',
      calendarNewEvents: [{
        title: 'Codename X',
        color: 'info'
      }, {
        title: 'Weekend Adventure',
        color: 'success'
      }, {
        title: 'Project Mars',
        color: 'info'
      }, {
        title: 'Meeting',
        color: 'warning'
      }, {
        title: 'Walk the dog',
        color: 'success'
      }, {
        title: 'Al schedule',
        color: 'info'
      }, {
        title: 'Cinema',
        color: 'success'
      }, {
        title: 'Project X',
        color: 'danger'
      }, {
        title: 'Skype Meeting',
        color: 'warning'
      }]
    };
  },
  created: function created() {
    // Get current year, month and day
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate(); // Populate calendar with predefined events

    this.calendarOptions.events = [{
      title: 'Gaming Day',
      start: new Date(y, m, 1),
      allDay: true
    }, {
      title: 'Skype Meeting',
      start: new Date(y, m, 3)
    }, {
      title: 'Project X',
      start: new Date(y, m, 9),
      end: new Date(y, m, 12),
      allDay: true,
      color: '#e04f1a'
    }, {
      title: 'Work',
      start: new Date(y, m, 17),
      end: new Date(y, m, 19),
      allDay: true,
      color: '#82b54b'
    }, {
      id: 999,
      title: 'Hiking (repeated)',
      start: new Date(y, m, d - 1, 15, 0)
    }, {
      id: 999,
      title: 'Hiking (repeated)',
      start: new Date(y, m, d + 3, 15, 0)
    }, {
      title: 'Landing Template',
      start: new Date(y, m, d - 3),
      end: new Date(y, m, d - 3),
      allDay: true,
      color: '#ffb119'
    }, {
      title: 'Lunch',
      start: new Date(y, m, d + 7, 15, 0),
      color: '#82b54b'
    }, {
      title: 'Coding',
      start: new Date(y, m, d, 8, 0),
      end: new Date(y, m, d, 14, 0)
    }, {
      title: 'Trip',
      start: new Date(y, m, 25),
      end: new Date(y, m, 27),
      allDay: true,
      color: '#ffb119'
    }, {
      title: 'Reading',
      start: new Date(y, m, d + 8, 20, 0),
      end: new Date(y, m, d + 8, 22, 0)
    }, {
      title: 'Follow us on Twitter',
      start: new Date(y, m, 22),
      allDay: true,
      url: 'http://twitter.com/pixelcave',
      color: '#3c90df'
    }];
  },
  mounted: function mounted() {
    // Init draggable calendar events
    new _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["Draggable"](document.getElementById('calendar-events'), {
      itemSelector: '.js-event',
      eventData: function eventData(eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: getComputedStyle(eventEl).backgroundColor,
          borderColor: getComputedStyle(eventEl).backgroundColor,
          create: true
        };
      }
    });
  },
  methods: {
    handleDateClick: function handleDateClick(arg) {
      // Add new event data to the calendar on date click
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarOptions.events.push({
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        });
      }
    },
    handleEventDrop: function handleEventDrop(eventDropInfo) {
      // When dropping an existing event to another date
      window.console.log(eventDropInfo);
    },
    handleExternalDrop: function handleExternalDrop(info) {
      // When dropping an external event and is added to the calendar
      window.console.log(info);
    },
    addNewEvent: function addNewEvent() {
      // Add event form submission
      if (this.calendarNewEvent) {
        // Add the event to the draggable list
        this.calendarNewEvents.unshift({
          title: this.calendarNewEvent,
          color: 'info'
        }); // Reset and focus the input 

        this.calendarNewEvent = '';
        this.$refs.inputAddEvent.$el.focus();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fc-theme-bootstrap .fc-h-event {\n  background-color: #5179d6;\n  border: #5179d6;\n}\n.fc-theme-bootstrap .fc-col-header-cell {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  background-color: #f6f7f8;\n}\n@media (max-width: 767.98px) {\n.fc-theme-bootstrap .fc-toolbar.fc-header-toolbar {\n    display: block;\n}\n.fc-theme-bootstrap .fc-toolbar.fc-header-toolbar .fc-toolbar-chunk > div,\n.fc-theme-bootstrap .fc-toolbar.fc-header-toolbar .fc-toolbar-chunk > .btn {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n.fc-theme-bootstrap .fc-toolbar.fc-header-toolbar .fc-toolbar-chunk:not(:first-child) {\n    margin-top: 1rem;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128& ***!
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
          title: "Calendar",
          subtitle:
            "A solid foundation to build your calendar based web application. Powered by Full Calendar."
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
                      _vm._v("Calendar")
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
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "8", lg: "7", xl: "9" } },
                    [
                      _c("full-calendar", {
                        ref: "fullCalendar",
                        attrs: { options: _vm.calendarOptions }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "4", lg: "5", xl: "3" } },
                    [
                      _c(
                        "b-form",
                        {
                          staticClass: "push",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.addNewEvent($event)
                            }
                          }
                        },
                        [
                          _c(
                            "b-input-group",
                            {
                              scopedSlots: _vm._u([
                                {
                                  key: "append",
                                  fn: function() {
                                    return [
                                      _c(
                                        "b-input-group-text",
                                        { staticClass: "input-group-text-alt" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fa fa-fw fa-plus-circle"
                                          })
                                        ]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _c("b-form-input", {
                                ref: "inputAddEvent",
                                attrs: { placeholder: "Add Event.." },
                                model: {
                                  value: _vm.calendarNewEvent,
                                  callback: function($$v) {
                                    _vm.calendarNewEvent = $$v
                                  },
                                  expression: "calendarNewEvent"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "list list-events",
                          attrs: { id: "calendar-events" }
                        },
                        _vm._l(_vm.calendarNewEvents, function(event, index) {
                          return _c(
                            "li",
                            { key: "events-" + index, staticClass: "p-0" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "js-event p-2 font-size-sm font-w600 text-white",
                                  class: "bg-" + event.color
                                },
                                [_vm._v(_vm._s(event.title))]
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c("em", { staticClass: "font-size-sm text-muted" }, [
                          _c("i", { staticClass: "fa fa-arrows-alt" }),
                          _vm._v(
                            " Drag and drop events on the calendar\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/plugins/Calendar.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/plugins/Calendar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=cc641128& */ "./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/plugins/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=cc641128& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/plugins/Calendar.vue?vue&type=template&id=cc641128&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_cc641128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);