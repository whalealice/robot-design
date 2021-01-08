import React from 'react'
import './text.less'

type TextInfo = {
	text: string,
	link?: string,
	size?: string, // default ,large, small
}

const TextCard:React.FC<TextInfo> = (props) =>{
	const {text, link , size} = props
	if (link) {
		return (
			<div className={`robot-text-wrapper ${size ? `robot-text-${size}` : 'robot-text-defalut'} `} >
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
	return (<div className={`robot-text-wrapper ${size ? `robot-text-${size}` : 'robot-text-default'} `}>{text}</div>)
}

export default TextCard
