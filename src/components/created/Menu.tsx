'use client'

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export function Menu() {
    const router = useRouter();

    // Function to handle hover navigation
    const handleHover = (path: string) => {
        router.push(path);
    };

    return (
        <Menubar className="border-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 px-4 bg-white/20 backdrop-blur-sm text-white py-4 my-2 shadow-md rounded-full md:rounded-4xl font-[Caveat] w-11/12 lg:w-auto max-w-screen-lg h-16">
            <div className="flex justify-start md:justify-center items-center w-full overflow-x-auto scrollbar-hide whitespace-nowrap">
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/")}
                    >
                        <Link href="/">Home</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/tech")}
                    >
                        <Link href="/tech">Technologies</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/certs")}
                    >
                        <Link href="/certs">Certificates</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/projects")}
                    >
                        <Link href="/projects">Projects</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger
                        className="px-3 md:px-4"
                        onMouseEnter={() => handleHover("/contact-me")}
                    >
                        <Link href="/contact-me">Contact Me</Link>
                    </MenubarTrigger>
                </MenubarMenu>
            </div>
        </Menubar>
    )
}