import React from 'react'
import conferenceIcon from '../../public/img/conference.svg'

import './schedule.less'
 
type SheduleInfo = {
	title?:string,
	text: string,
	showData: any[],
	width?: number,
}

const ScheduleCard:React.FC<SheduleInfo> = (props) => {
	const { title, text, showData } = props
	return (
		<div className='robot-schedule-wrapper'>
			<div className='robot-schedule-text'>{text}</div>
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
			{/* <div className={'xiaoyou-card-wrapper'}>
				<div className={'xiaoyou-schedule-header'}>
					<img src={conferenceIcon} alt='日程'/>
					<span>{modelID === 17 ? '日程' : '会议' }</span>
				</div>
				{
					modelID === 17 ? 
				
				<div className={'xiaoyou-schedule-body'}>
					<div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/topic.svg'} alt={'主题'} />
						</span>
						<span>主题</span>
						<span>{showData.topic}</span>
					</div>
					<div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/time.svg'} alt={'时间'} />
						</span>
						<span>时间</span>
						<span>{showData.time}</span>
					</div> */}
					{/* <div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/participate.svg'} alt={'参与人'} />
						</span>
						<span>参与</span>
						<span></span>
					</div> */}
				{/* </div> : 
				<div className={'xiaoyou-schedule-body'}>
					<div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/topic.svg'} alt={'主题'} />
						</span>
						<span>主题</span>
						<span>{showData.topic}</span>
					</div>
					<div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/time.svg'} alt={'时间'} />
						</span>
						<span>时间</span>
						<span>{showData.time}</span>
					</div>
					<div className={'xiaoyou-schedule-item'}>
						<span>
							<img src={'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/participate.svg'} alt={'参与人'} />
						</span>
						<span>地点</span>
						<span>{showData.location}</span>
					</div> */}
					 {/* <Button className={'xiaoyou-schedule-button'} type='primary'>创建会议</Button> */}
				{/* </div>
				}
			</div> */}
		</div>
	)
}


export default ScheduleCard
