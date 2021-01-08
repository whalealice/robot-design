import React from "react";
import "./radio.less";
// 子组件
const Radio = (props) => {
    const { className, value, label, defaultChecked } = props;
    return (
        <div className={className}>
            <input
                type="radio"
                name="listradio"
                value={value}
                label={label}
                defaultChecked={defaultChecked}
            />
            <div>{props.label}</div>
        </div>
    );
};

// 父级组件
const RadioGroup = (props) => {
    const { onChange, defaultValue, className } = props;
    return (
        <div
            onChange={(e) => {
                onChange(e);
            }}
            className={className}
        >
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {
                label: child.props.children,
                value: child.props.value,
                defaultChecked: child.props.value === defaultValue,
                });
            })}
        </div>
    );
};
export { RadioGroup, Radio };
