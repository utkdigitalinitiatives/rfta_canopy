/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, schemaMarkup, canonical }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaCanonical = canonical || 'https://rfta.lib.utk.edu/'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={
        [
          {
            'rel': 'icon',
            "type": "image/png",
            'sizes': '114x114',
            'href': 'https://brand.utk.edu/wp-content/themes/ut-thehill/images/interface/icon-114x114.png'
          },
          {
            'rel': 'canonical',
            'href': metaCanonical
          }
        ]
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Rising from the Ashes: The Chimney Tops 2 Wildfires Oral History Project`
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `YieHBoOwo4bDE5mQqxSA_BH60F5zK0ePJns3eqLualA`
        }
      ].concat(meta)}
    >
      {schemaMarkup &&
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      }
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DN6TP2L65T"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DN6TP2L65T');
              `,
        }}
      ></script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  canonical: 'https://rfta.lib.utk.edu/'
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
