import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Felipe Sobral',
	description: 'Olá, me chamo Felipe. Sou desenvolvedor Mobile & Web. Vamos conversar?',
	applicationName: 'Felipe Sobral',
	keywords: ['Felipe Sobral', 'Felipe', 'Sobral', 'Desenvolvedor', 'Paraná', 'Brazil', 'Brasil', 'PR', 'BR', 'Developer', 'Programmer', 'Desenvolvedor Mobile', 'Desenvolvedor Web', 'Aplicativos', 'Sites', 'Programação', 'Tecnologia'],
	openGraph: {
		title: 'Felipe Sobral',
		url: 'https://felipesobral.com.br',
		siteName: 'Felipe Sobral',
		description: 'Olá, me chamo Felipe. Sou desenvolvedor Mobile & Web. Vamos conversar?',
		locale: 'pt_BR',
		type: 'website',
	},
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {

	const year = new Date().getFullYear()

	return (
		<html lang='pt-BR'>
			<body className={montserrat.className}>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Felipe Sobral',
							url: 'https://felipesobral.com.br',
							jobTitle: 'Desenvolvedor Mobile & Web',
							sameAs: [
								'https://www.instagram.com/xfelipesobral',
								'https://github.com/xfelipesobral',
								'https://www.linkedin.com/in/felipesobralfs'
							],
							email: 'mailto:contato@felipesobral.com.br'
						})
					}}
				/>
				<main className='flex min-h-screen flex-col items-center justify-between bg-stone-950 text-white p-10'>
					<div className='max-w-6xl w-full'>
						{children}
					</div>
					<div>
						<p className='text-sm'>© {year} Felipe V. Sobral</p>
					</div>
				</main>
			</body>
		</html>
	)
}
