import { getProfile } from '@/app/api/profile/route'

const Hero = async () => {
    const profile = await getProfile();
    const { name, description, image, socials } = await profile.json();

    return (
        <div className={'bg-amber-500 h-screen flex flex-col justify-center items-center'}>
            <div className={'flex justify-center items-center gap-x-8'}>
                <div className={'border-b-2 w-30 lg:w-100'}>

                </div>
                <div className={'uppercase font-extrabold font-[Caveat]'}>
                    {name}
                </div>
                <div className={'border-b-2 w-30 lg:w-100'}>

                </div>
            </div>
            <div className={'flex justify-center'}>
                <p className={'typewrite-p'}>Hello!</p>
            </div>
            <div className={'flex justify-center items-center gap-x-8'}>
                <div className={'border-b-2 w-30 lg:w-100'}>

                </div>
                <div className={'uppercase font-extrabold font-[Caveat]'}>
                    {name}
                </div>
                <div className={'border-b-2 w-30 lg:w-100'}>

                </div>
            </div>
        </div>
    )
}
export default Hero
