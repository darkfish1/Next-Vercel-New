import Head from 'next/head'
import styles from './MainLayout.module.css'
import {Navbar} from '../Navbar'
import { ReactNode } from 'react';


type MainLayoutsProps = {
    children: ReactNode; // Usa ReactNode para el tipo de children
};


export const MainLayouts = ( {children}: MainLayoutsProps ) => {
    return (
        <>
          <Head>
            <title>Home - Silvestre</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/ >
          
          <main className={styles.main}>
    
            {children}
           
          </main>
        </>
    )
}
