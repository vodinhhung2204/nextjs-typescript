import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache, theme } from '@/utils/index'
import { ThemeProvider } from '@mui/material/styles'
import '../styles/index.css'
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
const clientSideEmotionCache = createEmotionCache()
const MyApp = (props: AppProps) => {
	const { Component, pageProps } = props
	const emotionCache = clientSideEmotionCache
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
