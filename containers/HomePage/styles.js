import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles(() => ({
	customButton: {
		color: '#FFFFFF',
		backgroundColor: 'blue',
		'&:hover': {
			backgroundColor: 'black',
		},
	},
	customText: {
		fontSize: '33px',
	},
}))
