/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function DevInfo() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <section>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in Osaka
              building useful things.
              {` `}
              <a href={`https://github.com/${devInfo.github}`}>
                You should follow him on Twitter
              </a>
            </p>
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        devInfo {
              developer
              github
              portfolio
            }
       
      }
    }
  }
`

export default DevInfo
