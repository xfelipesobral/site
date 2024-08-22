import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function HomeHeader() {

    return (
        <div className='flex flex-col-reverse lg:flex-row mt-10 xl:mt-20 items-center gap-4'>
            <div className='grid gap-4 flex-1'>
                <div className='text-3xl xl:text-5xl font-bold  tracking-wide'>
                    <p>Olá, me chamo Felipe 👋</p>
                    <p>Dev Mobile & Web</p>
                </div>

                <div className='max-w-lg text-gray-300'>
                    <p>Trabalho na área de desenvolvimento pela SoftRos Sistemas e sou acadêmico no curso de Licenciatura em Computação pela UFPR setor Palotina.</p>
                </div>
            </div>
            <div className='max-w-md w-full'>
                <DotLottieReact
                    src='assets/lottie/dev.json'
                    loop
                    autoplay
                />
            </div>
        </div>
    )
}