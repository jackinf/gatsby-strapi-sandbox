import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import ReactMarkdown from 'react-markdown'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          {document.node.cover && <Img fixed={document.node.cover.childImageSharp.fixed}/>}
          <ReactMarkdown source={document.node.content} />
          <hr />
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content,
          cover {
            childImageSharp {
              fixed(width: 200, height: 225) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`