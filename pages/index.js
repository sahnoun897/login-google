import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useSession ,signIn ,signOut, getSession} from 'next-auth/react';
import React from 'react';
export const getServerSideProps= async (ctx)=>{
    const session = await getSession(ctx);
    if(!session){
        return{
            redirect:{
                destination:'/login'
            }
        }
    }
    return {
        props: {session}
    }
}

 function Home() { 
 const { data: session, status } = useSession()
 
     return(
 <>
 <p>welcom,{session.user.name}</p>
 <img src={session.user.image} alt="" />
 {console.log(session)}
 <button onClick={()=>signOut()}>log out</button>
 </>
     )

}

export default Home