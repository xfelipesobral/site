import Image from 'next/image'

import { LastItem } from '@/api/lastitems'

interface Params {
    lastGames: LastItem[]
}

export default function HomeGames({ lastGames }: Params) {

    const psnGame = lastGames.find(item => item.id === 'psn')
    const steamGame = lastGames.find(item => item.id === 'steam')

    return (
        <div>
            <p>Gosto muito de jogos</p>
            <p>últimos jogos</p>

            <div className='flex flex-col lg:flex-row border divide-y lg:divide-x rounded-md bg-stone-900 border-stone-700 divide-stone-700 text-stone-300'>
                {
                    psnGame &&
                    <div className='flex-1 relative min-h-32'>
                        <div className='absolute top-0 h-full w-full select-none'>
                            <Image
                                fill
                                src={psnGame.backgroundUrl}
                                objectFit='cover'
                                alt={psnGame.description}
                                className='brightness-[0.3] saturate-50 rounded-t-md lg:rounded-l-md'
                            />
                        </div>

                        <div className='absolute top-0 z-10 h-full w-full flex items-center p-5 gap-5'>
                            <Image
                                src={psnGame.imageUrl}
                                width={84}
                                height={84}
                                alt={psnGame.description}
                                className='rounded-full border shadow-md border-stone-700'
                            />
                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>{psnGame.description}</p>
                                <p>Console</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    steamGame &&
                    <div className='flex-1 relative min-h-32'>
                        <div className='absolute top-0 h-full w-full select-none'>
                            <Image
                                fill
                                src={steamGame.backgroundUrl}
                                objectFit='cover'
                                alt={steamGame.description}
                                className='brightness-[0.3] saturate-50 rounded-b-md lg:rounded-r-md'
                            />
                        </div>

                        <div className='absolute top-0 z-10 h-full w-full flex justify-end items-center p-5 gap-5'>
                            <div className='flex items-end text-right flex-col'>
                                <p className='text-xl font-bold'>{steamGame.description}</p>
                                <p>PC</p>
                            </div>
                            <Image
                                src={steamGame.imageUrl}
                                width={180}
                                height={180}
                                alt={steamGame.description}
                                className='border rounded-md shadow-md border-stone-700'
                            />
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}