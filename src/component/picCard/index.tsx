import React from 'react'
import { TextCard } from '../../main.js'
import './pic.less'

type PicInfo = {
	text?: string,
	image: string,
	link?: string,
	size?:string,
}
const PicCard: React.FC<PicInfo> = (props) => {
	const { text, image, link, size } = props
	if (link) {
		return (
			<div className={['robot-pic-wrapper', `${size ? `robot-pic-${size}` : 'robot-pic-default'} `].join(' ')}>
				<a className={'robot-pic-img-text'} href={link} target={'_blank'} rel={'noopener noreferrer'}>
					{text}
				</a>
				<img
					className={'robot-pic-img'}
					src={image}
					alt={text}
				/>
			</div>
		)
	}
	return (
		<div className={['robot-pic-wrapper', `${size ? `robot-pic-${size}` : 'robot-pic-default'} `].join(' ')}>
			{text ? <div className={'robot-pic-img-text'} >{text}</div> : null }
			<img
				className={'robot-pic-img'}
				src={image}
				alt={text}
			/>
		</div>
	)
}

export default PicCard
