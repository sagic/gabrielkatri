import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from './article-page.module.scss';

export default class Template extends React.Component {
  static propTypes = {
    data: PropTypes.any,
  };

  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
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
    );
  }
}

export const pageQuery = graphql`
query ArticlePageByPath($path: String!) {
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