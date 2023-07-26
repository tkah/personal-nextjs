import { ReactNode } from "react";
import PageLogoTitle from "../components/PageLogoTitle";
import Card from "../components/Card";

const styles = {
  cardContainer: {
    margin: '1rem 0',
  }
}

export default function Page(): ReactNode {
  return (
    <div>
      <PageLogoTitle
        title="_media"
        path="#collection-play"
        size={70}
      />
      <p className="page-content text-content font-titillium-web">
        My work these days as an employee of a national lab is less likely to be featured in any media accounts.
        However, mostly while pursuing my master&apos;s, a couple of my projects were reported on in the local news or elsewhere.
        I&apos;ve gathered a few of those here.
      </p>
      <div style={styles.cardContainer} className="page-content card-list">
        <Card
          title="COINSTAC: Decentralizing the future of brain imaging analysis"
          subtitle="F1000 Research - 8/18/17"
          description={<>Paper written about COINSTAC, a project I worked on while at the <a className="card-internal-link" href="https://www.mrn.org/">Mind Research Network</a>.</>}
          url="https://f1000research.com/articles/6-1512/v1"
          img="https://f1000research.com/img/share/og_research.png"
          displayBackground={false}
          linkDescription={false}
        />
        <Card
          title="UNM 2016-2017 App Contest Winners"
          subtitle="UNM Central IT - 1/27/17"
          description={<>Promotional site for UNM&apos;s Mobile App Contest. My app, <em>Campus Assistant</em>, won first place.</>}
          url="https://appcontest.unm.edu/2016-2017/winners.html"
          img="http://appcontest.unm.edu/common/images/graph-ic.jpg"
          displayBackground={false}
        />
        <Card
          title="UNM students create computer bots that talk"
          subtitle="KRQE News 13 - 10/21/16"
          description={<>An article from a local television station covering
            University of New Mexico student chatbots created for
            UNM&apos;s Intro to AI course, including my &apos;cult&apos; chatbot.</>}
          url="http://krqe.com/2016/10/21/unm-students-create-computer-bots-that-talk/"
          img="https://www.krqe.com/wp-content/uploads/sites/12/2022/03/Website-Logos-KRQE-News-250X60.png"
        />
        <Card
          title="Computer Science class creates bots that talk back"
          subtitle="UNM Newsroom - 10/17/16"
          description={<>An article from the University of New Mexico&apos;s Newsroom
            on student chatbots created for UNM&apos;s Intro to AI course, including
            my &apos;cult&apos; chatbot.</>}
          url="http://news.unm.edu/news/computer-science-class-creates-bots-that-talk-back"
          img="http://webcore.unm.edu/v2/images/unm-logo.png"
        />
        <Card
          title="MyUNM gets a facelift"
          subtitle="The Daily Lobo - 3/29/16"
          description={<>An article from the University of New Mexico&apos;s student
            newspaper on the newly released student portal. I&apos;m not
            mentioned by name, but I was the lead programmer on the
            project.</>}
          url="http://www.dailylobo.com/article/2016/03/29-my-unm-site-gets-a-facelift"
          img="https://d4h3th6c0srvk.cloudfront.net/1c98dc91b9b33f3186b3bb9d587dcf03/dist/img/logo.png"
        />
        <Card
          title="Be Your Own Guide"
          subtitle="UNM Newsroom - 9/25/14"
          description={<>An article from the University of New Mexico&apos;s
            Newsroom on my, since removed, <em>iOS application</em>, UNM
            Pocket Archivist. They misspell my last name and have a few other typos, but I assure you it&apos;s me.</>}
          url="http://news.unm.edu/news/be-your-own-guide"
          img="http://webcore.unm.edu/v2/images/unm-logo.png"
        />
        <Card
          title="From Dusty Tomes to Your Smartphone"
          subtitle="The Daily Lobo - 6/29/14"
          description={<>An article from the University of New Mexico&apos;s school paper
            on my, since removed, iOS application, <em>UNM Pocket
            Archivist</em>.</>}
          url="http://www.dailylobo.com/article/2014/06/6-30-unm-tour-app"
          img="https://d4h3th6c0srvk.cloudfront.net/1c98dc91b9b33f3186b3bb9d587dcf03/dist/img/logo.png"
        />
      </div>
    </div>
  )
}
