// Modules
import React from "react"
import { graphql } from "gatsby"

// Styles
import './style.css'

// Pages
import PostLink from "../components/Postlink/post-link"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

// Index page
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return(
    <div>
        <Navbar />
        {Posts}
        <Footer />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD-MMMM-YYYY")
            path
            title
          }
        }
      }
    }
  }
`