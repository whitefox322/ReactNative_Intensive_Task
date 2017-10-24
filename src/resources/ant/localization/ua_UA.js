'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ua_UA = require('./rc-pagination/ua_UA');

var _ua_UA2 = _interopRequireDefault(_ua_UA);

var _ua_UA3 = require('./date-picker/ua_UA');

var _ua_UA4 = _interopRequireDefault(_ua_UA3);

var _ua_UA5 = require('./time-picker/ua_UA');

var _ua_UA6 = _interopRequireDefault(_ua_UA5);

var _ua_UA7 = require('./calendar/ua_UA');

var _ua_UA8 = _interopRequireDefault(_ua_UA7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_moment2['default'].locale('ua'); /**
                                   * Created by Roman Tsvyk on 08/09/17.
                                   */
exports['default'] = {
    locale: 'ua',
    Pagination: _ua_UA2['default'],
    DatePicker: _ua_UA4['default'],
    TimePicker: _ua_UA6['default'],
    Calendar: _ua_UA8['default'],
    Table: {
        filterTitle: 'Фільтр',
        filterConfirm: 'OK',
        filterReset: 'Скинути',
        emptyText: 'Немає даних',
        selectAll: 'Вибрати все',
        selectInvert: 'Інвертувати вибірку'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Відміна',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Відміна'
    },
    Transfer: {
        notFoundContent: 'Нічого не знайдено',
        searchPlaceholder: 'Введіть назву для пошуку',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Нічого не знайдено'
    },
    Upload: {
        uploading: 'Завантажую...',
        removeFile: 'Видалити файл',
        uploadError: 'Помилка при завантаженні',
        previewFile: 'Попередній пергляд'
    }
};
module.exports = exports['default'];