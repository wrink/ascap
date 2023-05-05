import Head from 'next/head'
import { Header } from '../Header';

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main className='App'>
      <Header title={title} subtitle={subtitle} />
      <div className='app container-xl'>
        {children}
      </div>
    </main>
  </>
)