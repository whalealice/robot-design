import React from "react";
import "./styles.less";
declare type RadioInfo = {
    className?: string;
    value?: string | number;
    label?: string | number;
};
declare const Radio: React.FC<RadioInfo>;
declare type RadioGroupInfo = {
    className?: string;
    value?: string | number;
    label?: string | number;
    onChange: (e?: any) => void;
};
declare const RadioGroup: React.FC<RadioGroupInfo>;
export { RadioGroup, Radio };
