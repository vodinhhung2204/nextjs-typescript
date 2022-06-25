import React from 'react'
import { Box } from '@mui/system'
import Container from '@/components/Container'
import Link from 'next/link'
import { useStyles } from './styles'

export const Header: any = () => {
	const classes = useStyles()

	return (
		<Box
			component="header"
			className="bg-color-green"
			sx={{
				height: '80px',
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
					justifyContent: 'flex-start',
				}}
			>
				{' '}
				<div className="flex flex-col justify-end items-center h-full">
					<div className="flex justify-between items-center h-full gap-x-4">
						<Box className={classes.itemMenuHeader}>
							<Link href="/">
								<a className={classes.itemMenuLink}>Home</a>
							</Link>
						</Box>
						<Box className={classes.itemMenuHeader}>
							<Link href="/about">
								<a className={classes.itemMenuLink}>About</a>
							</Link>
						</Box>
					</div>
				</div>
			</Container>
		</Box>
	)
}
