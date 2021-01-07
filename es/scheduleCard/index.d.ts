import React from 'react';
import './schedule.less';
declare type SheduleInfo = {
    title?: string;
    text: string;
    showData: any[];
    width?: number;
};
declare const ScheduleCard: React.FC<SheduleInfo>;
export default ScheduleCard;