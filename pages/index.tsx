
import { Inter } from 'next/font/google'

import Link from 'next/link';

//import {NavBar} from '../../components/NavBar'
import { MainLayouts } from '../components/layouts/MainLayouts';


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayouts>

        <h1>Home Page</h1>
        
        <h1 className={'title'}>
            Ir a <Link href="/about">About</Link>
        </h1>
            
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
    </MainLayouts>
  )
}
