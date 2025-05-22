import React from 'react'
import { Link } from 'react-router-dom'
import Home from './landing-pages/home'

function ErrorPage() {
  return (
    <div>
        Oops, wrong page, go to 
        <Home/>
    </div>
  )
}

export default ErrorPage