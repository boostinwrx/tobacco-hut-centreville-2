import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import ProductCard from "../components/productCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const ProductIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const products = data.allMarkdownRemark.edges
  let productCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`vape`, `store`, `virginia`, `centreville`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div className="post-feed">
        {products.map(({ node }) => {
          productCounter++
          return (
            <ProductCard
              key={node.fields.slug}
              count={productCounter}
              node={node}
              productClass={`product`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ProductIndex location={props.location} props data={data} {...props} />
    )}
  />
)
