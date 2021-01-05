'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var styles = ".wrapper {\n  color: red;\n}\n";

class ButtonComponent extends React__default['default'].Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React__default['default'].createElement("div", { className: styles.wrapper },
            React__default['default'].createElement("button", null, "ButtonComponent333"),
            React__default['default'].createElement("div", null, "1111")));
    }
}

exports.ButtonComponent = ButtonComponent;
