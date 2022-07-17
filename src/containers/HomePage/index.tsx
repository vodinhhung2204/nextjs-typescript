import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useStyles } from './styles.ts'
import { styled } from '@mui/material/styles'
import { red, green, blue } from '@mui/material/colors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectData } from './selectors'
const Index: React.FC = (props) => {
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
	const data = props.data
	console.log('data tu reducer', data)
	return (
		<div className="flex flex-row flex-auto m-8 gap-[16px]">
			<div className="flex-col max-w-[70%] justify-center ">
				<div className="md:text-[44px] font-bold flex sm:text-[28px]">Homepage</div>

				<div className="text-[16px]">
					<Root>Content</Root>
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
			{/* <div className="flex-col max-w-[30%] ">
				<Image
					src="https://picsum.photos/seed/picsum/200/300"
					layout="fixed"
					height="300"
					width="300"
					className="rounded-full md:width-[300px] height-[300px] sm: width-[200px] height-[200px]"
					alt="avatar"
				></Image>
			</div> */}
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	data: makeSelectData(),
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
