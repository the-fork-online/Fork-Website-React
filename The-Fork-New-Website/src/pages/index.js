// Modules
import React from "react"
import { graphql } from "gatsby"

// Styles
import './style.css'

// Pages
import PostLink from "../components/Postlink/post-link"

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

