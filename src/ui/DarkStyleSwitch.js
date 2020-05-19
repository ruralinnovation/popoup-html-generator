import React from 'react'
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


export const DarkStyleSwitch = ({isDarkStyle, onToggle}) => (
	<div className={`dark-style-switch ${isDarkStyle && 'is-dark-style'}`} style={{display: 'flex'}}>
		<div className={'text'}>Light style</div>
		<Switch
			checkedChildren={<CheckOutlined />}
			unCheckedChildren={<CloseOutlined />}
			checked={isDarkStyle}
			onClick={onToggle}
		/>
		<div className={'text'}>Dark style</div>
	</div>
)
