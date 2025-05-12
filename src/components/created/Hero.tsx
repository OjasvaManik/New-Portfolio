import { getProfile } from '@/app/api/profile/route'
import Image from "next/image";

const Hero = async () => {
    const profile = await getProfile();
    const { name, description, image, socials } = await profile.json();

    return (
        <div className={'bg-amber-500 h-screen flex justify-center items-center border-8'}>
            <div className={'flex flex-col justify-center items-center'}>
                <div className={'flex justify-center items-center gap-x-8'}>
                    <div className={'border-b-2 w-30 lg:w-150'}>

                    </div>
                    <div className={'uppercase font-extrabold font-[Caveat]'}>
                        {name}
                    </div>
                    <div className={'border-b-2 w-30 lg:w-150'}>

                    </div>
                </div>
                <div className={'flex justify-center'}>
                    <p className={'typewrite-p'}>Hello!</p>
                </div>
                <div className={'flex justify-center items-center gap-x-8'}>
                    <div className={'border-b-2 w-24 lg:w-146'}>

                    </div>
                    <div className={'uppercase font-extrabold font-[Jetbrains_Mono] text-nowrap'}>
                        {name}
                    </div>
                    <div className={'border-b-2 w-24 lg:w-146'}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
