
"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { MdVpnKey } from "react-icons/md";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/app/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import Link from "next/link";

export default function Navbar() {

    const { setTheme } = useTheme()

    return <nav className="flex justify-between items-center border-b h-16 w-full px-8 md:px-16 lg:px-28  fixed top-0 z-50 bg-background/20 backdrop-blur-sm">

        {/* logo */}
        <div className="flex flex-col items-start">
            <div className="logo font-bold text-xl w-16 relative flex items-center text-purple-500">
                <span>Keyp</span>
                <MdVpnKey className="rotate-270 font-bold absolute top-2 right-0" />
            </div>
            <span className="text-xs sm:text-sm -mt-1 text-gray-600  dark:text-muted-foreground">
                A vault you can trust.
            </span>
        </div>


        <div className="options className flex gap-8 items-center text-sm">

            <SignedOut>
                <ul className="flex items-center gap-4">
                    <Link href={'#home'} scroll={true} ><li className="hover:underline cursor-pointer hidden md:block">Home</li></Link>
                    <Link href={'#features'} scroll={true}><li className="hover:underline cursor-pointer hidden md:block">Features</li></Link>
                    <Link href={'#about'} scroll={true}><li className="hover:underline cursor-pointer hidden md:block">FAQs</li></Link>
                </ul>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Sun className="h-[1rem] md:h-[1.2rem] w-[1rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="border border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-500 hover:text-white rounded text-sm sm:bg-purple-600 sm:px-8 sm:rounded sm:text-white sm:hover:bg-purple-700"><SignInButton /></div>
            </SignedOut>
            <SignedIn>

                <ul className="flex gap-4 items-center  ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
                <UserButton />
            </SignedIn>
        </div>
    </nav>
}