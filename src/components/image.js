/**
 * Component that pulls a static image for use with GatsbyImage
 * @link https://stackoverflow.com/a/56508865/1331870
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }

      return (
        <GatsbyImage
          alt={props.alt}
          image={getImage(image.node.childImageSharp)}
          loading="lazy"
          imgStyle={{ objectFit: "contain" }}
          className={props.className}
        />
      )
    }}
  />
)

export default Image
