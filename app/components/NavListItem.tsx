'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavListItem (
    {isDarkMode, description, label}:
    {isDarkMode: boolean, description: string, label: string}
) {
    const pathname = usePathname()

    return (
        <li
            className={`
                font-source-pro
                nav-button
                togglable-color
                ${isDarkMode ? 'nav-button-dark' : 'nav-button-light'}
                ${pathname.includes(label.replace('_', '')) ? 'nav-button-selected' : ''}
            `}
        >
            <Link href={label.replace('_', '')} style={{ height: '100%', width: '100%' }}>
                <span className="nav-item-description">{description}</span>
                <span className="nav-item-content">{label}</span>
            </Link>
        </li>
    )
}