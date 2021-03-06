import React from 'react';
import './schedule.less';
declare type SheduleInfo = {
    title?: string;
    text: string;
    dataSource: any[];
    width?: number;
    size?: string;
};
declare const ScheduleCard: React.FC<SheduleInfo>;
export default ScheduleCard;
