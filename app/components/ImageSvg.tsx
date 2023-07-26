import Image from "next/image";
import boostrapIcons from '../images/icons/social/bootstrap-icons.svg'

const styles = {
    pageLogo: {
        borderRadius: '3rem',
    },
    svgContainer: {
        borderRadius: '3rem',
        border: '2px solid rgb(var(--foreground-rgb))',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default function ImageSvg({ path, title, size }: { path: string, title: string, size: number }) {
    return (
        <>
            {!path.includes('#') &&
                <Image
                    src={path}
                    height={size}
                    width={size}
                    alt={`${title}-logo`}
                    style={styles.pageLogo}
                />
            }
            {path.includes('#') &&
                <div style={styles.svgContainer}>
                    <svg fill="currentColor" width={size} height={size} viewBox="0 0 16 16" >
                        <title>{title}</title>
                        <use xlinkHref={`${boostrapIcons.src}${path}`}/>
                    </svg>
                </div>
            }
        </>
    )
}