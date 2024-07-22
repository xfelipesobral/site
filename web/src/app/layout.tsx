import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Felipe V. Sobral',
	description: 'Olá, me chamo Felipe!',
	applicationName: 'Felipe V. Sobral',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {

	return (
		<html lang='pt-BR'>
			<body className={inter.className}>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Felipe V. Sobral',
							url: 'https://felipesobral.com.br',
							sameAs: [
								'https://www.instagram.com/xfelipesobral',
								'https://github.com/xfelipesobral',
								'https://www.linkedin.com/in/felipesobralfs'
							]
						})
					}}
				/>
				{children}
			</body>
		</html>
	)
}
