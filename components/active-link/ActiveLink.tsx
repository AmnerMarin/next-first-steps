'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export function ActiveLink({ path, text }: Props) {

    const usePath = usePathname();
    const isActive = usePath === path;

    return (
        <Link
            className={ isActive?
                'mr-2 text-blue-500 hover:underline':
                'mr-2 hover:text-blue-400 hover:underline'
            }
            href={path}>
            {text}
        </Link>
    );
}

