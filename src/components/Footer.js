import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import WidthContainer from './WidthContainer'

export default function Footer({}) {
  return (
    <footer className={styles.footer}>
      <WidthContainer>
        <a href="https://github.com/rockerapp/rockerapp.com" target="_blank">
          Copyright &copy; 2020
        </a>{' '}
        Haden Fletcher/Rocker. Special thanks to{' '}
        <Link href="/team">
          <a>the team</a>
        </Link>
        .
      </WidthContainer>
    </footer>
  )
}
