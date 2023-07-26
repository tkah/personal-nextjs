'use client'

import { useEffect, useState } from "react"
import { useMatchColorScheme } from "./hooks"

const styles = {
    toggleContainer: {
        textAlign: 'center',
        marginTop: '1rem',
    },
}

export default function DarkModeToggle({ source }: { source: string }) {
    const [isClient, setIsClient] = useState(false)
    const [isDarkToggled, setDarkToggled] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        setDarkToggled(isDarkToggled)

        if (isDarkToggled) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDarkToggled])

    useMatchColorScheme(setDarkToggled, isClient)

    return (
        <div style={styles.toggleContainer}>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkToggled}
                    onChange={() => setDarkToggled((prev) => !prev)}
                    id={`${source}-dark-mode-toggle`}
                />
                <span className="slider round" />
            </label>
        </div>
    )
}
