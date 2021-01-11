import React, { useState, useCallback, useEffect } from 'react'
import { TextCard } from '../../main.js'
import { RadioGroup, Radio } from '../radio/radio'
import { CheckboxGroup, Checkbox } from '../checkbox/checkbox'
import './list.less'


type ListInfo = {
	text?: string,
	size?: string,
	width?: number,
	type?: string, // 'radio' 'checkbox'
	listData: any[],
	pageSize?: number, //显示几行 可选参数
	onOk: (e?: any) => void,
	// defaultValue?: any,
}

const ListCard: React.FC<ListInfo> = (props) => {
	const { text, size, width, type, listData, pageSize = 3, onOk } = props
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
		onOk(params)

	}

	const onMore = useCallback(() => {
		setRow((r) => r + pageSize)
	}, [setRow])

	const onCheckboxChange = (value: any) => {
		setCheckboxVal(value)
	}
	const onRadioChange = (value: any) => {
		setRadioVal(value)
	}
	return (
		<div className={`${size ? `robot-list-${size}` : 'robot-list-default'} `}>
			<TextCard text={text || '选择列表'} size={size ? size : 'default'} />
			<div className={'robot-list-card'} style={{ width: width ? `${width}px` : '260px' }}>
				<div className={'robot-list-title'}>
					选择列表
				</div>
				<div className={'robot-list-body'}>
					{type === 'radio' ?
						<RadioGroup
							onChange={(value: any) => onRadioChange(value)}>
							{listData && listData.map((item, index) => {
								if (index < row) {
									return <Radio key={item.value} value={item.value} className={'robot-list-option'}>{item.label}</Radio>
								}
							})}
						</RadioGroup>
						:
						<CheckboxGroup
							onChange={(value) => onCheckboxChange(value)}
						>
							{listData && listData.map((item, index) => {
								if (index < row) {
									return <Checkbox key={item.value} value={item.value} className={'robot-list-option'}>{item.label}</Checkbox>
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
