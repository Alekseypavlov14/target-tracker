import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />

      <main className={styles.Content}>
        <Outlet />
      </main>
    </div>
  )
}