import React from 'react';

const BAR_SIDE_MARGIN = 36

export const HippoBar = ({pageSectionIndex, pageSectionCount}) => {
	const isFirstSection = pageSectionIndex === 0
	const isLastSection = pageSectionIndex === pageSectionCount - 1
	
	const pageProgressPercentage = pageSectionIndex / (pageSectionCount - 1)
	const hippoLeftPosition = BAR_SIDE_MARGIN + pageProgressPercentage * (window.innerWidth - 2 * BAR_SIDE_MARGIN)
	const hippoTopPosition = isFirstSection ? '2em' : 8
	
	return (
		<div className="hippo-bar">
			<div>
				<span className="hippo-popup-mus" style={{fontSize: isFirstSection ? '3em' : '12px'}}>Hippo-popup-mus</span> | CARTO Popup Generator
			</div>
			<span
				className="hippo-emoji"
				role="img"
				aria-label="sheep"
				style={{
					left: hippoLeftPosition,
					top: hippoTopPosition,
				}}
			>
				🦛
			</span>
			{isLastSection && <div>
				🎉
			</div>}
		</div>
	)
}
