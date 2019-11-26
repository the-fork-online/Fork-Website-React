import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Team from '../components/Team'
import Content, { HTMLContent } from '../components/Content'

export const TeamPageTemplate = ({
  image,
  intro,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return(
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
      </div>
      <div className="container mb-4">
        <PageContent className="content" content={content} />
      </div>
      <div>
        <Team gridItems={intro.blurbs} />
      </div>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeamPageTemplate
        image={post.frontmatter.image}
        contentComponent={HTMLContent}
        content={post.html}
        intro={post.frontmatter.intro}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const TeamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 120, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            position
            bio
            linkedin
            mail
          }
        }
      }
    }
  }
`