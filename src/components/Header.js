import styles from '../styles/Header.module.css'
import Link from 'next/link'
import WidthContainer from './WidthContainer'

export default function Header({ title = 'title', showHome = false }) {
  return (
    <header className={styles.header}>
      <WidthContainer>
        {showHome && (
          <Link href="/">
            <button className={styles.backButton}>&lsaquo; View Letter</button>
          </Link>
        )}
        <h1 className={styles.title}>{title}</h1>
      </WidthContainer>
    </header>
  )
}
