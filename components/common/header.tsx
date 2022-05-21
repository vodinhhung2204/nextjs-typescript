import React from 'react'
import { Box } from '@mui/system'

export const Header: any = () => {
	return (
		<Box
			component="header"
			className="bg-color-green"
			sx={{
				height: '44px',
				display: 'flex',
				justifyContent: 'space-between',
				padding: '0 24px',
				backgroundColor: '#F8F9FA',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
			}}
		>
			{' '}
			<div className="flex"></div>
			<div className="flex justify-between gap-x-4 items-center h-100 ">
				<div className="cursor-pointer">Home</div>
				<div className="cursor-pointer">About</div>
			</div>
		</Box>
	)
}
