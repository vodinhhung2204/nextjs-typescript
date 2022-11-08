/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">smallText</p>
				<h3>MidText</h3>
				<h1>Large Text H1</h1>
				<img
					src={
						'https://cdn.sanity.io/images/vfxfwnaw/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'
					}
					alt="headphones"
					className="hero-banner-image"
				/>

				<div>
					<Link href={`/product/sanpham1`}>
						<button type="button">Click to buy</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>description 2</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroBanner
