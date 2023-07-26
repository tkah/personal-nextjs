'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoWhiteStroke from '../images/logos/logo-white-stroke.svg'
import logoBlackStroke from '../images/logos/logo-black-stroke.svg'
import { useMatchColorScheme, useToggleColorScheme, useWindowResize } from './hooks'

const styles = {
    logo: {
        paddingRight: '.5rem',
        display: 'flex',
        alignItems: 'center',
    },
}

export default function SchemeAwareLogo ({ size }: { size: number }) {
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
        <div style={{...styles.logo, borderRight: `.2rem solid ${isDarkModeQuery ? 'white' : 'black'}`}}>
            <a href="https://www.torrankahleck.com">
                <Image
                    alt='site logo'
                    src={isDarkModeQuery ? logoWhiteStroke : logoBlackStroke}
                    width={size}
                    style={{fill: 'green'}}
                />
            </a>
        </div>
    )
}