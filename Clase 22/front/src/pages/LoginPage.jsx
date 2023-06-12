import { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import * as authService from '../services/auth.service'

function LoginPage(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onChangeUserName = (event)=>{
        setUserName(event.target.value)
    }

    const onChangePassword = (event)=>{
        setPassword(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        authService.login({userName, password})
        .then((data)=>{
            setError('')
            localStorage.setItem('token', data.token)
            /// LOGIN
            navigate('/', {replace: true})
        })
        .catch(err =>{
            console.log(err)
            setError(err.error.message)
        })

    }

    return (
        <div className="login-page">
            <form className="form-login" onSubmit={onSubmit}>
                <h1 className="form-login__title">Inicio de session</h1>
                <label className="form-login__field">
                    Nombre de usuario: 
                    <input className="form-login__username" type="text" onChange={onChangeUserName} value={userName}/>
                </label>
                <label className="form-login__field">
                    Contraseña:
                    <input className="form-login__password" type="password" onChange={onChangePassword} value={password} />
                </label>
                <p>{error}</p>
                <button className="form-login__submit" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage