import { Dispatch, SetStateAction, useEffect } from 'react'

export function useToggleColorScheme(setCompDarkMode: Dispatch<boolean>, isClient: boolean, isMobile: boolean) {
    useEffect(() => {
        const toggleDarkMode = (ev: Event) => {
            const isDarkMode = document.documentElement.getAttribute("data-theme") === 'dark';
            setCompDarkMode(isDarkMode)
        }

        if (isClient) {
            const toggleQuery = document.querySelector(`#${isMobile ? 'mobile' : 'desktop'}-dark-mode-toggle`)
            if (!!toggleQuery) {
                toggleQuery.addEventListener('change', toggleDarkMode)
                return () => toggleQuery.removeEventListener('change', toggleDarkMode)
            }
        }
      }, [isClient, isMobile])
}

export function useMatchColorScheme(setDarkMode: Dispatch<boolean>, isClient: boolean) {
    useEffect(() => {
        const darkMediaMatch = ({matches}: MediaQueryListEvent) => {
            setDarkMode(matches)
        }

        if (isClient) {
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
            let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            mediaQuery.addEventListener('change', darkMediaMatch)
            return () => mediaQuery.removeEventListener('change', darkMediaMatch)
        }
      }, [isClient])
}

export function useWindowResize(setIsMobile: Dispatch<boolean>, isClient: boolean) {
    useEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        if (isClient) {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }
      }, [isClient])
}
