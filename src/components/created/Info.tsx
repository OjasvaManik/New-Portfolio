import {getProfile} from "@/app/api/profile/route";
import Image from "next/image";

const Info = async () => {
    const profile = await getProfile();
    const { name, description, image, socials } = await profile.json();

    return (
        <div className={'hidden bg-white h-screen pt-1 lg:flex flex-col justify-between'}>
            <div className={'flex justify-between items-center w-full px-8 py-4 text-amber-500'}>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
            </div>
            <div className={'grid grid-cols-2 my-20'}>
                <div className={'flex justify-center items-center'}>
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={350}
                        className={'rounded-2xl drop-shadow-2xl hover:scale-125 transition-transform duration-700 ease-in-out'}
                    />
                </div>
                <div className={'flex justify-start items-center px-4 mb-6 mr-10'}>
                    <p className={'uppercase text-4xl font-[Jetbrains_Mono] text-justify text-amber-500 hover:scale-110 transition-transform duration-700 ease-in-out'}>{description}</p>
                </div>
            </div>
            <div className={'flex justify-between items-center w-full px-8 py-4 text-amber-500'}>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
            </div>
        </div>
    )
}
export default Info
