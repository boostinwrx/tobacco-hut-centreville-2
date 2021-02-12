import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import StoreWide from "../assets/store_wide_interior_retouch_final.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import GatsbyImage from "gatsby-image";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
const addrObj = data.site.siteMetadata.storeInfo.address
  const street = addrObj.street
  const city = addrObj.city
  const state = addrObj.state
  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`store`, `vape`, `cbd`, `kratom`,'cigar']} />

      <article className="post-content page-template">


        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {data.site.siteMetadata.description}
          </h2>
          <figure className="kg-card kg-image-card kg-width-half">
            <img className={'kg-image-card'} alt={'StoreWide'} src={StoreWide}/>
          </figure>
          <h3 id="dynamic-styles">Come Visit Us!</h3>
         <h4>{}</h4>

          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
       devInfo {
              developer
              github
              portfolio
            }
        description
        storeInfo {
          phone
          address {
            
            city
            state
            zip
          }
          hours
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
