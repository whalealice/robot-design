import React from 'react';
import '../../styles/mixins.less';
declare type TextInfo = {
    text: string;
    link?: string;
};
declare const TextCard: React.FC<TextInfo>;
export default TextCard;
