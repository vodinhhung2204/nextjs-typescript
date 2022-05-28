import React from 'react'
import { Box } from '@mui/system'
import Container from '@/components/Container'
import Link from 'next/link'
import { useStyles } from './styles'

export const Header: any = () => {
	return (
		<Box
			component="header"
			className="bg-color-green"
			sx={{
				height: '44px',
				padding: '0 24px',
				backgroundColor: '#F8F9FA',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Container
				style={{ height: '100%' }}
				contentStyle={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				{' '}
				<div className="flex justify-end items-center h-100">
					<div className="flex justify-between gap-x-4 items-center h-100 ">
						<div className="cursor-pointer">
							<Link href="/">
								<a>Home</a>
							</Link>
						</div>
						<div className="cursor-pointer">
							<Link href="/about">
								<a>About</a>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</Box>
	)
}
