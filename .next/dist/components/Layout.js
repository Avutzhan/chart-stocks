'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RangeSelector = require('./RangeSelector');

var _RangeSelector2 = _interopRequireDefault(_RangeSelector);

var _StockChart = require('./StockChart');

var _StockChart2 = _interopRequireDefault(_StockChart);

var _StockForm = require('./StockForm');

var _StockForm2 = _interopRequireDefault(_StockForm);

var _Stock = require('./Stock');

var _Stock2 = _interopRequireDefault(_Stock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\Layout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    var stocks = _this.props.stocks;

    _this.state = {
      chartRange: '1 Mo',
      errorMsg: '',
      stocks: stocks,
      textField: ''
    };
    _this.addStock = _this.addStock.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleErrorMsg = _this.handleErrorMsg.bind(_this);
    _this.handleRemoval = _this.handleRemoval.bind(_this);
    _this.handleStock = _this.handleStock.bind(_this);
    _this.removeStock = _this.removeStock.bind(_this);
    _this.setChartRange = _this.setChartRange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = (0, _socket2.default)();
      this.socket.on('errorMsg', this.handleErrorMsg);
      this.socket.on('stock', this.handleStock);
      this.socket.on('stockToRemove', this.handleRemoval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('errorMsg', this.handleErrorMsg);
      this.socket.off('stock', this.handleStock);
      this.socket.off('symbolToRemove', this.handleRemoval);
      this.socket.close();
    }
  }, {
    key: 'setChartRange',
    value: function setChartRange(event) {
      this.setState({ chartRange: event.target.textContent });
    }
  }, {
    key: 'addStock',
    value: function addStock(event) {
      event.preventDefault();
      var _state = this.state,
          stocks = _state.stocks,
          textField = _state.textField;

      var symbolToAdd = textField.toUpperCase();
      var chartingStock = stocks.some(function (stock) {
        return stock.symbol === symbolToAdd;
      });
      if (!chartingStock) {
        this.socket.emit('symbolToAdd', symbolToAdd);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ textField: event.target.value });
    }
  }, {
    key: 'handleErrorMsg',
    value: function handleErrorMsg(errorMsg) {
      var _this2 = this;

      this.setState({ errorMsg: errorMsg });
      setTimeout(function () {
        return _this2.setState({ errorMsg: '' });
      }, 2000);
    }
  }, {
    key: 'handleRemoval',
    value: function handleRemoval(symbol) {
      var nextStocks = this.state.stocks.filter(function (stock) {
        return stock.symbol !== symbol;
      });
      this.setState({ stocks: nextStocks });
    }
  }, {
    key: 'handleStock',
    value: function handleStock(stock) {
      this.setState({ stocks: this.state.stocks.concat(stock) });
    }
  }, {
    key: 'removeStock',
    value: function removeStock(event) {
      var symbolToRemove = event.target.parentNode.textContent.split('-')[0].slice(0, -1);
      var nextStocks = this.state.stocks.filter(function (stock) {
        return stock.symbol !== symbolToRemove;
      });
      this.setState({ stocks: nextStocks });
      this.socket.emit('symbolToRemove', symbolToRemove);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          chartRange = _state2.chartRange,
          errorMsg = _state2.errorMsg,
          stocks = _state2.stocks,
          textField = _state2.textField;

      var stockList = stocks.map(function (stock) {
        return _react2.default.createElement(_Stock2.default, {
          key: stock.symbol,
          removeStock: _this3.removeStock,
          stock: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        });
      });

      return _react2.default.createElement('main', {
        className: 'jsx-2874393546',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-2874393546',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'STOCKS'), _react2.default.createElement(_RangeSelector2.default, { chartRange: chartRange, setChartRange: this.setChartRange, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement(_StockChart2.default, { chartRange: chartRange, stocks: stocks, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('ul', {
        className: 'jsx-2874393546',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, stockList), _react2.default.createElement(_StockForm2.default, {
        addStock: this.addStock,
        errorMsg: errorMsg,
        handleChange: this.handleChange,
        textField: textField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement('footer', {
        className: 'jsx-2874393546',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Data provided for free by\xA0', _react2.default.createElement('a', {
        href: 'https://iextrading.com/developer/',
        rel: 'noopener noreferrer',
        target: '_blank',
        className: 'jsx-2874393546',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'IEX'), '.'), _react2.default.createElement(_style2.default, {
        styleId: '2874393546',
        css: 'main.jsx-2874393546{margin:auto;max-width:800px;}h3.jsx-2874393546{margin-bottom:0;text-align:center;}footer.jsx-2874393546{position:relative;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSG9CLEFBR3lCLEFBSUksQUFJRSxZQVBGLElBSUUsRUFJQSxVQVBwQixNQUlBLEVBSUEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3BoYXBwL0Rlc2t0b3AvcHJvamVjdHMvY2hhcnQtc3RvY2tzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJhbmdlU2VsZWN0b3IgZnJvbSAnLi9SYW5nZVNlbGVjdG9yJztcclxuaW1wb3J0IFN0b2NrQ2hhcnQgZnJvbSAnLi9TdG9ja0NoYXJ0JztcclxuaW1wb3J0IFN0b2NrRm9ybSBmcm9tICcuL1N0b2NrRm9ybSc7XHJcbmltcG9ydCBTdG9jayBmcm9tICcuL1N0b2NrJztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHsgc3RvY2tzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2hhcnRSYW5nZTogJzEgTW8nLFxyXG4gICAgICBlcnJvck1zZzogJycsXHJcbiAgICAgIHN0b2NrcyxcclxuICAgICAgdGV4dEZpZWxkOiAnJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmFkZFN0b2NrID0gdGhpcy5hZGRTdG9jay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvck1zZyA9IHRoaXMuaGFuZGxlRXJyb3JNc2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUmVtb3ZhbCA9IHRoaXMuaGFuZGxlUmVtb3ZhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdG9jayA9IHRoaXMuaGFuZGxlU3RvY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlU3RvY2sgPSB0aGlzLnJlbW92ZVN0b2NrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldENoYXJ0UmFuZ2UgPSB0aGlzLnNldENoYXJ0UmFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zb2NrZXQgPSBpbygpO1xyXG4gICAgdGhpcy5zb2NrZXQub24oJ2Vycm9yTXNnJywgdGhpcy5oYW5kbGVFcnJvck1zZyk7XHJcbiAgICB0aGlzLnNvY2tldC5vbignc3RvY2snLCB0aGlzLmhhbmRsZVN0b2NrKTtcclxuICAgIHRoaXMuc29ja2V0Lm9uKCdzdG9ja1RvUmVtb3ZlJywgdGhpcy5oYW5kbGVSZW1vdmFsKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdlcnJvck1zZycsIHRoaXMuaGFuZGxlRXJyb3JNc2cpO1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdzdG9jaycsIHRoaXMuaGFuZGxlU3RvY2spO1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdzeW1ib2xUb1JlbW92ZScsIHRoaXMuaGFuZGxlUmVtb3ZhbCk7XHJcbiAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcnRSYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0UmFuZ2U6IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCB9KTtcclxuICB9XHJcblxyXG4gIGFkZFN0b2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBzdG9ja3MsIHRleHRGaWVsZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHN5bWJvbFRvQWRkID0gdGV4dEZpZWxkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb25zdCBjaGFydGluZ1N0b2NrID0gc3RvY2tzLnNvbWUoc3RvY2sgPT4gc3RvY2suc3ltYm9sID09PSBzeW1ib2xUb0FkZCk7XHJcbiAgICBpZiAoIWNoYXJ0aW5nU3RvY2spIHtcclxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3ltYm9sVG9BZGQnLCBzeW1ib2xUb0FkZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0RmllbGQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9yTXNnKGVycm9yTXNnKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2cgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSksIDIwMDApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZhbChzeW1ib2wpIHtcclxuICAgIGNvbnN0IG5leHRTdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2Nrcy5maWx0ZXIoc3RvY2sgPT4gc3RvY2suc3ltYm9sICE9PSBzeW1ib2wpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrczogbmV4dFN0b2NrcyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN0b2NrKHN0b2NrKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tzOiB0aGlzLnN0YXRlLnN0b2Nrcy5jb25jYXQoc3RvY2spIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3RvY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IHN5bWJvbFRvUmVtb3ZlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQuc3BsaXQoJy0nKVswXS5zbGljZSgwLCAtMSk7XHJcbiAgICBjb25zdCBuZXh0U3RvY2tzID0gdGhpcy5zdGF0ZS5zdG9ja3MuZmlsdGVyKHN0b2NrID0+IHN0b2NrLnN5bWJvbCAhPT0gc3ltYm9sVG9SZW1vdmUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrczogbmV4dFN0b2NrcyB9KTtcclxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N5bWJvbFRvUmVtb3ZlJywgc3ltYm9sVG9SZW1vdmUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGFydFJhbmdlLCBlcnJvck1zZywgc3RvY2tzLCB0ZXh0RmllbGQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBzdG9ja0xpc3QgPSBzdG9ja3MubWFwKHN0b2NrID0+IChcclxuICAgICAgPFN0b2NrXHJcbiAgICAgICAga2V5PXtzdG9jay5zeW1ib2x9XHJcbiAgICAgICAgcmVtb3ZlU3RvY2s9e3RoaXMucmVtb3ZlU3RvY2t9XHJcbiAgICAgICAgc3RvY2s9e3N0b2NrfVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgzPlNUT0NLUzwvaDM+XHJcbiAgICAgICAgPFJhbmdlU2VsZWN0b3IgY2hhcnRSYW5nZT17Y2hhcnRSYW5nZX0gc2V0Q2hhcnRSYW5nZT17dGhpcy5zZXRDaGFydFJhbmdlfSAvPlxyXG4gICAgICAgIDxTdG9ja0NoYXJ0IGNoYXJ0UmFuZ2U9e2NoYXJ0UmFuZ2V9IHN0b2Nrcz17c3RvY2tzfSAvPlxyXG4gICAgICAgIDx1bD57c3RvY2tMaXN0fTwvdWw+XHJcbiAgICAgICAgPFN0b2NrRm9ybVxyXG4gICAgICAgICAgYWRkU3RvY2s9e3RoaXMuYWRkU3RvY2t9XHJcbiAgICAgICAgICBlcnJvck1zZz17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdGV4dEZpZWxkPXt0ZXh0RmllbGR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgRGF0YSBwcm92aWRlZCBmb3IgZnJlZSBieSZuYnNwO1xyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaWV4dHJhZGluZy5jb20vZGV2ZWxvcGVyL1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBJRVhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIC5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIHN0b2NrczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNsb3NlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgfSkpLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN5bWJvbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=components\\Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      date: _propTypes2.default.string,
      close: _propTypes2.default.number
    })),
    name: _propTypes2.default.string,
    symbol: _propTypes2.default.string
  })).isRequired
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJpbyIsIlByb3BUeXBlcyIsIlJlYWN0IiwiUmFuZ2VTZWxlY3RvciIsIlN0b2NrQ2hhcnQiLCJTdG9ja0Zvcm0iLCJTdG9jayIsIkxheW91dCIsInByb3BzIiwic3RvY2tzIiwic3RhdGUiLCJjaGFydFJhbmdlIiwiZXJyb3JNc2ciLCJ0ZXh0RmllbGQiLCJhZGRTdG9jayIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVFcnJvck1zZyIsImhhbmRsZVJlbW92YWwiLCJoYW5kbGVTdG9jayIsInJlbW92ZVN0b2NrIiwic2V0Q2hhcnRSYW5nZSIsInNvY2tldCIsIm9uIiwib2ZmIiwiY2xvc2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN5bWJvbFRvQWRkIiwidG9VcHBlckNhc2UiLCJjaGFydGluZ1N0b2NrIiwic29tZSIsInN0b2NrIiwic3ltYm9sIiwiZW1pdCIsInZhbHVlIiwic2V0VGltZW91dCIsIm5leHRTdG9ja3MiLCJmaWx0ZXIiLCJjb25jYXQiLCJzeW1ib2xUb1JlbW92ZSIsInBhcmVudE5vZGUiLCJzcGxpdCIsInNsaWNlIiwic3RvY2tMaXN0IiwibWFwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwiZGF0YSIsImRhdGUiLCJzdHJpbmciLCJudW1iZXIiLCJuYW1lIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBRVo7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWDs7UUFE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S0FEWixBQUNpQixBQUNmO2tCQUZGLEFBRVksQUFDVjtzQkFBYyxLQUhoQixBQUdxQixBQUNuQjttQkFKRixBQUlhOztvQkFKYjtzQkFMRixBQUtFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVFLGlEQUFBLGNBQUE7Y0FBQSxBQUNPLEFBQ0w7YUFGRixBQUVNLEFBQ0o7Z0JBSEYsQUFHUzttQkFIVDs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBSEosQUFFRSxRQWJKLEFBV0U7aUJBWEY7YUFERixBQUNFLEFBdUNIO0FBdkNHOzs7OztFQW5GZSxnQkFBTSxBOztBQTZIM0IsT0FBQSxBQUFPOzhCQUNHLEFBQVUsNEJBQVEsQUFBVTs4QkFDNUIsQUFBVSw0QkFBUSxBQUFVO1lBQzFCLG9CQURnQyxBQUN0QixBQUNoQjthQUFPLG9CQUgrQixBQUNsQyxBQUFrQixBQUFnQixBQUVyQixBQUVuQjtBQUp3QyxBQUN0QyxLQURzQixDQUFsQjtVQUlBLG9CQUxrQyxBQUt4QixBQUNoQjtZQUFRLG9CQU5GLEFBQWtCLEFBQWdCLEFBTXRCO0FBTnNCLEFBQ3hDLEdBRHdCLENBQWxCLEVBRFYsQUFBbUIsQUFRYixBQUdOO0FBWG1CLEFBQ2pCOztrQkFVRixBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waGFwcC9EZXNrdG9wL3Byb2plY3RzL2NoYXJ0LXN0b2NrcyJ9