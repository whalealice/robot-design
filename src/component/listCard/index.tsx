import React, { useState, useCallback, useEffect, Fragment, useRef } from 'react'
// import { Checkbox, Radio } from 'antd'
import {TextCard} from '../../main.js'
import  {RadioGroup, Radio}  from '../radio/radio.jsx'
import './list.less'


type ListInfo = {
	text?: string,
	size?: string,
	width?: number,
	type?: string, // 'radio' 'checkbox'
	listData: any[],
	pageSize?: Number, //显示几行
}

const ListCard:React.FC<ListInfo> = (props) => {
	const { text, size, width, type, listData  } = props

	// const { text, showData: { content }, modelID, nodeId, contextid } = t
	// const { modelData, showData: { listData } } = content
	// const [row, setRow] = useState(0)
	// const [radioVal, setRadioVal] = useState('')
	// const [checkboxVal, setCheckboxVal] = useState([])

	// useEffect(() => {
	// 	setRow(modelData.row)
	// }, [modelData, setRow])

	// const onClickSure = useCallback(() => {
	// 	if (
	// 		(modelID === 102 && !radioVal) ||
	// 		(modelID === 103 && !checkboxVal.length)
	// 	) {
	// 		return
	// 	}
	
	// 	const params = {
	// 		msg: modelID === 102 ? radioVal : checkboxVal.join(','),
	// 		askForCanvasNodeId: nodeId,
	// 		askForContextId: contextid,
	// 		sendRightMsg: true,
	// 	}
	// 	clickToSend(params)
	
	// }, [
	// 	modelID,
	// 	radioVal,
	// 	checkboxVal,
	// 	nodeId,
	// 	contextid,
	// 	clickToSend,
	// ])

	// const showMore = useCallback(() => {
	// 	setRow((r) => r + 3)
	// }, [setRow])

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
	const onGroupChange = (e)=> {
        console.log('ffff', e.target.value);
    }
	return (
		<div className={`${size ? `robot-list-${size}` : 'robot-list-default'} `}>
			<TextCard text={text} size={size ? size : 'default'}/>
			<div className={'robot-list-card'} style={{width: width ? `${width}px` : '260px'}}>
				<div className={'robot-list-title'}>
					选择列表
				</div>
				<div className={'robot-list-body'}>
					{type === 'radio' ? 
					<RadioGroup
						name="listRadio" 
						onChange={(e) => onGroupChange(e)}>
						{listData && listData.map((item)=>{
						
								return <Radio value={item.value} className={'robot-list-option'}>{item.label}</Radio>
							
							
						})}
					</RadioGroup>
						// <form ref={radioForm as React.RefObject<HTMLInputElement>}>
						// 	{listData && listData.map((item, index)=>{
						// 		if(pageSize && index < pageSize){
						// 			return (
						// 				<div
						// 					key={`options-${index}`}
						// 					className={'robot-list-option'}
						// 				>
						// 					<input type="radio" name="listradio" id={item.value} className={'robot-list-radio'}></input>
						// 					<div title={item.name}>{item.name}</div>
						// 				</div>
						// 			)
						// 		}else{
						// 			return (
						// 				<div
						// 					key={`options-${index}`}
						// 					className={'robot-list-option'}
						// 				>
						// 					<input type="radio" name="listradio" id={item.value}className={'robot-list-radio'}></input>
						// 					<div title={item.name}>{item.name}</div>
						// 				</div>
						// 			)
						// 		}
						// 	})}
							

						// </form>
						: null

					}
				</div>
				<div className={'robot-list-footer'}>
					{/* <span onClick={onClickSure}>
						确定
					</span>
					<span onClick={showMore}>{modelData.bottom}</span> */}
				</div>
			</div>
		</div>
	)
}

export default ListCard
