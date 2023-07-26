'use client'

import { useEffect, useState } from "react";
import NavListItem from "./NavListItem";
import { useMatchColorScheme, useToggleColorScheme, useWindowResize } from "./hooks";

export default function NavItems() {
    const [isClient, setIsClient] = useState(false)
    const [isDarkModeQuery, setDarkMode] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    
    useWindowResize(setIsMobile, isClient)
    useToggleColorScheme(setDarkMode, isClient, isMobile)
    useMatchColorScheme(setDarkMode, isClient)

    return (
        <>
            <NavListItem
                isDarkMode={isDarkModeQuery}
                description="who am i? why this site?"
                label="_about"
            />
            <NavListItem
                isDarkMode={isDarkModeQuery}
                description="napolean dynamite quote here"
                label="_skills"
            />
            <NavListItem
                isDarkMode={isDarkModeQuery}
                description="past work"
                label="_projects"
            />
            <NavListItem
                isDarkMode={isDarkModeQuery}
                description="old articles"
                label="_media"
            />
        </>
    )
}