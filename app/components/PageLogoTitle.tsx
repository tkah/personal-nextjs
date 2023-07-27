import ImageSvg from "./ImageSvg"

const styles: { [p: string]: React.CSSProperties } = {
    container: {
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '2rem',
        color: 'var(--primary-accent)',
    },
}

export default function PageLogoTitle ({ title, path, size }: { title: string, path: string, size: number }) {
    return (
        <div style={styles.container} className="font-source-pro">
            <ImageSvg
                title={title}
                path={path}
                size={size}
            />
            <span style={styles.title}>{title}</span>
        </div>
    )
}