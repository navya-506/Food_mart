import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Category from './Components/category/Banner'
import Footer from './Components/Footer'
import Banner from './Components/category/Section'
import Card from './Components/category/Card'

function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Category/>
        <Card/>
        <Footer/>
      </div>
    </>
  )
}

export default App
