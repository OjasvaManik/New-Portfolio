import { getProfile } from '@/app/api/profile/route'
import Image from "next/image";

const Hero = async () => {
    const profile = await getProfile();
    const { name, description, image, socials } = await profile.json();

    return (
        <div className={'bg-amber-500 h-screen border-8 border-white flex flex-col justify-between'}>
            {/* Top border with @portfolio on both ends */}
            <div className={'flex justify-between items-center w-full px-8 py-4'}>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
            </div>

            {/* Main content in the middle */}
            <div className={'flex justify-center items-center flex-grow'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div className={'flex justify-center items-center gap-x-8'}>
                        <div className={'border-b-2 w-30 lg:w-150'}></div>
                        <div className={'uppercase font-extrabold font-[Caveat]'}>
                            {name}
                        </div>
                        <div className={'border-b-2 w-30 lg:w-150'}></div>
                    </div>
                    <div className={'flex justify-center'}>
                        <p className={'typewrite-p'}>Hello!</p>
                    </div>
                    <div className={'flex justify-center items-center gap-x-8'}>
                        <div className={'border-b-2 w-24 lg:w-146'}></div>
                        <div className={'uppercase font-extrabold font-[Jetbrains_Mono] text-nowrap'}>
                            {name}
                        </div>
                        <div className={'border-b-2 w-24 lg:w-146'}></div>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center items-center lg:hidden mb-10'}>
                <Image
                    src={image}
                    alt={name}
                    width={175}
                    height={150}
                    className={'rounded-2xl drop-shadow-2xl'}
                />
            </div>

            <div>
                <p className={'text-sm font-[Jetbrains_Mono] text-justify px-4 lg:hidden mb-6'}>{description}</p>
            </div>

            <div className={'flex justify-between items-center w-full px-8 py-4'}>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
            </div>
        </div>
    )
}

export default Hero