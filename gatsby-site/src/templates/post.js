import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 
import ReactMarkdown from 'react-markdown'

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    {data.strapiPost.author && <p>by <Link to={`/authors/${data.strapiPost.author.id}`}>{data.strapiPost.author.username}</Link></p>}
    <ReactMarkdown source={data.strapiPost.content} />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`