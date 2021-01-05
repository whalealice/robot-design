import React from 'react';

var styles = ".wrapper {\n  color: red;\n}\n";

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("button", null, "ButtonComponent333"),
            React.createElement("div", null, "1111")));
    }
}

export { ButtonComponent };
