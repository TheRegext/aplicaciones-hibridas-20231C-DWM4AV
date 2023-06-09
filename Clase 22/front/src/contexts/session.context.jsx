import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom'
import profileService from '../services/profile.service'


const SessionContext = createContext()

function SessionProvider({children}){
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})

    const onLogout = useCallback(() =>{
        localStorage.removeItem('token')
        navigate('/login', {replace: true})
    }, [navigate])

    useEffect(()=>{
        profileService.getCurrent()
        .then(data =>{
            setProfile(data)
        })
    }, [])

    return (<SessionContext.Provider value={{profile, onLogout}}>
        {children}
    </SessionContext.Provider>)
}

function useProfile(){
    const {profile} = useContext(SessionContext)
    return profile
}

function useLogout(){
    const {onLogout} = useContext(SessionContext)
    return onLogout
}

function useSession(){
    const {profile, onLogout} = useContext(SessionContext)
    return {profile, onLogout}
}

export {
    SessionProvider,
    useProfile,
    useLogout,
    useSession
}

export default {
    SessionProvider,
    useProfile,
    useLogout,
    useSession
}