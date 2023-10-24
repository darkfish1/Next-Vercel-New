import Head from 'next/head'
import { Inter } from 'next/font/google'

import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { MainLayouts } from '@/components/layouts/MainLayouts';
//import {NavBar} from '../../components/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
  <MainLayouts>

        <h1>Contact Page</h1>
          
        <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
        </h1>
            
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/Contact/contact.tsx</code>
        </p>
          
    </MainLayouts>
  )
}
