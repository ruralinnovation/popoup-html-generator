import React, {useCallback, useState} from 'react';

export const HippoBar = ({pageSectionIndex = 0}) => {
	return (
		<div className="hippo-bar">
			<div><span className="name">Hippo-popup-mus</span> | CARTO Popup Generator</div>
			<span className="hippo-emoji" role="img" aria-label="sheep">🦛</span>
		
		</div>
	)
}
