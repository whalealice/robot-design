import React from "react";
import "./checkbox.less";
declare type CheckboxInfo = {
    className?: string;
    value: string | number;
    checked?: string | undefined;
    label?: any;
};
declare const Checkbox: React.FC<CheckboxInfo>;
declare type CheckboxGroupInfo = {
    name?: string;
    onChange: (e?: any) => void;
    className?: string;
};
declare const CheckboxGroup: React.FC<CheckboxGroupInfo>;
export { CheckboxGroup, Checkbox };
