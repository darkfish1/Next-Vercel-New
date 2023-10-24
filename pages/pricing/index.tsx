
import { Inter } from 'next/font/google'

import Link from 'next/link';

//import {NavBar} from '../../components/NavBar'
import { MainLayouts } from '../../components/layouts/MainLayouts';


const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <MainLayouts>

        <h1>Pricing Page</h1>
        
        <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
        </h1>
            
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing/index.tsx</code>
        </p>
    </MainLayouts>
  )
}
