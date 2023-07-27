import React, { ReactNode } from 'react'
import PageLogoTitle from '../components/PageLogoTitle'
import Card from '../components/Card'

const styles: { [p: string]: React.CSSProperties } = {
  cardContainer: {
    margin: '1rem 0',
  }
}

export default function Page(): ReactNode {
  return (
    <div>
      <PageLogoTitle
        title="_projects"
        path="#code"
        size={70}
      />
      <p className="page-content text-content font-titillium-web">
        The project I&apos;ve been working on for the last five years isn&apos;t publicly available.
        But here are a few of the publicly available projects, personal and professional, that I&apos;ve worked on in the past. 
      </p>
      <div style={styles.cardContainer} className="page-content card-list">
        <Card
          title="Torran Kahleck"
          subtitle="NextJS :: React"
          description={<>This site you&apos;re on now! I know it doesn&apos;t do much at the moment, but it is
            my first experience with NextJS (v13) and I hope to expand it soon with some fun experiments.</>}
          url=""
          displayBackground={false}
        />
        <Card
          title="COINSTAC"
          subtitle="Electron :: React :: NodeJS :: RethinkDB :: GraphQL"
          description={<>While at the Mind Research Network, my assignment was on an Electron application
            called COINSTAC. COINSTAC is a platform that allows reseachers to run machine learning
            pipelines collaboratively with researchers from all over the world. The focus during my
            time was on neuroscience data, though there were plans for expanding that to other fields
            including genetics. It uses Electron on the front-end with a few NodeJS microservices on
            the backend. The database was RethinkDB reached via a HapiJS GraphQL server. Docker was
            used to run the machine learning pipelines.</>}
          url="https://github.com/trendscenter/coinstac"
          displayBackground={false}
        />
        <Card
          title="UNM Library Computer Finder"
          subtitle="JQuery :: PHP :: MSSQL (COTS DB)"
          description={<>This was a fun proect I worked on while at the University of New Mexico library. It displays live computer
            availabilities by type across different libraries on campus. Expanding the rows and clicking
            into the floors listed will display an SVG map of the computer lab with each individual machine
            highlighted according to status. The data used to determine machine status is actually stored in a COTS
            MSSQL database used by the authentication solution they use on the machines. This is queried periodically
            and saved locally for use in the app.</>}
          url="https://library.unm.edu/services/technology/computers/finder.php"
          displayBackground={false}
        />
        <Card
          title="MyUNM"
          subtitle="AngularJS :: PHP :: MySQL"
          description={<>I was the lead developer on the creation of the University
            of New Mexico&apos;s student, staff and faculty portal. This site replaced
            the previous Luminis Portal by Ellucian, which was being end-of-lifed.
            In addition to no longer having vendor support, the Luminis Portal was
            aesthetically underwhelming and not mobile friendly.
            Working with a UI designer, IT was able to create a modern location for
            the campus community when they&apos;re looking for information
            on grades, schedules, assignments and other information related to life at
            the university. It receives over 1,000,000 page views a month when school
            is in session and is likely the most broadly impactful application I&apos;ve worked
            on up to this point in my career. Bringing the portal in-house saved UNM Central IT
            over $30,000 a year.</>}
          url="https://my.unm.edu/home"
          displayBackground={false}
        />
        <Card
          title="UNM Departmental Directory"
          subtitle="JQuery :: PHP :: MySQL"
          description={<>The first project I had at UNM Central IT was to recreate the university&apos;s
            departmental directory. The old one had become cumbersome to maintain as
            each department had to email IT&apos;s HR department to update their data. The new
            one is built on a MySQL backend and contains an administration section with
            multiple levels of permissions from admins who can create additional admins
            to those who can just update the pages of certain departments. This allowed
            IT to move the responsibility for updating departmental data to the various
            departments across campus themselves. We also added some mapping features to help
            interested departments identify their physical locations for interested users.</>}
          url="http://directory.unm.edu/departments/"
          displayBackground={false}
        />
      </div>
      {/* 

      
      <Card
        color='olive'
        fluid
        // href='http://betterknowyourdistrict.com/'
      >
        <Card.Content>
          <Card.Header>Better Know Your District</Card.Header>
          <Card.Description>
            This is a site I created on my own, which won the University of New Mexico&apos;s
            2016 Computer Science Student Conference App Demo. It collects data from a variety of
            free APIs to present users with relevant information on their congressional
            representatives. Although most comes from APIs, some of the data is cached locally
            in MySQL.
            <br /><br />
            I am currently working on revamping this site to provide more personilzation to
            users and, consequently, it is currently unavailable.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card
        color='olive'
        fluid
        href='https://admapp.unm.edu/home'
      >
        <Card.Content>
          <Card.Header>University of New Mexico Undergraduate Application</Card.Header>
          <Card.Description>
            I was the lead front-end developer on the rerelease of the undergraduate admissions
            application at UNM. Working with a back-end developer, who wrote the Oracle database
            hooks that my AngularJS side communicated with, we delivered a responsive and modern
            application that was very well-received by our customer.
          </Card.Description>
        </Card.Content>
      </Card>
      <Header as='h2' style={{ marginTop: 50 }}>
        <Header.Content>
          React or Angular; Python/Flask
        </Header.Content>
      </Header>
      <Card
        color='olive'
        fluid
        // href='http://torrankahleck.com/CampusAssistant/'
      >
        <Card.Content>
          <Card.Header>Campus Assistant</Card.Header>
          <Card.Description>
            I won the University of New Mexico&apos;s 2016-2017 Mobile App Contest for this chatbot,
            a mobile version of which was created in React Native. It provides simple responses to
            user queries on subjects as varied as schedule data, restaurants with student
            discounts,
            building locations and social events. It does this using a Flask API I created on
            Heroku that utilizes TextBlob&apos;s Naive Bayes classifier as well as its Natural Language
            Processing functionality.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card
        color='olive'
        fluid
      >
        <Card.Content href='http://torrankahleck.com/wriwenis'>
          <Card.Header>Acolytes of Our Eternal Wriwenis</Card.Header>
          <Card.Description>
            This is a chatbot I created for my Intro to AI course. It was created as my attempt to
            pass the Turing test. The idea is that when you&apos;re speaking to it, you&apos;re speaking to
            a cult member of &quot;Our Eternal Wriwenis&quot; who gradually collects information about you
            in an attempt to get you to join his/her cult. It also uses some Markov Chains derived
            from a text comprised of the Ramayana, quotes from the Dalai Lama, Buddhist teachings,
            Rumi poetry, Psalms, Shakespeare sonnets and more. I managed to win our internal class
            contest. Markov generated sentences are tweeted to the @wriwenis Twitter account.
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <a href="https://twitter.com/wriwenis" rel="noopener noreferrer" target="_blank">
            <Icon name='twitter' size='large' />
          </a>
          <a href="https://github.com/tkah/wriwenis" rel="noopener noreferrer" target="_blank">
            <Icon name='github' color='black' size='large' />
          </a>
        </Card.Content>
      </Card>
      <Header as='h2' style={{ marginTop: 50 }}>
        <Header.Content>
          JQuery & PHP; MySQL
        </Header.Content>
      </Header>
      
      <Card
        color='olive'
        fluid
        href='http://it.unm.edu/alerts/'
      >
        <Card.Content>
          <Card.Header>UNM IT Alerts</Card.Header>
          <Card.Description>
            I was tasked with recreating the old IT Alerts website for UNM Central IT. The old
            one was formatted inconsistently, was unsearchable, presented alerts in an odd order,
            and the administration portion was in an entirely different location. The new one
            I made using MySQL to store the alerts and administration information. It also
            automatically Tweets new or updated alerts to the handle @UNM_IT_ALERTS according
            to their status.
          </Card.Description>
        </Card.Content>
      </Card>
      <Header as='h2' style={{ marginTop: 50 }}>
        <Header.Content>
          Unavailable or Unmaintained
        </Header.Content>
      </Header>
      <p>
        The following are some projects that I&apos;ve worked on in the past that are either no longer
        being maintained or have been pulled down entirely. I include them here as, in the case
        of the unmaintained one, this is the only way of accessing it if you don&apos;t already have
        the URL. I&apos;m including the unavailable applications as they are currently the only
        examples I have of the work I&apos;ve done in iOS.
      </p>
      <Card
        color='olive'
        fluid
      >
        <Card.Content>
          <Card.Header>UNM Pocket Archivist</Card.Header>
          <Card.Description>
            My first position at the University of New Mexico was as a student employee working
            for the University Archivist. My main responsibility was to create a mobile
            application that provided historical information on buildings across campus. In
            addition to the historical information, we added several walking tours that used
            offline maps created using Open Street Map tiles. For various reasons having to do
            with the type of developer account owned by the university, this application is not
            currently available. This may change in the future.
            <div className='gallery'>
              {/* { this.makeGallery(6, 14) }
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card
        color='olive'
        fluid
      >
        <Card.Content>
          <Card.Header>iHartëAlbania</Card.Header>
          <Card.Description>
            After my time living and working in Albania, where I served with the Peace Corps,
            I decided to
            teach myself mobile development by making a travel application. By working with
            past volunteer surveys and reaching out to current volunteers through the
            non-profit <a href='http://www.friendsofalbania.net/' rel='noopener noreferrer' target='_blank'>
            Friends of Albania</a>, I was
            able to use Open Street Map (for offline maps), Google Maps, and iOS&apos;s Core Data
            to create an Albanian tourism application
            that provided tourism data on cities across the country and general information
            on the country itself. Unfortunately, I gradually received fewer and fewer
            contributions from active volunteers, making the application out-of-date, so I
            made the decision to remove it from the Apple app store. The data lives on,
            unmaintained, in the following project.
            <div className='gallery'>
              {/* { this.makeGallery(0, 5) }
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card
        color='olive'
        fluid
        href='http://torrankahleck.com/harte/city-edit.html#/'
      >
        <Card.Content>
          <Card.Header>Albanian Tourism Info</Card.Header>
          <Card.Description>
            I decided to teach myself AngularJS to create a website for a graduate course I
            was taking back in the spring of 2015. The site I decided to make repurposed
            the data from the iOS Albanian tour application I made a couple years earlier.
            I converted the data from the SQLLite database used by iOS&apos;s Core Data into
            a MySQL database and created this website that briefly saw fresh contributions.
            Those contributions have since dwindled and the site is no longer being maintained.
          </Card.Description>
        </Card.Content>
      </Card> */}
    </div>
  )
}
