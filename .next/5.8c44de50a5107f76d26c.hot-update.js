webpackHotUpdate(5,{

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(698);

var _style2 = _interopRequireDefault(_style);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockList.js';


var StockList = function StockList(props) {
  return _react2.default.createElement('ul', {
    'data-jsx': 765893367,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.stocks.map(function (stock) {
    return _react2.default.createElement('li', { key: stock.symbol, 'data-jsx': 765893367,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, stock.symbol, _react2.default.createElement('i', { className: 'fa fa-times-circle', onClick: props.removeStock, 'data-jsx': 765893367,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }));
  }), _react2.default.createElement(_style2.default, {
    styleId: 765893367,
    css: 'li[data-jsx="765893367"]{background-color:#e0e0e0;border-radius:16px;margin:0 3px;padding-left:12px;height:32px;line-height:32px;display:inline-block}i[data-jsx="765893367"]{margin-left:4px;margin-right:12px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHa0MsQUFTVCxnQkFDRSxTQVRDLFNBVXJCLFVBVGUsYUFDSyxrQkFDTixZQUNLLGlCQUNJLHFCQUN2QiIsImZpbGUiOiJjb21wb25lbnRzXFxTdG9ja0xpc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RvY2tMaXN0ID0gcHJvcHMgPT4gKFxyXG4gIDx1bD5cclxuICAgIHtwcm9wcy5zdG9ja3MubWFwKHN0b2NrID0+IChcclxuICAgICAgPGxpIGtleT17c3RvY2suc3ltYm9sfT5cclxuICAgICAgICB7c3RvY2suc3ltYm9sfVxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIG9uQ2xpY2s9e3Byb3BzLnJlbW92ZVN0b2NrfSAvPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvdWw+XHJcbik7XHJcblxyXG5TdG9ja0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHJlbW92ZVN0b2NrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0b2NrczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTGlzdDtcclxuIl19 */\n/*@ sourceURL=components\\StockList.js */'
  }));
};

StockList.propTypes = {
  removeStock: _propTypes2.default.func.isRequired,
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = StockList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockList.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44YzQ0ZGU1MGE1MTA3Zjc2ZDI2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdG9ja0xpc3QuanM/NTI4OGUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RvY2tMaXN0ID0gcHJvcHMgPT4gKFxyXG4gIDx1bD5cclxuICAgIHtwcm9wcy5zdG9ja3MubWFwKHN0b2NrID0+IChcclxuICAgICAgPGxpIGtleT17c3RvY2suc3ltYm9sfT5cclxuICAgICAgICB7c3RvY2suc3ltYm9sfVxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIG9uQ2xpY2s9e3Byb3BzLnJlbW92ZVN0b2NrfSAvPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvdWw+XHJcbik7XHJcblxyXG5TdG9ja0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHJlbW92ZVN0b2NrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0b2NrczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TdG9ja0xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFIQTtBQURBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=