import { Box } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

export const Footer: any = () => {
	const classes = useStyles()

	return <Box className={classes.containerFooter}>FOOTER</Box>
}
