import React from "react";
import "./radio.less";
// 子组件
const Radio = (props) => {
    const { className, value, label } = props;
    return (
        <div className={className}>
            <input
                type="radio"
                name="listradio"
                value={value}
                label={label}
            />
            <div>{props.label}</div>
        </div>
    );
};

// 父级组件
const RadioGroup = (props) => {
    const { onChange, className } = props;
    return (
        <div
            onChange={(e) => {
                onChange(e.target.value);
            }}
            className={className}
        >
            {React.Children.map(props.children, (child) => {
                if(!child) return false
                return React.cloneElement(child, {
                    label: child.props.children,
                    value: child.props.value,
                });
            })}
        </div>
    );
};
export { RadioGroup, Radio };
