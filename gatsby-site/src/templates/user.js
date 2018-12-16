import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser && data.strapiUser.posts.map(post => (
        <li key={post.id}>
          <h2>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      posts {
        id
        title
        content
      }
    }
  }
`