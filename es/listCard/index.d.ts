import React from 'react';
import './list.less';
declare type ListInfo = {
    text?: string;
    size?: string;
    width?: number;
    type?: string;
    listData: any[];
    pageSize?: Number;
};
declare const ListCard: React.FC<ListInfo>;
export default ListCard;
