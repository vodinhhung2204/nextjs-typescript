import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainLayout } from '@/components/Layout/index'
import Head from 'next/head'
import Box from '@mui/material/Box'
import HomePage from '@/containers/HomePage'

const Home: NextPage = () => {
	return (
		<MainLayout className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage />
		</MainLayout>
	)
}

export default Home
