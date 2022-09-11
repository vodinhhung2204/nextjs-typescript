import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache, theme } from '@/utils/index'
import { ThemeProvider } from '@mui/material/styles'
import '../styles/index.css'
import { wrapper } from '@/redux/store'
import { SessionProvider } from 'next-auth/react'

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
const clientSideEmotionCache = createEmotionCache()
const MyApp = (props: any) => {
	const { Component, pageProps, session } = props
	const emotionCache = clientSideEmotionCache
	return (
		<SessionProvider session={session}>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</SessionProvider>
	)
}

export default wrapper.withRedux(MyApp)
