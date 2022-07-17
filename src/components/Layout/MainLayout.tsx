import React from 'react'
import { Header, Footer } from '@/components/Common/index'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export const MainLayout: any = ({ children }: any) => {
	return (
		<Stack minHeight={'100vh'}>
			<Header></Header>
			{children}
			<Footer></Footer>
		</Stack>
	)
}
