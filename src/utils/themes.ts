import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthSm: {
					'@media (min-width:600px)': {
						maxWidth: '680px',
					},
				},
			},
			defaultProps: {},
			variants: [],
		},
	},
})
