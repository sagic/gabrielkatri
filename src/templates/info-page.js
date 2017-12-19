import React from "react"
import Helmet from "react-helmet"

import styles from './info-page.module.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div>
      <Helmet title={`גבריאל כתרי עו״ד ונוטריון - Gabriel Katri Advocate and Notary - ${post.frontmatter.title}`} />
      <div>
        <h1 className={styles.title}>
          <div className="">{post.frontmatter.title}</div>
        </h1>
        <div
          className={styles.content}
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