import React, { ReactNode } from 'react'
import PageLogoTitle from '../components/PageLogoTitle'

export default function Page(): ReactNode {
  return (
    <div>
      <PageLogoTitle
        title="_about"
        path="/images/logos/me-desert-willow.png"
        size={100}
      />
      <p className="page-content text-content font-titillium-web">
        Hi! My name is Torran Kahleck and I am a full-stack developer. While I feel comfortable with mobile and server-side environments, I especially enjoy front-end development. I have a master&apos;s degree in Computer Science from the University of New Mexico and have been working in web and mobile development since 2012.
      </p>
      <p className="page-content text-content font-titillium-web">
        Although my interests are varied, my professional experience has primarily been in web development. I&apos;ve made a few high-profile sites for the University of New Mexico using AngularJS & PHP, helped develop an Electron app for a neuroscience non-profit using React & NodeJS, and currently work for Sandia National Laboratories on an Angular & Java tech stack.
      </p>
      <p className="page-content text-content font-titillium-web">
        I really enjoy connecting people to information relevant to their lives; I get excited by discovering new data and APIs that inspire me to pursue projects that make building those connections easier.
      </p>
      <p className="page-content text-content font-titillium-web">
        My undergraduate degree is in Comparative Literature and I spent several years overseas as an English teacher, first as a Peace Corps volunteer in Albania and later as a kindergarten teacher in South Korea. Despite deciding to pursue a different career path, I still enjoy reading and discussing literature. When I&apos;m not programming, I spend most of my time with my family and, occasionally, get in a little time with my guitar or a video game.
      </p>
    </div>
)}
