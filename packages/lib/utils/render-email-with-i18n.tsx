import type { RenderOptions } from '@documenso/email/render';
import { renderWithI18N } from '@documenso/email/render';

import { getI18nInstance } from '../client-only/providers/i18n-server';
import { isValidLanguageCode, type SupportedLanguageCodes } from '../constants/i18n';

export const renderEmailWithI18N = async (
  component: React.ReactElement,
  options?: RenderOptions & {
    // eslint-disable-next-line @typescript-eslint/ban-types
    lang?: SupportedLanguageCodes | (string & {});
  },
) => {
  try {
    const { lang: providedLang, ...otherOptions } = options ?? {};

    // Retoria: le email senza lingua (account, password) escono in italiano, non nella lingua sorgente inglese.
    const lang = isValidLanguageCode(providedLang) ? providedLang : 'it';

    const i18n = await getI18nInstance(lang);

    i18n.activate(lang);

    return renderWithI18N(component, { i18n, ...otherOptions });
  } catch (err) {
    console.error(err);
    throw new Error('Failed to render email');
  }
};
