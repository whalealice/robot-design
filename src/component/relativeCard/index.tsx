import React, { useState, useCallback, useEffect } from 'react'
import './relativelist.less'

type relativeInfo = {
	text?: string,
	size?: string,
	dataSource: any[],
	pageSize?: number, //显示几行 可选参数
	moreText?:string,
	onOk: (e?: any) => void,
}
const RelativeCard:React.FC<relativeInfo> = (props) => {
	const { text, size, dataSource, pageSize=3, moreText ,onOk} = props
	const [row, setRow] = useState<number>(0)
	useEffect(() => {
		setRow(pageSize)
	}, [pageSize])
	const showOther = useCallback(() => {
		if (row < dataSource.length) {
			setRow(row => row + pageSize)
		} else {
			setRow(pageSize)
		}
	}, [setRow, row, pageSize, dataSource])

	const renderList = useCallback(() => {
		return dataSource && dataSource.map((item, index) => {
			if (row - pageSize <= index && index < row) {
				return <li key={`${item.value}-${index}`} onClick={()=>onOk(item)}>{item.label}</li>
			}
		})
	}, [dataSource, pageSize, row])

	return (
		<div className={['robot-relative-wrapper', `${size ? `robot-relative-${size}` : 'robot-relative-default'} `].join(' ')}>
			<div className={'robot-relative-header'}>
				<div>{text || '您还可以这么问'}</div>
			</div>
			<ul className={'robot-relative-body'}>
				{renderList()}
			</ul>
			<div className={'robot-relative-footer'} onClick={showOther}>
				<span>{moreText}</span>
				<div className="vpa-iconfont icon-vap-drop-down"></div>
			
			</div>
		</div>
	)
}

export default RelativeCard
