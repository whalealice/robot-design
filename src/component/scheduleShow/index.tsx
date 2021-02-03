import React, { useState, useCallback, useEffect } from 'react'
import './scheduleShow.less'
import {TextCard} from '../../main.js'

type ScheduleShowInfo={
	text: string,
	size?: string,
	icon?: string,
	title: string, // 标题
	creatTime: string,
	dataSource: any[],
	pageSize?: number, //显示几行 可选参数
	width?: number,
	onOk: (e?: any) => void,
}

const ScheduleShow:React.FC<ScheduleShowInfo> = (props) => {
	const {text, size, icon, title, creatTime, dataSource, pageSize = 5, onOk} = props
	const [row, setRow] = useState<number>(0)
	const [showMore, setShowMore] = useState(false)
	
	useEffect(() => {
		setRow(pageSize)
	}, [])
	const onSure = (index)=>{
		onOk({ msg: `第${index + 1}个`})
	}
	const onShowMore = ()=>{
		setRow(showMore ? pageSize : dataSource.length )
		setShowMore(more => !more)
	}
	const renderList = useCallback(() => {
		return dataSource && dataSource.map((item, index) => {
			if (index < row) {
			return (
				<li key={item.value + index}>
					<div className={'robot-schedule-show-line'}>
						<span style={{background: item.color}}></span>
						<span style={{borderLeft: `1px solid ${item.color}`, height: index === 0 ? '51px' : '56px', top: index === 0 ? '5px' : '0px'}}></span>
					</div>
					<div className={'robot-schedule-show-time'}>
						<div>{item.startTime}</div>
						<div>{item.endTime}</div>
					</div>
					<div 
						className={'robot-schedule-show-text'} 
						onClick={()=>{onSure(index)}}
					>
						<h4>{item.value}</h4>
						{item.from ? <h5>{item.from}</h5> : null}
					</div>
				</li>
			)
			}
		})
	}, [row, dataSource, onSure])
	return (
		<div className={`${size ? `robot-schedule-show-${size}` : 'robot-schedule-show-default'} `}>
			<TextCard text={text} size={size ? size : 'default'}/>
			<div className={'robot-schedule-show-card'}>
				<div className={'robot-schedule-show-header'}>
					<img src={icon || 'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/scheduleApp.png'} alt={'主题'} />
					<span>{title}</span>
				</div>
				<div>
					<h3 className={'robot-schedule-show-title'}>{creatTime}</h3>
					<ul className={'robot-schedule-show-list'}>
						{renderList()}
					</ul>
					{
						dataSource.length > pageSize ? 
							<div className={'robot-schedule-show-more'} onClick={onShowMore}>
								<div>{showMore ? '收起' : '展开'}</div>
								<i className="vpa-iconfont icon-vap-drop-down" style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0)', marginTop: showMore ? '4px' : '-3px' }} ></i>
							</div> 
						:
						null
					}
					
				</div>
			</div>
		</div>
	)
}


export default ScheduleShow
