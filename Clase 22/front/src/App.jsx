import { Outlet } from 'react-router-dom'
import { SessionProvider } from './contexts/session.context.jsx'

import 'minireset.css'
import './App.css'
import MainHeader from './components/MainHeader'
export function App(){
  
   return (
    <SessionProvider>
        <MainHeader />
        <Outlet />
    </SessionProvider>)
}

export default App