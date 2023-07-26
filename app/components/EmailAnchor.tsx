'use client'

import { useState } from 'react'
import boostrapIcons from '../images/icons/social/bootstrap-icons.svg'

export default function EmailAnchor ({size = 16}: {size?: number}) {
    const [email, setEmail] = useState('mailto:tkahleck');

    const setEmailAddress = (): void => {
        if (!email.includes('@')) {
            setEmail(`${email}@gmail.com`)
        }
    }

    return (
        <a onMouseOver={setEmailAddress} href={email} className="togglable-color">
            <svg height={size} width={size} fill="currentColor">
                <title>Email Me</title>
                <use xlinkHref={`${boostrapIcons.src}#envelope`}/>
            </svg>
        </a>
    )
}