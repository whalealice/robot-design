import React from 'react'
import '../../styles/mixins.less'

type TextInfo = {
	text: string,
	link?: string,
}

const TextCard:React.FC<TextInfo> = (props) =>{
	const {text, link } = props
	if (link) {
		return (
			<div className="robot-msg-wrapper">
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
	return (<div className="robot-msg-wrapper">{text}</div>)
}

export default TextCard
