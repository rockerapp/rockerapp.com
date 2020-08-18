import Head from 'next/head'
import styles from '../styles/sunset.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WidthContainer from '../components/WidthContainer'
import PageContainer from '../components/PageContainer'

export default function SunsetPage() {
  return (
    <PageContainer>
      <Head>
        <title>Rocker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Thank you." />

      <main className={styles.main}>
        <div className={styles.letter}>
          <WidthContainer>
            <p>Dear everyone,</p>
            <p>
              First of all, I'd like to say thank you for your support with Rocker. It
              means the world to both me and the rest of the team who've worked
              behind-the-scenes to try our hand at creating a great music platform.
            </p>
            <p>
              Unfortunately, today I am announcing that I will not be continuing to lead
              the Rocker project. This is due to several factors, primarily stemming from
              several personal changes in my life that mean I won't be able to continue
              maintaining such a large project.
            </p>
            <p>
              Progress on Rocker has been very slow, primarily due to our lack of project
              management. We have quite a strongly-skilled{' '}
              <Link href="/team">
                <a>team</a>
              </Link>
              , and we've built several fantastic things that I couldn't have done without
              them. We've tried several different strategies to attempt to get more
              progress done, but most of those attempts have sadly fallen flat.
            </p>
            <p>
              I would still love to see the Rocker project succeed in the future &mdash;
              please feel free to reach out to me via email at{' '}
              <span className={styles.email}>rockertransfer@outlook.com</span> if you or
              someone you know may be interested in taking on the project. This email
              address will remain active at least throughout the rest of 2020.
            </p>
            <p>
              Otherwise, if the keys to Rocker do not change hands, the project has had a
              good run and I'll consider making the existing source code available online
              at some point under our{' '}
              <a href="https://github.com/rockerapp" target="_blank">
                GitHub organization
              </a>{' '}
              so that someone can pick it up and do something good with it.
            </p>
            <p>
              Thank you again, to everyone, for your support as we've attempted to build
              the product I envisioned once upon a time in 2018. It may have not worked
              out for us, but I have high hopes that the future of online music
              distribution will be great.
            </p>
            <p>All the best,</p>
            <p>Haden Fletcher, Owner</p>
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
