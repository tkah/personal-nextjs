import SchemeAwareLogo from './SchemeAwareLogo'
import EmailAnchor from './EmailAnchor'
import DarkModeToggle from './DarkModeToggle'
import SocialSVGLink from './SocialSVGLink'
import NavItems from './NavItems'

const styles = {
    desktopNav: {
        flex: 1,
        flexDirection: 'column',
        margin: '1rem',
    },
    header: {
        display: 'flex',
    },
    iconSvg: {
        height: '100%',
        width: '100%',
    },
    list: {
        listStyle: 'none',
    },
    nav: {
        marginTop: '5rem',
    },
    social: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '.5rem',
        justifyContent: 'space-between',
    },
}

export default function DesktopNav () {
    return (
        <div style={styles.desktopNav} id="desktop-nav">
            <div style={styles.header}>
                <SchemeAwareLogo size={100} />
                <div id="social-links" style={styles.social}>
                    <SocialSVGLink
                        href="https://github.com/tkah"
                        title="Github Link"
                        svgSymbolId="github"
                    />
                    <SocialSVGLink
                        href="https://www.linkedin.com/in/torran-kahleck-70a20391/"
                        title="LinkedIn Link"
                        svgSymbolId="linkedin"
                    />
                    {/* <SocialSVGLink
                        href=""
                        title="Threads Link"
                        svgSymbolId="threads"
                    /> */}
                    <EmailAnchor />
                </div>
            </div>
            <header>
                <nav style={styles.nav}>
                    <ul id="desktop-nav-list" style={styles.list}>
                        <NavItems />
                    </ul>
                </nav>
            </header>
            <DarkModeToggle source="desktop" />
        </div>
    )
}
