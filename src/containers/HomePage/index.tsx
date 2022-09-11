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
import { Footer } from '@/components/Common'
import Carousel from '@/components/Carousel/Carousel'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductCardDemo from '@/components/ProductCardDemo'
import Demo from 'public/images/demo.jpg'

const Index: React.FC = (props: any) => {
	const classes = useStyles()
	const router = useRouter()

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
	const luxuryProducts = [
		{
			images: Demo,
			description: 'hihihihi',
			price: 500,
			salePrice: 300,
			slug: '/xxx',
			sold: 300,
			title: 'Title',
			likes: 300,
			inStock: 400,
			_id: 1,
			tags: ['tag1', 'tag2'],
		},
		{
			images: Demo,
			description: 'hihihihi',
			price: 500,
			salePrice: 300,
			slug: '/xxx',
			sold: 300,
			title: 'Title',
			likes: 300,
			inStock: 400,
			_id: 1,
			tags: ['tag1', 'tag2'],
		},
	]
	return (
		<div className="max-w-screen flex flex-row flex-auto m-8 gap-[16px]">
			<div className="flex-col justify-center w-full ">
				<Carousel />
				<div className="h-auto flex mt-[16px]">
					<section id="luxury-product" className="pb-4 w-full">
						<div className="w-full rounded-t md:h-14 h-16 mb-2 bg-indigo-500 flex items-center justify-between">
							<span className="ml-4 text-2xl uppercase font-semibold text-white">
								Hàng cao cấp bán chạy
							</span>
							<span className="hover:text-gray-200 text-white mr-2">
								<Link href={'/products/categories/best-sale'}>
									<a>
										<span className="hidden md:block">Xem thêm</span>
										<span className="md:hidden">&#10093;</span>
									</a>
								</Link>
							</span>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-0 w-full">
							<div
								className="w-full shadow relative border p-4 my-3 md:my-0 h-96 md:h-auto cursor-pointer"
								onClick={() => router.push('/san-pham/danh-muc-chinh/cao-cap')}
							>
								<Image
									src={Demo}
									alt="product"
									className="md:object-cover object-fill"
									layout="fill"
									priority
								></Image>
							</div>
							{luxuryProducts.map((product) => (
								<ProductCardDemo key={product._id} {...product} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	data: makeSelectData(),
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
