import Head from 'next/head'
import styles from '../styles/sunset.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WidthContainer from '../components/WidthContainer'
import PageContainer from '../components/PageContainer'
import TeamMember from '../components/TeamMemberParagraph'
import { useState } from 'react'

export default function SunsetPage() {
  const [showFun, setShowFun] = useState(false)

  return (
    <PageContainer>
      <Head>
        <title>Rocker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="The Rocker team." showHome />

      <main className={styles.main}>
        <div className={styles.letter}>
          <WidthContainer>
            <p>
              The progress we've made couldn't have happened without the Rocker team. This
              page is dedicated to everyone who has dedicated hours upon hours to working
              on the product.
            </p>
            <p>Thank you to:</p>
            <TeamMember name="SunburntRock89" url="https://twitter.com/sunburntrock89">
              for working so hard on adding a lot of the features to the API that would be
              absolutely necessary for the platform to even exist at all.
            </TeamMember>
            <TeamMember name="Harrison" url="https://twitter.com/ao554yt">
              for doing some fantastic systems admin work that helped me stay better
              focused on building the core of the platform.
            </TeamMember>
            <TeamMember name="Reign" url="https://twitter.com/wherearesox">
              for helping keep the project moving towards completion, even during our most
              unfocused periods.
            </TeamMember>
            <TeamMember name="Daniel" url="https://twitter.com/notdaniel">
              for giving priceless insight and advice on running a team and making a
              product.
            </TeamMember>
            <TeamMember name="Josh" url="https://twitter.com/uzivsc">
              for contributing your knowledge about content processing and bringing up
              fantastic ideas.
            </TeamMember>
            <TeamMember name="Ewan" url="https://twitter.com/devvyxd">
              for making a good push towards making more progress.
            </TeamMember>
            <TeamMember name="Ellie" url="https://twitter.com/theakuma67">
              for lightening the mood during team chats and bringing some great ideas to
              the table.
            </TeamMember>
            <TeamMember name="Sam" url="https://twitter.com/samredeye">
              for being around to help when needed.
            </TeamMember>
            <button onClick={() => setShowFun(!showFun)}>show more</button>
            {showFun && (
              <TeamMember name="Ollie">
                for being the best unofficial mascot we could have.
              </TeamMember>
            )}
            <p>
              Rocker could not have come to be such a great project without you and your
              contributions.
            </p>
            <p>Thank you all,</p>
            <p>Haden</p>
            <p>
              <br />
              <img className={styles.logo} alt="Rocker" src="/rocker.svg" />
            </p>
          </WidthContainer>
        </div>
      </main>

      <Footer />
    </PageContainer>
  )
}
