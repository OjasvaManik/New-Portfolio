import TechList from "@/components/created/TechList";

const TechMain = () => {
    return (
        <div className={'bg-white h-screen pt-1 lg:flex flex-col justify-between border-8 border-amber-500'}>
            <div className={'flex justify-between items-center w-full px-8 py-4 text-amber-500'}>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
            </div>
            <TechList />
            <div className={'flex justify-between items-center w-full px-8 py-4 text-amber-500'}>
                <span className={'font-bold font-[Jetbrains_Mono] uppercase'}>@portfolio</span>
                <div className={'border-b-2 flex-grow mx-4'}></div>
                <span className={'font-bold font-[Caveat]'}>@portfolio</span>
            </div>
        </div>
    )
}
export default TechMain
