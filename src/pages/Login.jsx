import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="loginContainer">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="loginForm">
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={loginFormData.email} />
                <input
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={loginFormData.password} />
                <button>Log In</button>
            </form>
        </div>
    )

}

export default Login