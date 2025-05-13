import { getProfile } from '@/app/api/profile/route'
import Image from "next/image";
import {ArrowDown, ArrowLeft} from "lucide-react";

const Hero = async () => {
    const profile = await getProfile();
    const { name, description, image, socials } = await profile.json();

    const hours = new Date().getHours();
    let timeOfDay: string;

    if (hours < 6) timeOfDay = "go to bed";
    else if (hours >=6 && hours < 12) timeOfDay = "someone's awake early";
    else if (hours >= 12 && hours < 18) timeOfDay = "time slows down in the afternoon";
    else if (hours >= 18 && hours < 21) timeOfDay = "evening is just morning in denial";
    else if (hours >= 21) timeOfDay = "still awake? why?";

    return (
        <div className={'bg-amber-500 h-screen border-8 border-white flex flex-col justify-between'}>
            <div className={'flex justify-between items-center w-full px-8 py-4'}>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
            </div>

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
                        <p className={'typewrite-p'}>&#34;{timeOfDay}&#34;</p>
                    </div>
                    <div className={'flex justify-center items-center gap-x-8'}>
                        <div className={'border-b-2 w-24 lg:w-146'}></div>
                        <div className={'uppercase font-extrabold font-[Jetbrains_Mono] text-nowrap'}>
                            {name}
                        </div>
                        <div className={'border-b-2 w-24 lg:w-146'}></div>
                    </div>
                </div>
                <div className={'hidden transform ease-out hover:animate-spin absolute right-1/8 top-1/2 bg-amber-500 rounded-full w-36 h-36 border-8 border-white lg:flex justify-center items-center text-white font-bold font-[Jetbrains_Mono] text-lg cursor-pointer hover:bg-amber-400 transition-all duration-300'}>
                    Scroll <ArrowDown />
                </div>
            </div>

            <div className={'flex justify-around items-center lg:hidden mb-12'}>
                <div className={'flex justify-center items-center'}>
                    <Image
                        src={image}
                        alt={name}
                        width={225}
                        height={150}
                        className={'rounded-2xl drop-shadow-2xl'}
                    />
                </div>
                <div className={'rounded-full w-24 h-24 border-8 border-white text-white font-bold font-[Jetbrains_Mono] text-lg cursor-pointer flex flex-col justify-center items-center'}>
                    Swipe <ArrowLeft />
                </div>
            </div>

            <div>
                <p className={'text-sm font-[Jetbrains_Mono] text-justify px-4 lg:hidden mb-6'}>{description}</p>
            </div>

            <div className={'flex justify-between items-center w-full px-8 py-4'}>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
            </div>
        </div>
    )
}

export default Hero