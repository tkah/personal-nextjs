import '@fontsource-variable/source-code-pro'
import './hamburgers-elastic.css'
import './globals.css'
import { Inter, Titillium_Web } from 'next/font/google'
import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })
const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-titillium-web',
  display: 'swap',
})

export const metadata = {
  title: 'Torran Kahleck',
  description: 'Shameless self-promotion for Torran Kahleck.',
}

const styles: { [p: string]: React.CSSProperties } = {
  body: {
    display: 'flex',
    flex: 11,
    flexDirection: 'column',
  },
  content: {
    padding: '1rem',
    flex: 4,
  },
  contentContainer: {
    display: 'flex',
    height: '100%',
  },
  footer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '1rem',
  },
  mobileNav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontStyle: 'italic',
    fontSize: '2rem'
  }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en" className={titilliumWeb.variable}>
      <body className={inter.className}>
        <div style={styles.body}>
          <MobileNav />
          <div style={styles.contentContainer}>
            <DesktopNav />
            <div id="site-content" style={styles.content}>
              {children}
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <span className='font-source-pro'>Torran Kahleck &#125;</span>
        </div>
      </body>
    </html>
  )
}
