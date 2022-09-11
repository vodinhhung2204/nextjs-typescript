import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
	itemMenuHeader: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// padding: '0 12px',
		minHeight: '44px',
		'&:hover': {
			borderBottom: '2px solid orange',
		},
		listStyleType: 'none',
	},
	itemMenuLink: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))
