import { Inter } from 'next/font/google'
import Link from 'next/link';

import { MainLayouts } from '@/components/layouts/MainLayouts';
import { DarkLayout } from '@/components/layouts/DarkLayout';
import { ReactElement, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return(
    
      <>
          <h1>About Page</h1>
            
            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>
                
            <p>
              Get started by editing&nbsp;
              <code className={'code'}>pages/about.tsx</code>
            </p>
      </>
      
    )

}

AboutPage.getLayout = function getLayout( page: ReactElement){
return(
  <MainLayouts>
      <DarkLayout>
        {page}
      </DarkLayout>
  </MainLayouts>
)


}