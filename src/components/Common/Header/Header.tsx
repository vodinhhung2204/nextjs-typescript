import React from 'react'
import { Box } from '@mui/system'
import Container from '@/components/Container'
import Link from 'next/link'
import { useStyles } from './styles.js'
import cn from 'classnames'
import { useState } from 'react'

export const Header: any = () => {
	const classes = useStyles()
	const [showMenu, setShowMenu] = useState(false)

	return (
		<Box
			component="header"
			className="bg-color-green"
			sx={{
				height: '60px',
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
					<div className="flex justify-between items-center h-full ">
						<Box className={classes.itemMenuHeader}>
							<Link href={`/`}>
								<li className="relative navbar-parent">
									<span className="flex justify-between md:inline-flex p-4  items-center hover:bg-['grey'] cursor-pointer space-x-2">
										<span>Trang chủ</span>
									</span>
								</li>
							</Link>
						</Box>
						<Box className={classes.itemMenuHeader}>
							<li className="relative navbar-parent">
								<span className="flex justify-between md:inline-flex p-4 items-center hover:bg-slate-200 cursor-pointer space-x-2">
									<span>Cao cấp</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4 fill-current pt-1"
										viewBox="0 0 24 24"
									>
										<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
									</svg>
								</span>
								<ul className="z-[60] navbar-child transition duration-300 md:absolute top-full right-0 md:w-32 md:shadow-lg md:rounded-b ">
									<li className="">
										<Link href={`/danh-muc/xxx`}>
											<a className="flex px-4 py-3 bg-[#F8F9FA] hover:bg-slate-200">name</a>
										</Link>
									</li>
									<li className="">
										<Link href={`/danh-muc/xxx`}>
											<a className="flex px-4 py-3 bg-[#F8F9FA] hover:bg-slate-200">name 2</a>
										</Link>
									</li>
								</ul>
							</li>
						</Box>
						<Box className={classes.itemMenuHeader}>
							<Link href={`/about`}>
								<li className="relative navbar-parent">
									<span className="flex justify-between md:inline-flex p-4 items-center hover:bg-['grey'] cursor-pointer space-x-2">
										<span>About</span>
									</span>
								</li>
							</Link>
						</Box>
					</div>
				</div>
			</Container>
		</Box>
	)
}
