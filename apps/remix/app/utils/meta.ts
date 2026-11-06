import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description = 'Firma Retoria: firma elettronica dei documenti, servizio di Retoria ETS.';

  return [
    {
      title: title ? `${i18n._(title)} - Firma Retoria` : 'Firma Retoria',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: 'Firma Retoria, Retoria ETS, firma elettronica, firma documenti',
    },
    {
      name: 'author',
      content: 'Retoria ETS',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Firma Retoria',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
