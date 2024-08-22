interface Params {
    icon: React.ReactNode
    name: string
    link: string
}

export default function SocialIcon({
    icon,
    name,
    link
}: Params) {

    return (
        <a
            title={name}
            href={link}
            target='_blank'
            className='text-stone-300 bg-stone-950 p-2 rounded-md border border-stone-700 hover:bg-stone-700 transition-all duration-300'
        >
            {icon}
        </a>
    )
}