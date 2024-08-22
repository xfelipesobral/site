'use client'

import HomeHeader from '@/components/home/header'
import HomeSocials from '@/components/home/socials'

export default function Home() {
	return (
		<div>
			<div className='grid gap-10'>
				<HomeHeader />

				<HomeSocials />
			</div>
		</div>
	)
}
