import React, { useState, useCallback, useEffect, Fragment, useRef } from 'react'
// import { Checkbox, Radio } from 'antd'
import {TextCard} from '../../main.js'
import  {RadioGroup, Radio}  from '../radio/radio.jsx'
import  {CheckboxGroup, Checkbox}  from '../checkbox/checkbox'
import './list.less'


type ListInfo = {
	text?: string,
	size?: string,
	width?: number,
	type?: string, // 'radio' 'checkbox'
	listData: any[],
	pageSize?: number, //显示几行 可选参数
	onOk: (e?:any) => void,
	// defaultValue?: any,
}

const ListCard:React.FC<ListInfo> = (props) => {
	const { text, size, width, type, listData, pageSize= 3, onOk  } = props

	// const { text, showData: { content }, modelID, nodeId, contextid } = t
	// const { modelData, showData: { listData } } = content
	const [row, setRow] = useState<number>(0)
	const [radioVal, setRadioVal] = useState<string>('')
	const [checkboxVal, setCheckboxVal] = useState<any[]>([])

	useEffect(() => {
		setRow(pageSize)
	}, [])

	const onSure = () => {
		if (
			(type === 'radio' && !radioVal) ||
			(type === 'checkbox' && !checkboxVal)
		) {
			return false
		}
	
		const params = {
			msg: type === 'radio' ? radioVal : checkboxVal.join(','),
			sendRightMsg: true,
		}
		console.log('444', params)
		onOk(params)
	
	}

	const onMore = useCallback(() => {
		setRow((r) => r + pageSize)
		}, [setRow])

	// const radioChange = useCallback(
	// 	(e) => {
	// 		setRadioVal(e.target.value)
	// 	},
	// 	[setRadioVal]
	// )

	// const checkboxChange = useCallback(
	// 	(value) => {
	// 		setCheckboxVal(value)
	// 	},
	// 	[setCheckboxVal]
	// )

	// const renderListBody = useCallback(() => {
	// 	if (modelID === 102) {
	// 		return (
	// 			<Radio.Group onChange={radioChange} value={radioVal}>
	// 				{listData.map((item, index) => {
	// 					const {
	// 						itemclickParam: { text },
	// 					} = item
	// 					if(index < row) {
	// 						return (
	// 							<div
	// 								key={`options-${index}`}
	// 								className={'xiaoyou-list-option'}
	// 							>
	// 								<Radio value={text} />
	// 								<div title={item.name}>{item.name}</div>
	// 							</div>
	// 						)
	// 					}
						
	// 				})}
	// 			</Radio.Group>
	// 		)
	// 	}
	// 	return (
	// 		<Checkbox.Group onChange={checkboxChange} value={checkboxVal}>
	// 			{listData.map((item, index) => {
	// 				if (index < row) {
	// 					return (
	// 						<div
	// 							key={`options-${index}`}
	// 							className={'xiaoyou-list-option'}
	// 						>
	// 							<Checkbox value={item.itemclickParam.text} />
	// 							<div title={item.name}>{item.name}</div>
	// 						</div>
	// 					)
	// 				}
	// 			})}
	// 		</Checkbox.Group>
	// 	)
	// }, [
	// 	modelID,
	// 	listData,
	// 	row,
	// 	radioVal,
	// 	checkboxVal,
	// 	radioChange,
	// 	checkboxChange,
	// ])
	const onCheckboxChange = (value:any)=>{
		console.log('aaa',value)
		setCheckboxVal(value)
	}
	const onRadioChange = (value:any)=> {
		console.log('aaa',value)
		setRadioVal(value)
    }
	return (
		<div className={`${size ? `robot-list-${size}` : 'robot-list-default'} `}>
			<TextCard text={text || '选择列表'} size={size ? size : 'default'}/>
			<div className={'robot-list-card'} style={{width: width ? `${width}px` : '260px'}}>
				<div className={'robot-list-title'}>
					选择列表
				</div>
				<div className={'robot-list-body'}>
					{type === 'radio' ? 
						<RadioGroup
							name="listRadio" 
							onChange={(value:any) => onRadioChange(value)}>
							{listData && listData.map((item, index)=>{
								if(index < row){
									return <Radio value={item.value} className={'robot-list-option'}>{item.label}</Radio>	
								}
							})}
						</RadioGroup>
						: 
						<CheckboxGroup 
							name="listCheckbox" 
							onChange={(value) => onCheckboxChange(value)}
						>
							{listData && listData.map((item, index)=>{
								if(index < row){
									return <Checkbox value={item.value} className={'robot-list-option'}>{item.label}</Checkbox>	
								}
							})}
						</CheckboxGroup>

					}
				</div>
				<div className={'robot-list-footer'}>
					<span onClick={onSure}>确定</span>
					<span onClick={onMore}>加载更多</span>
				</div>
			</div>
		</div>
	)
}

export default ListCard
