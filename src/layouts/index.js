import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import styles from './index.module.scss';

import 'animate.css';
import './../styles/main.scss';

import UI from './../components/ui';
import Partials from './../components/partials';

class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="גבריאל כתרי עו״ד ונוטריון - Gabriel Katri Advocate and Notary"
          meta={[
            { name: 'description', content: 'גבריאל כתרי, עו”ד ונוטריון - אזרחות רומנית, דרכון רומני, דרכון אירופאי, עורך דין רומני, נוטריון ברומנית, שגרירות ברומניה, השגת קבלת אזרחות רומנית' },
            { name: 'keywords', content: 'גבריאל כתרי, עו”ד ונוטריון גבריאל כתרי, אזרחות רומנית, דרכון רומני אירופאי, עורך דין, עו”ד רומני, נוטריון ברומנית שגרירות ברומניה, השגת קבלת אזרחות רומנית' },
          ]}
        >
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        </Helmet>
        <Partials.ContactHeader />
        <Partials.MainMenu />
        <Partials.SiteHeader />
        <UI.Main>
          {children()}
        </UI.Main>
        <Partials.SiteFooter />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
