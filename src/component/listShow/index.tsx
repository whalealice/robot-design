import React, { useState, useEffect, useCallback } from 'react'

import './listshow.less'

type listshowInfo = {
	text?: string,
	size?: string,
	pageSize?: number, //显示几行 可选参数
	moreText?:string,
	dataSource: any[],
	onOk: (e?: any) => void,
}
const ListShow: React.FC<listshowInfo> = (props) => {
	const {moreText, pageSize=3, dataSource, size } = props
	const [baseRow, setBaseRow] = useState(0)


	useEffect(
		() => {
			setBaseRow(pageSize)
		},
		[pageSize]
	)

	const showMore = useCallback(
		() => {
			setBaseRow(pageSize => pageSize + 3)
		},
		[setBaseRow]
	)

	const renderList = useCallback(
		() => {
			return dataSource.map((item, index) => {
				if (index < baseRow) {
					return (
						<li key={`model4-${index}`}>
							{item.label}
						</li>
					)
				}

			})
		},
		[dataSource, baseRow]
	)

	return (
		<div className={['robot-list-show-wrapper', `${size ? `robot-list-show-${size}` : 'robot-list-show-default'} `].join(' ')}>
			<ul className={'robot-list-show-body'}>
				{renderList()}
			</ul>
			<div className={'robot-list-show-footer'} onClick={showMore}>
				{moreText}
			</div>
		</div>
	)
}

export default ListShow