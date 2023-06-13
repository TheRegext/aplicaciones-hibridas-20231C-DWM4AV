import { Link } from "react-router-dom";
import {useProfile, useLogout} from '../contexts/session.context.jsx'

import './MainNav.css'

function MainNav(){
    const profile = useProfile()
    const onLogout = useLogout()

    return (
    <nav className="main-nav">
        <ul className="main-nav-list">
            <li>
                <Link to="/" className="main-nav-list__link">Home</Link>
            </li>
            <li>
                <Link to="/products" className="main-nav-list__link">Productos</Link>
            </li>
            <li>
                <Link onClick={onLogout} className="main-nav-list__link">Salir ({profile.userName})</Link>
            </li>
        </ul>
    </nav>
    )
}

export default MainNav