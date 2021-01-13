import React from "react";
import "./styles.less";

type RadioInfo = {
    className?: string,
    value?: string | number,
    label?: string | number,
}
// 子组件
const Radio:React.FC<RadioInfo> = (props) => {
    const { className, value, label } = props;
    return (
        <div className={className}>
            <input
                type="radio"
                name="listradio"
                value={value}
            />
            <div>{label}</div>
        </div>
    );
};
type RadioGroupInfo = {
    className?: string,
    value?: string | number,
    label?: string | number,
    onChange: (e?:any) => void,  
}
// 父级组件
const RadioGroup:React.FC<RadioGroupInfo> = (props) => {
    const { onChange, className } = props;
    return (
        <div
            onChange={(e) => {
                onChange(e.target['value']);
            }}
            className={className}
        >
            {React.Children.map(props.children, (child:any) => {
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
