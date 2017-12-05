import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css';
import './../styles/main.scss';

import Partials from './../components/partials';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="גבריאל כתרי עו״ד ונוטריון - Gabriel Katri Advocate and Notary"
      meta={[
        { name: 'description', content: 'גבריאל כתרי, עו”ד ונוטריון - אזרחות רומנית, דרכון רומני, דרכון אירופאי, עורך דין רומני, נוטריון ברומנית, שגרירות ברומניה, השגת קבלת אזרחות רומנית' },
        { name: 'keywords', content: 'גבריאל כתרי, עו”ד ונוטריון גבריאל כתרי, אזרחות רומנית, דרכון רומני אירופאי, עורך דין, עו”ד רומני, נוטריון ברומנית שגרירות ברומניה, השגת קבלת אזרחות רומנית' },
      ]}
    />
    <Partials.ContactHeader />
    <Partials.FlagSeperator />
    <Partials.SiteHeader />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Partials.FlagSeperator />
    <Partials.SiteFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
