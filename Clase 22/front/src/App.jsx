import { useNavigate, Outlet, Link } from 'react-router-dom'

import 'minireset.css'
import './App.css'
export function App(){
    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem('token')
        navigate('/login', {replace: true})
    }

    return (
    <div>
       <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link onClick={logout}>Salir</Link>
                </li>

            </ul>
        </nav>
        <Outlet />

    </div>)
}

export default App