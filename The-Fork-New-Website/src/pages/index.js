// Modules
import React from "react"
import { graphql } from "gatsby"

// Style
import './style.css'

// Pages
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

// Index page
const IndexPage = () => {

  return(
    <div>
        <Navbar />
        <About />
        <Footer />
    </div>
  )
}

export default IndexPage
