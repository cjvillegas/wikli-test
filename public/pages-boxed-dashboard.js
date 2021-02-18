(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-boxed-dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
// Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chartjs_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Chartjs/Line */ "./resources/js/components/Chartjs/Line.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Chart.js, https://www.chartjs.org
 // Line Chart component using Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChartjsLine: _components_Chartjs_Line__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      chartjsStyles: {
        position: 'relative',
        height: '344px'
      },
      chartjsEarningsOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 3000
            }
          }]
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: function label(tooltipItems) {
              return ' $' + tooltipItems.yLabel;
            }
          }
        }
      },
      chartjsSalesOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 260
            }
          }]
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: function label(tooltipItems) {
              return ' ' + tooltipItems.yLabel + ' Sales';
            }
          }
        }
      },
      chartjsEarningsData: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
          label: 'This Year',
          fill: true,
          backgroundColor: 'rgba(132, 94, 247, .3)',
          borderColor: 'transparent',
          pointBackgroundColor: 'rgba(132, 94, 247, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(132, 94, 247, 1)',
          data: [2150, 1350, 1560, 980, 1260, 1720, 1115, 1690, 1870, 2420, 2100, 2730]
        }, {
          label: 'Last Year',
          fill: true,
          backgroundColor: 'rgba(233, 236, 239, 1)',
          borderColor: 'transparent',
          pointBackgroundColor: 'rgba(233, 236, 239, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
          data: [2200, 1700, 1100, 1900, 1680, 2560, 1340, 1450, 2000, 2500, 1550, 1880]
        }]
      },
      chartjsSalesData: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
          label: 'This Year',
          fill: true,
          backgroundColor: 'rgba(34, 184, 207, .3)',
          borderColor: 'transparent',
          pointBackgroundColor: 'rgba(34, 184, 207, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(34, 184, 207, 1)',
          data: [175, 120, 169, 82, 135, 169, 132, 130, 192, 230, 215, 260]
        }, {
          label: 'Last Year',
          fill: true,
          backgroundColor: 'rgba(233, 236, 239, 1)',
          borderColor: 'transparent',
          pointBackgroundColor: 'rgba(233, 236, 239, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
          data: [220, 170, 110, 215, 168, 227, 154, 135, 210, 240, 145, 178]
        }]
      },
      latestCustomers: [{
        id: 1521,
        avatar: 'avatar11',
        name: 'Adam McCoy',
        orders: 5
      }, {
        id: 1520,
        avatar: 'avatar1',
        name: 'Betty Kelley',
        orders: 7
      }, {
        id: 1519,
        avatar: 'avatar5',
        name: 'Jesse Fisher',
        orders: 12
      }, {
        id: 1518,
        avatar: 'avatar12',
        name: 'Ryan Flores',
        orders: 19
      }, {
        id: 1517,
        avatar: 'avatar3',
        name: 'Alice Moore',
        orders: 2
      }, {
        id: 1516,
        avatar: 'avatar13',
        name: 'Scott Young',
        orders: 5
      }, {
        id: 1515,
        avatar: 'avatar14',
        name: 'Ralph Murray',
        orders: 9
      }],
      latestOrders: [{
        id: 7835,
        date: 'today',
        state: 'Pending..',
        stateVariant: 'warning',
        total: '$999,99'
      }, {
        id: 7834,
        date: 'today',
        state: 'Pending..',
        stateVariant: 'warning',
        total: '$2.299,00'
      }, {
        id: 7833,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$1200,00'
      }, {
        id: 7832,
        date: 'today',
        state: 'Cancelled',
        stateVariant: 'danger',
        total: '$399,00'
      }, {
        id: 7831,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$349,00'
      }, {
        id: 7830,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$999,00'
      }, {
        id: 7829,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$39,99'
      }, {
        id: 7828,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$499,00'
      }, {
        id: 7827,
        date: 'today',
        state: 'Success',
        stateVariant: 'success',
        total: '$325,00'
      }]
    };
  },
  created: function created() {
    // Set Chart.js configuration
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.defaultFontColor = '#495057';
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.defaultFontStyle = '600';
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scale.gridLines.color = 'transparent';
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scale.gridLines.zeroLineColor = 'transparent';
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scale.display = false;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scale.ticks.beginAtZero = true;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.elements.line.borderWidth = 0;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.elements.point.radius = 0;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.elements.point.hoverRadius = 0;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.tooltips.cornerRadius = 3;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.global.legend.labels.boxWidth = 12;
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "content" },
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "6", md: "3", lg: "6", xl: "3" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      tag: "a",
                      rounded: "",
                      "link-pop": "",
                      "content-full": "",
                      href: "javascript:void(0)"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-size-sm font-w600 text-uppercase text-muted"
                      },
                      [_vm._v("\n              Visitors\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "font-size-h2 font-w400 text-dark" },
                      [_vm._v("\n              120,580\n            ")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "6", md: "3", lg: "6", xl: "3" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      tag: "a",
                      rounded: "",
                      "link-pop": "",
                      "content-full": "",
                      href: "javascript:void(0)"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-size-sm font-w600 text-uppercase text-muted"
                      },
                      [_vm._v("\n              Sales\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "font-size-h2 font-w400 text-dark" },
                      [_vm._v("\n              150\n            ")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "6", md: "3", lg: "6", xl: "3" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      tag: "a",
                      rounded: "",
                      "link-pop": "",
                      "content-full": "",
                      href: "javascript:void(0)"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-size-sm font-w600 text-uppercase text-muted"
                      },
                      [_vm._v("\n              Earnings\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "font-size-h2 font-w400 text-dark" },
                      [_vm._v("\n              $3,200\n            ")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "6", md: "3", lg: "6", xl: "3" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      tag: "a",
                      rounded: "",
                      "link-pop": "",
                      "content-full": "",
                      href: "javascript:void(0)"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-size-sm font-w600 text-uppercase text-muted"
                      },
                      [_vm._v("\n              Avg Sale\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "font-size-h2 font-w400 text-dark" },
                      [_vm._v("\n              $21\n            ")]
                    )
                  ]
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
          [
            _c(
              "b-col",
              { attrs: { lg: "6" } },
              [
                _c("base-block", {
                  attrs: {
                    rounded: "",
                    title: "Earnings in $",
                    "header-bg": ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "options",
                      fn: function() {
                        return [
                          _c(
                            "button",
                            {
                              staticClass: "btn-block-option",
                              attrs: { type: "button" }
                            },
                            [_c("i", { staticClass: "si si-settings" })]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "content",
                      fn: function() {
                        return [
                          _c("div", { staticClass: "block-content p-0" }, [
                            _c(
                              "div",
                              { staticClass: "pt-3" },
                              [
                                _c("chartjs-line", {
                                  attrs: {
                                    "chart-data": _vm.chartjsEarningsData,
                                    options: _vm.chartjsEarningsOptions,
                                    styles: _vm.chartjsStyles
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "items-push text-center py-3" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-wallet fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("$148,000")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-angle-double-up fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+9% Earnings")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-ticket-alt fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+20% Tickets")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-users fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+46% Clients")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { lg: "6" } },
              [
                _c("base-block", {
                  attrs: { rounded: "", title: "Sales", "header-bg": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "options",
                      fn: function() {
                        return [
                          _c(
                            "button",
                            {
                              staticClass: "btn-block-option",
                              attrs: { type: "button" }
                            },
                            [_c("i", { staticClass: "si si-settings" })]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "content",
                      fn: function() {
                        return [
                          _c("div", { staticClass: "block-content p-0" }, [
                            _c(
                              "div",
                              { staticClass: "pt-3" },
                              [
                                _c("chartjs-line", {
                                  attrs: {
                                    "chart-data": _vm.chartjsSalesData,
                                    options: _vm.chartjsSalesOptions,
                                    styles: _vm.chartjsStyles
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "items-push text-center py-3" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fab fa-wordpress fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+20% Themes")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-font fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+25% Fonts")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-archive fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("-10% Icons")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "6", xl: "3" } },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-paint-brush fa-2x text-muted"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-muted mt-3" },
                                        [_vm._v("+8% Graphics")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          { staticClass: "row-deck" },
          [
            _c(
              "b-col",
              { attrs: { xl: "6" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      rounded: "",
                      title: "Latest Customers",
                      "header-bg": "",
                      "content-full": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "options",
                        fn: function() {
                          return [
                            _c(
                              "button",
                              {
                                staticClass: "btn-block-option",
                                attrs: { type: "button" }
                              },
                              [_c("i", { staticClass: "si si-settings" })]
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
                      "b-table-simple",
                      {
                        staticClass: "table-vcenter font-size-sm mb-0",
                        attrs: { striped: "", hover: "", borderless: "" }
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
                                    staticClass: "font-w700",
                                    staticStyle: { width: "80px" }
                                  },
                                  [_vm._v("ID")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass:
                                      "d-none d-lg-table-cell font-w700 text-center",
                                    staticStyle: { width: "100px" }
                                  },
                                  [_vm._v("Photo")]
                                ),
                                _vm._v(" "),
                                _c("b-th", { staticClass: "font-w700" }, [
                                  _vm._v("Name")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell font-w700 text-center",
                                    staticStyle: { width: "80px" }
                                  },
                                  [_vm._v("Orders")]
                                ),
                                _vm._v(" "),
                                _c("b-th", {
                                  staticClass: "font-w700 text-center",
                                  staticStyle: { width: "60px" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tbody",
                          _vm._l(_vm.latestCustomers, function(customer) {
                            return _c(
                              "b-tr",
                              { key: customer.id },
                              [
                                _c("b-td", { staticClass: "font-w600" }, [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(customer.id) +
                                      "\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-td",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell text-center"
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-avatar img-avatar32",
                                      attrs: {
                                        src:
                                          "img/avatars/" +
                                          customer.avatar +
                                          ".jpg",
                                        alt: "Avatar"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "link-fx font-w600",
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [_vm._v(_vm._s(customer.name))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-td",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell text-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "link-fx font-w600",
                                        attrs: { href: "javascript:void(0)" }
                                      },
                                      [_vm._v(_vm._s(customer.orders))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName:
                                            "v-b-tooltip.hover.nofade.left",
                                          value: "Edit",
                                          expression: "'Edit'",
                                          modifiers: {
                                            hover: true,
                                            nofade: true,
                                            left: true
                                          }
                                        }
                                      ],
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-fw fa-pencil-alt"
                                      })
                                    ]
                                  )
                                ])
                              ],
                              1
                            )
                          }),
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
              "b-col",
              { attrs: { xl: "6" } },
              [
                _c(
                  "base-block",
                  {
                    attrs: {
                      rounded: "",
                      title: "Latest Orders",
                      "header-bg": "",
                      "content-full": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "options",
                        fn: function() {
                          return [
                            _c(
                              "button",
                              {
                                staticClass: "btn-block-option",
                                attrs: { type: "button" }
                              },
                              [_c("i", { staticClass: "si si-settings" })]
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
                      "b-table-simple",
                      {
                        staticClass: "table-vcenter font-size-sm mb-0",
                        attrs: { striped: "", hover: "", borderless: "" }
                      },
                      [
                        _c(
                          "b-thead",
                          [
                            _c(
                              "b-tr",
                              [
                                _c("b-th", { staticClass: "font-w700" }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell font-w700"
                                  },
                                  [_vm._v("Date")]
                                ),
                                _vm._v(" "),
                                _c("b-th", { staticClass: "font-w700" }, [
                                  _vm._v("State")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell font-w700 text-right",
                                    staticStyle: { width: "120px" }
                                  },
                                  [_vm._v("Total")]
                                ),
                                _vm._v(" "),
                                _c("b-th", {
                                  staticClass: "font-w700 text-center",
                                  staticStyle: { width: "60px" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tbody",
                          _vm._l(_vm.latestOrders, function(order) {
                            return _c(
                              "b-tr",
                              { key: order.id },
                              [
                                _c("b-td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "font-w600",
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [_vm._v("#" + _vm._s(order.id))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-td",
                                  { staticClass: "d-none d-sm-table-cell" },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(order.date) +
                                        "\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-td", [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "font-w600",
                                      class: "text-" + order.stateVariant
                                    },
                                    [_vm._v(_vm._s(order.state))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-td",
                                  {
                                    staticClass:
                                      "d-none d-sm-table-cell text-right"
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(order.total) +
                                        "\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName:
                                            "v-b-tooltip.hover.nofade.left",
                                          value: "Manage",
                                          expression: "'Manage'",
                                          modifiers: {
                                            hover: true,
                                            nofade: true,
                                            left: true
                                          }
                                        }
                                      ],
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-fw fa-pencil-alt"
                                      })
                                    ]
                                  )
                                ])
                              ],
                              1
                            )
                          }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Chartjs/Line.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Chartjs/Line.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line.vue?vue&type=script&lang=js& */ "./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chartjs/Line.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Line.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chartjs/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/boxed/Dashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/boxed/Dashboard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=7813fc95& */ "./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/boxed/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=7813fc95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/boxed/Dashboard.vue?vue&type=template&id=7813fc95&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7813fc95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);