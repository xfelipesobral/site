import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandSteam, IconBrandTwitch } from '@tabler/icons-react'

import SocialIcon from '@/components/socialIcon'

export default function HomeSocials() {
    return (
        <div className="border rounded-md divide-y bg-stone-900 border-stone-700 divide-stone-700 text-stone-300">
            <div className="p-2 text-center text-md">
                <p>Redes Sociais</p>
            </div>
            <div className="p-2 flex justify-center items-center gap-2">
                <SocialIcon icon={<IconBrandInstagram />} name="Instagram" link="https://www.instagram.com/xfelipesobral" />
                <SocialIcon icon={<IconBrandGithub />} name="Github" link="https://github.com/xfelipesobral" />
                <SocialIcon icon={<IconBrandLinkedin />} name="Linkedin" link="https://www.linkedin.com/in/felipesobralfs" />
                <SocialIcon icon={<IconBrandDiscord />} name="Discord" link="https://discord.com/users/felipesobral" />
                <SocialIcon icon={<IconBrandSteam />} name="Steam" link="https://steamcommunity.com/id/lipin" />
                <SocialIcon icon={<IconBrandTwitch />} name="Twitch" link="https://www.twitch.tv/lipingod" />
            </div>
        </div>
    )
}
