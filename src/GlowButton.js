import React from 'react'

export const GlowButton = ({children, onClick}) => (
	<button className="glow-on-hover" type="button" onClick={onClick}>{children}</button>
)
