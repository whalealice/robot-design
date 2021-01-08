import React from 'react';
import './text.less';
declare type TextInfo = {
    text: string;
    link?: string;
    size?: string;
};
declare const TextCard: React.FC<TextInfo>;
export default TextCard;
