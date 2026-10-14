import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
export function Navbar() {

    const navItems = [
        { path: '/about', text: 'About' },
        { path: '/contact', text: 'Contact' },
        { path: '/pricing', text: 'Pricing' }
    ]
    return (
        <nav className="flex bg-blue-900 bg-bg-opacity-30 p-2 m-2 rounded">


            <Link href='/' className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map((item) => {
                    return (
                        <ActiveLink key={item.path} {...item} />
                    )
                })
            }
        </nav>
    );
}