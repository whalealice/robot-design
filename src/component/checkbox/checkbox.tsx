import React, { useState } from "react";
import "./checkbox.less";
// 子组件
type CheckboxInfo = {
    className? : string,
    value?: string | number,
    checked? : string | undefined,
    label?: any,
}
const Checkbox:React.FC<CheckboxInfo>  = (props) => {
    const { className, value , label} = props;
    return (
        <div className={className}>
            <input
                type="checkbox"
                name="listcheckbox"
                value={value}
            />
            <div>{label}</div>
        </div>
    );
};
type CheckboxGroupInfo = {
    onChange: (e?:any) => void,
    // defaultValue?: any[],
    className? : string,
}
// 父级组件
const CheckboxGroup:React.FC<CheckboxGroupInfo> = (props) => {
    const { onChange, className } = props;
    const [checkedList, setChecked] = useState<any[]>([]);
    
    return (
        <div
            onChange={(e:any) => {
                const checked: boolean = e.target.checked
                const value: any = e.target.value
                let list: any[] = checkedList
                if(checked){
                    list.push(value)
                } else {
                    let index:number = 0
                    index = checkedList.indexOf(value)
                    list.splice(index, 1)
                }
                setChecked(list);
                onChange(list);
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
export { CheckboxGroup, Checkbox };
