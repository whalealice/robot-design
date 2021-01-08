import React from 'react'
import conferenceIcon from '../../public/img/conference.svg'

import './schedule.less'
import {TextCard} from '../../main.js'
 
type SheduleInfo = {
	title?:string,
	text: string,
	showData: any[],
	width?: number,
	type?: string,
}

const ScheduleCard:React.FC<SheduleInfo> = (props) => {
	const { title, text, showData, type } = props
	return (
		<div className={`robot-schedule-wrapper ${type ? `robot-schedule-${type}` : 'robot-schedule-default'} `}>
			<TextCard text={text} type={type ? type : 'default'}/>
			<div className='robot-schedule-card' style={{width:'260px'}}>
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
