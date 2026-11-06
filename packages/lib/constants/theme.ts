import type { TCssVarsSchema } from '../types/css-vars';

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * KEEP THIS FILE IN SYNC WITH `packages/ui/styles/theme.css`.
 *
 * These are the light-mode default values for the CSS custom properties
 * defined under `:root` in the theme stylesheet, exposed here as hex strings
 * so they can be used as defaults for colour-picker UI components and other
 * places that don't render through CSS variables.
 *
 * If you change a value in `theme.css`, update it here too. There is NO
 * automated check linking the two files; they have drifted historically
 * and will drift again unless you update both.
 *
 * Computed via `colord({ h, s, l }).toHex()` — see the inline HSL comments
 * for the source-of-truth values from `theme.css`.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
// Retoria: palette «Bosco & Terracotta» di retoria.it (usata anche per i colori delle email).
export const DEFAULT_BRAND_COLORS = {
  background: '#f4f1e8',
  foreground: '#2a2a28',
  muted: '#efeadd',
  mutedForeground: '#62635a',
  popover: '#ffffff',
  popoverForeground: '#2a2a28',
  card: '#ffffff',
  cardBorder: '#e4decf',
  cardForeground: '#2a2a28',
  fieldCard: '#f6e9e1',
  fieldCardBorder: '#b86038',
  fieldCardForeground: '#2a2a28',
  widget: '#efeadd',
  widgetForeground: '#e4decf',
  border: '#e4decf',
  input: '#d6ceba',
  primary: '#203830',
  primaryForeground: '#f4f1e8',
  secondary: '#e7efe3',
  secondaryForeground: '#203830',
  accent: '#e7efe3',
  accentForeground: '#203830',
  destructive: '#c32a22',
  destructiveForeground: '#ffffff',
  ring: '#2e5e4e',
  warning: '#e1cb05',
  envelopeEditorBackground: '#efeadd',
  // `cardBorderTint` is intentionally excluded from the colour-picker UI:
  // unlike the rest of these tokens it is consumed via `rgb(var(--token))`
  // (not `hsl(...)`) and stored as raw RGB triplets in `theme.css`. It does
  // not flow through `toNativeCssVars` and is not user-customisable from the
  // branding form. `radius` is a length, not a colour, so it lives in
  // `DEFAULT_BRAND_RADIUS` below.
} as const satisfies Record<keyof Omit<TCssVarsSchema, 'radius' | 'cardBorderTint'>, string>;

export const DEFAULT_BRAND_RADIUS = '0.75rem';
