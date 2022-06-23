import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useStyles } from './styles'
import { styled } from '@mui/material/styles'
import { red, green, blue } from '@mui/material/colors'

const Index = () => {
	const classes = useStyles()

	const Root = styled('div')(({ theme }) => ({
		padding: theme.spacing(1),
		[theme.breakpoints.down('md')]: {
			color: red[500],
		},
		[theme.breakpoints.up('md')]: {
			color: blue[500],
		},
		[theme.breakpoints.up('lg')]: {
			color: green[500],
			fontSize: '44px',
		},
	}))
	return (
		<Container>
			<div className="flex flex-row flex-auto m-8 gap-[16px]">
				<div className="flex-col max-w-[70%] justify-center ">
					<div className="md:text-[44px] font-bold flex sm:text-[28px]">
						Hi, I am xxxx <br /> xxxxxxxxxxxx
					</div>

					<div className="text-[16px]">
						<Root>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Root>
					</div>
					<div className="h-auto flex mt-[16px]">
						<Button
							variant="contained"
							className={classes.customButton}
							onClick={() => console.log('button action')}
						>
							Button
						</Button>
					</div>
				</div>
				<div className="flex-col max-w-[30%] ">
					<Image
						src="https://picsum.photos/seed/picsum/200/300"
						layout="fixed"
						height="300"
						width="300"
						className="rounded-full md:width-[300px] height-[300px] sm: width-[200px] height-[200px]"
						alt="avatar"
					></Image>
				</div>
			</div>
		</Container>
	)
}
export default Index
