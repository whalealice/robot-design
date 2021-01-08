import React from 'react'
import conferenceIcon from '../../public/img/conference.svg'

import './schedule.less'
import {TextCard} from '../../main.js'
 
type SheduleInfo = {
	title?:string,
	text: string,
	showData: any[],
	width?: number,
	size?: string,
}

const ScheduleCard:React.FC<SheduleInfo> = (props) => {
	const { title, text, showData, size, width } = props
	return (
		<div className={`${size ? `robot-schedule-${size}` : 'robot-schedule-default'} `}>
			<TextCard text={text} size={size ? size : 'default'}/>
			<div className='robot-schedule-card' style={{width: width ? `${width}px` : '260px'}}>
				<div className='robot-schedule-header'>
					<img src={conferenceIcon} alt={title || '日程'}/>
					<span>{title || '这是标题'}</span>
				</div>
				{showData && showData.map((item, index)=>{
					return <div className='robot-schedule-item' key={index}>
						<span>
							<img src={item.img || 'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/topic.svg'} alt={'主题'} />
						</span>
						<span>{item.title}</span>
						<span>{item.text}</span>
					</div>
				})}
			</div>
		</div>
	)
}


export default ScheduleCard
