import React from "react"
import Helmet from "react-helmet"

// import '../css/info-page.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="info-page-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="info-page">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="info-page-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query InfoPageByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`
;