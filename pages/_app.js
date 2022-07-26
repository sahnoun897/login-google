
import '../styles/globals.css'
import Image from 'next/image'
import { SessionProvider } from "next-auth/react"
export default function MyApp({Component, pageProps:{session,...pageProps}}) {
  return (

      <SessionProvider session={session} >
       
      <Component {...pageProps} />
      
    </SessionProvider>
    

  )
}


//export default MyApp