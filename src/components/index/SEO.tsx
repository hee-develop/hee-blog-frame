import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import MetaType from '../../types/meta';

export default function SEO(prop: MetaType) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          defaultLang
        }
      }
    }
  `);

  const siteName = site.siteMetadata.title;

  const lang = prop.lang ?? site.siteMetadata.defaultLang;
  const title = prop.title ?? siteName;
  const titleTemplate = prop.title ? `%s | ${siteName}` : undefined;
  const description = prop.description ?? site.siteMetadata.description;
  const keywords = prop.keywords?.join(',') ?? '';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      {...(titleTemplate && { titleTemplate })}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },

        { property: 'og:title', content: title },
        { property: 'og:site_name', content: siteName },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'author', content: 'hee-develop' },
      ]}
    />
  )
}
