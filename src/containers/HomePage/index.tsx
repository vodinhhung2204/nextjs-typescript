import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useStyles } from './styles'
import { styled } from '@mui/material/styles'
import { red, green, blue } from '@mui/material/colors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectData } from './selectors'
import { Footer } from '@/components/Common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Demo from 'public/images/demo.jpg'
import { HeroBanner, Carousel, Product } from '@/components/index'
const Index: React.FC = (props: any) => {
	const classes = useStyles()
	const router = useRouter()

	const data = props.data
	const { bannerData } = props
	console.log('data tu reducer', data)

	return (
		<div className="w-screen">
			<HeroBanner />
			<div className="products-heading">
				<h2>Best Seller Products</h2>
				<p>speaker There are many variations passages</p>
			</div>
			<div className="products-container">
				{data?.map((product: any) => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	data: makeSelectData(),
})
const mapDispatchToProps = (dispatch: any) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
