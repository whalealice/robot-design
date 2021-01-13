import React, { Fragment, useContext, useEffect } from 'react'
// import { ConfigContext } from 'common/context'
import './styles.less'

type OpenServiceInfo = {
	text: string,
	title: string,
	icon?: string,
}
const OpenService:React.FC<OpenServiceInfo> = (props) => {
	const {text, title, icon} = props
	// const { text, title, modelID } = t
	// const xyCtx = useContext(ConfigContext)
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		// if(modelID !== 18){
		// 	const { cardAction: { param: { appParams: { params: { app: { serviceCode } } } } }} = t
		// 	if (serviceCode) {
		// 		// xyCtx.workbenchTool.dispatch('openService', {
		// 		// 	serviceCode,
		// 		// 	data: {}
		// 		// })
		// 	}
		// }
		
	}, [])
	/* eslint-enable */
	return (
		<Fragment>
			<div className={'xiaoyou-msg-text'}>{text}</div>
			<div className={'xiaoyou-card-wrapper'}>
				<div className={'xiaoyou-application-body'}>
					<img className={'xiaoyou-chat-imgS'} src={icon} alt='' />
					<span>{title}</span>
				</div>

			</div>
		</Fragment>
	)
}


export default OpenService
