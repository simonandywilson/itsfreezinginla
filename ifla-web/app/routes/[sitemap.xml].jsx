import groq from 'groq';
import invariant from 'tiny-invariant';
import { sanityClient } from '../lib/sanity';

export async function loader({request}) {
  const [data] = await Promise.all([
    getSitemapData( {baseUrl: new URL(request.url).origin}),
  ]);

  invariant(data, 'Sitemap data is missing');

  return new Response(
    generateSitemap({data, baseUrl: new URL(request.url).origin}),
    {
      headers: {
        'content-type': 'application/xml',
        'cache-control': `max-age=${60 * 60 * 24}`,
      },
    },
  );
}

function generateSitemap({ data, baseUrl }) {

    const homeObject = {
      url: baseUrl,
      lastMod: data.home._updatedAt,
      changeFreq: 'weekly',
      priority: 1,
    };

  const pagesData = data.pages.map((page) => {
    const finalObject = {
      url: page.url,
      lastMod: page._updatedAt,
      changeFreq: 'weekly',
      priority: 0.9,
    };
    return finalObject;
  });

  const articlesData = data.articles.map((article) => {
    const finalObject = {
      url: article.url,
      lastMod: article._updatedAt,
      changeFreq: 'weekly',
      priority: 0.8,
    };
    return finalObject;
  });

  const audiobooksData = data.audiobooks.map((audiobook) => {
    const finalObject = {
      url: audiobook.url,
      lastMod: audiobook._updatedAt,
      changeFreq: 'weekly',
      priority: 0.8,
    };
    return finalObject;
  });

  const urlsDatas = [
    homeObject,
    ...pagesData,
    ...articlesData,
    ...audiobooksData,
  ];

  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${urlsDatas.map((url) => renderUrlTag(url)).join('')}
    </urlset>`;
}

function renderUrlTag({url, lastMod, changeFreq, priority, image}) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
      ${
        image
          ? `
        <image:image>
          <image:loc>${image.url}</image:loc>
          <image:title>${image.title ?? ''}</image:title>
          <image:caption>${image.caption ?? ''}</image:caption>
        </image:image>`
          : ''
      }

    </url>
  `;
}

async function getSitemapData(params) {
  const query = groq`{
  "home": *[
    _type == 'home'
  ][0] {
    _updatedAt,
    "url": $baseUrl
  },
  "pages": *[
    _type == 'page' && slug != null
  ] {
    _updatedAt,
    "url": $baseUrl + "/" + slug.current,
  },
  "articles": *[
    _type == 'article' && slug != null
  ] {
    _updatedAt,
    "url": $baseUrl + "/articles/" + slug.current,
  },
  "audiobooks": *[
    _type == 'audiobook' && slug != null
  ] {
    _updatedAt,
    "url": $baseUrl + "/audiobooks/" + slug.current,
  },
}`;
  const sitemap = await sanityClient.fetch(query, params);
  return sitemap;
}
