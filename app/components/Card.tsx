import Image from "next/image";
import { ReactElement } from "react";

const styles: { [p: string]: React.CSSProperties } = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    description: {
        fontSize: '1rem',
        marginTop: '.5rem',
    },
    img: {
        objectFit: 'contain',
    },
    imgContainer: {
        position: 'relative',
        minWidth: '100px',
    },
    subtitle: {
        fontStyle: 'italic',
        fontSize: '.9rem',
    },
    title: {
        fontWeight: 600,
        color: 'var(--secondary-accent)',
    }
}

export default function Card(
    { title, subtitle, description, url, linkDescription = true, img, displayBackground = true }:
    { title: string, subtitle: string, description: ReactElement, url: string, linkDescription?: boolean, img?: string, displayBackground?: boolean }
) {
    return (
        <div className="card">
                {!!img && (
                    <div style={styles.imgContainer}>
                        <a
                            href={url}
                            style={styles.cardContainer}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <Image
                                src={img}
                                fill={true}
                                alt={`${title}-image`}
                                style={styles.img}
                                className={displayBackground ? 'card-img' : ''}
                            />
                        </a>
                    </div>
                )}
                <div className="card-content">
                    <a
                        href={url}
                        style={styles.cardContainer}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <h4 className="text-content font-titillium-web" style={styles.title}>{title}</h4>
                        <h5 className="text-content font-titillium-web" style={styles.subtitle}>{subtitle}</h5>
                        {linkDescription && (
                            <p className="text-content font-titillium-web" style={styles.description}>{description}</p>
                        )}
                    </a>
                    {!linkDescription && (
                        <p className="text-content font-titillium-web" style={styles.description}>{description}</p>
                    )}
                </div>
        </div> 
    )
}