import {useSession ,signIn ,signOut,getSession} from 'next-auth/react';
import React from 'react';


export const getServerSideProps= async (ctx)=>{
    const session = await getSession(ctx);
    if(session){
        return{
            redirect:{
                destination:'/'
            }
        }
    }
    return {
        props: {session}
    }
}
const Login=()=>{
    return(
        <>
    <p>login</p>
    <button type="" onClick={()=>{signIn()}}>sign in</button>
    </>
    )
}

export default Login