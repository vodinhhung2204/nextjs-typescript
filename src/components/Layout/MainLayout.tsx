import React from 'react'
import { Header, Footer } from '@/components/Common/index'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export const MainLayout: any = ({ children }: any) => {
	return (
		<div className="bg-gray-100 w-full min-h-screen">
			<Header></Header>
			<div className="max-w-screen flex justify-items-center items-center z-[50]">{children}</div>
			<Footer></Footer>
		</div>
	)
}
