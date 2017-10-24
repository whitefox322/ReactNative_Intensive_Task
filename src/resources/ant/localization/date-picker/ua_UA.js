'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ua_UA = require('../rc-calendar/ua_UA');

var _ua_UA2 = _interopRequireDefault(_ua_UA);

var _ua_UA3 = require('../time-picker/ua_UA');

var _ua_UA4 = _interopRequireDefault(_ua_UA3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by Roman Tsvyk on 08/09/17.
 */
var locale = {
  lang: (0, _extends3['default'])({ placeholder: 'Виберiть дату', rangePlaceholder: ['Початкова дата', 'Кiнцева дата'] }, _ua_UA2['default']),
  timePickerLocale: (0, _extends3['default'])({}, _ua_UA4['default'])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];