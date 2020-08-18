import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const meta = {
    defaultTitle: 'Rocker — Thank you.',
    description:
      'Sadly, Rocker is going away for now. Thank you to everyone who has given us support.',
    url: `https://rockerapp.com${router.pathname}`,
    image: 'https://rockerapp.com/goodbye.png'
  }

  return (
    <>
      <Head>
        <title>{meta.defaultTitle}</title>
        <meta name="title" content={meta.defaultTitle} />
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.defaultTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.defaultTitle} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
