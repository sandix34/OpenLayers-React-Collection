import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mapopen.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ minHeight: '100vh' }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Background = () => {
  return (
    <div
      style={{
        left: '0px',
        top: '0px',
        overflow: 'hidden',
        margin: '0px',
        padding: '0px',
        height: '100%',
        width: '100%',
        zIndex: '-999999',
        position: 'fixed',
        
      }}
    >
      <Image />
    </div>
  )
}

export default Background
