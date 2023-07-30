import React, { ReactNode } from 'react'
import PageLogoTitle from '../components/PageLogoTitle'

const styles: { [p: string]: React.CSSProperties } = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 2rem',
    justifyContent: 'space-around',
    columnGap: '4rem',
    width: '100%',
  },
  listHeader: {
    fontWeight: 600,
    color: 'var(--secondary-accent)',
  },
  listGroup: {
    flex: 1,
  }
}

export default function Page(): ReactNode {
  return (
    <div>
      <PageLogoTitle
        title="_skills"
        path="#lightbulb"
        size={70}
      />
      <p className="page-content text-content font-titillium-web">
        One of the things I most like about programming is learning new technologies
        and testing out new approaches to old problems. These are a few of the
        languages, frameworks, and libraries that I&apos;ve had the chance to work with.
      </p>
      <p className="page-content text-content font-titillium-web">
        Lists and sublists are in descending order of familiarity/recent experience.
      </p>
      <div className="page-content" style={styles.listContainer}>
        <ul style={styles.listGroup} className="text-content font-titillium-web">
          <li><span style={styles.listHeader}>Javascript & Typescript</span>
            <ul>
              <li>Angular (v2+)</li>
              <li>NodeJS</li>
              <li>React/Redux</li>
              <li>JQuery</li>
              <li>Express</li>
              <li>Electron</li>
              <li>D3</li>
              <li>NextJS</li>
              <li>AngularJS (v1)</li>
              <li>Ionic</li>
              <li>React Native</li>
            </ul>
          </li>
          <li><span style={styles.listHeader}>HTML</span></li>
          <li><span style={styles.listHeader}>CSS</span>
            <ul>
              <li>SCSS</li>
            </ul>
          </li>
        </ul>
        <ul style={styles.listGroup} className="text-content font-titillium-web">
          <li><span style={styles.listHeader}>Databases, ORM, API</span>
            <ul>
              <li>Oracle & PL/SQL</li>
              <li>Hibernate</li>
              <li>Spring Data</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Postgres</li>
              <li>RethinkDB</li>
            </ul>
          </li>
        </ul>
        <ul style={styles.listGroup} className="text-content font-titillium-web">
          <li><span style={styles.listHeader}>Java</span>
            <ul>
              <li>Spring Boot</li>
            </ul>
          </li>
          <li><span style={styles.listHeader}>Python</span>
            <ul>
              <li>Anaconda</li>
              <li>Flask</li>
              <li>TextBlob</li>
            </ul>
          </li>
          <li><span style={styles.listHeader}>PHP</span></li>
          <li><span style={styles.listHeader}>C#</span></li>
          <li><span style={styles.listHeader}>Objective-C</span></li>
          <li><span style={styles.listHeader}>C++</span>
            <ul><li>Cocos2d-x</li></ul>
          </li>
          <li><span style={styles.listHeader}>C</span></li>
        </ul>
      </div>
      <p className="page-content text-content font-titillium-web">
        Beyond the tech skills, I also have the soft skills necessary to be
        successful in team and leadership positions. I have extensive experience
        on team projects and work well in team environments.
      </p>
      <p className="page-content text-content font-titillium-web">
        Over the last five years, I&apos;ve served various roles, mostly simultaneously, including lead developer, Scrum Master, and Product Owner.
        I&apos;ve worked closely with customers on urgent needs and requirements gathering. I&apos;ve worked closely
        with my team in creating user stories and prioritizing that work. And I&apos;ve been proactive working
        with infrastructure partners and other development teams in order to provide the best products we can.
      </p>
    </div>
  )
}
