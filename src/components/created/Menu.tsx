'use client'

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import { useRouter } from 'next/navigation';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {BookKey, Braces, Contact, FolderKanban, House} from "lucide-react";


export function Menu() {
    const router = useRouter();

    // Function to handle hover navigation
    const handleHover = (path: string) => {
        router.push(path);
    };

    return (
        <Menubar className="border-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 px-4 bg-white/20 backdrop-blur-sm text-white py-4 my-2 shadow-md rounded-full md:rounded-4xl font-[Caveat] h-16">
            <div className="flex justify-start md:justify-center items-center w-full overflow-x-auto scrollbar-hide whitespace-nowrap">
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/")}
                    >
                        <Link href="/">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'flex justify-center items-center'}><House /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Home</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/tech")}
                    >
                        <Link href="/tech">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'flex justify-center items-center'}><Braces /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Technologies</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/certs")}
                    >
                        <Link href="/certs">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'flex justify-center items-center'}><BookKey /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Certificates</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/projects")}
                    >
                        <Link href="/projects">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'flex justify-center items-center'}><FolderKanban /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Projects</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/contact-me")}
                    >
                        <Link href="/contact-me">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'flex justify-center items-center'}><Contact /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Contact Me</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
            </div>
        </Menubar>
    )
}