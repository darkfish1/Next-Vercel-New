import { ReactNode } from "react"


export const DarkLayout = ({ children }: { children: ReactNode } ) => {
  return (
    <div style={{
        backgroundColor: 'rgba(1,0,1,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
       
    </div>
  )
}
