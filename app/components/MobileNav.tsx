'use client'

import { useState } from "react"
import EmailAnchor from "./EmailAnchor"
import SchemeAwareLogo from "./SchemeAwareLogo"
import SocialSVGLink from "./SocialSVGLink"
import NavItems from "./NavItems"
import DarkModeToggle from "./DarkModeToggle"

const styles: { [p: string]: React.CSSProperties } = {
    burger: {
        backgroundColor: 'rbg(var(--foreground-rgb))'
    },
    iconContainer: {
        display: 'flex',
        marginLeft: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoBurgerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    navHeader: {
        position: 'fixed',
    },
    navExpanded: {
        height: '100%',
    },
    social: {
        display: 'flex',
        marginLeft: '.5rem',
        columnGap: '20px',
        justifyContent: 'space-between',
    },
}

export default function MobileNav() {
    const [isExpanded, doExpand] = useState(false);

    const clickCallback = () => {
        doExpand(false)
    }

    return (
        <header id="mobile-nav" style={styles.navHeader}>
            <div style={styles.logoBurgerContainer}>
                <div style={styles.iconContainer}>
                    <SchemeAwareLogo size={55} />
                    <div id="social-links" style={styles.social}>
                        <SocialSVGLink
                            href="https://github.com/tkah"
                            title="Github Link"
                            svgSymbolId="github"
                            size={25}
                        />
                        <SocialSVGLink
                            href="https://www.linkedin.com/in/torran-kahleck-70a20391/"
                            title="LinkedIn Link"
                            svgSymbolId="linkedin"
                            size={25}
                        />
                        {/* <SocialSVGLink
                            href=""
                            title="Threads Link"
                            svgSymbolId="threads"
                        /> */}
                        <EmailAnchor size={25} />
                    </div>
                </div>
                <button
                    className={`hamburger hamburger--elastic ${isExpanded ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => doExpand(!isExpanded)}
                    aria-label="expand mobile navigation"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <nav style={isExpanded ? styles.navExpanded : undefined}>
                <ul id="mobile-nav-list" className="menu" onClick={() => doExpand(!isExpanded)}>
                    <NavItems />
                </ul>
                <DarkModeToggle source="mobile" />
            </nav>
        </header>
    )
}