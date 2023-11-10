import { useState,useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {auth} from "../../api/login.axios"

import "./login.scss"

const Login = () => {

const [form, setForm] = useState({
  email : "",
  password : ""
})

const { isLogin, loading} = useSelector((state) => state.auth)
const dispatch = useDispatch()
const navigate = useNavigate()

const login = (e) => {
  e.preventDefault()
  dispatch(auth(form))
}

  useEffect(() => {
    if(isLogin && localStorage.getItem("token")){
      navigate('/')
    }
  },[isLogin, navigate])

  return (
    <div>
      <div>
      <label>email</label>
      <input onChange={(e) => setForm({...form, email: e.target.value})} type="email" placeholder="email" />
      </div>
      <div>
      <label>password</label>
      <input onChange={(e) => setForm({...form, password: e.target.value})} type="password" placeholder="password" />
      </div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login