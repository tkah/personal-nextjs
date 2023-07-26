'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

export default function NavListItem (
    {isDarkMode, description, label}:
    {isDarkMode: boolean, description: string, label: string}
) {
    const pathname = usePathname()

    return (
        <Link href={label.replace('_', '')}>
            <li
                className={`
                    font-source-pro
                    nav-button
                    togglable-color
                    ${isDarkMode ? 'nav-button-dark' : 'nav-button-light'}
                    ${pathname.includes(label.replace('_', '')) ? 'nav-button-selected' : ''}
                `}
            >
                <span className="nav-item-description">{description}</span>
                <span className="nav-item-content">{label}</span>
            </li>
        </Link>
    )
}