import boostrapIcons from '../images/icons/social/bootstrap-icons.svg'

export default function SocialSVGLink (
    {href, title, svgSymbolId, size = 16}:
    {href: string, title: string, svgSymbolId: string, size?: number}
  ) {
    return (
      <a
        href={href}
        rel='noopener noreferrer'
        target='_blank'
        className="togglable-color"
      >
        <svg fill="currentColor" height={size} width={size}>
          <title>{title}</title>
          <use xlinkHref={`${boostrapIcons.src}#${svgSymbolId}`}/>
        </svg>
      </a>
    )
  }