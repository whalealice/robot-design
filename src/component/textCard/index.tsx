import React from 'react'
import './text.less'

type TextInfo = {
	text: string,
	link?: string,
	type?: string, // default ,large, small
}

const TextCard:React.FC<TextInfo> = (props) =>{
	const {text, link , type} = props
	if (link) {
		return (
			<div className={`robot-text-wrapper ${type ? `robot-text-${type}` : 'robot-text-defalut'} `} >
				<a
					href={link}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					{text}
				</a>
			</div>
		)
	}
	return (<div className={`robot-text-wrapper ${type ? `robot-text-${type}` : 'robot-text-default'} `}>{text}</div>)
}

export default TextCard
