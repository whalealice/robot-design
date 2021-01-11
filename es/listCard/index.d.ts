import React from 'react';
import './list.less';
declare type ListInfo = {
    text?: string;
    size?: string;
    width?: number;
    type?: string;
    dataSource: any[];
    pageSize?: number;
    onOk: (e?: any) => void;
};
declare const ListCard: React.FC<ListInfo>;
export default ListCard;
