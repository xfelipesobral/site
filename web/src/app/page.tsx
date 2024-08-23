'use client'

import { useEffect, useRef, useState } from 'react'

import { apiLastItems, LastItem } from '@/api/lastitems'

import HomeGames from '@/components/home/games'
import HomeHeader from '@/components/home/header'
import HomeSocials from '@/components/home/socials'


export default function Home() {
	const [lastItems, setLastItems] = useState<LastItem[]>([])

	const refTimeout = useRef<number>()

	useEffect(() => {
		window.clearTimeout(refTimeout.current)

		refTimeout.current = window.setTimeout(() => {
			findLastItems()
		}, 300)
	}, [])

	const findLastItems = async () => {
		const items = await apiLastItems()
		setLastItems(items)
	}

	const lastGames = lastItems.filter(item => item.type === 'GAME')

	return (
		<div>
			<div className='grid gap-10'>
				<HomeHeader />

				<HomeSocials />

				<HomeGames lastGames={lastGames} />
			</div>
		</div>
	)
}
