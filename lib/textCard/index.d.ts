import React from 'react';
import './text.less';
declare type TextInfo = {
    text: string;
    link?: string;
    type?: string;
};
declare const TextCard: React.FC<TextInfo>;
export default TextCard;
