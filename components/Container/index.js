import React from 'react'
import css from 'styled-jsx/css'
import cn from 'clsx'

const Container = (props) => {
	const { children, className, style, contentClassName, contentStyle } = props
	return (
		<div className={cn('ac-container', className)} style={style}>
			<div className={cn('ac-content', contentClassName)} style={contentStyle}>
				{children}
			</div>
			<style jsx>{styles}</style>
		</div>
	)
}

const styles = css`
	.ac-container {
		width: 100%;
		padding-left: 16px;
		padding-right: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ac-content {
		width: 100%;
	}

	@media (min-width: 905px) {
		.ac-container {
			padding-left: 32px;
			padding-right: 32px;
		}
	}

	@media (min-width: 1240px) {
		.ac-container {
			padding-left: 148px;
			padding-right: 148px;
		}
	}

	@media (min-width: 1440px) {
		.ac-content {
			max-width: 1248px;
		}
	}
`

export default Container
