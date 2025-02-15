import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/siptok.png'
import { GetMethodAPI } from '../../api/GetMethondAPi'
import { getapi } from '../../api/GetAPI'
import { toast, ToastContainer } from 'react-toastify'

export const Login = () => {
  const [formData, setFormData] = useState({
    username : '',
    password : '',
    cloud_name : '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSubmit =  async (e) => {
    e.preventDefault()
    toast.loading('Please wait...')
    try {
      const response = await getapi(`login.php?username=${formData.username}&cloud_name=${formData.cloud_name}&password=${formData.password}`)
      if (response.Sucess === 'true') {
        toast.dismiss()
        toast.success(response.Message)
        sessionStorage.setItem('user_info', JSON.stringify(response.Data[0]));
        setTimeout(() => {
            window.location.href = '/dashboard'
        }, 2000);
      }
      if(response.Sucess === 'false'){
        toast.dismiss()
        toast.error(response.Message)
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  return (
    <div className="login-container">
      <ToastContainer/>
      <div className="login-card">
        <div className="login-inner ">
          <img src={logo} alt="logo" />
          <p>The voice of digital India</p>
        </div>
        <div className="login-inner p-4">
          <p>Sign in</p>
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-center '>
            <div className='w-full flex flex-col login-input-container'>
              <label htmlFor="userType">User Type</label>
              <input type="text" className='login-input' name="userType" id="" onChange={handleChange} />
            </div>
            <div className='w-full flex flex-col login-input-container'>
              <label htmlFor="cloud_name">Cloud Name</label>
              <input type="text" className='login-input' name="cloud_name" id="" onChange={handleChange} />
            </div>
            <div className='w-full flex flex-col login-input-container'>
              <label htmlFor="username">User Name</label>
              <input type="text" className='login-input' name="username" id="" onChange={handleChange} />
            </div>
            <div className='w-full flex flex-col login-input-container'>
              <label htmlFor="password">Password </label>
              <input type="text" className='login-input' name="password" id="" onChange={handleChange} />
            </div>
            <div className="login-input-container flex items-center justify-start w-full gap-2">
                <input type="checkbox" name="rememberMe" id="" />
                <label htmlFor="rememberMe" className='text-[10px]' style={{fontSize: '12px'}}>Remember me</label>
            </div>
            <input type="submit" value="Sign in" className='login-button'/>
          </form>
        </div>
      </div>
    </div>
  )
}
